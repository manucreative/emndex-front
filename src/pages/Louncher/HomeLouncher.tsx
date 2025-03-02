import PageBreadcrumb from "../../components/common/PageBreadcrumb";
import PageMeta from "../../components/common/PageMeta";
import Home from "../../components/emndex/Home";

export default function HomeLouncher() {

//   const navigate = useNavigate();
//   const location = useLocation();
//   const successMessage = location.state?.successMessage;
  return (
    <>
      <PageMeta
        title="Emndex solution ltd | Home"
        description="Emndex Solution Limited is the best tech Solution to your company, you should try us"
      />
      <PageBreadcrumb bgImage="url('/assets/img/about/banner-long.jpg')"/>
      <div className="space-y-6">
          <Home/>
      </div>
    </>
  );
}
