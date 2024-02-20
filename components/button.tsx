import clsx from "clsx";
import localFont from "next/font/local";
import Link from "next/link";
import React from "react";

const SatoshiRegular = localFont({
  src: "../public/Satoshi-Regular.woff",
});

export const Button = ({ label }: { label: string }) => {
  return (
    <Link
      href="https://expo.dev/@ghastly/ad-astra"
      target="_blank"
      className={clsx(
        "flex justify-center items-center",
        "bg-transparent border border-white",
        "rounded-full px-3.5 py-2 md:px-7 md:py-4",
        "hover:bg-white hover:text-black transition delay-100",
      )}
    >
      <p className={clsx(SatoshiRegular.className)}>{label}</p>
    </Link>
  );
};
