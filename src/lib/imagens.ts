import pistache from "@/assets/produtos/pistache.jpg";
import morango from "@/assets/produtos/morango.jpg";
import chocolate from "@/assets/produtos/chocolate.jpg";
import limao from "@/assets/produtos/limao.jpg";
import doceLeite from "@/assets/produtos/doce-leite.jpg";
import casquinhaTradicional from "@/assets/produtos/casquinha-tradicional.jpg";
import casquinhaDuo from "@/assets/produtos/casquinha-duo.jpg";
import casquinhaVegana from "@/assets/produtos/casquinha-vegana.jpg";
import casquinhaKids from "@/assets/produtos/casquinha-kids.jpg";
import comboFamilia from "@/assets/produtos/combo-familia.jpg";
import comboDomingo from "@/assets/produtos/combo-domingo.jpg";
import comboCasal from "@/assets/produtos/combo-casal.jpg";
import acaiTradicional from "@/assets/produtos/acai-tradicional.jpg";
import acaiPower from "@/assets/produtos/acai-power.jpg";
import acaiZero from "@/assets/produtos/acai-zero.jpg";
import acaiBarca from "@/assets/produtos/acai-barca.jpg";
import pessego from "@/assets/produtos/pessego.jpg";
import jabuticaba from "@/assets/produtos/jabuticaba.jpg";
import milho from "@/assets/produtos/milho.jpg";

/** Foto profissional de cada item do cardápio, indexada pelo id do produto. */
export const IMAGENS_PRODUTOS: Record<string, string> = {
  "sab-1": pistache,
  "sab-2": morango,
  "sab-3": chocolate,
  "sab-4": limao,
  "sab-5": doceLeite,
  "cas-1": casquinhaTradicional,
  "cas-2": casquinhaDuo,
  "cas-3": casquinhaVegana,
  "cas-4": casquinhaKids,
  "com-1": comboFamilia,
  "com-2": comboDomingo,
  "com-3": comboCasal,
  "aca-1": acaiTradicional,
  "aca-2": acaiPower,
  "aca-3": acaiZero,
  "aca-4": acaiBarca,
  "saz-1": pessego,
  "saz-2": jabuticaba,
  "saz-3": milho,
};

import lojaCentro from "@/assets/lojas/centro.jpg";
import lojaSantaMonica from "@/assets/lojas/santa-monica.jpg";
import lojaParque from "@/assets/lojas/parque.jpg";

/** Foto de cada loja, indexada pelo id. */
export const IMAGENS_LOJAS: Record<string, string> = {
  "loja-1": lojaCentro,
  "loja-2": lojaSantaMonica,
  "loja-3": lojaParque,
};
