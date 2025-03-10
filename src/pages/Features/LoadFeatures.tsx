import PageBreadcrumb from "../../components/common/PageBreadcrumb";
import PageMeta from "../../components/common/PageMeta";
import Features from "../../components/emndex/Features";
import { useConfig } from "../../Profiders/ConfigProvider";


export default function LoadFeatures() {
  const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
    const config: string | null = useConfig();
  return (
    <>
      <PageMeta
        title={config['feature meta title']}
        description={config['feature meta description']}
      />
      <PageBreadcrumb title="Our Features" bgImage={`url('${configUrl}/${config['feature banner']}')`}/>
      <div className="space-y-6">
          <Features />
      </div>
    </>
  );
}
