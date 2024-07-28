import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import hockey from '../../assets/logo200.png'
import nosql from '../../assets/nosql.webp'
import movie from '../../assets/movie-icon.png'
import booking from '../../assets/staylogo.png'

function Skeleton({ image, link }: any) {
  return (
    <div className="flex flex-1 w-full items-center min-h-40 max-h-40 rounded-xl border border-transparent justify-center bg-neutral-100 dark:bg-black">
      <a href={link} className="h-full w-auto m-auto">
        <img className="h-full w-auto m-auto object-contain" src={image} alt="project-image" />
      </a>
    </div>

  )
}

export default function Projects() {
  const items = [
    {
      title: "Air Hockey AI Agent",
      description: "Reinforcement learning agent based on MADDPG neural network",
      header: <Skeleton image={hockey} link="https://github.com/c-danil0o/Air-Hockey-AI" />,
      className: "md:col-span-2",
    },
    {
      title: "NoSQL Engine",
      description: "Cassandra like NoSQL database built in Go with advanced data structures",
      header: <Skeleton image={nosql} link="https://github.com/c-danil0o/nosql-database" />,
      className: "md:col-span-1",
    },
    {
      title: "Movflix",
      description: "Cloud native Netflix clone deployed using AWS-CDK",
      header: <Skeleton image={movie} link="https://github.com/c-danil0o/cloud-movies-app" />,
      className: "md:col-span-1",
    },
    {
      title: "Booking Clone",
      description:
        "Hotel booking application built using Spring Boot, Angular and Android app",
      header: <Skeleton image={booking} link="https://github.com/c-danil0o/booking-android" />,
      className: "md:col-span-2",
    },
  ];
  return (
    <div id="Projects" className="w-full relative h-full bg-gradient-to-br  from-black to-[#190036] flex flex-col justify-center items-center pb-10">

      <div className='w-3/4 flex'>
        <div className='flex text-3xl mt-24 mb-14 wrap ml-auto mr-20'>
          <span className='text-violet-400 px-3'>my </span>
          <span className="transition">projects</span>
        </div>
      </div>
      <BentoGrid className="max-w-4xl w-3/4 mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}

          />
        ))}
      </BentoGrid>


    </div>
  )

}
