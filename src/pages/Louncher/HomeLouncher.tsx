import PageBreadcrumb from "../../components/common/PageBreadcrumb";
import PageMeta from "../../components/common/PageMeta";
import Home from "../../components/emndex/Home";
import { useConfig } from "../../Profiders/ConfigProvider";

export default function HomeLouncher() {
const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
      const config: string | null = useConfig();
  
  return (
    <>
      <PageMeta
        title={config['home meta title']}
        description={config['home meta description']}
      />
      <PageBreadcrumb bgImage={`url('${configUrl}/${config['home banner']}')`}/>
      <div className="space-y-6">
          <Home/>
      </div>
    </>
  );
}
