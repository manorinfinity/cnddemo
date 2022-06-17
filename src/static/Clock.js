import React from "react";

function Clock({stroke}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" version="1">
      <defs>
        <linearGradient>
          <stop offset="0" stopColor="#ae2fed" stopOpacity="0.959"></stop>
          <stop offset="1" stopColor="#910000" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
      <g display="inline" transform="translate(-230 -148.076)">
        <g
          fill="#b3b3b3"
          fillOpacity="0"
          stroke={stroke}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeMiterlimit="4"
          strokeOpacity="1"
          transform="translate(1.515 1.463)"
        >
          <path
            fillRule="nonzero"
            strokeDashoffset="0"
            strokeWidth="3"
            d="M249.179 158.255c0 5.067-4.112 9.179-9.179 9.179s-9.179-4.112-9.179-9.179 4.112-9.179 9.179-9.179 9.179 4.112 9.179 9.179z"
          ></path>
          <path
            fillRule="evenodd"
            strokeLinejoin="miter"
            strokeWidth="2"
            d="M240.09 158.523l-3.974-4.018"
          ></path>
          <path
            fillRule="evenodd"
            strokeLinejoin="miter"
            strokeWidth="2"
            d="M245.703 152.718l-6.31 6.32"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default Clock;
