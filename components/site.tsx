"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Activity,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCheck,
  ChevronDown,
  Download,
  Flag,
  ListChecks,
  Menu,
  NotebookPen,
  Sparkles,
  Timer,
  X,
} from "lucide-react";
import { features, faqs, product } from "@/lib/product";
import { cn } from "@/lib/utils";

const iconMap = {
  ListChecks,
  Timer,
  CalendarDays,
  CheckCheck,
  Flag,
  NotebookPen,
  Activity,
  Sparkles,
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f4f7fb]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold tracking-tight"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-[#203d63] text-sm font-bold text-white">
            M
          </span>
          <span>Mlue Timer</span>
        </Link>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          className={`${open ? "flex" : "hidden"} absolute inset-x-4 top-16 flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <a
            href="#features"
            onClick={() => setOpen(false)}
            className="text-sm text-slate-600 transition hover:text-[#203d63]"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            onClick={() => setOpen(false)}
            className="text-sm text-slate-600 transition hover:text-[#203d63]"
          >
            How it works
          </a>
          <a
            href="#faq"
            onClick={() => setOpen(false)}
            className="text-sm text-slate-600 transition hover:text-[#203d63]"
          >
            FAQ
          </a>
          <DownloadLink className="md:ml-3" />
        </nav>
      </div>
    </header>
  );
}

export function DownloadLink({ className = "" }: { className?: string }) {
  return product.installerAvailable ? (
    <a
      href={product.installerPath}
      download
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-[#203d63] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#203d63]/15 transition hover:-translate-y-0.5 hover:bg-[#162d4b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#203d63]",
        className,
      )}
    >
      <Download className="size-4" /> Download for Windows
    </a>
  ) : (
    <Link
      href="/download"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#203d63] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#203d63]/15 transition hover:-translate-y-0.5 hover:bg-[#162d4b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#203d63] ${className}`}
    >
      <Download className="size-4" /> Download for Windows
    </Link>
  );
}

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-28">
      <div className="grid items-center gap-14 lg:grid-cols-[.82fr_1.18fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cad7e5] bg-white px-3 py-1.5 text-xs font-semibold text-[#203d63]">
            <span className="size-2 rounded-full bg-emerald-500" /> Available
            for Windows
          </div>
          <h1 className="max-w-xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-[#142942] sm:text-6xl lg:text-7xl">
            Make every day <span className="text-[#7894b3]">count.</span>
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-slate-600">
            {product.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <DownloadLink />
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#203d63] transition hover:border-[#203d63]"
            >
              Explore features <ArrowRight className="size-4" />
            </a>
          </div>
          <p className="mt-5 text-xs font-medium uppercase tracking-[.18em] text-slate-400">
            Your day. Your goals. One focused workspace.
          </p>
        </div>
        <Screenshot />
      </div>
    </section>
  );
}

export function Screenshot() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-[#dce7f2] blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white bg-white p-1.5 shadow-2xl shadow-[#203d63]/15">
        <img
          src={product.screenshotUrl}
          alt="Mlue Timer desktop app showing tasks, focus timer, schedule, goals, habits, and notes"
          className="block h-auto w-full rounded-xl"
        />
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="border-y border-slate-200 bg-white/70">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">A clearer way to work</p>
          <h2 className="section-title">
            Everything you need to run your day.
          </h2>
          <p className="section-copy">
            Mlue Timer brings your daily productivity tools together in one calm
            desktop workspace.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(([number, title, description, icon]) => {
            const Icon = iconMap[icon];
            return (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 transition hover:-translate-y-1 hover:border-[#9baec3] hover:shadow-lg hover:shadow-slate-200/60"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[.18em] text-[#7894b3]">
                    {number}
                  </span>
                  <Icon className="size-5 text-[#203d63]" />
                </div>
                <h3 className="mt-10 text-lg font-semibold text-[#142942]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    [
      "01",
      "Plan your day",
      "Organize tasks, prioritize important work, and decide what deserves your attention.",
    ],
    [
      "02",
      "Focus on what matters",
      "Use the focus timer and schedule to structure your workday.",
    ],
    [
      "03",
      "Build consistency",
      "Track habits, review your progress, and keep moving toward your goals.",
    ],
  ];
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"
    >
      <p className="eyebrow">A simple rhythm</p>
      <h2 className="section-title max-w-2xl">
        Small steps, meaningful progress.
      </h2>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {steps.map(([number, title, text]) => (
          <div
            key={number}
            className="relative rounded-2xl border border-slate-200 bg-white p-7"
          >
            <span className="text-5xl font-semibold tracking-[-.08em] text-[#d5e0eb]">
              {number}
            </span>
            <h3 className="mt-8 text-xl font-semibold text-[#142942]">
              {title}
            </h3>
            <p className="mt-3 leading-7 text-slate-500">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="border-t border-slate-200 bg-white/70">
      <div className="mx-auto max-w-3xl px-5 py-20 lg:py-28">
        <p className="eyebrow">Questions, answered</p>
        <h2 className="section-title">Good to know.</h2>
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#142942] [&::-webkit-details-marker]:hidden">
                {question}
                <ChevronDown className="size-5 shrink-0 text-slate-400 transition group-open:rotate-180" />
              </summary>
              <p className="max-w-2xl pt-3 text-sm leading-6 text-slate-500">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:flex-row sm:items-end sm:justify-between lg:px-8">
        <div>
          <div className="flex items-center gap-3 font-semibold text-[#142942]">
            <span className="grid size-8 place-items-center rounded-lg bg-[#203d63] text-xs font-bold text-white">
              M
            </span>
            Mlue Timer
          </div>
          <p className="mt-3 max-w-sm text-sm text-slate-500">
            A focused workspace for tasks, time, habits, and goals.
          </p>
        </div>
        <div className="flex gap-5 text-sm text-slate-500">
          <a href="#features" className="hover:text-[#203d63]">
            Features
          </a>
          <a href="#faq" className="hover:text-[#203d63]">
            FAQ
          </a>
          <Link href="/download" className="hover:text-[#203d63]">
            Download
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 pb-8 text-xs text-slate-400 lg:px-8">
        © {new Date().getFullYear()} Mlue Timer. Windows desktop app.
      </div>
    </footer>
  );
}

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
      <div className="overflow-hidden rounded-[2rem] bg-[#203d63] px-6 py-14 text-center text-white sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#b8c9db]">
          Start with intention
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-[-.05em] sm:text-5xl">
          Your next productive day starts here.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[#d5e0eb]">
          Bring your tasks, focus sessions, habits, and goals together with Mlue
          Timer.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <DownloadLink className="bg-white text-[#203d63] hover:bg-[#edf3f8]" />
          <Link
            href="/download"
            className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white underline underline-offset-4"
          >
            View download details
          </Link>
        </div>
      </div>
    </section>
  );
}
