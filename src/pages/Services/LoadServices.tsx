import PageBreadcrumb from "../../components/common/PageBreadcrumb";
import PageMeta from "../../components/common/PageMeta";
import Services from "../../components/emndex/Services";
import { useConfig } from "../../context/ConfigProvider";


export default function LoadServices() {
  const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
  const { configurations } = useConfig();

  return (
    <>
      <PageMeta
        title={configurations?.["service meta title"]}
        description={configurations?.["service meta description"]}
      />
      <PageBreadcrumb title="services" bgImage={`url('${configUrl}/${configurations?.['service banner']}')`}/>
      <div className="space-y-6">
          <Services />
      </div>
    </>
  );
}
