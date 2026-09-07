import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { toast } from "sonner";
import type { ItemPedido } from "@/hooks/usePedido";
import { whatsappLink } from "@/lib/data";
import { formatBRL } from "@/lib/format";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

type Resumo = {
  subtotal: number;
  total: number;
  economia: number;
  quantidade: number;
  faltaFrete: number;
  progressoFrete: number;
};

/** Calculadora de preços + envio do pedido pelo WhatsApp. */
export function ResumoPedido({
  itens,
  resumo,
  onAdicionar,
  onRemover,
  onLimpar,
  freteGratisA,
}: {
  itens: ItemPedido[];
  resumo: Resumo;
  onAdicionar: (item: ItemPedido) => void;
  onRemover: (id: string) => void;
  onLimpar: () => void;
  freteGratisA: number;
}) {
  const vazio = itens.length === 0;

  const mensagem = [
    "Olá! Quero fazer este pedido na Sorveteria e Açaí Uberlândia:",
    "",
    ...itens.map(
      (i) =>
        `• ${i.quantidade}x ${i.produto.nome} — ${formatBRL(
          (i.produto.precoPromocional ?? i.produto.preco) * i.quantidade,
        )}`,
    ),
    "",
    `Total: ${formatBRL(resumo.total)}`,
  ].join("\n");

  return (
    <Card className="sticky top-24 rounded-3xl border-border bg-card shadow-card">
      <CardContent className="p-6">
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <ShoppingBag className="size-5 text-primary" /> Seu pedido
        </h2>

        {vazio ? (
          <p className="mt-4 rounded-2xl bg-muted/60 p-4 text-sm text-muted-foreground">
            Seu pedido está vazio. Toque em <strong>Adicionar</strong> nos itens do cardápio
            para montar o seu combo.
          </p>
        ) : (
          <>
            <ul className="mt-4 space-y-3">
              {itens.map((item) => (
                <li key={item.produto.id} className="flex items-center gap-3">
                  <span aria-hidden className="text-2xl">
                    {item.produto.emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{item.produto.nome}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatBRL(
                        (item.produto.precoPromocional ?? item.produto.preco) *
                          item.quantidade,
                      )}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      size="icon"
                      variant="outline"
                      className="size-8 rounded-lg"
                      aria-label={`Remover uma unidade de ${item.produto.nome}`}
                      onClick={() => onRemover(item.produto.id)}
                    >
                      <Minus className="size-3.5" />
                    </Button>
                    <span className="w-6 text-center text-sm font-bold tabular-nums">
                      {item.quantidade}
                    </span>
                    <Button
                      size="icon"
                      variant="outline"
                      className="size-8 rounded-lg"
                      aria-label={`Adicionar uma unidade de ${item.produto.nome}`}
                      onClick={() => onAdicionar(item)}
                    >
                      <Plus className="size-3.5" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>

            <Separator className="my-5" />

            <dl className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <dt>Subtotal ({resumo.quantidade} itens)</dt>
                <dd>{formatBRL(resumo.subtotal)}</dd>
              </div>
              {resumo.economia > 0 && (
                <div className="flex justify-between font-semibold text-success">
                  <dt>Descontos aplicados</dt>
                  <dd>-{formatBRL(resumo.economia)}</dd>
                </div>
              )}
              <div className="flex justify-between font-display text-lg font-bold">
                <dt>Total</dt>
                <dd>{formatBRL(resumo.total)}</dd>
              </div>
            </dl>

            <div className="mt-5">
              <Progress value={resumo.progressoFrete} className="h-2" />
              <p className="mt-2 text-xs text-muted-foreground">
                {resumo.faltaFrete > 0
                  ? `Faltam ${formatBRL(resumo.faltaFrete)} para entrega grátis (a partir de ${formatBRL(freteGratisA)}).`
                  : "🎉 Você garantiu entrega grátis em Uberlândia!"}
              </p>
            </div>
          </>
        )}

        <div className="mt-6 space-y-2">
          <Button
            asChild={!vazio}
            disabled={vazio}
            className="w-full rounded-xl gradient-brand text-primary-foreground shadow-neon"
            onClick={() => !vazio && toast.success("Abrindo o WhatsApp com seu pedido…")}
          >
            {vazio ? (
              <span>Adicione itens para pedir</span>
            ) : (
              <a href={whatsappLink(mensagem)} target="_blank" rel="noopener noreferrer">
                Finalizar no WhatsApp
              </a>
            )}
          </Button>
          <Button
            variant="ghost"
            className="w-full rounded-xl text-muted-foreground"
            disabled={vazio}
            onClick={() => {
              onLimpar();
              toast("Pedido limpo", { description: "Todos os itens foram removidos." });
            }}
          >
            <Trash2 className="size-4" /> Limpar tudo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
