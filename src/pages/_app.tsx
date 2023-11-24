import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from '../../node_modules/recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps }: AppProps) {
  return <RecoilRoot>
    <ToastContainer/>
    <Component {...pageProps} />
  </RecoilRoot> 
  
  
}
