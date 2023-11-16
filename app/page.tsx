import NavBar from "@/components/NavBar";

export default function Home(){
    return(
        <div className="w-full h-screen">
            <NavBar />
            <div className="bg-[url('/heroImage.png')] h-[500px] flex flex-col justify-center p-5 text-[50px] font-bold text-white">
                <h2 className="z-10">Practice Growing</h2>
                <h2 className="z-10">Your Professional Network.</h2>
            </div>

        </div>
    )
}