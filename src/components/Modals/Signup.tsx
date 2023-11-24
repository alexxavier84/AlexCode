import { type } from "os";
import { useSetRecoilState } from '../../../node_modules/recoil';
import { authModalState } from '../../atoms/authModelAtom';
import { useState, useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from '../../../node_modules/react-firebase-hooks/auth';
import { auth } from "../../firebase/firebase";
import { useRouter } from "../../../node_modules/next/router";
import { toast } from "react-toastify";

type SignupProps = {}

const Signup:React.FC<SignupProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);

    const handleClick = (type: 'login' | 'register' | 'forgotPassword') => {
        setAuthModalState(prev => ({...prev, isOpen: true, type: type}));
    };

    const [inputs, setInputs] = useState({email: '', displayName: '', password: ''});
    const router = useRouter();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleRegister = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!inputs.email || !inputs.displayName || !inputs.password) return alert("Please fill all fields");
        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if (!newUser) {
                return;
            }
            router.push('/');
        } catch (error: any) {
            toast.error(error.message, {position: "top-center", autoClose: 3000});
        }
    };

    useEffect(() => {
        if(error) toast.error(error.message, {position: "top-center", autoClose: 3000});
    }, [error]);

    return <form action="" className="space-y-6 px-6 pb-4" onSubmit={handleRegister}>
    <h3 className='text-xl font-medium text-white'>Register to Alex code</h3>
    <div>
        <label htmlFor="email" className='text-sm font-medim block mb-2 text-gray-300'>Email</label>
        <input type="email" name="email" id="email" placeholder="name@company.com" className='border-2 outline-none sm:text-sm rounded-lg
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
        onChange={handleChangeInput} />
    </div>
    <div>
        <label htmlFor="displayName" className='text-sm font-medim block mb-2 text-gray-300'>Display Name</label>
        <input type="text" name="displayName" id="displayName" placeholder="Alex Xavier" className='border-2 outline-none sm:text-sm rounded-lg
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white' 
        onChange={handleChangeInput} />
    </div>
    <div>
        <label htmlFor="password" className='text-sm font-medim block mb-2 text-gray-300'>Password</label>
        <input type="password" name="password" id="password" placeholder="Type your password" className='border-2 outline-none sm:text-sm rounded-lg
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
        onChange={handleChangeInput} />
    </div>
    <button type="submit" className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
    bg-brand-orange hover:bg-brand-orange-s">{loading? "Registering..." : "Register"}</button>
    <div className="text-sm font-medium text-gray-300">
        Already have an account?{" "}
        <a href="#" onClick={() => handleClick("login")} className='text-blue-700 hover:underline'>
            Log In
        </a>
    </div>
</form>
}

export default Signup;