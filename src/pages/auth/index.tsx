import { type } from "os";
import Navbar from "../../components/Navbar/Navbar";
import AuthModal from "../../components/Modals/AuthModal";
import { authModalState } from "../../atoms/authModelAtom";
import { useRecoilValue } from '../../../node_modules/recoil';

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
    const authModal = useRecoilValue(authModalState)
    return <div className='bg-gradient-to-b from-gray-500 to-black h-screen relative'>
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
                <img src="/hero.png" alt="Hero image" />
            </div> 
            {authModal.isOpen && <AuthModal/>}
        </div>
    </div>
}

export default AuthPage;