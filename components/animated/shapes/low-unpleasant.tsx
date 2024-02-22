"use client";
import React from "react";
import { motion } from "framer-motion";

export const LowEnergyUnpleasant = () => {
  return (
    <motion.svg
      width="136"
      height="136"
      viewBox="0 0 136 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // Animate the fill color
      animate={{ fill: ["#EBEBEB", "#A7B5FF", "#EBEBEB"] }}
      // Set transition duration and type
      transition={{ duration: 4, repeatDelay: 6, repeat: Infinity }}
    >
      <g clipPath="url(#clip0_201_287)">
        <mask
          id="mask0_201_287"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="136"
          height="136"
        >
          <path d="M136 0H0V136H136V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_201_287)">
          <path d="M0 0H68C105.555 0 136 30.4446 136 68V136H68C30.4446 136 0 105.555 0 68V0Z" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_201_287">
          <rect width="136" height="136" fill="white" />
        </clipPath>
      </defs>
    </motion.svg>
  );
};
