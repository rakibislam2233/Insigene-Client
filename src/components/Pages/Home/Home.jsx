
import Blogs from "../Blogs/Blogs";
import ClientsSaid from "./ClientsSaid";
import Hero from "./Hero";

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <ClientsSaid></ClientsSaid>
           <Blogs></Blogs>
        </div>
    );
};

export default Home;