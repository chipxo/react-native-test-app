import * as React from "react";
import Svg, {
  G,
  Rect,
  Path,
  Ellipse,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const BgImage = (props) => (
  <Svg
    width={375}
    height={296}
    viewBox="0 0 375 296"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_8_6288)">
      <Rect
        width={296}
        height={375}
        transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 375 296)"
        fill="white"
      />
      <Rect
        width={296}
        height={375}
        transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 375 296)"
        fill="url(#paint0_linear_8_6288)"
      />
      <Rect
        width={296}
        height={375}
        transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 375 296)"
        fill="url(#paint1_linear_8_6288)"
      />
      <Rect
        width={296}
        height={375}
        transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 375 296)"
        fill="url(#paint2_linear_8_6288)"
      />
      <Path
        opacity={0.72}
        d="M117.5 100.785C182 30.2852 444 -29.2145 449 -19.2147C454 -9.21479 259.501 54.7854 232.5 134.785C198.602 235.219 404.648 246.706 391.173 327.783C379.035 400.816 148.927 446.837 100.003 391.783C23.3118 305.485 55.6677 168.369 117.5 100.785Z"
        fill="url(#paint3_linear_8_6288)"
      />
      <G opacity={0.24} filter="url(#filter0_f_8_6288)">
        <Ellipse
          cx={108}
          cy={108}
          rx={108}
          ry={108}
          transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 102 128.785)"
          fill="#FA8A34"
        />
      </G>
      <G filter="url(#filter1_b_8_6288)">
        <Rect
          width={362}
          height={377}
          transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 377 333)"
          fill="#D9D9D9"
          fillOpacity={0.01}
        />
      </G>
      <Path
        d="M347 295C361.912 295 374 282.912 374 268L374 0.99997L0.999987 0.999986L0.999999 268C0.999999 282.912 13.0883 295 28 295L347 295Z"
        stroke="url(#paint4_linear_8_6288)"
        strokeWidth={2}
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_8_6288"
        x1={-0.00000384992}
        y1={14.9148}
        x2={343.857}
        y2={79.1651}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FA8A34" />
        <Stop offset={1} stopColor="#FA8A34" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_8_6288"
        x1={296}
        y1={375}
        x2={-39.2322}
        y2={329.302}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FA8A34" />
        <Stop offset={1} stopColor="#FA8A34" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_8_6288"
        x1={296}
        y1={375}
        x2={-39.2322}
        y2={329.302}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FA8A34" />
        <Stop offset={1} stopColor="#FF6F00" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_8_6288"
        x1={291}
        y1={39.2852}
        x2={152.5}
        y2={314.285}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FA8A34" />
        <Stop offset={1} stopColor="#FA8A34" />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_8_6288"
        x1={201.5}
        y1={296}
        x2={201.5}
        y2={0.00000600866}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" stopOpacity={0.32} />
        <Stop offset={1} stopColor="white" stopOpacity={0} />
      </LinearGradient>
      <ClipPath id="clip0_8_6288">
        <Path
          d="M0 268C0 283.464 12.536 296 28 296L347 296C362.464 296 375 283.464 375 268L375 0L0 0L0 268Z"
          fill="white"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BgImage;
