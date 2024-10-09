
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Link from "next/link";
import { FaApple, FaCcApplePay, FaGithub, FaLinkedinIn, FaMicrosoft } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { LiaLinkedinIn } from "react-icons/lia";

const LoginPage = () => {
  return (

    
    <div className="p-4 flex space-y-4 flex-col justify-between">

      {/* Logo */}
      <div className="w-full grid place-content-center ">
        <Logo className="w-[60px] rounded-full"/>
      </div>

      {/* Header */}
      <div className="text-center ">
        <h1 className="text-2xl ">Welcome back</h1>
        <p className="text-muted-foreground">Please enter your details to login </p>
      </div>
    

      {/* Auth Signin */}

      <div className="flex gap-4">
        <Button variant={"outline"} className="w-full">
          <FaApple size={18}/>
        </Button>
        <Button variant={"outline"} className="w-full">
          <FcGoogle size={18}/>
        </Button>
        <Button variant={"outline"} className="w-full">
          <FaGithub className="text-gray-900" size={18}/>
        </Button>
      </div>

      {/* Ruler */}

      <div className=" flex items-center justify-center space-x-2">
        <hr className="w-full" />
        <small className="text-muted-foreground  text-[10px]">OR</small>
        <hr className="w-full" />
      </div>

      {/* Form */}

      <form className="space-y-4">
        <div className="w-full flex items-center justify-center">
          <small className="text-red-600">Invaild credentials</small>
        </div>
        <div className="space-y-1">
          <Label>Email</Label>
          <Input type="email" required />
        </div>

        <div className="space-y-1.5">
          <Label>Password</Label>
          <Input type="password" required/>
          <small className="text-muted-foreground">
            Forgot password? <span className="text-blue-800">reset here</span>
          </small>
        </div>
        <Button className="w-full bg-[#4065fa]">Login</Button>
      </form>

      {/* Footer */}
      <small className="text-muted-foreground block text-center">
        Don't have an account?{" "}
        <Link href={"/register"} className="text-blue-800">
          Create an account
        </Link>
      </small>
    </div>
  );
};

export default LoginPage;

