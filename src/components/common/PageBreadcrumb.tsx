import { Link} from "react-router";

interface BreacrumbProps {
    title?: string;
    title2?: string;
    title3?: string;
    title4?: string;
    bgImage?: string;

}

const formatTitle = (title: string) => {
  return title
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};
const PageBreadcrumb: React.FC<BreacrumbProps> = ({ title, title2, title3, title4, bgImage }) => {
  return (
    <section
      className="relative bg-cover justify-bottom bg-center py-20 text-center text-white"
      style={{ backgroundImage: `${bgImage}` }}
    >
      <div className="container mx-auto px-6">
        <h1 className={`neon-text-2 text-2xl md:text-4xl  ${title && ('mt-12')}`}>
        {title4 ? (
            formatTitle(title4)
          ) 
          : title3 ? (
            formatTitle(title3)
          ) : title2 ? (
            formatTitle(title2)
          ) : (
            title && formatTitle(title)
          )}
          </h1>
        <div className="light-blue-text flex justify-center space-x-2 mt-4 animate-fadeInRight">
          <Link to="/home" className="hover:text-blue-400 transition">
            <i className="fa fa-home"></i> Home
          </Link>
          {title && (
            <>
            <span>/</span>
          <span><Link to={`/home/${title}`}> {title && formatTitle(title)}</Link></span>
          </>
          )}
          {title2 && (
            <>
            <span>/</span>
            <span><Link to={`/home/${title}/${title2}`}> {title && formatTitle(title2)} </Link></span>

          </>
          )}
          {title3 && (
            <>
            <span>/</span>
            <span><Link to={`/home/${title}/${title2}/${title3}`}> {title && formatTitle(title3)}</Link></span>

          </>
          )}

          {title4 && (
            <>
            <span>/</span>
            <span><Link to={`/home/${title}/${title2}/${title3}/${title4}`}> {title && formatTitle(title4)}</Link></span>

          </>
          )}
          
        </div>
      </div>
    </section>
  );
};

export default PageBreadcrumb;
