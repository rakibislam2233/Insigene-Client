import axios from "axios";
import { useEffect, useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiGooglescholar } from "react-icons/si";
import { MdOutlineArrowDropDown } from "react-icons/md";
const Experts = () => {
    const [experts,setExperts] = useState([]);
    const [open,setOpen] = useState(false)
    useEffect(()=>{
        axios.get(`https://insigene-server-side.vercel.app/aboutUsData`)
        .then(res=>{
            setExperts(res.data);
        })
    },[])
    return (
        <div className="w-full max-w-6xl mx-auto py-16">
            <h2 className="text-3xl font-semibold">The team of experts behind INSiGENe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-16 p-5">
                {
                    experts.map((expert) =><>
                    <div className="w-full border border-[#00B9FC] p-8 space-y-3 text-center object-fill">
                        <img className="w-full h-60" src={expert?.image} alt="" />
                       <div className="flex justify-between flex-col gap-6">
                      <div className="space-y-2">
                      <h3 className=" text-lg font-semibold">{expert.name}</h3>
                        <h3 className="text-xl font-semibold">{expert.degree}</h3>
                      </div>
                        <hr className="border border-[#00B9FC]" />
                       </div>
                        <h3 className="font-semibold">{expert.title}</h3>
                        <div className="flex justify-center gap-3">
                        <BsLinkedin className="w-7 h-7 text-[#00B9FC]"></BsLinkedin>
                        <SiGooglescholar className="w-7 h-7 "></SiGooglescholar>
                        </div>
                        <h3 className="font-semibold italic">{expert.subtitle}</h3>
                        <div onClick={()=>setOpen(!open)} className="text-left flex justify-between items-center pt-5 cursor-pointer">
                            <h2 className="font-semibold">Experience</h2>
                            <button className="w-4 h-4 border rounded-full flex justify-center items-center"><MdOutlineArrowDropDown></MdOutlineArrowDropDown></button>
                        </div>
                      
                    </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Experts;