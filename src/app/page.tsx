import AboutComponent from "./components/About";
import BooksComponent from "./components/Books";
import ContactComponent from "./components/Contact";
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
      <section id="livros">
        <BooksComponent />
      </section>
      <section id="contato">
        <ContactComponent />
      </section>
    </main>
  );
}
