# react18+vite SSR

本项目旨在最低成本的改造你的 React 项目支持 SSR，Nextjs 对你的项目改动太大了，特别是想做轻量级的 SSR，建议使用该套方案！

# 运行说明

执行`yarn build`会打包`spa`应用[dist]和`ssr`应用[dist-ssr]两个项目

启动`node server/index.js` 启动服务端 server，访问: http://localhost:3030 即可，推荐使用 pm2 启动

# SSR 数据注入

```javascript
function Home(props) {
  const [list, setList] = useState(props.ssrRes);

  useEffect(() => {
    // 如果从其他路由Link的方式跳转进来的，需要ajax获取数据
    // 如果是a标签进来的，这时候会从server获取页面，props.ssrRes是有参数的
    if (!props.ssrRes) {
      demoService.getTemplates().then((res) => {
        setList(res);
      });
    }
  }, []);

  return (
    <div>
      {list.map((d) => {
        return <span key={d}>{d}</span>;
      })}
    </div>
  );
}

// 直接给SSR注入数据，注入后，props.ssrRes 即可获取到当前返回的值，仅直接访问路由有效
Home.injectSSRData = async () => {
  // 初始化的时候，获取第一页数据
  const [res, err] = await demoService.getTemplates();
  if (res) {
    return res; // 假设res是一个数组 [1,2,3,4]
  } else {
    return "";
  }
};
```

# 原理介绍

SSR 的主要目的是为了让搜索引擎识别页面中的内容，服务端直接返回 HTML 页面已经注入了数据，需要注意的是这里的[hash:5] 是根
据文件的 hash 值算出来的，所以无需单独处理，如果 dist-ssr 和 dist 中生成的[hash:5]值不一样，那需要加载一遍 dist-ssr 中的
css 文件避免出现初始化无样式的 BUG。

做了 SSR 的页面会返回一个注入了数据的 HTML 页面，然后由前端的 main.js 接管前端，使用 react 重新生成 DOM 树覆盖静态的
HTML 页面，同时生命周期生效
