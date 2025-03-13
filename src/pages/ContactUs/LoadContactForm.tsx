import PageBreadcrumb from "../../components/common/PageBreadcrumb";
import PageMeta from "../../components/common/PageMeta";
import Contactus from "../../components/emndex/Contactus";
import { useConfig } from "../../context/ConfigProvider";


export default function LoadContactForm() {
      const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
      const { configurations } = useConfig();
  return (
    <>
      <PageMeta
        title={configurations?.['contact meta title']}
        description={configurations?.['contact meta title']}
      />
      <PageBreadcrumb title="Emndex Contact Form" bgImage={`url('${configUrl}/${configurations?.['contact banner']}')`}/>
      <div className="space-y-6">
          <Contactus />
      </div>
    </>
  );
}
