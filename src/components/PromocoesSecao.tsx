import { PROMOCOES } from "@/lib/data";
import fundoPromocoes from "@/assets/fundo-promocoes.jpg";
import { Reveal } from "@/components/Reveal";
import { PromocaoCard } from "@/components/PromocaoCard";
import { GradeCarregando, EstadoErro, EstadoVazio } from "@/components/EstadosLista";
import { useDadosMock } from "@/hooks/useDadosMock";

/** Módulo "Promoções" com timers de urgência. */
export function PromocoesSecao() {
  const { dados, carregando, erro, recarregar } = useDadosMock(PROMOCOES, 900);

  return (
    <section id="promocoes" className="relative isolate overflow-hidden py-20">
      <img
        src={fundoPromocoes}
        alt="Diversas bolas de gelato e casquinhas sobre fundo rosa"
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-background/80 backdrop-blur-[1px]" aria-hidden />
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
