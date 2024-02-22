"use client";
import React from "react";
import { motion } from "framer-motion";

export const HighEnergyPleasant = () => {
  return (
    <motion.svg
      width="136"
      height="136"
      viewBox="0 0 136 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // Animate the fill color
      animate={{ fill: ["#EBEBEB", "#FFD9A0", "#EBEBEB"] }}
      // Set transition duration and type
      transition={{ duration: 4, repeatDelay: 3, repeat: Infinity }}
    >
      <g clipPath="url(#clip0_201_279)">
        <mask
          id="mask0_201_279"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="136"
          height="136"
        >
          <path d="M136 0H0V136H136V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_201_279)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.4857 0H0.485717V34C0.485717 51.3142 13.4277 65.6056 30.1655 67.7281C13.193 69.6334 2.86977e-06 84.033 1.48619e-06 101.514L0 135.514H34C51.3142 135.514 65.6056 122.572 67.7281 105.835C69.6334 122.807 84.033 136 101.514 136H135.514V102C135.514 84.6858 122.572 70.3943 105.835 68.272C122.807 66.3669 136 51.967 136 34.4857V0.485714L102 0.485713C84.6858 0.485712 70.3943 13.4277 68.272 30.1655C66.3669 13.193 51.967 0 34.4857 0Z"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_201_279">
          <rect width="136" height="136" fill="white" />
        </clipPath>
      </defs>
    </motion.svg>
  );
};
