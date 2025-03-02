import PageBreadcrumb from "../../components/common/PageBreadcrumb";
import PageMeta from "../../components/common/PageMeta";
import Features from "../../components/emndex/Features";


export default function LoadFeatures() {
  return (
    <>
      <PageMeta
        title="Emndex solution ltd | Our Features"
        description="Emndex Solution Limited Provides the best tech Features to meet your company needs"
      />
      <PageBreadcrumb title="Our Features" bgImage="url('/assets/img/about/banner-long.jpg')"/>
      <div className="space-y-6">
          <Features />
      </div>
    </>
  );
}
