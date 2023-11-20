import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home(){
    return(
        <div className="w-full h-screen">
            <NavBar />
            <div className="bg-[url('/heroImage.png')] h-[500px] flex flex-col justify-center p-5 text-[50px] font-bold text-white">
                <h2 className="z-10">Practice Growing</h2>
                <h2 className="z-10">Your Professional Network.</h2>
            </div>
            <div className="p-10 md:p-24">
                <div className="flex flex-col md:flex-row text-xl gap-20 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-3">What is Connect Academy?</h2>
                        <p>
                            Connect Academy is an AI Networking Playground that allows you to practice expanding your professional network. 
                            Practice connecting with business professionals by sending messages to connect with AI personas representing business professionals. 
                            Learn how to create messages that help you form genuine relationships and network in a natural way!
                        </p>
                    </div>
                    <Image src="/Jeff.png" className="rounded-2xl" height={300} width={300} alt="Jeff the Marketer"/>
                </div>
                <div className="flex flex-col text-xl gap-5 mt-[100px] items-center">
                        <h2 className="font-bold text-3xl">Try out the Beta!</h2>
                        <Image src="/connect.png" className="rounded-2xl" height={300} width={300} alt="Jeff the Marketer"/>
                </div>
            </div>

        </div>
    )
}