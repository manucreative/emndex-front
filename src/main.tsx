import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import "simplebar-react/dist/simplebar.min.css";
import App from './App.tsx';
import { AppWrapper } from "./components/common/PageMeta.tsx";
import { ConfigProvider } from "./context/ConfigProvider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider >
    <AppWrapper>
    <App />
    </AppWrapper>
    </ConfigProvider>
  </StrictMode>,
)
