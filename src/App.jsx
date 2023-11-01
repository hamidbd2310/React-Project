import Header from "./component/Header";
import Hero from './component/Hero';
import Footer from './component/Footer';
import ContactForm from "./component/ContactForm";
import IfElse from "./component/IfElse";
import IMIF from "./component/IMIF";
import Loop from "./component/Loop";
import LoopMap from "./component/LoopMap";
import ConditionalRendering from "./component/ConditionalRendering";


const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <ContactForm/>
      <Footer/>
      <IfElse/>
      <IMIF/>
      <Loop/>
      <LoopMap/>
      <ConditionalRendering/>
      
    </div>
  );
};

export default App;