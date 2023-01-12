import Card from "./card/card";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import Slider from "./slider/slider";

type componentLayout = {
  children: React.ReactNode;
};

export default function Layout({ children }: componentLayout) {
  return (
    <>
      <Navbar />
      <Slider />
      <Card />
      <main>{children}</main>
      <Footer />
    </>
  );
}
