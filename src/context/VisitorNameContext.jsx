import { createContext, useContext, useMemo, useState } from "react";

const VisitorNameContext = createContext(null);

/**
 * Holds the nickname collected by the intro flow. Deliberately in-memory
 * only (no localStorage/sessionStorage) so it resets on every fresh visit,
 * matching the intro itself replaying every time.
 */
export function VisitorNameProvider({ children }) {
  const [visitorName, setVisitorName] = useState("");
  const value = useMemo(() => ({ visitorName, setVisitorName }), [visitorName]);
  return <VisitorNameContext.Provider value={value}>{children}</VisitorNameContext.Provider>;
}

export function useVisitorName() {
  const ctx = useContext(VisitorNameContext);
  if (!ctx) throw new Error("useVisitorName must be used within a VisitorNameProvider");
  return ctx;
}
