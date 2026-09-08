import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { LOJAS } from "@/lib/data";
import { IMAGENS_LOJAS } from "@/lib/imagens";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { GradeCarregando, EstadoErro, EstadoVazio } from "@/components/EstadosLista";
import { useDadosMock } from "@/hooks/useDadosMock";

/** Módulo "Localização lojas" com estados de carregamento, vazio e erro. */
export function LojasSecao() {
  const { dados, carregando, erro, recarregar } = useDadosMock(LOJAS, 800);

  return (
    <section id="lojas" className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">
            Onde nos encontrar
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Nossas lojas em Uberlândia</h2>
          <p className="mt-4 text-muted-foreground">
            Três endereços para matar a vontade — e entrega em toda a cidade pelo WhatsApp.
          </p>
        </Reveal>

        <div className="mt-12">
          {carregando ? (
            <GradeCarregando itens={3} />
          ) : erro ? (
            <EstadoErro mensagem={erro} onTentarNovamente={recarregar} />
          ) : !dados || dados.length === 0 ? (
            <EstadoVazio
              titulo="Nenhuma loja cadastrada"
              descricao="Em breve novos endereços em Uberlândia."
            />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {dados.map((loja, i) => (
                <Reveal key={loja.id} delay={i * 90}>
                  <Card className="group flex h-full flex-col overflow-hidden rounded-3xl border-border bg-card p-0 card-hover">
                    {IMAGENS_LOJAS[loja.id] && (
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={IMAGENS_LOJAS[loja.id]}
                          alt={`Fachada da ${loja.nome}`}
                          loading="lazy"
                          width={1024}
                          height={768}
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <CardContent className="flex flex-1 flex-col gap-3 p-6">
                      <h3 className="text-lg font-bold">{loja.nome}</h3>
                      <p className="flex items-start gap-2 text-sm text-muted-foreground">
                        <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                        {loja.endereco} — {loja.bairro}, {loja.cidade}
                      </p>
                      <p className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="size-4 shrink-0 text-primary" /> {loja.horario}
                      </p>
                      <p className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="size-4 shrink-0 text-primary" /> {loja.telefone}
                      </p>
                      <Button asChild variant="outline" className="mt-auto rounded-xl">
                        <a href={loja.mapa} target="_blank" rel="noopener noreferrer">
                          <Navigation className="size-4" /> Como chegar
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
