import PageBreadcrumb from "../../components/common/PageBreadcrumb";
import PageMeta from "../../components/common/PageMeta";
import Portfolio from "../../components/emndex/Portfolio";
import { useConfig } from "../../Profiders/ConfigProvider";


export default function LoadPortfolio() {
  const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
  const { configurations } = useConfig();
  return (
    <>
      <PageMeta
        title={configurations?.['portfolio meta title']}
        description={configurations?.['portfolio meta description']}
      />
      <PageBreadcrumb title="Portfolio" bgImage={`url('${configUrl}/${configurations?.['portfolio banner']}')`}/>
      <div className="">
          <Portfolio />
      </div>
    </>
  );
}
