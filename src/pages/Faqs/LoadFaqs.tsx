import PageBreadcrumb from "../../components/common/PageBreadcrumb";
import PageMeta from "../../components/common/PageMeta";
import Faqs from "../../components/emndex/Faqs";
import { useConfig } from "../../context/ConfigProvider";


export default function LoadFaqs() {
const { configurations } = useConfig();
  return (
    <>
      <PageMeta
        title={configurations?.["faqs meta title"]}
        description={configurations?.["faqs meta description"]}
      />
      <PageBreadcrumb title="faqs" bgImage="url('/assets/img/about/banner-long.jpg')"/>
      <div className="space-y-6">
          <Faqs />
      </div>
    </>
  );
}
