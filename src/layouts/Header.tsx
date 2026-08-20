import { CircleUserRound, Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";
import { headerNavLinks } from "../data/navigation.data";
import { useTheme } from "../hooks/useTheme";
import { cn } from "../utils/cn";

/** Sticky top navigation bar — brand, primary nav links, theme/account actions. */
export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-surface-container-lowest shadow-sm flex justify-between items-center w-full px-md h-16 z-50 sticky top-0 transition-theme">
      <div className="flex items-center">
        <span className="text-headline-md font-headline-md font-bold text-primary">ENA Peru</span>
      </div>

      <nav className="hidden md:flex gap-md">
        {headerNavLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              cn(
                "pb-1 text-label-md font-label-md transition-colors",
                isActive
                  ? "text-primary font-bold border-b-2 border-primary opacity-80"
                  : "text-on-surface-variant hover:text-primary",
              )
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-sm">
        <button
          aria-label="Cambiar tema"
          className="text-on-surface-variant hover:text-primary transition-colors"
          onClick={toggleTheme}
          type="button"
        >
          {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
        </button>
        <button aria-label="Cuenta" className="text-on-surface-variant hover:text-primary transition-colors" type="button">
          <CircleUserRound size={22} />
        </button>
      </div>
    </header>
  );
}
