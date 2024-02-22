import clsx from "clsx";

const TextShine = ({ label }: { label: string }) => {
  return (
    <span
      className={clsx(
        "inline-flex animate-background-shine bg-[linear-gradient(110deg,#1e293b,45%,#939393,55%,#1e293b)] bg-[length:250%_100%] bg-clip-text text-transparent",
      )}
    >
      {label}
    </span>
  );
};

export default TextShine;
