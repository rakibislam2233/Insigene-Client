import Blog from "./Blog";
import ClientsSaid from "./ClientsSaid";
import Hero from "./Hero";

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <ClientsSaid></ClientsSaid>
           <Blog></Blog>
        </div>
    );
};

export default Home;