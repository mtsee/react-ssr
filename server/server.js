const fs = require("fs");
const Koa = require("koa");
const Router = require("koa-router");
const koaStatic = require("koa-static");
const path = require("path");
const { matchRoutes } = require("react-router-config");
const cors = require("koa2-cors"); //解决跨域
const bodyParser = require("koa-bodyparser"); //解析post请求
const koaRouterProxy = require("koa-router-proxy");
const { config } = require("./config");
const { routes, renderToHTML } = require("../dist-ssr/ssr.umd.js");

function getIndexHTML() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, "../dist/index.html"),
      "utf8",
      function (err, data) {
        if (err) {
          reject();
          return console.log(err);
        }
        resolve(data);
      }
    );
  });
}

async function mainServer() {
  // 实例化 koa
  const app = new Koa();

  // 解决跨域
  app.use(cors());

  //解析post请求
  app.use(bodyParser());

  // 静态资源
  app.use(
    koaStatic(path.join(__dirname, "../dist"), {
      maxage: 365 * 24 * 60 * 1000,
      index: "root",
      // 这里配置不要写成'index'就可以了，因为在访问localhost:3030时，不能让服务默认去加载index.html文件，这里很容易掉进坑。
    })
  );

  const indexHTML = await getIndexHTML();
  const router = new Router();

  // 加载ssr的style文件，解决spa和ssr中[hash:5]不一样，导致样式异常的问题，目前因为hash值是根据文件计算来的，所以这里的hash值一定是相同的
  // 所以服务端渲染和前端spa的css是一样的。无需重复加载ssr中的css
  router.get("/ssr.style.css", (ctx) => {
    ctx.response.type = "text/css; charset=utf-8";
    ctx.response.body = fs.readFileSync(
      path.join(__dirname, "../dist-ssr/style.css"),
      "utf8"
    );
  });

  // api
  router
    .post("/api/*", koaRouterProxy("*", config.proxy))
    .get("/api/*", koaRouterProxy("*", config.proxy))
    .put("/api/*", koaRouterProxy("*", config.proxy))
    .delete("/api/*", koaRouterProxy("*", config.proxy));

  // 路由拼接
  const setRouters = (routeArr) => {
    for (let p of routeArr) {
      if (!p.routes) {
        router.get(p.path, async (ctx, next) => {
          if (p.path === "*") {
            ctx.response.type = "html"; //指定content type
            ctx.response.body = "404";
            return;
          }

          const [routeAll, routeTarget] = matchRoutes(routes, ctx.request.path);
          // console.log('routeAll ====>', routeAll);
          // console.log('routeTarget ====>', routeTarget);
          // console.log('path ====>', ctx.request.path);

          if (!routeTarget) {
            ctx.response.body = ctx.request.path; // shtml.replace('{{root}}', '404');
          } else {
            // 如果没有做SSR，应该直接显示local App模块
            let shtml = "loading";

            // 选择性的做ssr
            if (routeTarget.route.ssr) {
              const data = await renderToHTML(routeTarget.route, {
                location: ctx.request.path,
                context: { ...routeTarget.match },
              });
              shtml = data.shtml || "loading";
            }
            ctx.response.type = "html"; //指定content type
            ctx.response.body = indexHTML.replace(
              '<div id="root"></div>',
              `<div id="root">${shtml}</div>`
            );
            // .replace('</head>', '<link rel="stylesheet" href="/ssr.style.css"></head>');
          }
        });
      } else {
        setRouters(p.routes);
      }
    }
  };
  setRouters(routes);

  // 设置路由
  app.use(router.routes());

  app.listen(config.port, function () {
    console.log("服务器启动，监听 port： " + config.port + "  running~");
  });
}

mainServer();
