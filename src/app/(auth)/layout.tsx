import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex items-center justify-center h-screen bg-slate-100  dark:bg-slate-800">
      <div className=" p-4 lg:shadow-md rounded-[var(--radius)]  min-w-[420px] bg-white dark:bg-slate-700 ">
        <div>{children}</div>
        {/* <div className="bg-slate-200 dark:bg-slate-500 rounded p-4"></div> grid grid-cols-[3fr,2fr]*/}
      </div>
    </main>
  );
};

export default AuthLayout;
