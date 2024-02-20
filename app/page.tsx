import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { shapes } from "@/constants";
import clsx from "clsx";
import localFont from "next/font/local";
import Image from "next/image";

const ZodiakBold = localFont({
  src: [{ path: "../public/Zodiak-Bold.woff", style: "normal", weight: "700" }],
});

const SatoshiBold = localFont({
  src: [
    { path: "../public/Satoshi-Bold.woff", style: "normal", weight: "700" },
  ],
});

export default function Home() {
  return (
    <>
      <header className="mx-auto flex p-5 max-w-4xl flex-col gap-14 justify-center items-center h-screen -mt-20">
        <Chip label="Mental health and Astronomy" />
        <h1
          className={clsx(
            ZodiakBold.className,
            "font-bold text-3xl md:text-5xl",
            "max-w-xl text-center",
            "leading-normal",
          )}
        >
          Navigating the <span className="text-[#9d9d9d]">cosmos</span> of your{" "}
          <span className="text-[#9d9d9d]">mind</span>.
        </h1>
        <Button label="Download the app" />
      </header>

      <section className="flex flex-col px-5 items-center gap-10 bg-white w-full h-screen py-10">
        <ul className="grid grid-cols-2 md:flex justify-center items-center gap-8">
          {shapes.map((Shape, idx) => (
            <li className="md:w-40 md:h-40" key={idx}>
              <Shape />
            </li>
          ))}
        </ul>

        <h2
          className={clsx(
            SatoshiBold.className,
            "text-black text-2xl md:text-3xl max-w-lg text-center font-bold leading-normal",
          )}
        >
          <span className="text-[#9d9d9d]">
            Log your emotions – Monitor your{" "}
          </span>
          mental landscape with precision.
        </h2>

        <div className="w-[312px] h-[312px] md:w-[450px] md:h-[450px]">
          <figure className="relative aspect-square w-full h-full">
            <Image src="/mockup.svg" alt="App" fill className="object-cover" />
          </figure>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-10 items-center p-5 justify-center mx-auto bg-[#f2f2f2] w-full h-screen py-10">
        <article className="flex flex-col justify-center md:gap-8">
          <div className="w-40 h-40 md:w-72 md:h-32 -ml-5">
            <figure className="relative aspect-square w-full h-full">
              <Image
                src="/nasa.svg"
                alt="NASA"
                fill
                className="object-contain"
              />
            </figure>
          </div>
          <h3
            className={clsx(
              SatoshiBold.className,
              "font-bold text-[#9d9d9d] text-2xl md:text-3xl max-w-xl",
            )}
          >
            <span className="text-black">Share your cosmic reflections – </span>
            Connect with others by sharing your thoughts and insights inspired
            by NASA&apos;s Astronomy Picture of the Day
          </h3>
        </article>

        <div className="w-64 h-64 md:w-80 md:h-80">
          <figure className="relative aspect-square w-full h-full">
            <Image
              src="/question.svg"
              alt="NASA"
              fill
              className="object-contain"
            />
          </figure>
        </div>
      </section>

      <section className="flex flex-col gap-10 p-5 items-center justify-center mx-auto w-full h-screen py-10">
        <p
          className={clsx(
            ZodiakBold.className,
            "text-center max-w-3xl text-lg md:text-2xl",
          )}
        >
          Ad Astra is a personal project driven by a passion for mental wellness
          and the wonders of the universe. Developed by a dedicated individual,
          it aims to empower users to explore and understand their emotions in a
          unique way, combining the art of journaling with the fascination of
          astronomy.
        </p>

        <div className="w-64 h-64 md:w-80 md:h-80">
          <figure className="relative aspect-square w-full h-full">
            <Image
              src="/heart.svg"
              alt="NASA"
              fill
              className="object-contain"
            />
          </figure>
        </div>
      </section>

      <footer
        className={clsx(
          "relative flex flex-col overflow-hidden gap-10",
          "bg-clip-content justify-between",
          "mx-auto w-full h-[50vh] md:h-[70vh] py-10",
        )}
      >
        <div className="self-start ml-10">
          <h4>Ad astra</h4>
        </div>

        <h5
          className={clsx(
            ZodiakBold.className,
            "font-bold self-center text-[80px] md:text-[300px] absolute -bottom-10 md:-bottom-[150px]",
          )}
        >
          Ad Astra
        </h5>
      </footer>
    </>
  );
}
