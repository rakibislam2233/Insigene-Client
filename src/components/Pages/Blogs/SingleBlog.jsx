import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState({});
  useEffect(() => {
    axios.get(`https://insigene-server-side.vercel.app/singleBlogs/${id}`).then((res) => {
      setSingleBlog(res.data);
    });
  }, [id]);

  return (
    <div className="w-full h-full pb-36 pt-10 bg-color p-5">
      <Helmet>
        <title>{singleBlog.title}</title>
      </Helmet>
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold">{singleBlog.title}</h2>
        <h3 className="text-2xl py-8">{singleBlog.date}</h3>
        <h3 className="text-xl font-semibold">{singleBlog.descirption}</h3>
      </div>
    </div>
  );
};

export default SingleBlog;
