import { useEffect } from "react";

/**
 * Custom hook to handle HTTP requests.
 * @param effectHandler Your everyday useEffect handler.
 * @param deps Dependencies.
 */
export default function useHttpEffect(effectHandler: Function, deps: any[]) {
  useEffect(() => {
    // Create a new AbortController instance for each request.
    const abortController = new AbortController();

    const handler = effectHandler();

    return () => {
      // Cancel the request when the component unmounts.
      abortController.abort();

      // If the handler is a function, call it.
      if (typeof handler === "function") {
        handler();
      }
    };
  }, deps);
}
