import { routes as homeRoutes } from "@pages/home";
import { routes as testRoutes } from "@pages/test";
import { routes as manageRoutes } from "@pages/manage";
// 管理页面
import NotFound from "@components/not-found";
import IndexLayout from "@layout/index-layout";
import ManageLayout from "@layout/manage-layout";

const routes = [
  {
    path: "/manage",
    exact: false,
    component: ManageLayout,
    routes: [...manageRoutes],
  },
  {
    path: "/",
    exact: false,
    component: IndexLayout,
    meta: { auth: false },
    routes: [
      ...homeRoutes,
      ...testRoutes,
      { path: "*", exact: false, component: NotFound },
    ],
  },
];

export { routes };
