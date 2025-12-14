import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

export function Layout({ children, hideFooter = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
