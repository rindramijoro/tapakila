import type { ReactNode } from "react";
import { Layout} from "react-admin";
import { MyMenu } from "./CustomLayout/Menu";
import MyAppBar from "./CustomLayout/myAppBar";

export const MyLayout = ({ children }: { children: ReactNode }) => (
  <Layout menu = { MyMenu } appBar={MyAppBar}>
    {children}
  </Layout>
);
