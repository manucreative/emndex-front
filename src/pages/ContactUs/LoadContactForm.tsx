import PageBreadcrumb from "../../components/common/PageBreadcrumb";
import PageMeta from "../../components/common/PageMeta";
import Contactus from "../../components/emndex/Contactus";


export default function LoadContactForm() {
  return (
    <>
      <PageMeta
        title="Emndex solution ltd | Contact Us"
        description="Take your time to learn more about emndex solution ltd, just fill this contact form"
      />
      <PageBreadcrumb title="Emndex Contact Form" bgImage="url('/assets/img/about/banner-long.jpg')"/>
      <div className="space-y-6">
          <Contactus />
      </div>
    </>
  );
}
