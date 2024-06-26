import * as React from "react";
import Svg, { Path } from "react-native-svg";

type LinkIconProps = {
  isGreen?: boolean;
};
const LinkIcon = ({ isGreen = false, ...props }: LinkIconProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.3749 7.87486L17.9999 7.87487C19.0932 7.87588 20.1415 8.31092 20.9142 9.0844C21.687 9.85788 22.1211 10.9065 22.1211 11.9999C22.1211 13.0932 21.687 14.1419 20.9142 14.9153C20.1415 15.6888 19.0932 16.1238 17.9999 16.1249L15.3749 16.1249"
      stroke={isGreen ? "#00A385" : "white"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.62475 16.1251L5.99975 16.1251C5.45783 16.1254 4.92116 16.019 4.4204 15.8118C3.91964 15.6047 3.4646 15.3009 3.08129 14.9178C2.69798 14.5348 2.39391 14.0799 2.18645 13.5793C1.97899 13.0786 1.87221 12.542 1.87221 12.0001C1.87221 11.4582 1.97899 10.9216 2.18645 10.421C2.39391 9.92033 2.69798 9.46548 3.08129 9.0824C3.4646 8.69933 3.91964 8.39554 4.4204 8.18838C4.92116 7.98123 5.45783 7.87478 5.99975 7.87512L8.62475 7.87512"
      stroke={isGreen ? "#00A385" : "white"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.49988 12H14.9999"
      stroke={isGreen ? "#00A385" : "white"}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default LinkIcon;
