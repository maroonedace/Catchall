import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react";
import { useTheme, type Theme } from "../theme/ThemeProvider";

const options: { value: Theme; label: string; Icon: LucideIcon }[] = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
];

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div role="group" aria-label="Color theme" className="inline-flex gap-1 rounded-lg bg-muted p-1">
      {options.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          aria-label={label}
          title={label}
          aria-pressed={theme === value}
          onClick={() => setTheme(value)}
          className="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:z-10 focus-visible:outline-ring aria-pressed:bg-surface aria-pressed:text-foreground aria-pressed:shadow-sm"
        >
          <Icon className="size-4" />
        </button>
      ))}
    </div>
  );
};
