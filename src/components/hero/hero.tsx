import './hero.css'
import { FlipWords } from "../ui/flip-words";
import laptop from '../../assets/ai.png'
import { ChevronDownIcon, EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';

export function Hero() {
  const words = ["engineer", "developer"]
  return (

    <div className='max-w-[1420px]  block relative h-fit mx-10 xl:mx-auto justify-center mt-72 mb-32 '>
      <div className="flex flex-row center justify-between w-full h-1/2">
        <div className="flex flex-col flex-1 justify-center  w-3/5">
          <span className="text-white text-6xl text-left ">Hello, I&apos;m</span>
          <span className="text-violet-500 text-6xl justify-self-start text-left">Danilo.</span>
          <div className="text-2xl font-mono text-neutral-400 text-left mt-5 bg-gray-800 backdrop-blur-xl bg-opacity-15 rounded-2xl">
            Software
            <FlipWords words={words} className="text-neutral-600" /> <br />
            student and tech enthusiast.
          </div>
        </div>
        <div className="hidden lg:flex flex-1 image-wrapper center justify-end">
          <img src={laptop} alt="hero-image" className="hero-image w-auto" />
        </div>

      </div>

    </div>
  )
}

export function Social() {
  return (
    <div className='social flex flex-row flex-wrap dark text-3xl justify-evenly items-center  bg-violet-800 bg-opacity-5 backdrop-blur p-7 rounded-2xl mb-20'>
      <a href="https://www.github.com/c-danil0o">
        <Button variant="outline" className='text-neutral-400 rounded-2xl px-10 text-xl py-5 my-3 bg-black bg-opacity-30 link-button hover:bg-violet-900 w-52'>
          <GitHubLogoIcon width="25px" height="25px" />
          <span className='p-3 font-thin'>GitHub</span>
        </Button>
      </a>

      <a href="www.linkedin.com/in/danilo-c">
        <Button variant="outline" className='text-neutral-400 rounded-2xl px-10 text-xl py-5 my-3 bg-black bg-opacity-30 link-button hover:bg-violet-900 w-52'>
          <LinkedInLogoIcon width="25px" height="25px" />
          <span className='p-3 font-thin'>LinkedIn</span>
        </Button>
      </a>

      <a href="mailto:danilo.cvijetic10@protonmail.ch">
        <Button variant="outline" className='text-neutral-400 rounded-2xl px-10 text-xl py-5 my-3 bg-black bg-opacity-30 link-button hover:bg-violet-900 w-52'>
          <EnvelopeClosedIcon width="25px" height="25px" />
          <span className='p-3 font-thin'>Email</span>
        </Button>
      </a>
    </div>
  )
}

export function Scroll() {
  return (
    <div className="flex flex-col justify-center items-center mb-2 transition-all">
      <span className='text-neutral-400 font-thin z-50'>
        Scroll to discover
      </span>
      <span className='animate-bounce'>
        <ChevronDownIcon />
      </span>
    </div>
  )
}
