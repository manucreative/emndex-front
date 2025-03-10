import { useEffect } from "react";
import { useConfig } from "../../Profiders/ConfigProvider";

export default function FaviconUpdater(){
    const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
    const config = useConfig();
    useEffect(()=>{
        if(config["system favicon"]){
            const link = document.querySelector("link[rel~='icon']");
            if(link){
                link.href = `${configUrl}/${config['system favicon']}`;
            }
        }
    },[config]);

    return null;
}