import { useParams } from "react-router";
import PageBreadcrumb from "../../components/common/PageBreadcrumb";
import PageMeta from "../../components/common/PageMeta";

import { useConfig } from "../../Profiders/ConfigProvider";
import ProjectDetails from "../../components/emndex/ProjectDetails";


export default function LoadProjectDetails() {
  const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
  const { configurations } = useConfig();
  const { slug } = useParams();

  const formattedTitle = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
    : "Project Details";

  return (
    <>
      <PageMeta
        title={`Emndex Solution Ltd | ${slug}`}
        description={configurations?.["service meta description"]}
      />
      <PageBreadcrumb title={`${formattedTitle}`} bgImage={`url('${configUrl}/${configurations?.['service banner']}')`}/>
      <div className="">
          <ProjectDetails />
      </div>
    </>
  );
}
