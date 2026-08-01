import { ReactNode } from "react";

interface MacWindowProps {
  children: ReactNode;
}

export default function MacWindow({ children }: MacWindowProps) {
  return (
    <div className="w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d] shadow-2xl">

      {/* Top Bar */}
      <div className="h-12 bg-[#161616] flex items-center px-5 gap-3 border-b border-white/10">

        <div className="w-3.5 h-3.5 rounded-full bg-red-500"></div>

        <div className="w-3.5 h-3.5 rounded-full bg-yellow-400"></div>

        <div className="w-3.5 h-3.5 rounded-full bg-green-500"></div>

      </div>

      <div className="p-10">
        {children}
      </div>

    </div>
  );
}