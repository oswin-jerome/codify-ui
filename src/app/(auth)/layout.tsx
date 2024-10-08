import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="grid place-content-center h-screen bg-slate-100 dark:bg-slate-800">
      <div className=" p-4 shadow rounded-[var(--radius)] min-w-[750px] bg-white dark:bg-slate-700 grid grid-cols-[3fr,2fr]">
        <div>{children}</div>
        <div className="bg-slate-200 dark:bg-slate-500 rounded p-4"></div>
      </div>
    </main>
  );
};

export default AuthLayout;
