import clsx from "clsx";

type SpinLoaderProps = {
  className?: string;
};

const SpinLoader = ({ className = "" }: SpinLoaderProps) => {
  return (
    <div
      className={clsx(
        "flex",
        "items-center",
        "justify-center",
        className,
      )}
    >
      <div
        className={clsx(
          "w-8",
          "h-8",
          "border-5",
          "border-t-slate-400",
          "border-slate-900",
          "rounded-full",
          "animate-spin",''
        )}
      ></div>
    </div>
  );
};

export default SpinLoader;
