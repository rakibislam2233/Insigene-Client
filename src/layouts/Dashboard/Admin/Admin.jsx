import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../../public/animation_lk9vneqi.json";
import { useContext } from "react";
import { UserContext } from "../../../components/AuthProvider/AuthProvider";

const Admin = () => {
  const {user} = useContext(UserContext)
    return (
        <div className="w-full">
          <h2 className="text-3xl font-semibold">Welcome {user.displayName} </h2>
          <Lottie className="w-full" animationData={groovyWalkAnimation} loop={true} />
        </div>
    );
};

export default Admin;