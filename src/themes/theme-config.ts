// theme/themeConfig.ts
import type { ThemeConfig } from "antd";
import variable from "@/styles/variables.module.scss";

const theme: ThemeConfig = {
  token: {
    colorPrimary: variable.colorPrimary,
  },
};

export default theme;
