import styles from "./home.module.less";
import React, { useEffect, useMemo, useState } from "react";
import { Tag, Skeleton, Button, Radio } from "antd"; // ...
import { demoService } from "@server/index";
import ListStatus from "@components/list-status";
import Login from "@components/login";
import { theme } from "@theme";
import { language, Intl } from "@language/index";
import { Link } from "react-router-dom";
import Logo from "@images/logo.png";

interface IProps {
  ssrRes?: any; // 服务器渲染加载的数据
  history: History;
  location: { pathname: string; search: string; hash: string; state: any };
  match: { path: string; url: string; isExact: boolean; params: any };
  staticContext: { path: string; url: string; isExact: boolean; params: any };
  route: { path: string; ssr: boolean; exact: boolean; component: JSX.Element };
}

function Home(props: IProps) {
  const [list, setList] = useState<any>(props.ssrRes);

  useEffect(() => {
    if (!props.ssrRes) {
      demoService
        .getTemplates()
        .then(([res, err]) => {
          if (res) {
            console.log("res", res);
            setList(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      return () => {
        demoService.abort("demoService.getTemplates");
      };
    }
  }, []);

  const varStyle: any = { "--var-logo": `url(${Logo})` };

  return (
    <>
      <div className={styles.home} style={varStyle}>
        <div>
          <Intl name="Language" />
          <Radio.Group
            defaultValue="light"
            onChange={(e) => {
              theme.setTheme(e.target.value);
            }}
          >
            <Radio.Button value="dark">dark</Radio.Button>
            <Radio.Button value="light">light</Radio.Button>
          </Radio.Group>
          <Radio.Group
            defaultValue={language.getLanguage()}
            onChange={(e) => {
              language.setLanguage(e.target.value);
            }}
          >
            <Radio.Button value="zh-CN">中文</Radio.Button>
            <Radio.Button value="en-US">En</Radio.Button>
          </Radio.Group>
          <div style={{ padding: 20 }}>
            <ListStatus data={list?.data}>
              <Skeleton active style={{ width: 240 }} loading={!list}>
                {list &&
                  list.data.map((d: any) => {
                    return (
                      <Tag style={{ margin: 5 }} key={d.id}>
                        {d.name}
                      </Tag>
                    );
                  })}
              </Skeleton>
            </ListStatus>
          </div>
        </div>
      </div>
      <div className={styles.home}>
        <Link to="/test">test</Link>
        <Login>
          <Button type="primary">登录</Button>
        </Login>
      </div>
    </>
  );
}

// 往SSR中注入数据，可以通过 props.ssrRes获取到注入的数据
Home.injectSSRData = async () => {
  // 初始化的时候，获取第一页数据
  const [res, err] = await demoService.getTemplates();
  if (res) {
    return res;
  } else {
    return "";
  }
};

export default Home;
