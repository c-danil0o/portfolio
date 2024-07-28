import './header.css'
import { Button } from "../ui/button";
import logo from '../../assets/logo-no-background.png'
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Modal, ModalBody, ModalContent, ModalTrigger } from '../ui/animated-modal';

export default function Header() {
  return (
    <nav className='sm:px-24 px-8 w-full flex h-24 justify-between  items-center py-5 fixed top-0 z-20 bg-gray-900 bg-opacity-20 backdrop-blur'>
      <img src={logo} alt="logo-image" className="w-12 logo-image" />
      <div className="hidden md:flex flex-row justify-evenly items-center">
        <Button variant="ghost" className="text-zinc-300 border-zinc-400"><a href="#Hero">home</a></Button>
        <Button variant="ghost" className="text-zinc-300 border-zinc-400"><a href="#About">about</a></Button>
        <Button variant="ghost" className="text-zinc-300 border-zinc-400"><a href="#Skills">skills</a></Button>
        <Button variant="ghost" className="text-zinc-300 border-zinc-400"><a href="#Projects">projects</a></Button>
        <Button variant="ghost" className="text-zinc-300 border-zinc-400"><a href="#Contact">contact</a></Button>
      </div>
      <div >
        <Modal>
          <ModalTrigger className="md:hidden w-10 group/modal-btn">
            <HamburgerMenuIcon className="h-4 w-4 text-zinc-400" />
          </ModalTrigger>
          <ModalBody className='absolute w-4/5' >
            <ModalContent >
              <Button variant="ghost" className="text-zinc-300 border-zinc-400"><a href="#Hero">home</a></Button>
              <Button variant="ghost" className="text-zinc-300 border-zinc-400"><a href="#About">about</a></Button>
              <Button variant="ghost" className="text-zinc-300 border-zinc-400"><a href="#Skills">skills</a></Button>
              <Button variant="ghost" className="text-zinc-300 border-zinc-400"><a href="#Projects">projects</a></Button>
              <Button variant="ghost" className="text-zinc-300 border-zinc-400"><a href="#Contact">contact</a></Button>
            </ModalContent>
          </ModalBody>
        </Modal>
      </div>

    </nav>
  )
}
