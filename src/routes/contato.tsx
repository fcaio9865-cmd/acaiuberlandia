import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { whatsappLink } from "@/lib/data";
import fundoContato from "@/assets/fundo-contato.jpg";
import { LojasSecao } from "@/components/LojasSecao";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e lojas — Sorveteria & Açaí Uberlândia" },
      {
        name: "description",
        content:
          "Fale com a gente pelo WhatsApp, veja endereços e horários das nossas três lojas em Uberlândia — Centro, Santa Mônica e Parque do Sabiá.",
      },
      { property: "og:title", content: "Contato e lojas — Sorveteria & Açaí Uberlândia" },
      {
        property: "og:description",
        content: "Endereços, horários e atendimento por WhatsApp em Uberlândia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContatoPage,
});

const ASSUNTOS = [
  "Pedido para entrega",
  "Encomenda para festa",
  "Elogio ou sugestão",
  "Parceria comercial",
];

function ContatoPage() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [assunto, setAssunto] = useState(ASSUNTOS[0]!);
  const [mensagem, setMensagem] = useState("");

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !mensagem.trim()) {
      toast.error("Preencha seu nome e a mensagem.");
      return;
    }
    const texto = `Olá! Sou ${nome}.\nAssunto: ${assunto}\nTelefone: ${telefone || "não informado"}\n\n${mensagem}`;
    window.open(whatsappLink(texto), "_blank", "noopener,noreferrer");
    toast.success("Abrimos o WhatsApp com sua mensagem pronta.");
  };

  return (
    <main>
      <section className="relative isolate overflow-hidden py-20">
        <img
          src={fundoContato}
          alt="Interior aconchegante da sorveteria com balcão de mármore"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-background/70 backdrop-blur-[2px]" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">Fale com a gente</h1>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/80">
            Respondemos no WhatsApp todos os dias, das 11h às 22h. Encomendas para festas
            precisam de 48 horas de antecedência.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form
              onSubmit={enviar}
              className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="nome">Seu nome</Label>
                  <Input
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Ana Paula"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="telefone">Telefone (opcional)</Label>
                  <Input
                    id="telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="(34) 9 9999-0000"
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-2">
                <Label>Assunto</Label>
                <Select value={assunto} onValueChange={setAssunto}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ASSUNTOS.map((a) => (
                      <SelectItem key={a} value={a}>
                        {a}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-5 grid gap-2">
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea
                  id="mensagem"
                  rows={5}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Conte o que você precisa: sabores, quantidade, data de retirada..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-6 w-full rounded-2xl gradient-brand text-primary-foreground shadow-neon"
              >
                <Send className="size-4" /> Enviar pelo WhatsApp
              </Button>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-secondary/30 bg-card p-8 shadow-card">
              <h2 className="font-display text-2xl font-bold">Prefere falar direto?</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Nosso time atende por WhatsApp no número (34) 9 8765-4321, com entrega em toda
                Uberlândia. Retirada nas lojas sai na hora.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-6 w-full rounded-2xl border-secondary/40 text-secondary"
              >
                <a
                  href={whatsappLink("Olá! Tenho uma dúvida 🍦")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4" /> Abrir conversa
                </a>
              </Button>
              <dl className="mt-8 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Segunda a quinta</dt>
                  <dd className="font-semibold">11h — 22h</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Sexta e sábado</dt>
                  <dd className="font-semibold">11h — 23h30</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Domingo</dt>
                  <dd className="font-semibold">13h — 22h</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <LojasSecao />
    </main>
  );
}
