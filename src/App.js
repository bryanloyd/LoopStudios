import Creations from "./components/CreationsComponent";
import Footer from "./components/FooterComponent";
import Header from "./components/HeaderComponent";
import Interactive from "./components/InteractiveComponent";
import Showcase from "./components/ShowcaseComponent";

const App = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <Interactive />
      <Creations />
      <Footer />
    </div>
  );
};

export default App;
