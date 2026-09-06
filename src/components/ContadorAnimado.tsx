import { useEffect, useRef, useState } from "react";

/** Número que anima de 0 até o valor final quando entra na tela. */
export function ContadorAnimado({
  valor,
  sufixo = "",
  duracao = 1400,
}: {
  valor: number;
  sufixo?: string;
  duracao?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const inicio = performance.now();
      const passo = (agora: number) => {
        const p = Math.min((agora - inicio) / duracao, 1);
        setAtual(Math.round(valor * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(passo);
      };
      requestAnimationFrame(passo);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [valor, duracao]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-gradient-brand">
      {atual.toLocaleString("pt-BR")}
      {sufixo}
    </span>
  );
}
