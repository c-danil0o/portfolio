import { useEffect, useState } from "react";


type Props = {
  children?: React.ReactNode
};
function BackgroundBlur({ children }: Props) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1000)
  })
  return (
    <div className='absolute pt-16 bg-gradient-to-r w-full h-full from-black to-gray-900 flex items-center justify-center' >
      <div className="relative inset-x-0 m-auto h-1/2 flex justify-center items-center max-w-sm border-sky-900 bg-gradient-to-tr from-green-400 via-gray-500 to-orange-300 blur-[118px]"
        style={{
          opacity: show ? "1" : "0",
          transition: "all 3s",
          visibility: show ? "visible" : "hidden",
          zIndex: 22
        }}>{children}</div>
    </div>
  )
}
export default BackgroundBlur;
