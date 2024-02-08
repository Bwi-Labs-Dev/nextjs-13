import { FaceSmileIcon } from "@heroicons/react/24/outline";

import Navbar from "@/app/components/Navbar";
import ButtonMessage from "@/app/components/ButtonMessage";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center space-y-10 mt-28">
        <div className="flex flex-col items-center space-y-6">
          <h1 className=" max-w-3xl text-center font-bold text-gray-900 dark:text-white text-5xl leading-tight">
            Hello World <FaceSmileIcon />
          </h1>
          <p className="text-lg font-medium  text-gray-900 dark:text-white">
            This is just a basic lesson on using tailwind css and antd.
          </p>
        </div>
        <ButtonMessage />
      </div>
    </div>
  );
}
