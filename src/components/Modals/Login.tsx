import { type } from "os";
import { useSetRecoilState } from '../../../node_modules/recoil';
import { authModalState } from "../../atoms/authModelAtom";

type LoginProps = {}

const Login:React.FC<LoginProps> = () => {
    
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleForgotPwdClick = () => {
        setAuthModalState(prev => ({...prev, isOpen: true, type: "forgotPassword"}));
    };
    const handleRegisterClick = () => {
        setAuthModalState(prev => ({...prev, isOpen: true, type: "register"}));
    };
    
    return <form action="" className="space-y-6 px-6 pb-4">
        <h3 className='text-xl font-medium text-white'>Sign in to Alex code</h3>
        <div>
            <label htmlFor="email" className='text-sm font-medim block mb-2 text-gray-300'>Your Email</label>
            <input type="email" name="email" id="email" placeholder="name@company.com" className='border-2 outline-none sm:text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'/>
        </div>
        <div>
            <label htmlFor="password" className='text-sm font-medim block mb-2 text-gray-300'>Your Password</label>
            <input type="password" name="password" id="password" placeholder="Type your password" className='border-2 outline-none sm:text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'/>
        </div>
        <button type="submit" className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
        bg-brand-orange hover:bg-brand-orange-s">Login</button>
        <button className="flex w-full justify-end" onClick={handleForgotPwdClick}>
            <a href="#" className="text-sm block text-brand-orange hover:underline w-full text-right">
                Forgot Password?
            </a>
        </button>
        <div className="text-sm font-medium text-gray-300">
            Not Registered?{" "}
            <a href="#" onClick={handleRegisterClick} className='text-blue-700 hover:underline'>
                Create account
            </a>
        </div>
    </form>
}

export default Login;