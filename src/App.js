import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import GlobalStyle from './globalStyles';
import { Switch, Route } from 'react-router-dom';
import About from "./pages/About";
import Viz from "./pages/Visualisation";
import Settings from "./components/Settings";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import SearchResults from "./pages/SearchResults";

const LightTheme = {
    pageBackground: "white",
    titleColor: "#dc658b",
    tagLineColor: "black"
};

const DarkTheme = {
    pageBackground: "#282c36",
    titleColor: "lightpink",
    tagLineColor: "lavender"
}

const themes = {
    light: LightTheme,
    dark: DarkTheme,
}


function App() {
    const [theme, setTheme] = useState("light")
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Switch>
                <Route path = "/" exact component={Home} />
                {/* <Route path = "/privacy"  component={Privacy} /> */}
                <Route path = "/results"  component={SearchResults} />
                <Route path = "/about"  component={About} />
                <Route path = "/viz"  component={Viz} />
                <Route path = "/settings"  component={Settings} >
                    <ThemeProvider theme={themes[theme]}>
                        <Settings theme={theme} setTheme={setTheme} />
                    </ThemeProvider>
                </Route>
            </Switch>
        </>  
    );
}

export default App;
