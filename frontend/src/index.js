import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {ThemeProvider} from "react-bootstrap";

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(
    <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
    >
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ThemeProvider>
);