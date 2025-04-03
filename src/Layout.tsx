import type { ReactNode } from "react";
import { Layout} from "react-admin";
import { MyMenu } from "./Menu";
import MyAppBar from "./myAppBar";

export const MyLayout = ({ children }: { children: ReactNode }) => (
  <Layout menu = { MyMenu } appBar={MyAppBar}>
    {children}
  </Layout>
);
