import Header from '../components/Header';
import About from '../components/About';
import CurrentEvent from '../components/CurrentEvent';
import Offers from '../components/Offers';
import Quote from '../components/Quote';
import SectionDivider from '../components/SectionDivider';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <SectionDivider />
      <About />
      <SectionDivider />
      <CurrentEvent />
      <SectionDivider />
      <Offers />
      <SectionDivider />
      <Quote />
    </>
  );
};

export default Home; 