import { Helmet } from "react-helmet";
import Blogs from "../Blogs/Blogs";
import ClientsSaid from "./ClientsSaid";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - INSiGENe</title>
      </Helmet>
      <Hero></Hero>
      <ClientsSaid></ClientsSaid>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
