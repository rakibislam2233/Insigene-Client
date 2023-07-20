import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsFillTrashFill } from "react-icons/bs";
const ManagBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/getBlogs`).then((res) => {
      console.log(res.data);
      setBlogs(res.data);
    });
  }, []);
  const deletedBlog = (id)=>{
    axios.delete(`http://localhost:5000/deleteBlogs/${id}`)
    .then(res=>{
      console.log(res.data.deletedCount);
      if(res.data.deletedCount>0){
        console.log("Rakib");
        toast.success("Blog deleted successfully")
      }
      const remaining = blogs.filter((dt) => dt._id !== id);
      setBlogs(remaining);
    })
    .catch(err =>{
      console.log(err.meassage);
    })
  }
  return (
   <>
   {
    blogs.length == 0 ? <div className="w-full h-screen bg-color flex justify-center items-center text-xl">No Data Available</div> :  <div className="w-full h-full">
    <h2 className="text-xl font-semibold text-center">Manag Blogs</h2>
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-sm text-white">
            <th>Image</th>
            <th>Title</th>
            <th>Date</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <>
              <tr>
                <td>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={blog.image}
                    alt=""
                  />
                </td>
                <td>
                  <h3>{blog.title}</h3>
                </td>
                <td>{blog.date}</td>
                <th>
                  <button onClick={()=>deletedBlog(blog._id)} className="btn btn-ghost btn-xs">
                    <BsFillTrashFill className="w-6 h-6 text-rose-500"></BsFillTrashFill>
                  </button>
                </th>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  </div>
   }
   </>
  );
};

export default ManagBlogs;
