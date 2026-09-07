import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { toast } from "sonner";
import { PRODUTOS, type Prioridade, type Produto } from "@/lib/data";
import { useDadosMock } from "@/hooks/useDadosMock";
import { usePedido } from "@/hooks/usePedido";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "@/components/Reveal";
import { ProdutoCard } from "@/components/ProdutoCard";
import { ResumoPedido } from "@/components/ResumoPedido";
import { GradeCarregando, EstadoErro, EstadoVazio } from "@/components/EstadosLista";

const CATEGORIAS = [
  { valor: "todos", label: "Todos" },
  { valor: "sabores", label: "Sabores do dia" },
  { valor: "casquinhas", label: "Casquinhas" },
  { valor: "acai", label: "Açaí" },
  { valor: "combos", label: "Combos família" },
  { valor: "sazonal", label: "Sazonais" },
] as const;

const PRIORIDADES: { valor: Prioridade | "todas"; label: string }[] = [
  { valor: "todas", label: "Todas" },
  { valor: "alta", label: "Alta" },
  { valor: "media", label: "Média" },
  { valor: "baixa", label: "Baixa" },
];

/** Cardápio completo: busca, filtros, grade de produtos e calculadora. */
export function CatalogoConteudo() {
  const { dados, carregando, erro, recarregar } = useDadosMock(PRODUTOS, 750);
  const { itens, adicionar, remover, limpar, resumo, FRETE_GRATIS_A_PARTIR_DE } = usePedido();
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState<string>("todos");
  const [prioridade, setPrioridade] = useState<Prioridade | "todas">("todas");
  const buscaRef = useRef<HTMLInputElement>(null);

  // Atalhos de teclado: "/" foca a busca, "Esc" limpa os filtros.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== buscaRef.current) {
        e.preventDefault();
        buscaRef.current?.focus();
      }
      if (e.key === "Escape") {
        setBusca("");
        setCategoria("todos");
        setPrioridade("todas");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtrados = useMemo(() => {
    if (!dados) return [];
    const termo = busca.trim().toLowerCase();
    return dados.filter(
      (p) =>
        (categoria === "todos" || p.categoria === categoria) &&
        (prioridade === "todas" || p.prioridade === prioridade) &&
        (termo === "" ||
          p.nome.toLowerCase().includes(termo) ||
          p.descricao.toLowerCase().includes(termo)),
    );
  }, [dados, busca, categoria, prioridade]);

  const quantidadeDe = (id: string) =>
    itens.find((i) => i.produto.id === id)?.quantidade ?? 0;

  const handleAdicionar = (produto: Produto) => {
    adicionar(produto);
    toast.success(`${produto.nome} adicionado`, { description: "Confira no resumo do pedido." });
  };

  const limparFiltros = () => {
    setBusca("");
    setCategoria("todos");
    setPrioridade("todas");
  };

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_22rem]">
      <div>
        <div className="rounded-3xl border border-border bg-card p-5 shadow-card">
          <label htmlFor="busca" className="text-sm font-semibold">
            Buscar no cardápio
          </label>
          <div className="relative mt-2">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="busca"
              ref={buscaRef}
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Ex.: pistache, açaí, combo… (atalho: / )"
              className="rounded-xl pl-9"
            />
            {busca && (
              <button
                type="button"
                onClick={() => setBusca("")}
                aria-label="Limpar busca"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          <Tabs value={categoria} onValueChange={setCategoria} className="mt-4">
            <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 rounded-2xl bg-muted p-1">
              {CATEGORIAS.map((c) => (
                <TabsTrigger key={c.valor} value={c.valor} className="rounded-xl">
                  {c.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-muted-foreground">Procura:</span>
            {PRIORIDADES.map((p) => (
              <Button
                key={p.valor}
                size="sm"
                variant={prioridade === p.valor ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setPrioridade(p.valor)}
              >
                {p.label}
              </Button>
            ))}
            <Button
              size="sm"
              variant="ghost"
              className="ml-auto rounded-full text-muted-foreground"
              onClick={limparFiltros}
            >
              Limpar filtros (Esc)
            </Button>
          </div>
        </div>

        <div className="mt-8">
          {carregando ? (
            <GradeCarregando itens={6} />
          ) : erro ? (
            <EstadoErro mensagem={erro} onTentarNovamente={recarregar} />
          ) : filtrados.length === 0 ? (
            <EstadoVazio
              titulo="Nenhum item encontrado"
              descricao="Tente outro termo ou remova os filtros aplicados."
              acao={{ label: "Limpar filtros", onClick: limparFiltros }}
            />
          ) : (
            <>
              <p className="mb-4 text-sm text-muted-foreground" aria-live="polite">
                {filtrados.length} {filtrados.length === 1 ? "item" : "itens"} no cardápio
              </p>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtrados.map((p, i) => (
                  <Reveal key={p.id} delay={Math.min(i, 6) * 70}>
                    <ProdutoCard
                      produto={p}
                      onAdicionar={handleAdicionar}
                      quantidade={quantidadeDe(p.id)}
                    />
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <aside>
        <ResumoPedido
          itens={itens}
          resumo={resumo}
          onAdicionar={(item) => adicionar(item.produto)}
          onRemover={remover}
          onLimpar={limpar}
          freteGratisA={FRETE_GRATIS_A_PARTIR_DE}
        />
      </aside>
    </div>
  );
}
