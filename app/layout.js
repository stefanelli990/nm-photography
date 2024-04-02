import Navbar from "../components/navbar";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor";

export const metadata = {
  title: "Nemanja Photography",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <AnimatedCursor
          innerSize={8}
          outerSize={30}
          innerScale={1}
          outerScale={1.5}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "white",
            mixBlendMode: "exclusion",
          }}
          outerStyle={{
            backgroundColor: "black",
            border: "1px solid white",
            mixBlendMode: "exclusion",
          }}
        />
        {children}
      </body>
    </html>
  );
}
