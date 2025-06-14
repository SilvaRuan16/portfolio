import { ContainerTypes } from "../types/ContainerTypes";

export default function Screen({ children, className } : ContainerTypes) {
  return (
    <main className={`w-full min-h-screen h-auto flex ${className}`}>
      {children}
    </main>
  );
}