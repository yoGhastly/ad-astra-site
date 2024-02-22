"use client";
import React from "react";
import { motion } from "framer-motion";

export const LowEnergyPleasant = () => {
  return (
    <motion.svg
      width="136"
      height="136"
      viewBox="0 0 136 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // Animate the fill color
      animate={{ fill: ["#EBEBEB", "#B7FFB6", "#EBEBEB"] }}
      // Set transition duration and type
      transition={{ duration: 4, repeatDelay: 8, repeat: Infinity }}
    >
      <g clipPath="url(#clip0_201_295)">
        <mask
          id="mask0_201_295"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="136"
          height="136"
        >
          <path d="M136 0H0V136H136V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_201_295)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M67.9836 68C30.4358 67.9912 3.28271e-06 37.5499 0 1.18895e-05L136 0C136 37.5499 105.565 67.9912 68.0163 68C105.565 68.0088 136 98.4504 136 136H5.94474e-06C5.94474e-06 98.4504 30.4358 68.0088 67.9836 68Z"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_201_295">
          <rect width="136" height="136" fill="white" />
        </clipPath>
      </defs>
    </motion.svg>
  );
};
