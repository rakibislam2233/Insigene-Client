import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-color ">
      <div className="w-full h-0.5 bg-[#00B9FC]"></div>
      <div className="w-full flex justify-center items-center py-16">
        <div className="w-full md:max-w-5xl mx-auto h-full flex flex-col md:flex-row items-center gap-10">
          <h2 className="font-bold text-4xl text-center">
            Schedule your free discovery call here
          </h2>
          <button className="btn-primary text-2xl font-semibold">
            Schedule now
          </button>
        </div>
      </div>
      <div className="w-full h-0.5 bg-[#00B9FC]"></div>
      <div className="w-full max-w-5xl mx-auto py-10">
        <div className="flex flex-col md:flex-row justify-between text-xl gap-10 text-center">
          <h2>
            Contact us at
            <Link className="text-blue-500" to={"/"}>
              info@insigene.com
            </Link>
          </h2>
          <p>
            © 2023 INSiGENe Ltd. Site maintained by
            <Link className="text-blue-500">NFIC Services</Link> |
            <Link className="text-blue-500">Privacy  Policy.</Link>
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
