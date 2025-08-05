"use client";
import clsx from "clsx";

const Header = () => {
  return (
    <div>
      <h1
        className={clsx(
          { "text-xl": true },
          "font-bold",
          "text-blue-500",
          "hover:text-blue-50",
          "transition",
          "duration-1000",
        )}
        onClick={() => alert(123)}
      >
        Texto do meu h1
      </h1>
    </div>
  );
};

export default Header;
