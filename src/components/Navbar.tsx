import Link from "next/link";
import { Logo } from "./Logo";

function UserIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 text-white"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 20c0-3.314 3.134-6 7-6s7 2.686 7 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Navbar() {
  return (
    <header className="relative z-30 w-full bg-black px-6 py-4 md:px-10 lg:px-16">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" aria-label="LOTL Labs home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <Link
            href="#pricing"
            className="text-sm font-bold text-white transition hover:text-white/80"
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="text-sm font-bold text-white transition hover:text-white/80"
          >
            Contact Us
          </Link>
          <Link
            href="#servers"
            className="text-sm font-bold text-white transition hover:text-white/80"
          >
            My Servers
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#purchase"
            className="group relative rounded-full p-px transition hover:brightness-110"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#22D3EE] via-[#6366F1] to-[#EC4899] opacity-90 blur-[1px]" />
            <span className="relative block rounded-full bg-black px-6 py-2 text-sm font-bold text-white">
              Purchase
            </span>
          </Link>
          <button
            type="button"
            aria-label="Account"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 transition hover:border-white/70"
          >
            <UserIcon />
          </button>
        </div>
      </nav>
    </header>
  );
}
