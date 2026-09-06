import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

/** Alternância de tema claro/escuro com persistência em localStorage. */
export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const salvo = localStorage.getItem("sorveteria-tema");
    const inicial = salvo === "dark";
    setDark(inicial);
    document.documentElement.classList.toggle("dark", inicial);
  }, []);

  const alternar = () => {
    const proximo = !dark;
    setDark(proximo);
    document.documentElement.classList.toggle("dark", proximo);
    localStorage.setItem("sorveteria-tema", proximo ? "dark" : "light");
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={alternar}
          aria-label={dark ? "Ativar tema claro" : "Ativar tema escuro"}
        >
          {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{dark ? "Tema claro" : "Tema escuro"}</TooltipContent>
    </Tooltip>
  );
}
