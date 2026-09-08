import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Snowflake, HeartHandshake } from "lucide-react";
import lojaImg from "@/assets/loja-interior.jpg";
import balcaoImg from "@/assets/gelato-counter.jpg";
import { ESTATISTICAS } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { ContadorAnimado } from "@/components/ContadorAnimado";
import { DepoimentosSecao } from "@/components/DepoimentosSecao";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Nossa história — Sorveteria & Açaí Uberlândia" },
      {
        name: "description",
        content:
          "Desde 2014 produzindo gelato artesanal em pequenos lotes com frutas de produtores locais e açaí puro do Pará em Uberlândia.",
      },
      { property: "og:title", content: "Nossa história — Sorveteria & Açaí Uberlândia" },
      {
        property: "og:description",
        content: "Gelato artesanal em pequenos lotes e açaí puro do Pará desde 2014.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SobrePage,
});

const VALORES = [
  {
    icone: Leaf,
    titulo: "Fruta de verdade",
    texto:
      "Compramos manga, morango e maracujá de produtores do Triângulo Mineiro toda semana. Nada de polpa industrializada.",
  },
  {
    icone: Snowflake,
    titulo: "Pequenos lotes",
    texto:
      "Cada sabor é batido em batedeira italiana em lotes de 5 litros, no mesmo dia em que vai para o balcão.",
  },
  {
    icone: HeartHandshake,
    titulo: "Gente da casa",
    texto:
      "Nossa equipe é formada por moradores dos bairros onde estamos. Atendimento próximo, do jeito mineiro.",
  },
];

function SobrePage() {
  return (
    <main>
      <section className="gradient-soft py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <h1 className="font-display text-4xl font-bold sm:text-5xl">
              Uma sorveteria de <span className="text-gradient-brand">bairro</span>, feita à mão
            </h1>
            <p className="mt-6 text-muted-foreground">
              Começamos em 2014 com uma máquina de segunda mão e seis sabores. Hoje são três
              lojas em Uberlândia, um laboratório próprio de produção e mais de quarenta
              receitas que giram ao longo do ano conforme a fruta da estação.
            </p>
            <p className="mt-4 text-muted-foreground">
              O açaí veio depois, em 2018, direto de cooperativas do Pará — batido na hora, sem
              xarope de guaraná adicionado, do jeito que se come no Norte.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={lojaImg}
              alt="Interior da sorveteria com balcão e mesas de madeira clara"
              className="w-full rounded-[2rem] object-cover shadow-neon-blue"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ESTATISTICAS.map((e, i) => (
              <Reveal key={e.label} delay={i * 90}>
                <Card className="h-full rounded-3xl border-border text-center card-hover">
                  <CardContent className="p-6">
                    <ContadorAnimado valor={e.valor} sufixo={e.sufixo} />
                    <p className="mt-2 text-sm text-muted-foreground">{e.label}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <img
              src={balcaoImg}
              alt="Balcão refrigerado com cubas de gelato colorido"
              className="w-full rounded-[2rem] object-cover shadow-card"
            />
          </Reveal>
          <div className="grid gap-5">
            {VALORES.map((v, i) => (
              <Reveal key={v.titulo} delay={i * 100}>
                <div className="flex gap-4 rounded-3xl border border-border bg-card p-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl gradient-brand text-primary-foreground">
                    <v.icone className="size-5" />
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-bold">{v.titulo}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{v.texto}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DepoimentosSecao />
    </main>
  );
}
