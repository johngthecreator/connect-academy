"use client";
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import axios from "axios";
import { useAtom } from 'jotai';
import { uuidAtom } from "@/atoms/uuidAtom";
import { useRouter } from 'next/navigation';

export default function Login(){
    const [, setUuid] = useAtom(uuidAtom);
    const router = useRouter();
    const GoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(async (result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if(!credential) return;
            const token = credential.idToken;
            // The signed-in user info.
            const user = result.user;

            // const uid = user.uid
            const name = user.displayName;
            const email = user.email;
            const uidToken = await user.getIdToken();
            if (uidToken && email) {
                axios.post("https://connect-academy.onrender.com/create/user",{
                    userName: name,
                    userEmail: email,
                }, {headers:{
                    'Authorization': `Bearer ${uidToken}`
                }})
                .then(()=>{
                    //it responds with a json object {"uuid":uuid}
                    setUuid({"bblid":uidToken, "email":email});
                    router.push('/chat');
                })
                .catch((e)=>{console.error(e)})
            }
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorMessage)
            // ...
        });
    }
    return(
        <div className="flex flex-col w-full h-screen justify-center md:flex-row overflow-hidden">
            <div className="h-2/3 w-full lg:h-screen lg:w-1/3 flex flex-col justify-center items-start gap-5 p-10 lg:p-20">
                <div className="flex flex-row items-center">
                    <div>
                        <h2 className="text-[50px] font-bold">The AI</h2>
                        <h2 className="text-[50px] font-bold"><span className="text-blue-600">Networking</span> Playground.</h2>
                    </div>
                </div>
                <button className="p-3 w-[250px] bg-blue-600 text-2xl font-bold text-white rounded-lg" onClick={GoogleSignIn}>Sign in with Google</button>
            </div>
            <div className="flex overflow-hidden h-1/3 w-full lg:h-screen lg:w-2/3">
                <img src="./handshake.jpeg" className="w-full" />
            </div>

        </div>
    )

}