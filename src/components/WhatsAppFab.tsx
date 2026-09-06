import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/data";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

/** Botão flutuante de contato rápido pelo WhatsApp. */
export function WhatsAppFab() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={whatsappLink("Olá! Quero fazer um pedido na Sorveteria Artesanal 🍦")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pedir pelo WhatsApp"
          className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full gradient-brand text-primary-foreground shadow-neon transition-transform hover:scale-110 active:scale-95"
        >
          <MessageCircle className="size-7" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="left">Pedir pelo WhatsApp</TooltipContent>
    </Tooltip>
  );
}
