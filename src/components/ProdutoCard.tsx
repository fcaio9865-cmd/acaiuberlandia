import { Plus, Sparkles } from "lucide-react";
import type { Produto } from "@/lib/data";
import { formatBRL } from "@/lib/format";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

/** Cores por prioridade (categorização por cores). */
const CORES_PRIORIDADE: Record<Produto["prioridade"], string> = {
  alta: "bg-primary/15 text-primary border-primary/30",
  media: "bg-secondary/15 text-secondary border-secondary/30",
  baixa: "bg-muted text-muted-foreground border-border",
};

const ROTULO_PRIORIDADE: Record<Produto["prioridade"], string> = {
  alta: "Alta procura",
  media: "Média procura",
  baixa: "Baixa procura",
};

/** Card de produto com preço, tags e ação de adicionar ao pedido. */
export function ProdutoCard({
  produto,
  onAdicionar,
  quantidade = 0,
}: {
  produto: Produto;
  onAdicionar: (produto: Produto) => void;
  quantidade?: number;
}) {
  const temPromo = typeof produto.precoPromocional === "number";
  const precoFinal = produto.precoPromocional ?? produto.preco;

  return (
    <Card className="group h-full overflow-hidden rounded-3xl border-border bg-card card-hover">
      <CardContent className="flex h-full flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <span aria-hidden className="text-4xl transition-transform group-hover:scale-110">
            {produto.emoji}
          </span>
          <div className="flex flex-wrap justify-end gap-1.5">
            <Badge className="rounded-full border-none gradient-brand text-primary-foreground">
              {produto.tag}
            </Badge>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge
                  variant="outline"
                  className={`rounded-full ${CORES_PRIORIDADE[produto.prioridade]}`}
                >
                  {ROTULO_PRIORIDADE[produto.prioridade]}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>Nível de procura deste item nas lojas</TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold leading-snug">{produto.nome}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {produto.descricao}
          </p>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-2">
          <div>
            {temPromo && (
              <span className="block text-xs text-muted-foreground line-through">
                {formatBRL(produto.preco)}
              </span>
            )}
            <span className="font-display text-2xl font-bold text-foreground">
              {formatBRL(precoFinal)}
            </span>
          </div>
          <Button
            onClick={() => onAdicionar(produto)}
            className="rounded-xl gradient-brand text-primary-foreground shadow-neon transition-transform active:scale-95"
          >
            {quantidade > 0 ? (
              <>
                <Sparkles className="size-4" /> {quantidade} no pedido
              </>
            ) : (
              <>
                <Plus className="size-4" /> Adicionar
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
