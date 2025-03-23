import { useParams } from "react-router";
import PageBreadcrumb from "../../components/common/PageBreadcrumb";
import PageMeta from "../../components/common/PageMeta";
import Portfolio from "../../components/emndex/Portfolio";
import { useConfig } from "../../context/ConfigProvider";
import ResumeDetails from "../../components/emndex/ResumeDetails";


export default function LoadResumeDetails() {
  const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
  const { configurations } = useConfig();
  const { slug } = useParams();

  // const formattedTitle = slug
  //   ? slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
  //   : "Resume Details";

  return (
    <>
      <PageMeta
        title={`Emndex Solution Ltd | ${slug}`}
        description={configurations?.["service meta description"]}
      />
      <PageBreadcrumb title="team" title2={`${slug}`} bgImage={`url('${configUrl}/${configurations?.['service banner']}')`}/>
      <div className="">
          <ResumeDetails />
      </div>
    </>
  );
}
