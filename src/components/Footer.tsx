import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-8 border-t border-white/20 px-6 py-16 md:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <Logo className="justify-center" />

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            id="purchase"
            href="#purchase"
            className="min-w-[200px] rounded-full bg-gradient-to-r from-[#EC4899] via-[#8B5CF6] to-[#3B82F6] px-10 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:brightness-110"
          >
            Purchase
          </Link>
          <Link
            href="#contact"
            className="min-w-[200px] rounded-full border border-white/40 px-10 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 text-xs text-white/50 md:flex-row md:gap-4">
          <div className="flex gap-4">
            <Link href="#" className="transition hover:text-white/80">
              Terms of Service
            </Link>
            <span className="hidden md:inline">|</span>
            <Link href="#" className="transition hover:text-white/80">
              Privacy Policy
            </Link>
          </div>
        </div>

        <p className="mt-4 text-xs text-white/40">© 2024 Lotl Labs</p>
      </div>
    </footer>
  );
}
