import { doSocialLogin } from "../actions";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const LoginForm = () => {
    return (
        <form action={doSocialLogin} className="flex   absolute top-3 right-2    justify-end gap-2 ">
            <button 
                className="  " 
                type="submit" 
                name="action" 
                value="google">
                <FaGoogle  size={28} />
                
            </button>

            <button 
                className="" 
                type="submit" 
                name="action" 
                value="github">
                <FaGithub  size={28} />
            </button>
        </form>
    );
};

export default LoginForm;
