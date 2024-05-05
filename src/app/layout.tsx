//components
import MainContainer from "@/components/MainContainer";
import Navbar from "@/components/Navbar";
import MainContextWrapper from "@/contexts/MainContext";

//this is the compiled css file that will give the app it's styles
import "../styles/CompiledCss/index.css"

//include title for the app
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Grandma's House",
};

//get the fonts for the app
import { Karla, Lato, Luckiest_Guy } from "next/font/google";
import LinkList from "@/components/LinkList";
const karla = Karla({ subsets: ['latin'] , variable:"--font-karla"});
const lato = Lato({ weight: ['100','300','400','700','900'] , subsets: ['latin'], variable:"--font-lato"});
const luckyGuy = Luckiest_Guy({ weight: '400', subsets: ['latin'], style: 'normal',variable: "--font-luckyGuy"});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karla.variable} ${lato.variable} ${luckyGuy.variable}`}>
        <MainContextWrapper>
          <MainContainer>
            <Navbar/>
            {children}
          </MainContainer>
          <LinkList/>
        </MainContextWrapper>
      </body>
    </html>
  );
}
