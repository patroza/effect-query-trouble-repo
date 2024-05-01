import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Layout from "~/layout";

export const Route = createRootRoute({
  component: () => (
    <>
      <Layout.Layout>
        <Outlet />
      </Layout.Layout>
      <TanStackRouterDevtools />
    </>
  ),
});
