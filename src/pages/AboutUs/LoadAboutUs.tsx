import PageBreadcrumb from "../../components/common/PageBreadcrumb";
import PageMeta from "../../components/common/PageMeta";
import About from "../../components/emndex/About";


export default function LoadAboutUs() {
  return (
    <>
      <PageMeta
        title="Emndex solution ltd | About Us"
        description="Take your time to learn more about emndex solution ltd, Ecplore our services"
      />
      <PageBreadcrumb title="About Emndex Solution" bgImage="url('/assets/img/about/banner-long.jpg')"/>
      <div className="space-y-6">
          <About />
      </div>
    </>
  );
}
