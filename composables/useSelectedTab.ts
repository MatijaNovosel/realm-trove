import { TAB } from "~/utils/constants";

export default () => {
  return useState("selected-tab", () => TAB.UT);
};
