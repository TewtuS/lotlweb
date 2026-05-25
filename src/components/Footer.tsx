import Link from "next/link";
import { pinkPanel } from "@/lib/styles";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="contact" className="footer-dark px-6 py-12 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Logo />
          <Link
            id="purchase"
            href="#purchase"
            className="rounded-full bg-gradient-to-r from-[#EC4899] via-[#8B5CF6] to-[#3B82F6] px-10 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110"
          >
            Purchase
          </Link>
        </div>

        <div
          className={`${pinkPanel} mt-10 flex min-h-[120px] items-center justify-center rounded-3xl px-8 py-10 md:min-h-[140px]`}
        >
          <p className="text-center text-xl font-bold text-black md:text-2xl">
            Placeholder certs
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center">
          <Link
            href="#contact"
            className="rounded-full border-2 border-white px-12 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Contact Us
          </Link>

          <div className="mt-8 flex gap-3 text-xs text-white/60">
            <Link href="#" className="transition hover:text-white/90">
              Terms of Service
            </Link>
            <span>|</span>
            <Link href="#" className="transition hover:text-white/90">
              Privacy Policy
            </Link>
          </div>

          <p className="mt-4 text-xs text-white/50">© 2024 Lotl Labs</p>
        </div>
      </div>
    </footer>
  );
}
