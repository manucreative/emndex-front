// import PageBreadcrumb from "../../components/common/PageBreadcrumb";
import PageMeta from "../../components/common/PageMeta";
import Home from "../../components/emndex/Home";
import { useConfig } from "../../context/ConfigProvider";

export default function HomeLouncher() {
// const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
      const { configurations } = useConfig();
  
  return (
    <>
      <PageMeta
        title={configurations?.['home meta title']}
        description={configurations?.['home meta description']}
      />
      {/* <PageBreadcrumb bgImage={`url('${configUrl}/${configurations?.['home banner']}')`}/> */}
      <div className="space-y-6">
          <Home/>
      </div>
    </>
  );
}
