import logo from "@/assets/logo-original.png";
import Image from "next/image";

interface LogoProps {
  className?: string;  
}
const Logo:React.FC<LogoProps>  = ({className}) => {
  return (
    <div >
      <Image className={className} src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
