import React from "react";

export const Chip = ({ label }: { label: string }) => {
  return (
    <div className="flex justify-center items-center bg-[#A649DA]/20  px-3 py-1.5 rounded-full">
      <p className="text-[#A649DA] text-sm">{label}</p>
    </div>
  );
};
