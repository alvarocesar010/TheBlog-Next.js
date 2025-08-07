import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link
        href="#"
        className="
        text-4xl/normal font-extrabold py-8
        sm:text-5xl/normal sm:py-10
        md:text-6xl/normal md:py-12
        lg:text-7xl/normal lg:py-12
        "
      >
        The blog
      </Link>
    </header>
  );
};

export default Header;
