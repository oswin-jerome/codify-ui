import logo from "@/assets/logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
