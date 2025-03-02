import { Link } from "react-router";

interface BreacrumbProps {
    title?: string;
    title2?: string;
    title3?: string;
    bgImage?: string;

}
const PageBreadcrumb: React.FC<BreacrumbProps> = ({ title, title2, title3, bgImage }) => {
  return (
    <section
      className="relative bg-cover bg-center py-20 text-center text-white"
      style={{ backgroundImage: `${bgImage}` }}
    >
      <div className="container mx-auto px-6">
        <h1 className={`neon-text-2  ${title && ('mt-4')}`}>{title}</h1>
        <div className="light-blue-text flex justify-center space-x-2 mt-4 animate-fadeInRight">
          <Link to="/home" className="hover:text-blue-400 transition">
            <i className="fa fa-home"></i> Home
          </Link>
          {title && (
            <>
            <span>/</span>
          <span>{title}</span>
          </>
          )}
          {title2 && (
            <>
            <span>/</span>
          <span>{title2}</span>
          </>
          )}
          {title3 && (
            <>
            <span>/</span>
          <span>{title3}</span>
          </>
          )}
          
        </div>
      </div>
    </section>
  );
};

export default PageBreadcrumb;
