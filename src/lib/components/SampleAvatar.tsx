import React from 'react';

/**
 * Just a simple avatar.
 *
 * @returns {JSX.Element}
 */
export default function SampleAvatar({
  color,
  ...props
}: JSX.IntrinsicElements['svg']): JSX.Element {
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color }}
      {...props}
    >
      <rect x="0.5" width="40" height="40" rx="20" fill="currentColor" />
      <g clip-path="url(#clip0_0_23)">
        <path
          d="M20.4974 19.1667C22.3383 19.1667 23.8307 17.6743 23.8307 15.8333C23.8307 13.9924 22.3383 12.5 20.4974 12.5C18.6564 12.5 17.1641 13.9924 17.1641 15.8333C17.1641 17.6743 18.6564 19.1667 20.4974 19.1667Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.5 27.5V25.8333C15.5 24.9493 15.8512 24.1014 16.4763 23.4763C17.1014 22.8512 17.9493 22.5 18.8333 22.5H22.1667C23.0507 22.5 23.8986 22.8512 24.5237 23.4763C25.1488 24.1014 25.5 24.9493 25.5 25.8333V27.5"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_23">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(10.5 10)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
