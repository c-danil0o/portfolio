import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

// type Props = {
//   children?: React.ReactNode
// };

export default function GradientBackground() {
  return (
    <BackgroundGradientAnimation interactive={false} gradientBackgroundStart="rgb(0,0,0)" gradientBackgroundEnd="rgb(5,0,28)" pointerColor="10,10,10" thirdColor="0,136,140" fourthColor="66,32,143" fifthColor="0,0,0" size="60%">

    </BackgroundGradientAnimation>
  )
}

