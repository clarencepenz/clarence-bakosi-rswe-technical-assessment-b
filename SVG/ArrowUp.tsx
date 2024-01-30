import * as React from "react";
import { SVGProps } from "@/types";

function SVGComponent(props: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_59_84)">
        <path d="M7 10L12 15L17 10H7Z" fill="black" fillOpacity={0.87} />
      </g>
      <defs>
        <clipPath id="clip0_59_84">
          <rect width={24} height={24} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SVGComponent;
