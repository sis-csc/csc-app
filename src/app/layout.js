// layout: 하위 page.js들에게 공통적으로 적용됨. 보통 header, footer를 많이 정의

import "./globals.css";
import { Cabin } from "next/font/google";
import Footer from "../components/Footer/Footer";
import SWRConfigContext from "../context/SWRConfigContext";
import Header from "../components/Header/Header";

// global font 설정: next/font 활용하기, Google Variable Fonts
const cabin = Cabin({ subsets: ["latin"] });

export const metadata = {
  title: "SIS Community Service Club",
  description: "Official Website of SIS Community Service Club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cabin.className}>
      <body className="flex flex-col max-w-screen-[1440px] w-full overflow-auto">
        {/* z-index: 컴포넌트들이 겹칠때 어떤 것이 앞으로 가는지, 숫자가 클수록 앞으로 */}
        {/* max-w-screen-? mx-auto: Responsive Design을 위해서 앱의 컨텐츠 양쪽에 공백주기 */}
        <header className="top-0 z-10">
          <div className="max-w-screen-2xl mx-auto">
            <Header />
          </div>
        </header>
        <main className="w-full max-w-screen-lg mx-auto grow">
          <SWRConfigContext>{children}</SWRConfigContext>
        </main>
        <footer className="w-full bottom-0">
          <div className="mx-auto">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}
