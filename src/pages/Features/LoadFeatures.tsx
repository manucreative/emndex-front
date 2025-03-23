import PageBreadcrumb from "../../components/common/PageBreadcrumb";
import PageMeta from "../../components/common/PageMeta";
import Features from "../../components/emndex/Features";
import { useConfig } from "../../context/ConfigProvider";


export default function LoadFeatures() {
  const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
  const { configurations } = useConfig();
  return (
    <>
      <PageMeta
        title={configurations?.['feature meta title']}
        description={configurations?.['feature meta description']}
      />
      <PageBreadcrumb title="features" bgImage={`url('${configUrl}/${configurations?.['feature banner']}')`}/>
      <div className="space-y-6">
          <Features />
      </div>
    </>
  );
}
