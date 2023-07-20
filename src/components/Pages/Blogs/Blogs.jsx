import axios from "axios";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/getBlogs`).then((res) => {
      console.log(res.data);
      setBlogs(res.data);
    });
  }, []);
  return (
    <div className="w-full h-full pb-52 pt-10 bg-color p-5">
      <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold">Blogs</h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 py-5">
          {blogs.map((blog) => (
            <>
              <div className="flex justify-center bg-color rounded-xl">
                <div className=" shadow-lg  overflow-hidden">
                  <img
                    className="w-full  object-cover object-center rounded-xl"
                    src={blog.image}
                    alt="Card Image"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                    <p className="text-blue-500">{blog.date} | Blog</p>
                    <p className="mb-4 text-lg">
                      {blog.descirption.slice(0, 150)} ....
                    </p>
                    <a
                      href="#"
                      className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
