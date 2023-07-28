import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { AiOutlinePlus } from "react-icons/ai";
import moment from "moment/moment";

const AddBlogs = () => {
  const date =  moment().format('MMMM DD, YYYY'); 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    axios.post(url, formData).then((res) => {
      const imageUrl = res.data.data.display_url;
      const {
        blogTitle,
        blogDes,
      } = data;
      const blogData = {
      title:blogTitle,descirption:blogDes,image: imageUrl,date:date
      };
      axios
        .post(
          `https://insigene-server-side.vercel.app/addBlogs`,
          blogData
        )
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Add Blog Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            reset();
          }
        });
    });
  };
  return (
    <div className="w-full h-full  md:w-[75%] max-w-6xl mx-auto ">
      <h2 className="text-center text-3xl font-semibold py-2">Add Blog</h2>
      <div className="w-full h-[86vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full border px-8 py-3 rounded-2xl"
      >
        <div className="w-full form-control">
          <label className="label">
            <span>Blog Title*</span>
          </label>
          <input
            type="text"
            placeholder="Blog"
            className="p-3 rounded-lg border focus:outline-0 focus:border-rose-500 text-black"
            {...register("blogTitle", { required: true })}
          />
          {errors.blogTitle && (
            <span className="text-rose-500">Please Enter Blog Title</span>
          )}
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span>Blog Desciption*</span>
          </label>
          <textarea
            className="p-3 rounded-lg border focus:outline-0 focus:border-rose-500 text-black"
            placeholder="Enter Blog Desciption"
            cols="10"
            rows="5"
            {...register("blogDes", { required: true })}
          ></textarea>
          {errors.blogDes && (
            <span className="text-rose-500">Please Enter Blog Desciption</span>
          )}
        </div>
        <div className="form-control py-3">
          <label htmlFor="files" className="label  border-2 py-3 rounded-lg border-dashed border-cyan-500 flex justify-center text-lg gap-2 cursor-pointer">
           <AiOutlinePlus className="w-6 h-6 text-rose-500 cursor-pointer"></AiOutlinePlus> Upload Image 
          </label>
          <input
            type="file"
            className="hidden border"
            id="files"
            name=""
            {...register("photo", { required: true })}
          />
          {errors.photo && (
            <span className="text-rose-500">Please Upload Blog Image</span>
          )}
        </div>
        <div className="form-control mt-6">
          <button className="btn-primary text-lg">Continue</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default AddBlogs;
