import "@/styles/globals.css";
import Footer from '@/components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <div className="flex flex-col min-h-screen bg-[#F1F5F9]">
        <main>{children}</main>
        <Footer />
        </div>
      </body>
    </html>
  );
}