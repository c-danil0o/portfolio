import bitmoji from '../../assets/bitmoji.png'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'


export default function About() {
  return (
    <div id="About" className="w-full relative bg-gradient-to-tr h-full from-black to-[#190036] flex flex-col justify-center items-center ">
      <div className='w-3/4 flex'>
        <div className='flex text-3xl mt-24 mb-14 wrap ml-auto mr-20'>
          <span className='text-violet-400 px-3'>about </span>
          <span className="transition">me</span>
        </div>
      </div>

      <hr />
      <div className='flex flex-row justify-center items-center mb-10'>
        <img className='hidden md:block' src={bitmoji} alt="bitmoji" />
        <div className='block font-mono max-w-[920px] sm:mx-10 mx-3 text-neutral-300 text-justify'>
          <Card className='bg-opacity-15 bg-gradient-to-tr from-black to-[#190036]'>
            <CardHeader>
              <CardTitle>
                Hi, my name is
                <span className="m-2 text-violet-400 font-bold inline">Danilo.</span>
              </CardTitle>
              Nice to meet you.

            </CardHeader>
            <CardContent className='text-neutral-300'>

              I'm currently pursuing a degree in
              <span className="m-2 text-violet-400 font-bold">Software Engineering</span>
              at the Faculty of Technical Sciences in Novi Sad.
              My focus is on full-stack development, system arhitecture, machine learning and artificial intelligence, where I strive to optimize algorithms,
              design robust software systems, and use AI to tackle complex challenges.
              I have a deep interest in
              <span className="m-2 text-violet-400 font-bold">Linux</span>
              and enjoy keeping up with the latest advancements in the tech industry.
              When I'm not programming, I immerse myself in electronic projects,
              like Arduino-based systems, and furthering my knowledge of
              <span className="m-2 text-violet-400 font-bold">Cloud</span>
              computing.
            </CardContent>
          </Card>

        </div>
      </div>
      <button className="p-[3px] relative mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-800 rounded-lg" />
        <a download="CV_Danilo_Cvijetic.pdf" href="../../assets/CV.pdf">
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-neutral-300 hover:bg-transparent">
            Get my resume
          </div>
        </a>
      </button>
    </div>
  )
}
