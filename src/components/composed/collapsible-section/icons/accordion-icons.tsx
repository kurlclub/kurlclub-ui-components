import * as React from 'react';

export const KAccordionOpen: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 20L16 12L24 20L8 20Z" fill="#BCBDBF" />
  </svg>
);

export const KAccordionClose: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1689_3441)">
      <path d="M24 12.0015L16 20.0015L8 12.0015H24Z" fill="#BCBDBF" />
    </g>
    <defs>
      <clipPath id="clip0_1689_3441">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="translate(0 0.00146484)"
        />
      </clipPath>
    </defs>
  </svg>
);
