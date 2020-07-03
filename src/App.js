import React, { Component } from 'react';
import { GlobalStyle } from "./styles";
import Hero from './components/Hero';
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <Hero />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </>
        );
    }
}

export default App;
