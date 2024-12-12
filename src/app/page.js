// 'use client'

import Area from "@/components/Area";
import Board from "@/components/Board";
import Checker from "@/components/Checker";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-slate-400 w-full h-full ">
      <Board></Board>
    </div>
  );
}
