import projectConfig from "../../public/config";
export const getProjectConfig = function getProjectConfig(key) {
  return projectConfig[key];
};
