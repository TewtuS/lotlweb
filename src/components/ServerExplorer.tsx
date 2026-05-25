"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { defaultPart, serverParts, type ServerPart } from "@/data/server-parts";
import { PartInfoCard } from "./PartInfoCard";

const ServerModel3D = dynamic(
  () => import("./ServerModel3D").then((mod) => mod.ServerModel3D),
  {
    ssr: false,
    loading: () => (
      <div className="glass-dark flex h-full items-center justify-center rounded-[1.75rem]">
        <p className="text-sm text-white/40">Loading 3D model…</p>
      </div>
    ),
  },
);

function PartPin({
  part,
  isSelected,
  onSelect,
}: {
  part: ServerPart;
  isSelected: boolean;
  onSelect: (part: ServerPart) => void;
}) {
  return (
    <button
      type="button"
      aria-label={`View ${part.name}`}
      aria-pressed={isSelected}
      onClick={() => onSelect(part)}
      className={`absolute z-20 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-xs font-bold text-white shadow-lg transition md:h-8 md:w-8 md:text-sm ${
        isSelected ? "ring-2 ring-white ring-offset-2 ring-offset-black/50" : ""
      }`}
      style={{
        left: `${part.anchor.x}%`,
        top: `${part.anchor.y}%`,
        backgroundColor: part.pinColor,
      }}
    >
      {part.pinNumber}
    </button>
  );
}

export function ServerExplorer() {
  const [selectedPart, setSelectedPart] = useState<ServerPart>(defaultPart);

  return (
    <section className="section-clear relative px-6 py-10 md:px-10 md:py-14 lg:px-16">
      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-6">
          <div className="relative md:col-span-7">
            <div className="glass-dark relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[1.75rem] shadow-2xl md:mx-0 md:aspect-auto md:h-[440px] md:max-w-none">
              <ServerModel3D
                parts={serverParts}
                selectedId={selectedPart.id}
                onSelect={setSelectedPart}
              />

              {serverParts.map((part) => (
                <PartPin
                  key={part.id}
                  part={part}
                  isSelected={part.id === selectedPart.id}
                  onSelect={setSelectedPart}
                />
              ))}
            </div>

            <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
              aria-hidden="true"
            >
              <line
                x1={`${selectedPart.anchor.x}%`}
                y1={`${selectedPart.anchor.y}%`}
                x2="100%"
                y2={`${selectedPart.anchor.y}%`}
                stroke="rgba(156, 163, 175, 0.75)"
                strokeWidth="1"
              />
            </svg>
          </div>

          <div className="relative md:col-span-5 md:mt-6">
            <PartInfoCard part={selectedPart} />
          </div>
        </div>
      </div>
    </section>
  );
}
