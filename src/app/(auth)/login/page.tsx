import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="pl-4 pr-8 py-6">
      <div className="w-[150px] mb-8">
        <Logo />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="text-muted-foreground">Lorem ipsum dolor sit amet.</p>
      </div>
      <form action="" className="space-y-2 mt-4">
        <div className="space-y-1">
          <Label>Email</Label>
          <Input />
        </div>
        <div className="space-y-1">
          <Label>Password</Label>
          <Input />
          <small className="text-muted-foreground mt-1">
            Forgot password? <span className="text-blue-800">reset here</span>
          </small>
        </div>

        <div>
          <Button className="mt-4 w-full">Login</Button>
        </div>
      </form>
      <hr className="mt-6" />
      <div className="flex justify-between gap-4">
        <Button variant={"outline"} className="mt-4 w-full">
          Google
        </Button>
        <Button variant={"outline"} className="mt-4 w-full">
          Github
        </Button>
        <Button variant={"outline"} className="mt-4 w-full">
          LinkedIn
        </Button>
      </div>

      <small className="mt-5 text-muted-foreground block text-center">
        Don't have an account?{" "}
        <Link href={"/register"} className="text-blue-800">
          Register
        </Link>
      </small>
    </div>
  );
};

export default LoginPage;
