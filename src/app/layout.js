import { Montserrat, Mukta} from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";



const mukta = Mukta({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });



export const metadata = {
    title: {
        default: "",
        template: "%s | Elen Nail Studio",
    },
    description: "Created by Elen Nail Studio Next JS",
    icons: {
        icon: "/logo1.png",         // standard favicon
        apple: "/logo1.png", // for iOS home screen
    },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mukta.className}`}>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
