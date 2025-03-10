import PageBreadcrumb from "../../components/common/PageBreadcrumb";
import PageMeta from "../../components/common/PageMeta";
import Services from "../../components/emndex/Services";
import { useConfig } from "../../Profiders/ConfigProvider";


export default function LoadServices() {
  const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
  const config: string | null = useConfig();

  console.log(config["service meta title"]);
  return (
    <>
      <PageMeta
        title={config["service meta title"]}
        description={config["service meta description"]}
      />
      <PageBreadcrumb title="Our Services" bgImage={`url('${configUrl}/${config['service banner']}')`}/>
      <div className="space-y-6">
          <Services />
      </div>
    </>
  );
}
