import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { LogoLockup } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { whatsappLink } from "@/lib/data";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/catalogo", label: "Cardápio" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

/** Cabeçalho fixo com navegação, ações rápidas e menu mobile. */
export function SiteHeader() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" aria-label="Ir para a página inicial">
          <LogoLockup />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              activeProps={{ className: "bg-accent text-accent-foreground" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden gradient-brand text-primary-foreground shadow-neon sm:inline-flex">
            <a
              href={whatsappLink("Olá! Quero fazer um pedido 🍦")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShoppingBag className="size-4" /> Pedir agora
            </a>
          </Button>

          <Sheet open={aberto} onOpenChange={setAberto}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
              <div className="mt-4 flex flex-col gap-2 px-4">
                <LogoLockup />
                <nav className="mt-6 flex flex-col gap-1">
                  {LINKS.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setAberto(false)}
                      className="rounded-xl px-4 py-3 text-base font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      activeProps={{ className: "bg-accent text-accent-foreground" }}
                      activeOptions={{ exact: link.to === "/" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="mt-6 gradient-brand text-primary-foreground">
                  <a
                    href={whatsappLink("Olá! Quero fazer um pedido 🍦")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="size-4" /> Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
