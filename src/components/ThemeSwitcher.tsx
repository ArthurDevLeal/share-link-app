import { Moon, Sun } from "lucide-react";

type ThemeSwitcherProps = {
  theme: string;
  setTheme: (theme: string) => void;
};
export function ThemeSwitcher({ theme, setTheme }: ThemeSwitcherProps) {
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <Sun color="white" /> : <Moon />}
    </button>
  );
}
