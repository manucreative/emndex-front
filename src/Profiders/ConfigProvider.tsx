/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getConfig } from "../apiServices/ApiService";

export const configContext = createContext<ConfigData>({})

interface ConfigProps{
    children: ReactNode;
}

interface ConfigData {
    [key: string]: string;
  }

 export const ConfigProvider: React.FC<ConfigProps> = ({children}) =>{
    const [configurations, setConfigurations] = useState({});

    useEffect(()=>{
        getConfig()
        .then((response)=>{
            const configData: ConfigData = {};
            Object.keys(response).forEach((category)=>{
                response[category].map((config: any)=>{
                    configData[config.key] = config.value;
                });
            });
            setConfigurations(configData);
        })
        .catch((error)=>{
            console.error("There was an issue fetching the Config:", error);
        })
    },[]);

    return (
        <configContext.Provider value={configurations}>
            {children}
        </configContext.Provider>
    );
 };

 export const useConfig = () => useContext(configContext);