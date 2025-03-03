import React, { useEffect, useState } from 'react';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Propskills from "./components/Propskills";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Experience from './components/Experience';


function App() {
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        let timer = setTimeout(() => {
            setIsLoading(false);
            return () => clearInterval(timer);
        }, 1000);
    }, []);
    return isLoading ? (
        <Loader />
    ) : (
    <div className="App text-gray-400 body-font">
<Navbar />
<Home />
<About />
<Skills />
<Experience/>
<Projects />
<Contact />
<Footer />
    </div>
  );
}

export default App;