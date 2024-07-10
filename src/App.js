import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Ideas from "./Components/Ideas/Ideas";
import Navbar from "./Components/Navbar/Navbar";
import Number from "./Components/Number/Number";
import Services from "./Components/Services/Services";
import Work from "./Components/Work/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Number />
      <Ideas />
      <Services />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
