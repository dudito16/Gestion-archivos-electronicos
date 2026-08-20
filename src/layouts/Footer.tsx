import { Link } from "react-router-dom";
import { footerLinks } from "../data/navigation.data";

export function Footer() {
  return (
    <footer className="w-full py-lg px-md flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto bg-surface-container border-t border-outline-variant mt-xl transition-theme">
      <div className="text-headline-lg font-headline-lg text-primary mb-sm md:mb-0">AGN</div>
      <div className="text-body-md font-body-md text-on-surface-variant mb-sm md:mb-0 text-center">
        © 2024 National Archives of Peru (AGN) - ENA
      </div>
      <div className="flex gap-md">
        {footerLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="text-on-surface-variant hover:text-primary underline text-label-md font-label-md transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
