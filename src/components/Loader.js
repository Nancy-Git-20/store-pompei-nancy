import React from "react";

export default function Loader() {
  return (
    <>
        {/* <svg
          className="loader"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 340 340"
        >
          <circle cx="170" cy="170" r="160" stroke="#15caf6" />
          <circle cx="170" cy="170" r="135" stroke="#404041" />
          <circle cx="170" cy="170" r="110" stroke="#15caf6" />
          <circle cx="170" cy="170" r="85" stroke="#404041" />
        </svg> */}

        {/* <div className="yv-loader__wrap"></div> 
        <svg className="loader" viewBox="0 0 601 401">
            <defs>
            <filter id="gooey" color-interpolation-filters="sRGB">
                <fegaussianblur in="SourceGraphic" stdDeviation="7" result="blur"></fegaussianblur>
                <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="gooey"></fecolormatrix>
                <feblend in="SourceGraphic" in2="gooey"></feblend>
            </filter>
            </defs>
            <rect className="bg" x="0" y="0" width="600" height="400" fill="#FFFFFF"></rect>
            <g className="ellipses" fill="#15caf6" filter="url(#gooey)">
            <ellipse className="ellipse" cx="220" cy="200" rx="16" ry="16"></ellipse>
            <ellipse className="ellipse" cx="280" cy="200" rx="16" ry="16"></ellipse>
            <ellipse className="ellipse" cx="340" cy="200" rx="16" ry="16"></ellipse>
            <ellipse className="ellipse" cx="400" cy="200" rx="16" ry="16"></ellipse>
            </g>
        </svg>*/}
        {/* <div class="yv-loader__wrap">
            <svg class="loader" viewBox="0 0 601 401">
                <defs>
                <filter id="gooey" color-interpolation-filters="sRGB">
                    <fegaussianblur in="SourceGraphic" stdDeviation="7" result="blur"></fegaussianblur>
                    <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="gooey"></fecolormatrix>
                    <feblend in="SourceGraphic" in2="gooey"></feblend>
                </filter>
                </defs>
                <rect class="bg" x="0" y="0" width="600" height="400" fill="#232323"></rect>
                <g class="ellipses" fill="#000" filter="url(#gooey)">
                <ellipse class="ellipse" cx="220" cy="200" rx="30" ry="30"></ellipse>
                <ellipse class="ellipse" cx="280" cy="200" rx="30" ry="30"></ellipse>
                <ellipse class="ellipse" cx="340" cy="200" rx="30" ry="30"></ellipse>
                <ellipse class="ellipse" cx="400" cy="200" rx="30" ry="30"></ellipse>
                </g>
            </svg>
        </div>
         */}
         <div className="yv-loader__wrap">
  <svg className="loader" viewBox="0 0 601 401">
    <defs>
      <filter id="gooey" color-interpolation-filters="sRGB">
        <fegaussianblur in="SourceGraphic" stdDeviation="7" result="blur"></fegaussianblur>
        <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="gooey"></fecolormatrix>
        <feblend in="SourceGraphic" in2="gooey"></feblend>
      </filter>
    </defs>
    {/* <rect class="bg" x="0" y="0" width="600" height="400" fill="#232323"></rect> */}
    <g className="ellipses" fill="#000" filter="url(#gooey)">
      <ellipse fill="#000" className="ellipse" cx="220" cy="200" rx="40" ry="40"></ellipse>
      <ellipse className="ellipse" cx="280" cy="200" rx="40" ry="40"></ellipse>
      <ellipse className="ellipse" cx="340" cy="200" rx="40" ry="40"></ellipse>
      <ellipse className="ellipse" cx="400" cy="200" rx="40" ry="40"></ellipse>
    </g>
  </svg>
</div>
    </>  
  );
}
