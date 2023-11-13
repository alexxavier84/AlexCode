import { type } from "os";
import Navbar from "../../components/Navbar/Navbar";
import AuthModal from "../../components/Modals/AuthModal";
import { authModalState } from "../../atoms/authModelAtom";
import { useRecoilValue } from '../../../node_modules/recoil';
import { useAuthState } from '../../../node_modules/react-firebase-hooks/auth';
import { auth } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "../../../node_modules/next/router";

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
    const authModal = useRecoilValue(authModalState)
    const [user, loading, error] = useAuthState(auth);
    const [pageLoading, setPageLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if(user) router.push('/');
        if (!loading && !user) setPageLoading(false);
    }, [user, router, loading]);
    if (pageLoading) return null;
    
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