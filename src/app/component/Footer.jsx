const footerItems = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "FAQs", url: "/faqs" },
  { label: "Support", url: "/support" },
];

const linkClass =
  "relative text-gray-800 text-3xl after:content-[''] after:absolute after:bottom-0 after:left-1/2 " +
  "after:w-0 after:h-[3px] after:bg-amber-500 after:transition-all after:duration-300 " +
  "hover:after:w-full hover:after:left-0";

function Footer() {
  return (
    <footer className="bg-amber-50 text-gray-800 border-t border-gray-300 mt-8 px-6 py-6">
      <div className="flex flex-col items-start md:items-center md:flex-row md:justify-center gap-5 md:gap-8 ">
          {footerItems.map((item, index) => (
              <Link href={item.url}  key={index} className={linkClass}>
                {item.label}
              </Link>
          ))}
    
      </div>

      <div className="flex justify-center items-center gap-6 mt-6">
        <Link href="https://github.com">
          <FaGithub size={24} className="hover:text-amber-500 transition-colors duration-200" />
        </Link>
        <Link href="https://twitter.com">
          <FaTwitter size={24} className="hover:text-amber-500 transition-colors duration-200" />
        </Link>
      </div>

      <div className="text-center text-lg mt-4 flex justify-center items-center gap-2">
        <FaRegCopyright size={16} />
        <span>
          {new Date().getFullYear()}{" "}
          <span className="text-amber-500 font-bold text-2xl">MY NOTES</span>. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
