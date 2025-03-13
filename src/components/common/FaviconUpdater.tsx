import { useEffect } from "react";
import { useConfig } from "../../context/ConfigProvider";

export default function FaviconUpdater(){
    const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
    const { configurations } = useConfig();
    useEffect(()=>{
        if(configurations?.["system favicon"]){
            const link = document.querySelector("link[rel~='icon']");
            if(link){
                link.href = `${configUrl}/${configurations?.['system favicon']}`;
            }
        }
    },[configurations]);

    return null;
}