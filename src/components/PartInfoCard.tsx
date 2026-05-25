"use client";

import type { ServerPart } from "@/data/server-parts";
import { creamPanel, greyPanel } from "@/lib/styles";

type PartInfoCardProps = {
  part: ServerPart;
};

export function PartInfoCard({ part }: PartInfoCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl shadow-2xl backdrop-blur-sm">
      <div
        className={`${greyPanel} flex h-28 items-center justify-center md:h-32`}
      >
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

      <div className={`${creamPanel} px-5 py-5 md:px-6 md:py-6`}>
        <h3 className="text-sm font-bold text-[#111827] md:text-base">
          {part.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#4B5563] md:text-[15px]">
          {part.description}
        </p>
      </div>
    </div>
  );
}
