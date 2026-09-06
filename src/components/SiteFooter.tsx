import { Link } from "@tanstack/react-router";
import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import { LogoLockup } from "@/components/Logo";
import { LOJAS } from "@/lib/data";

/** Rodapé com logo, navegação, endereços e horários. */
export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <LogoLockup size={44} />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Gelato artesanal produzido diariamente em pequenos lotes, com frutas de
            produtores locais e ingredientes italianos selecionados. Desde 2014 em São Paulo.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <Instagram className="size-4" /> @sorveteriaartesanal
          </a>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider">Navegue</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Home" },
              { to: "/catalogo", label: "Cardápio" },
              { to: "/sobre", label: "Sobre nós" },
              { to: "/contato", label: "Contato" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider">Nossas lojas</h3>
          <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
            {LOJAS.map((loja) => (
              <li key={loja.id}>
                <p className="font-semibold text-foreground">{loja.nome}</p>
                <p className="flex items-start gap-1.5">
                  <MapPin className="mt-0.5 size-3.5 shrink-0" /> {loja.endereco}
                </p>
                <p className="flex items-center gap-1.5">
                  <Clock className="size-3.5 shrink-0" /> {loja.horario}
                </p>
                <p className="flex items-center gap-1.5">
                  <Phone className="size-3.5 shrink-0" /> {loja.telefone}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sorveteria Artesanal — CNPJ 12.345.678/0001-90 — São Paulo, SP
      </div>
    </footer>
  );
}
