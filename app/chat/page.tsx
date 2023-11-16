"use client";
import axios from 'axios';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { uuidAtom } from "@/atoms/uuidAtom";
import { useLayoutEffect } from "react";
import { useRouter} from "next/navigation";
import Link from 'next/link';



export default function Chat() {
  const router = useRouter();
  useLayoutEffect(() => {
      const isAuth = localStorage.getItem("bbl");
      if(!isAuth){
        router.push("/login");
      }
  }, [])
  

  const [uuid, ] = useAtom(uuidAtom);
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>("empty message");
  const sendData = async (e: any) => {
    setLoading(true);
    setResponse(null);
    e.preventDefault();
    const data = {
      personaName: 'Jeff',
      personaJob: 'Marketing Specialist',
      personaExp: 'Email Marketing, Google Ads, Social Media Marketing',
      userMessage: userInput
  };
  try {
    const response = await axios.post("https://connect-academy.onrender.com/message/review", data,
    {headers:{
      'Authorization': `Bearer ${uuid.bblid}`,
      'Host-Email':uuid.email
  }})
    setLoading(false);
    setResponse(response.data);
  } catch (error) {
      console.error('There was an error:', error);
  }
  }
  return (
    <div>
      <nav className="flex flex-row justify-between items-center p-5 bg-blue-500">
          <h1 className="text-2xl font-bold text-white">Connect Academy</h1>
          <ul>
              <li><button className="p-3 bg-white text-blue-500 rounded-lg font-bold" onClick={()=>{
                  localStorage.removeItem("bbl");
                  router.push("/");
                }}>
                  Logout
                </button></li>
          </ul>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='flex flex-col gap-5 items-center text-center'>
          <img src='./Jeff.png' className='h-[100px] w-[100px] rounded-[200px]'/>
          <h1 className='text-2xl font-bold'>Connect with Jeff Lazlo</h1>
          <Link href="https://www.linkedin.com/in/jeff-lazlo-831b6729b/" target='blank'><p className='text-xl text-blue-500 underline'>View Profile</p></Link>
        </div>
        <form onSubmit={(e)=>{sendData(e)}} className='p-3'>
          <textarea onChange={e=>setUserInput(e.target.value)} className="flex border-solid border-2 p-2 border-gray-300 rounded-lg w-[300px] md:w-[400px] h-[200px] resize-none" maxLength={300} placeholder='Ex: We know each other from...'/> 
          <div className='flex justify-end mt-3'>
            <button type='submit' className='bg-blue-600 p-2 w-[150px] text-lg font-bold rounded-3xl text-white'>{ loading ? "Sending..." :"Send"}</button>
          </div>
        </form>
        {response ? (
          <div>
          <h2 className='text-2xl font-bold mb-3'>Let&apos;s Review!</h2>
          <div className='w-[300px] md:w-[500px] p-5 rounded-xl bg-blue-600 text-white'>
            <h2 className='font-bold'>Message Rating: {response.rating}/10</h2>
            <p className='font-bold'>Comment:</p>
            <p>{response.review}</p>
          </div>
          </div>
        ):(
          <h2></h2>
        )}

      </main>
    </div>
  )
}
