import * as Icons from "@ant-design/icons";
import React from "react";

function MyIcon(props) {
  const NowIcon = Icons[props.icon];
  return <NowIcon className="myIcon" {...props} />;
}
export default MyIcon;
