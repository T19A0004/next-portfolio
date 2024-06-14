// app/page.tsx
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { Provider } from './Provider';

const Home = () => {
  return (
    <Provider>
      <Header />
      <main>
        <Introduction />
        <About />
        <Projects />
        <Contact />
      </main>
    </Provider>
  );
};

export default Home;
