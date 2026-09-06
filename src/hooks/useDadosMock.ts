import { useCallback, useEffect, useState } from "react";
import { fetchMock } from "@/lib/data";

/**
 * Carrega dados simulados com estados de carregamento, erro e recarga.
 * Serve para exercitar os três estados exigidos em cada módulo.
 */
export function useDadosMock<T>(dados: T, delay = 700) {
  const [resultado, setResultado] = useState<T | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const carregar = useCallback(
    (falhar = false) => {
      setCarregando(true);
      setErro(null);
      fetchMock(dados, { falhar, delay })
        .then((r) => setResultado(r))
        .catch((e: Error) => setErro(e.message))
        .finally(() => setCarregando(false));
    },
    [dados, delay],
  );

  useEffect(() => {
    carregar(false);
  }, [carregar]);

  return { dados: resultado, carregando, erro, recarregar: () => carregar(false) };
}
