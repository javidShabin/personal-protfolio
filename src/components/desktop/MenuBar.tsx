import { useEffect, useState } from "react";
import {
  VscSearch,
  VscAccount,
} from "react-icons/vsc";
import { FiWifi } from "react-icons/fi";
import { FaApple } from "react-icons/fa";

export default function MenuBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-12 px-4 
                    flex items-center justify-between
                    bg-black/30 backdrop-blur-xl
                    text-white text-sm z-50">

      {/* Left Side */}
      <div className="flex items-center gap-6">

        <FaApple className="text-lg cursor-pointer" />

        <span className="font-semibold">
          Javid's Portfolio
        </span>

        <span className="cursor-pointer hover:text-gray-300">
          Projects
        </span>

        <span className="cursor-pointer hover:text-gray-300">
          Contact
        </span>

        <span className="cursor-pointer hover:text-gray-300">
          Resume
        </span>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        <FiWifi className="cursor-pointer" />
        <VscSearch className="cursor-pointer" />
        <VscAccount className="cursor-pointer" />

        <span>{time}</span>
      </div>
    </div>
  );
}
