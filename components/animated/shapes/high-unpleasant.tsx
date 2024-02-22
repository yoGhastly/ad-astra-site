"use client";
import React from "react";
import { motion } from "framer-motion";

export const HighEnergyUnpleasant = () => {
  return (
    <motion.svg
      width="136"
      height="136"
      viewBox="0 0 136 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // Animate the fill color
      animate={{ fill: ["#EBEBEB", "#E22B4C", "#EBEBEB"] }}
      // Set transition duration and type
      transition={{ duration: 4, repeatDelay: 1, repeat: Infinity }}
    >
      <g clipPath="url(#clip0_201_271)">
        <mask
          id="mask0_201_271"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="136"
          height="136"
        >
          <path d="M136 0H0V136H136V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_201_271)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34 0H0V68H34C15.2223 68 0 83.2225 0 102V136H68V102C68 120.778 83.2225 136 102 136H136V68H102C120.778 68 136 52.7777 136 34V0H68V34C68 15.2223 52.7777 0 34 0ZM68 68H34C52.7777 68 68 83.2225 68 102V68ZM68 68V34C68 52.7777 83.2225 68 102 68H68Z"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_201_271">
          <rect width="136" height="136" fill="white" />
        </clipPath>
      </defs>
    </motion.svg>
  );
};
