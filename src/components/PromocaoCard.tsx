import { useEffect, useState } from "react";
import { Copy, Timer } from "lucide-react";
import { toast } from "sonner";
import type { Promocao } from "@/lib/data";
import { formatDate } from "@/lib/format";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/** Calcula o tempo restante até a validade da promoção. */
function useContagemRegressiva(validade: string) {
  const [restante, setRestante] = useState<number | null>(null);

  useEffect(() => {
    const alvo = new Date(`${validade}T23:59:59`).getTime();
    const atualizar = () => setRestante(Math.max(alvo - Date.now(), 0));
    atualizar();
    const id = setInterval(atualizar, 1000);
    return () => clearInterval(id);
  }, [validade]);

  if (restante === null) return null;
  const dias = Math.floor(restante / 86400000);
  const horas = Math.floor((restante % 86400000) / 3600000);
  const min = Math.floor((restante % 3600000) / 60000);
  const seg = Math.floor((restante % 60000) / 1000);
  return { dias, horas, min, seg, expirado: restante === 0 };
}

/** Card de promoção com timer de urgência e cópia de cupom. */
export function PromocaoCard({ promocao }: { promocao: Promocao }) {
  const tempo = useContagemRegressiva(promocao.validade);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(promocao.cupom);
      toast.success(`Cupom ${promocao.cupom} copiado!`, {
        description: "Envie o código no WhatsApp para aplicar o desconto.",
      });
    } catch {
      toast.error("Não foi possível copiar o cupom", {
        description: `Anote o código: ${promocao.cupom}`,
      });
    }
  };

  return (
    <Card className="h-full rounded-3xl border-border bg-card card-hover">
      <CardContent className="flex h-full flex-col gap-4 p-6">
        <Badge className="w-fit rounded-full border-none bg-secondary text-secondary-foreground">
          {promocao.desconto}% OFF
        </Badge>
        <h3 className="text-xl font-bold">{promocao.titulo}</h3>
        <p className="text-sm text-muted-foreground">{promocao.descricao}</p>

        <div className="rounded-2xl bg-muted/70 p-4">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <Timer className="size-4" /> Termina em
          </p>
          <p className="mt-2 font-display text-xl font-bold tabular-nums" aria-live="polite">
            {!tempo
              ? "—"
              : tempo.expirado
                ? "Promoção encerrada"
                : `${tempo.dias}d ${String(tempo.horas).padStart(2, "0")}h ${String(tempo.min).padStart(2, "0")}m ${String(tempo.seg).padStart(2, "0")}s`}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Válido até {formatDate(promocao.validade)}
          </p>
        </div>

        <Button variant="outline" className="mt-auto rounded-xl" onClick={copiar}>
          <Copy className="size-4" /> Copiar cupom {promocao.cupom}
        </Button>
      </CardContent>
    </Card>
  );
}
