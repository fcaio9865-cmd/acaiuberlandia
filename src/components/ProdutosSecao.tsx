import { toast } from "sonner";
import type { Produto } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { ProdutoCard } from "@/components/ProdutoCard";
import { usePedido } from "@/hooks/usePedido";
import { useDadosMock } from "@/hooks/useDadosMock";
import { GradeCarregando, EstadoErro, EstadoVazio } from "@/components/EstadosLista";
import { cn } from "@/lib/utils";

/** Seção reutilizável de produtos por categoria, com os três estados. */
export function ProdutosSecao({
  id,
  chapeu,
  titulo,
  descricao,
  produtos,
  fundo = "padrao",
  delay = 700,
}: {
  id: string;
  chapeu: string;
  titulo: string;
  descricao: string;
  produtos: Produto[];
  fundo?: "padrao" | "muted" | "suave";
  delay?: number;
}) {
  const { dados, carregando, erro, recarregar } = useDadosMock(produtos, delay);
  const { adicionar, itens } = usePedido();

  const quantidadeDe = (pid: string) =>
    itens.find((i) => i.produto.id === pid)?.quantidade ?? 0;

  return (
    <section
      id={id}
      className={cn(
        "py-20",
        fundo === "muted" && "bg-muted/40",
        fundo === "suave" && "gradient-soft",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{chapeu}</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{titulo}</h2>
          <p className="mt-4 text-muted-foreground">{descricao}</p>
        </Reveal>

        <div className="mt-12">
          {carregando ? (
            <GradeCarregando itens={3} />
          ) : erro ? (
            <EstadoErro mensagem={erro} onTentarNovamente={recarregar} />
          ) : !dados || dados.length === 0 ? (
            <EstadoVazio titulo="Nada disponível hoje" descricao="Novos itens em breve." />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {dados.map((p, i) => (
                <Reveal key={p.id} delay={i * 90}>
                  <ProdutoCard
                    produto={p}
                    quantidade={quantidadeDe(p.id)}
                    onAdicionar={(produto) => {
                      adicionar(produto);
                      toast.success(`${produto.nome} adicionado ao pedido`);
                    }}
                  />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
