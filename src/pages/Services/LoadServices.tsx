import PageBreadcrumb from "../../components/common/PageBreadcrumb";
import PageMeta from "../../components/common/PageMeta";
import Services from "../../components/emndex/Services";


export default function LoadServices() {

  return (
    <>
      <PageMeta
        title="Emndex solution ltd | Our Services"
        description="Emndex Solution Limited Provides the best tech Solution to companies around the world"
      />
      <PageBreadcrumb title="Our Services" bgImage="url('/assets/img/about/banner-long.jpg')"/>
      <div className="space-y-6">
          <Services />
      </div>
    </>
  );
}
