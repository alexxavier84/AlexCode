import { type } from "os";
import { useSetRecoilState } from '../../../node_modules/recoil';
import { authModalState } from "../../atoms/authModelAtom";
import { useSignInWithEmailAndPassword } from '../../../node_modules/react-firebase-hooks/auth';
import { auth } from "../../firebase/firebase";
import { useState, useEffect } from "react";
import { useRouter } from "../../../node_modules/next/navigation";
import { toast } from "react-toastify";

type LoginProps = {}

const Login:React.FC<LoginProps> = () => {
    
    const setAuthModalState = useSetRecoilState(authModalState);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const [inputs, setInputs] = useState({email: "", password: ""});  
    const router = useRouter();

    const handleClick = (type: 'login' | 'register' | 'forgotPassword') => {
        setAuthModalState(prev => ({...prev, isOpen: true, type: type}));
    };

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleLogin = async (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!inputs.email || !inputs.password) return toast.info("Please fill all fields", {position: "top-center", autoClose: 3000});

        try {
            const newUser = await signInWithEmailAndPassword(inputs.email, inputs.password);
            if(!newUser) return;
            router.push("/");
        } catch (error: any) {
            toast.error(error.message, {position: "top-center", autoClose: 3000});
        }
    };

    useEffect(() => {
        if(error) toast.error(error.message, {position: "top-center", autoClose: 3000});
    }, [error]);

    console.log(user, "user");
    
    return <form action="" className="space-y-6 px-6 pb-4" onSubmit={handleLogin}>
        <h3 className='text-xl font-medium text-white'>Sign in to Alex code</h3>
        <div>
            <label htmlFor="email" className='text-sm font-medim block mb-2 text-gray-300'>Your Email</label>
            <input type="email" name="email" id="email" placeholder="name@company.com" className='border-2 outline-none sm:text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
            onChange={handleInputChange} />
        </div>
        <div>
            <label htmlFor="password" className='text-sm font-medim block mb-2 text-gray-300'>Your Password</label>
            <input type="password" name="password" id="password" placeholder="Type your password" className='border-2 outline-none sm:text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
            onChange={handleInputChange} />
        </div>
        <button type="submit" className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
        bg-brand-orange hover:bg-brand-orange-s">{loading ? "Loading..." : "Log In"}</button>
        <button className="flex w-full justify-end" onClick={() => handleClick("forgotPassword")}>
            <a href="#" className="text-sm block text-brand-orange hover:underline w-full text-right">
                Forgot Password?
            </a>
        </button>
        <div className="text-sm font-medium text-gray-300">
            Not Registered?{" "}
            <a href="#" onClick={() => handleClick("register")} className='text-blue-700 hover:underline'>
                Create account
            </a>
        </div>
    </form>
}

export default Login;