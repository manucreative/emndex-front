import PageBreadcrumb from "../../components/common/PageBreadcrumb";
import PageMeta from "../../components/common/PageMeta";
import About from "../../components/emndex/About";
import { useConfig } from "../../Profiders/ConfigProvider";


export default function LoadAboutUs() {
  const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
  const { configurations } = useConfig();
  return (
    <>
      <PageMeta
        title={configurations?.['about meta title']}
        description={configurations?.['about meta description']}
      />
      <PageBreadcrumb title="About Emndex Solution" bgImage={`url('${configUrl}/${configurations?.['about banner']}')`}/>
      <div className="space-y-6">
          <About />
      </div>
    </>
  );
}
