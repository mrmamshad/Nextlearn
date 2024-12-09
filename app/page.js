import Image from "next/image";
import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    
    <main className="flex bg-[#dfd8d8] h-screen ">
      <div className="">
        <LoginForm />
      </div>
    </main>
  );
}
