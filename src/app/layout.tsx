//this is the compiled css file that will give the app it's styles
import MainContainer from "@/components/MainContainer";
import "../styles/CompiledCss/index.css"

//include title for the app
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Grandma's House",
};

//get the fonts for the app
import { Karla, Lato, Luckiest_Guy } from "next/font/google";
const karla = Karla({ subsets: ['latin'] });
const lato = Lato({ weight: ['100','300','400','700','900'] , subsets: ['latin']});
const luckyGuy = Luckiest_Guy({ weight: '400', subsets: ['latin'], style: 'normal'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karla.className} ${lato.className} ${luckyGuy.className}`}>
        <MainContainer>
          {children}
        </MainContainer>
      </body>
    </html>
  );
}
