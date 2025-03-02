import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import "simplebar-react/dist/simplebar.min.css";
import App from './App.tsx';
import { AppWrapper } from "./components/common/PageMeta.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWrapper>
    <App />
    </AppWrapper>
  </StrictMode>,
)
