import Header from '../components/Header';
import Introduction from '../components/Introduction';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Introduction />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
