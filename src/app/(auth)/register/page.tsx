import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="pl-4 pr-8 py-6">
      <div className="w-[150px] mb-8">
        <Logo />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">Register</h1>
        <p className="text-muted-foreground">Lorem ipsum dolor sit amet.</p>
      </div>
      <form action="" className="space-y-2 mt-4">
        <div className="space-y-1">
          <Label>Name</Label>
          <Input />
        </div>
        <div className="space-y-1">
          <Label>Email</Label>
          <Input />
        </div>
        <div className="space-y-1">
          <Label>Password</Label>
          <Input type="password" />
        </div>
        <div className="space-y-1">
          <Label>Confirm Password</Label>
          <Input type="password" />
        </div>

        <div>
          <Button className="mt-4 w-full">Register</Button>
        </div>
      </form>

      <small className="mt-5 text-muted-foreground block text-center">
        Already have an account?{" "}
        <Link href={"/login"} className="text-blue-800">
          Login
        </Link>
      </small>
    </div>
  );
};

export default RegisterPage;
