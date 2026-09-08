import { createFileRoute } from "@tanstack/react-router";
import { CatalogoConteudo } from "@/components/CatalogoConteudo";
import fundoCardapio from "@/assets/fundo-cardapio.jpg";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Cardápio de gelato e açaí — Sorveteria & Açaí Uberlândia" },
      {
        name: "description",
        content:
          "Sabores do dia, casquinhas, açaí do Pará e combos família. Monte seu pedido e finalize pelo WhatsApp em Uberlândia.",
      },
      { property: "og:title", content: "Cardápio de gelato e açaí — Uberlândia" },
      {
        property: "og:description",
        content: "Escolha sabores, casquinhas, açaí e combos e peça pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CatalogoPage,
});

function CatalogoPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden py-20">
        <img
          src={fundoCardapio}
          alt="Balcão da sorveteria com cubas de gelato colorido"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-background/70 backdrop-blur-[2px]" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">Nosso cardápio</h1>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/80">
            Tudo é produzido diariamente em pequenos lotes. Monte seu pedido e envie direto
            para a loja pelo WhatsApp.
          </p>
        </div>
      </section>
      <CatalogoConteudo />
    </main>
  );
}
