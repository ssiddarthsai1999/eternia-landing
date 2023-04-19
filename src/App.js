import "./App.css";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Navbar/Nav";
import Services from "./components/Services/Services";
import Information from "./components/Information/Information";
import blobred from "../src/assets/blobred.png";
import circle2 from "../src/assets/circle2.png";
import About from "./components/About/About";

function App() {
    return (
        <div className=" antialiased  relative overflow-hidden">
            <div className="z-0 ">
        
                <img
                    alt="blob"
                    className="absolute top-[500px] left-[1000px] "
                    src={circle2}
                />
            </div>
            <div className=" ">
                <div className="md:mb-[80px] ">
                    <Nav />
                </div>
                <div className="md:mb-[10px]">
                    <Home />
                </div>
                <div className="md:mb-[80px]">
                    <Information />
                </div>
                <div>
                    <About />
                </div>

                <div className="md:mt-[200px]">
                    <Services />
                </div>

                <div className="md:mb-[80px]">
                    <Contact />
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default App;
