import { AlertTriangle, IceCreamCone, Loader2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

/** Esqueleto de carregamento em grade. */
export function GradeCarregando({ itens = 3 }: { itens?: number }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <span className="sr-only">Carregando itens…</span>
      {Array.from({ length: itens }).map((_, i) => (
        <div key={i} className="rounded-3xl border border-border bg-card p-6 shadow-card">
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="mt-4 h-6 w-3/4" />
          <Skeleton className="mt-3 h-4 w-full" />
          <Skeleton className="mt-2 h-4 w-2/3" />
          <Skeleton className="mt-6 h-10 w-full rounded-xl" />
        </div>
      ))}
    </div>
  );
}

/** Estado vazio amigável. */
export function EstadoVazio({
  titulo = "Nenhum item por aqui",
  descricao = "Ajuste os filtros ou tente outra busca para ver mais opções.",
  acao,
}: {
  titulo?: string;
  descricao?: string;
  acao?: { label: string; onClick: () => void };
}) {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-dashed border-border bg-muted/40 px-6 py-16 text-center">
      <IceCreamCone className="size-10 text-primary" />
      <h3 className="mt-4 text-lg font-bold">{titulo}</h3>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">{descricao}</p>
      {acao && (
        <Button variant="outline" className="mt-6" onClick={acao.onClick}>
          <RotateCcw className="size-4" /> {acao.label}
        </Button>
      )}
    </div>
  );
}

/** Estado de erro com opção de tentar novamente. */
export function EstadoErro({
  mensagem,
  onTentarNovamente,
  carregando = false,
}: {
  mensagem: string;
  onTentarNovamente: () => void;
  carregando?: boolean;
}) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center rounded-3xl border border-destructive/30 bg-destructive/5 px-6 py-14 text-center"
    >
      <AlertTriangle className="size-10 text-destructive" />
      <h3 className="mt-4 text-lg font-bold">Algo deu errado</h3>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">{mensagem}</p>
      <Button className="mt-6" onClick={onTentarNovamente} disabled={carregando}>
        {carregando ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <RotateCcw className="size-4" />
        )}
        Tentar novamente
      </Button>
    </div>
  );
}
