import Image from "next/image";
import localFont from "next/font/local";
import React from "react";
import clsx from "clsx";

const ZodiakBold = localFont({
  src: [
    { path: "../../public/Zodiak-Bold.woff", style: "normal", weight: "700" },
  ],
});

export function Navbar() {
  return (
    <nav className="flex justify-center items-center px-8 py-3 max-w-7xl mx-auto z-50 sticky top-0 backdrop-filter backdrop-blur-md">
      <div className="flex justify-between items-center w-full">
        <div className="w-20 h-20">
          <figure className="relative w-full h-full">
            <Image
              src="/logo.svg"
              alt="Ad Astra"
              fill
              className="object-cover"
            />
          </figure>
        </div>

        <p className={clsx(ZodiakBold.className, "text-2xl")}>ad astra</p>
      </div>
    </nav>
  );
}
