import { useState, useEffect } from "react";

interface UseQueryLiteOptions<T> {
  queryFn: (signal?: AbortSignal) => Promise<T>; // 👈 signal typed
}

export function useQueryLite<T>({ queryFn }: UseQueryLiteOptions<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const result = await queryFn(controller.signal); // 👈 controller.signal is AbortSignal
        setData(result);
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsPending(false);
      }
    })();

    return () => controller.abort();
  }, []);

  return { data, isPending, error };
}
