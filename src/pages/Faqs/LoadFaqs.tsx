import PageBreadcrumb from "../../components/common/PageBreadcrumb";
import PageMeta from "../../components/common/PageMeta";
import Faqs from "../../components/emndex/Faqs";


export default function LoadFaqs() {
  return (
    <>
      <PageMeta
        title="Emndex solution ltd | FAQs"
        description="Make sure you understand us well, learn more about us wi the this Frequently Asked Questions"
      />
      <PageBreadcrumb title="Frequently Asked Questions" bgImage="url('/assets/img/about/banner-long.jpg')"/>
      <div className="space-y-6">
          <Faqs />
      </div>
    </>
  );
}
