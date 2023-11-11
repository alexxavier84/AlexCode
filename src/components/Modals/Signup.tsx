import { type } from "os";

type SignupProps = {}

const Signup:React.FC<SignupProps> = () => {
    return <form action="" className="space-y-6 px-6 pb-4">
    <h3 className='text-xl font-medium text-white'>Register to Alex code</h3>
    <div>
        <label htmlFor="email" className='text-sm font-medim block mb-2 text-gray-300'>Email</label>
        <input type="email" name="email" id="email" placeholder="name@company.com" className='border-2 outline-none sm:text-sm rounded-lg
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'/>
    </div>
    <div>
        <label htmlFor="name" className='text-sm font-medim block mb-2 text-gray-300'>Display Name</label>
        <input type="text" name="name" id="name" placeholder="Alex Xavier" className='border-2 outline-none sm:text-sm rounded-lg
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'/>
    </div>
    <div>
        <label htmlFor="password" className='text-sm font-medim block mb-2 text-gray-300'>Password</label>
        <input type="password" name="password" id="password" placeholder="Type your password" className='border-2 outline-none sm:text-sm rounded-lg
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'/>
    </div>
    <button type="submit" className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
    bg-brand-orange hover:bg-brand-orange-s">Register</button>
    <div className="text-sm font-medium text-gray-300">
        Already have an account?{" "}
        <a href="#" className='text-blue-700 hover:underline'>
            Log In
        </a>
    </div>
</form>
}

export default Signup;