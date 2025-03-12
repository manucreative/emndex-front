import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getConfig } from "../apiServices/ApiService";



interface ConfigProps {
  children: ReactNode;
}

interface ConfigData {
    configurations: { [key: string]: string } | null;
    loading: boolean;
}
export const configContext = createContext<ConfigData | null>(null);

export const ConfigProvider: React.FC<ConfigProps> = ({ children }) => {
  const [configurations, setConfigurations] = useState<{ [key: string]: string } | null>(null);
  const [loading, setLoading] = useState(true); // Track loading status

  useEffect(() => {
    getConfig()
      .then((response) => {
        const configData: { [key: string]: string } = {};
        Object.keys(response).forEach((category) => {
          response[category].forEach((config: any) => {
            configData[config.key] = config.value;
          });
        });
        setConfigurations(configData);
      })
      .catch((error) => {
        console.error("There was an issue fetching the Config:", error);
        setConfigurations(null); // Ensures null state when fetch fails
      })
      .finally(() => {
        setLoading(false); // Mark loading as false
      });
  }, []);

  return (
    <configContext.Provider value={{ configurations, loading }}>
      {children}
    </configContext.Provider>
  );
};

export const useConfig = () => {
    const context = useContext(configContext);
    if (!context) {
      throw new Error("useConfig must be used within a ConfigProvider");
    }
    return context;
  };
