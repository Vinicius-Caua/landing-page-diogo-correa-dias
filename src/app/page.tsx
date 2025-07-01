import AboutComponent from "./components/About";
import HeroComponent from "./components/Hero";

export default function Home() {

  return (
    <main>
      <section id="home">
        <HeroComponent />
      </section>
      <section id="sobre">
        <AboutComponent />
      </section>
    </main>
  );
}
