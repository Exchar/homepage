import projectConfig from "../../public/config";
import {imgCompress} from './fileCompress'
export const getProjectConfig = function getProjectConfig(key) {
  return projectConfig[key];
};

export {
  imgCompress
}
