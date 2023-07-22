import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsFillTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
const ManagBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get(`https://insigene-server-side.vercel.app/getBlogs`).then((res) => {
      console.log(res.data);
      setBlogs(res.data);
    });
  }, []);
  const deletedBlog = (id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be deleted this blog!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://insigene-server-side.vercel.app/deleteBlogs/${id}`)
        .then(res=>{
          if(res.data.deletedCount>0){
            toast.success("Blog deleted successfully")
          }
          const remaining = blogs.filter((dt) => dt._id !== id);
          setBlogs(remaining);
        })
        .catch(err =>{
          console.log(err);
        })
      }
    })
   
  }
  return (
   <>
   {
    blogs.length == 0 ? <div className="w-full h-[90vh] flex justify-center items-center text-xl">No Data Available</div> :  <div className="w-full h-full">
    <h2 className="text-xl font-semibold text-center">Manag Blogs</h2>
    <div className="w-full full">
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className=" text-lg">
            <th>Image</th>
            <th>Title</th>
            <th>PostDate</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="text-lg">
          {blogs.map((blog) => (
            <>
              <tr>
                <td>
                  <img
                    className="w-14 h-14 rounded-full"
                    src={blog.image}
                    alt=""
                  />
                </td>
                <td>
                  <h3>{blog.title}</h3>
                </td>
                <td>{blog.date}</td>
                <th>
                  <button onClick={()=>deletedBlog(blog._id)} className="p-3 bg-rose-500 rounded-full">
                    <BsFillTrashFill className="w-6 h-6 text-white"></BsFillTrashFill>
                  </button>
                </th>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  </div>
   }
   </>
  );
};

export default ManagBlogs;
