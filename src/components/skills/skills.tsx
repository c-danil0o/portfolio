import { Card } from "../ui/card";
import './skills.css'

export default function Skills() {
  return (
    <div id="Skills" className="w-full relative h-full bg-black flex flex-col justify-center items-center ">

      <div className='w-3/4 flex'>
        <div className='flex text-3xl mt-24 mb-14 wrap mr-auto ml-20'>
          <span className="transition">my</span>
          <span className='text-violet-400 px-3'>skills </span>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center mb-20 flex-wrap sm:w-3/4 w-4/5 mx-10'>
        <Card className='p-5 skill-card max-w-[800px] m-5'>
          <div className='images flex flex-row'></div>
          <div className='type text-neutral-200'>Languages</div>
          <div className='technologies text-neutral-500 text-wrap'>
            Python / Java / C / C++ / JavaScript / TypeScript / C# / Go / Kotlin / Lua
          </div>
        </Card>

        <Card className='p-5 skill-card max-w-[800px] m-5'>
          <div className='images'></div>
          <div className='type text-neutral-200'>Frameworks</div>
          <div className='technologies text-neutral-500 text-wrap'>
            Angular / React / Vue / Django / Next Js / Svelte / .NET / Spring Boot
          </div>
        </Card>

        <Card className='p-5 skill-card max-w-[800px]  m-5'>
          <div className='images'></div>
          <div className='type text-neutral-200'>Tools</div>
          <div className='technologies text-neutral-500 text-wrap'>
            Git / GitHub / Maven / Gradle / Docker
          </div>
        </Card>

        <Card className='p-5 skill-card max-w-[800px]  m-5'>
          <div className='images'></div>
          <div className='type text-neutral-200'>Testing</div>
          <div className='technologies text-neutral-500 text-wrap'>
            TestNG / JUnit / Selenium
          </div>
        </Card>

        <Card className='p-5 skill-card max-w-[800px]  m-5'>
          <div className='images'></div>
          <div className='type text-neutral-200'>Database</div>
          <div className='technologies text-neutral-500 text-wrap'>
            DynamoDB / Mongo / PostgreSQL / MySQL / Oracle
          </div>
        </Card>

      </div>


    </div>
  )
}
