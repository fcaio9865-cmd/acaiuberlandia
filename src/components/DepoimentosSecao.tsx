import { Star } from "lucide-react";
import { DEPOIMENTOS } from "@/lib/data";
import { formatDate } from "@/lib/format";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";

/** Depoimentos reais de clientes das lojas. */
export function DepoimentosSecao() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Quem prova, volta
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">O que dizem nossos clientes</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {DEPOIMENTOS.map((dep, i) => (
            <Reveal key={dep.id} delay={i * 100}>
              <Card className="h-full rounded-3xl border-border bg-card card-hover">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <div className="flex gap-0.5" aria-label={`Nota ${dep.nota} de 5`}>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={
                          s < dep.nota
                            ? "size-4 fill-primary text-primary"
                            : "size-4 text-muted-foreground/40"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">“{dep.texto}”</p>
                  <div className="mt-auto">
                    <p className="font-bold">{dep.nome}</p>
                    <p className="text-xs text-muted-foreground">
                      {dep.bairro} · {formatDate(dep.data)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
