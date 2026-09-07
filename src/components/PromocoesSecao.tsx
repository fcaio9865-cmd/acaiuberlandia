import { PROMOCOES } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { PromocaoCard } from "@/components/PromocaoCard";
import { GradeCarregando, EstadoErro, EstadoVazio } from "@/components/EstadosLista";
import { useDadosMock } from "@/hooks/useDadosMock";

/** Módulo "Promoções" com timers de urgência. */
export function PromocoesSecao() {
  const { dados, carregando, erro, recarregar } = useDadosMock(PROMOCOES, 900);

  return (
    <section id="promocoes" className="gradient-soft py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Aproveite agora
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Promoções da semana</h2>
          <p className="mt-4 text-muted-foreground">
            Cupons válidos para retirada nas lojas e pedidos pelo WhatsApp.
          </p>
        </Reveal>

        <div className="mt-12">
          {carregando ? (
            <GradeCarregando itens={3} />
          ) : erro ? (
            <EstadoErro mensagem={erro} onTentarNovamente={recarregar} />
          ) : !dados || dados.length === 0 ? (
            <EstadoVazio
              titulo="Sem promoções ativas"
              descricao="Novas ofertas toda segunda-feira. Volte em breve!"
            />
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {dados.map((p, i) => (
                <Reveal key={p.id} delay={i * 100}>
                  <PromocaoCard promocao={p} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
