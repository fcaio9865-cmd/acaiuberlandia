import { useCallback, useEffect, useMemo, useState } from "react";
import type { Produto } from "@/lib/data";

export type ItemPedido = { produto: Produto; quantidade: number };

const CHAVE = "sorveteria-pedido";
const FRETE_GRATIS_A_PARTIR_DE = 80;

/** Carrinho simples persistido em localStorage + calculadora de preços. */
export function usePedido() {
  const [itens, setItens] = useState<ItemPedido[]>([]);
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    try {
      const salvo = localStorage.getItem(CHAVE);
      if (salvo) setItens(JSON.parse(salvo) as ItemPedido[]);
    } catch {
      /* dados corrompidos são ignorados */
    }
    setPronto(true);
  }, []);

  useEffect(() => {
    if (pronto) localStorage.setItem(CHAVE, JSON.stringify(itens));
  }, [itens, pronto]);

  const adicionar = useCallback((produto: Produto) => {
    setItens((atual) => {
      const existente = atual.find((i) => i.produto.id === produto.id);
      if (existente) {
        return atual.map((i) =>
          i.produto.id === produto.id ? { ...i, quantidade: i.quantidade + 1 } : i,
        );
      }
      return [...atual, { produto, quantidade: 1 }];
    });
  }, []);

  const remover = useCallback((id: string) => {
    setItens((atual) =>
      atual
        .map((i) => (i.produto.id === id ? { ...i, quantidade: i.quantidade - 1 } : i))
        .filter((i) => i.quantidade > 0),
    );
  }, []);

  const limpar = useCallback(() => setItens([]), []);

  const resumo = useMemo(() => {
    const subtotal = itens.reduce((t, i) => t + i.produto.preco * i.quantidade, 0);
    const total = itens.reduce(
      (t, i) => t + (i.produto.precoPromocional ?? i.produto.preco) * i.quantidade,
      0,
    );
    const economia = subtotal - total;
    const quantidade = itens.reduce((t, i) => t + i.quantidade, 0);
    const faltaFrete = Math.max(FRETE_GRATIS_A_PARTIR_DE - total, 0);
    const progressoFrete = Math.min(
      Math.round((total / FRETE_GRATIS_A_PARTIR_DE) * 100),
      100,
    );
    return { subtotal, total, economia, quantidade, faltaFrete, progressoFrete };
  }, [itens]);

  return { itens, adicionar, remover, limpar, resumo, pronto, FRETE_GRATIS_A_PARTIR_DE };
}
