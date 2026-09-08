import { createFileRoute } from "@tanstack/react-router";
import { PRODUTOS } from "@/lib/data";
import { Hero } from "@/components/Hero";
import { ProdutosSecao } from "@/components/ProdutosSecao";
import { PromocoesSecao } from "@/components/PromocoesSecao";
import { DepoimentosSecao } from "@/components/DepoimentosSecao";
import { LojasSecao } from "@/components/LojasSecao";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sorveteria & Açaí Uberlândia — gelato artesanal e açaí do Pará" },
      {
        name: "description",
        content:
          "Gelato artesanal feito todo dia, casquinhas na chapa, combos família e açaí puro do Pará. Peça pelo WhatsApp em Uberlândia.",
      },
      {
        property: "og:title",
        content: "Sorveteria & Açaí Uberlândia — gelato artesanal e açaí do Pará",
      },
      {
        property: "og:description",
        content: "Sabores do dia, promoções da semana e três lojas em Uberlândia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const sabores = PRODUTOS.filter((p) => p.categoria === "sabores").slice(0, 6);
  const acai = PRODUTOS.filter((p) => p.categoria === "acai");

  return (
    <main>
      <Hero />
      <ProdutosSecao
        id="sabores"
        chapeu="Feitos hoje"
        titulo="Sabores do dia"
        descricao="Pequenos lotes batidos pela manhã, com fruta de produtores do Triângulo Mineiro."
        produtos={sabores}
      />
      <ProdutosSecao
        id="acai"
        chapeu="Direto do Norte"
        titulo="Açaí puro do Pará"
        descricao="Batido na hora, sem xarope adicionado, com os complementos que você escolher."
        produtos={acai}
        fundo="muted"
        delay={850}
      />
      <PromocoesSecao />
      <DepoimentosSecao />
      <LojasSecao />
    </main>
  );
}
