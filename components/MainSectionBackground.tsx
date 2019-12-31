import React from "react";

export default function MainSectionBackground() {
  return (
    <div className="section-background-container">
      <svg
        viewBox="0 0 1440 898"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        height="108%"
        width="100%"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0H60C60 428.906 407.697 776.604 836.604 776.604H1440V854C1440 854 1000.87 898 719.5 898C438.518 898 0 854 0 854V0Z"
          fill="url(#paint0_radial)"
        />
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1440 -58.5002) rotate(146.795) scale(1721.02 2803.47)"
          >
            <stop stop-color="#1EA67E" />
            <stop offset="0.828552" stop-color="#1EA67E" />
            <stop offset="0.902829" stop-color="#198472" />
            <stop offset="1" stop-color="#114B5F" />
          </radialGradient>
        </defs>
      </svg>
      <style jsx>
        {`
          .section-background-container {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: -1;
          }
          svg {
          }
        `}
      </style>
    </div>
  );
}
