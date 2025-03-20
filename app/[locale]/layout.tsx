"use client";
import "@/styles/globals.css";
import NavbarComponent from "@/components/navbar"; // Importing the NavbarComponent

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen bg-[#F1F5F9]">
          <NavbarComponent /> {/* Navbar at the top */}
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}