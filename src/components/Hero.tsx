import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, MapPin, MessageCircle, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/hero-gelato.jpg";
import { whatsappLink } from "@/lib/data";
import { Button } from "@/components/ui/button";

const trustItems = ["Gelato feito hoje", "Açaí do Pará", "3 lojas em Uberlândia"];

/** Hero principal com imagem do produto e chamadas de ação. */
export function Hero() {
  return (
    <section className="hero-premium relative isolate overflow-hidden">
      <div className="hero-orb hero-orb-pink" aria-hidden />
      <div className="hero-orb hero-orb-blue" aria-hidden />
      <div className="hero-grid" aria-hidden />

      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:py-20">
        <div className="animate-fade-in text-center lg:text-left">
          <span className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-primary">
            <MapPin className="size-3.5" /> Uberlândia — MG
          </span>
          <p className="mt-7 flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-secondary lg:justify-start">
            <Sparkles className="size-3.5" /> A experiência mais gostosa da cidade
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Gelato que parece <span className="text-gradient-brand">obra de arte.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            Receitas autorais, frutas de verdade e açaí puro do Pará. Um ritual cremoso, feito em
            pequenos lotes para o seu dia ficar extraordinário.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Button
              asChild
              size="lg"
              className="premium-button w-full rounded-2xl px-6 text-primary-foreground sm:w-auto"
            >
              <Link to="/catalogo">
                Explorar sabores <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full rounded-2xl border-foreground/10 bg-card/55 px-6 backdrop-blur-sm sm:w-auto"
            >
              <a
                href={whatsappLink("Olá! Quero pedir gelato/açaí 🍦")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4 text-primary" /> Pedir agora
              </a>
            </Button>
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-bold text-muted-foreground lg:justify-start">
            {trustItems.map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-visual mx-auto w-full max-w-xl lg:max-w-none">
          <div className="hero-photo-wrap">
            <img
              src={heroImg}
              alt="Casquinha de waffle com duas bolas de gelato artesanal em fundo pastel"
              width={1536}
              height={1024}
              className="hero-photo"
            />
          </div>
          <div className="floating-review floating-review-top">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Award className="size-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground">Eleita pelos clientes</p>
              <p className="font-display text-base font-bold">Melhor gelato local</p>
            </div>
          </div>
          <div className="floating-review floating-review-bottom">
            <div className="flex gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-3.5 fill-current" />
              ))}
            </div>
            <p className="mt-1 text-xs font-bold">
              4.9 <span className="font-medium text-muted-foreground">por quem já provou</span>
            </p>
          </div>
          <div className="hero-sticker" aria-hidden>
            <span>
              feito
              <br />
              com amor
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
