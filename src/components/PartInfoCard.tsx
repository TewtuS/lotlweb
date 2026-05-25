"use client";

import type { ServerPart } from "@/data/server-parts";
import { pinkPanel } from "@/lib/styles";

type PartInfoCardProps = {
  part: ServerPart;
};

export function PartInfoCard({ part }: PartInfoCardProps) {
  return (
    <div className={`${pinkPanel} overflow-hidden rounded-2xl shadow-2xl`}>
      <div className="flex h-28 items-center justify-center md:h-32">
        <div
          className="flex h-20 w-32 flex-col items-center justify-center gap-1 rounded-lg border border-white/20 md:h-24 md:w-36"
          style={{
            background: `linear-gradient(135deg, ${part.imageColor}88 0%, ${part.imageColor}44 100%)`,
          }}
        >
          <span
            className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: part.pinColor }}
          >
            {part.pinNumber}
          </span>
          <span className="px-2 text-center text-[10px] font-medium text-white/80 md:text-xs">
            Part image placeholder
          </span>
        </div>
      </div>

      <div className="border-t border-[rgba(254,186,203,0.9)] px-5 py-5 md:px-6 md:py-6">
        <h3 className="text-sm font-bold text-black md:text-base">
          {part.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-black/80 md:text-[15px]">
          {part.description}
        </p>
      </div>
    </div>
  );
}
