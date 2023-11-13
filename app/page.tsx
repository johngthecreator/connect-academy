"use client";
import axios from 'axios';
import { useState } from 'react';
import { bouncy } from 'ldrs'


export default function Home() {
  bouncy.register()

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
    const response = await axios.post("https://connect-academy.onrender.com/message/review", data)
    setLoading(false);
    setResponse(response.data);
  } catch (error) {
      console.error('There was an error:', error);
  }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col gap-5 items-center'>
        <img src='./Jeff.png' className='h-[100px] w-[100px] rounded-[200px]'/>
        <h1 className='text-2xl font-bold'>Send a Message to Jeff</h1>
      </div>
      <form onSubmit={(e)=>{sendData(e)}} className='p-3'>
        <textarea onChange={e=>setUserInput(e.target.value)} className="flex border-solid border-2 p-2 border-gray-300 rounded-lg w-[300px] md:w-[400px] h-[200px] resize-none" maxLength={300} placeholder='Ex: We know each other from...'/> 
        <div className='flex justify-end mt-3'>
          <button type='submit' className='bg-blue-600 p-2 w-[150px] text-lg font-bold rounded-3xl text-white'>{ loading ? <l-bouncy size="45" speed="1.75"  color="white" ></l-bouncy>:"Send"}</button>
        </div>
      </form>
      {response ? (
        <div>
        <h2 className='text-2xl font-bold mb-3'>Let&apos;s Review!</h2>
        <div className='w-[300px] md:w-[500px] p-5 rounded-xl bg-blue-600 text-white'>
          <h2 className='font-bold'>Message Rating: {response.rating}/10</h2>
          <p className='font-bold'>Comment:</p>
          <p>{response.review}</p>
          {/* <h2 className='text-xl font-bold mb-2'>Rating: 7/10</h2>
          <p>
            The message was good and well kept. I think that it would have been better if the sender had taken more time to personalize the message 
            this way I could make more of a connection.
          </p> */}
        </div>
        </div>
      ):(
        <h2></h2>
      )}

    </main>
  )
}
