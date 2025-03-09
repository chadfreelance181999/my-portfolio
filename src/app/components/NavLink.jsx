import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 dark:text-white sm:text-xl rounded md:p-0 hover:dark:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
