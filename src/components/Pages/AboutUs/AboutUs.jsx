

const AboutUs = () => {
    return (
        <div className="w-full max-w-5xl mx-auto h-full p-5">
        <h2 className="mt-12 text-5xl font-bold">Our story</h2>
        <div className="mb-8 md:flex justify-between items-center gap-5">
            <div className="w-full md:w-[60%]">
                <p className="mt-8 text-xl">After working in academia for many years, Anthony Bosco, Denise Anderson, Edgar Basto, and James Read were interested in combining the exciting discovery research performed in academia with a more agile, focused, and flexible way of working that is provided by a startup company. They approached Nick Bosco with a proposal to build a company that was designed by researchers to provide support for other researchers. </p>
                <p className="text-xl mt-6">Our mission is to provide innovative bioinformatics solutions and technologies that are scalable and obtain a much deeper understanding of disease. We aim to build long-term relationships with our customers that are focused on delivering high impact, interdisciplinary science. In parallel, we want to create career opportunities for talented data scientists that are flexible and rewarding, and underpinned by a culture of innovation, creativity, and continual learning.</p>
            </div>
            <div className="w-full md:w-[40%]">
                <img className="w-96" src="https://insigene.com/wp-content/uploads/2023/05/Logo_AboutUs.svg" alt="" />
            </div>
        </div>
       </div>
    );
};

export default AboutUs;