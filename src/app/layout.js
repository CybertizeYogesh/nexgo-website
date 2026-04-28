import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata = {
  title: "NexGo Packers and Movers | Safe & Fast Relocation",
  description: "Professional packing and moving services for safe and fast relocation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}