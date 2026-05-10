import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TR Motors — Performance X Detailing",
  description: "Taller de detailing premium en Montevideo. Lavado, pulido, coating cerámico y más. Reservá tu turno online.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
