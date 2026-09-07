import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-gelato.jpg";
import { whatsappLink } from "@/lib/data";
import { Button } from "@/components/ui/button";

/** Hero principal com imagem do produto e chamadas de ação. */
export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-soft">
      <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div className="animate-fade-in text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary shadow-neon">
            <MapPin className="size-3.5" /> Uberlândia — MG
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Gelato artesanal e <span className="text-gradient-brand">açaí cremoso</span> feitos
            todo dia
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0">
            Sabores do dia, casquinhas na chapa, combos para a família e açaí puro do Pará.
            Escolha no cardápio e finalize em 3 toques pelo WhatsApp.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Button
              asChild
              size="lg"
              className="w-full rounded-2xl gradient-brand text-primary-foreground shadow-neon sm:w-auto"
            >
              <Link to="/catalogo">
                Ver cardápio <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full rounded-2xl border-secondary/40 text-secondary sm:w-auto"
            >
              <a
                href={whatsappLink("Olá! Quero pedir gelato/açaí 🍦")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4" /> Pedir no WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <img
            src={heroImg}
            alt="Casquinha de waffle com duas bolas de gelato artesanal em fundo pastel"
            width={1536}
            height={1024}
            className="relative w-full rounded-[2.5rem] object-cover shadow-neon-blue"
          />
        </div>
      </div>
    </section>
  );
}
