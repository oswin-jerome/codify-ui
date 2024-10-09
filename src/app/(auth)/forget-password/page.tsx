import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";



export default function ForgetPassword() {
  return (
    <div className="p-4 flex space-y-4 flex-col max-w-[400px] justify-between">

      {/* Logo */}
      <div className="w-full grid place-content-center ">
        <Logo className="w-[60px] rounded-full" />
      </div>

      {/* Header */}
      <div className="text-center ">
        <h1 className="text-2xl ">Forget Password</h1>
        <p className="text-muted-foreground">To reset your password, please enter your email address </p>
      </div>


      {/* Form */}

      <form className="space-y-4">
        {/* <div className="w-full flex items-center justify-center">
          <small className="text-red-600">Invaild credentials</small>
        </div> */}
        <div className="space-y-1">
          <Label>Email Address</Label>
          <Input type="email" required />
        </div>

      
        <Button className="w-full bg-[#4065fa]">Continue</Button>
      </form>

      <hr />
      {/* Footer */} 
      <small className="text-muted-foreground block ">
        
        <Link href={"/login"} className="text-blue-800">
          Return to Login
        </Link>
      </small>
    </div>
  );
}
