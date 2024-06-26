import * as React from "react";
import Svg, {
  G,
  Rect,
  Mask,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
const BgImg = (props) => (
  <Svg
    width={375}
    height={390}
    viewBox="0 0 375 390"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_2_965)">
      <Rect width={375} height={812} fill="#F2F3F5" />
      <Mask
        id="mask0_2_965"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={376}
        height={473}
      >
        <Rect
          x={0.000488281}
          y={0.00012207}
          width={375}
          height={472}
          fill="url(#paint0_linear_2_965)"
        />
      </Mask>
      <G mask="url(#mask0_2_965)">
        <Path
          d="M110.321 228.799C55.9049 163.351 -24.5762 229.401 -100.921 137.578C-212.46 3.42525 -142.341 -223.414 -97.3449 -292.728C-70.2763 -327.247 -8.81034 -412.114 51.5032 -328.931C130.865 -219.476 135.025 -133.053 208.038 -78.4288C270.775 -31.4933 453.272 71.8275 479.521 185.864C509.902 317.85 454.286 431.936 397.38 519.598C320.622 637.839 200.848 582.467 153.71 489.469C106.573 396.471 164.737 294.247 110.321 228.799Z"
          stroke="black"
          strokeOpacity={0.07}
        />
        <Path
          d="M167.277 163.557C122.872 110.149 33.8569 164.354 -28.4433 89.423C-119.463 -20.0506 -62.1182 -205.353 -22.779 -265.953C0.734223 -296.316 54.2644 -370.765 103.257 -302.536C167.722 -212.759 177.002 -115.035 243.605 -73.2702C298.622 -38.7715 465.142 57.0487 489.346 152.94C517.072 262.782 468.299 369.298 418.547 445.939C351.439 549.315 261.57 527.652 223.874 450.575C186.179 373.498 211.683 216.965 167.277 163.557Z"
          stroke="black"
          strokeOpacity={0.07}
        />
        <Path
          d="M196.206 129.395C135.576 56.4725 69.0596 104.209 27.105 53.749C-34.1903 -19.9734 5.09757 -145.793 31.874 -187.041C47.863 -207.726 84.2775 -258.425 117.246 -212.44C160.626 -151.933 201.063 -58.5173 257.395 -20.529C306.727 12.738 433.339 110.214 454.185 177.773C476.717 250.798 436.099 329.501 402.235 381.668C356.557 452.031 290.314 458.141 265.013 406.107C239.711 354.072 256.836 202.317 196.206 129.395Z"
          stroke="black"
          strokeOpacity={0.07}
        />
        <Path
          d="M177.319 80.085C139.68 34.8149 91.9595 64.3078 64.008 30.6895C23.1711 -18.4268 38.7723 -97.8463 55.2464 -123.224C65.1568 -135.862 91.9925 -161.724 114.075 -131.269C143.131 -91.1948 158.239 -3.30974 198.453 14.3578C232.85 29.4698 214.958 125.355 177.319 80.085Z"
          stroke="black"
          strokeOpacity={0.07}
        />
        <Path
          d="M393.815 337.015C365.712 380.306 326.198 377.261 308.94 343.212C290.531 306.893 226.854 96.4849 287.228 100.4C319.828 102.514 388.862 147.843 407.455 197.832C424.859 244.625 414.649 304.92 393.815 337.015Z"
          stroke="black"
          strokeOpacity={0.07}
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_2_965"
        x1={187.5}
        y1={0.00012207}
        x2={187.5}
        y2={386}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F2F3F5" stopOpacity={0.16} />
        <Stop offset={0.476684} stopColor="#F2F3F5" />
        <Stop offset={1} stopColor="#F2F3F5" stopOpacity={0.16} />
      </LinearGradient>
      <ClipPath id="clip0_2_965">
        <Rect width={375} height={812} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BgImg;
