// import { useParams } from "react-router";
import PageBreadcrumb from "../../components/common/PageBreadcrumb";
import PageMeta from "../../components/common/PageMeta";
// import Portfolio from "../../components/emndex/Portfolio";
import { useConfig } from "../../context/ConfigProvider";
// import ResumeDetails from "../../components/emndex/ResumeDetails";
import TeamMembers from "../../components/emndex/TeamMembers";


export default function LoadTeamMembers() {
  const configUrl: string = import.meta.env.VITE_API_CONFIG_URL;
  const { configurations } = useConfig();
  // const { slug } = useParams();

  // const formattedTitle = slug
  //   ? slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
  //   : "Resume Details";

  return (
    <>
      <PageMeta
        title={configurations?.["team meta title"]}
        description={configurations?.["team meta description"]}
      />
      <PageBreadcrumb title="team" bgImage={`url('${configUrl}/${configurations?.['service banner']}')`}/>
      <div className="">
          <TeamMembers />
      </div>
    </>
  );
}
