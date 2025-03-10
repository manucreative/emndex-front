import PageBreadcrumb from "../../components/common/PageBreadcrumb";
import PageMeta from "../../components/common/PageMeta";
import Contactus from "../../components/emndex/Contactus";
import { useConfig } from "../../Profiders/ConfigProvider";


export default function LoadContactForm() {
      const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
      const config: string | null = useConfig();
  return (
    <>
      <PageMeta
        title={config['contact meta title']}
        description={config['contact meta title']}
      />
      <PageBreadcrumb title="Emndex Contact Form" bgImage={`url('${configUrl}/${config['contact banner']}')`}/>
      <div className="space-y-6">
          <Contactus />
      </div>
    </>
  );
}
