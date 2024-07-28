import { Standard } from "@typebot.io/react";
export default function Contact() {
  return (
    <div id="Contact" className="h-fit w-full dark:bg-black bg-white bg-dot-violet-400/[0.8]  relative flex flex-col items-center pb-10">
      <div className="absolute w-full h-full">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <p className="text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 my-5">
        Contact me
      </p>
      <div className="relative w-4/5 lg:w-2/5">
        <Standard
          typebot="my-typebot-ufipmw5"
          style={{ width: "100%", height: "800px", border: "1px solid #6A53A3", borderRadius: "10px" }}
        />
      </div>
    </div>
  )
}
