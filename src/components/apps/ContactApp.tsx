import { Atom } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

type ContactCard = {
  label: string;
  href: string;
  icon: React.ReactNode;
  colorClass: string;
};

const contactCards: ContactCard[] = [
  {
    label: "Github",
    href: "https://github.com/your-github",
    icon: <FaGithub size={18} />,
    colorClass: "from-[#ef636e] to-[#ee5f69]",
  },
  {
    label: "Platform",
    href: "https://your-platform.example",
    icon: <Atom size={19} strokeWidth={2.2} />,
    colorClass: "from-[#57cd67] to-[#4dc35d]",
  },
  {
    label: "Twitter/X",
    href: "https://x.com/your_twitter",
    icon: <FaXTwitter size={18} />,
    colorClass: "from-[#f68f74] to-[#f37e62]",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-linkedin",
    icon: <FaLinkedinIn size={18} />,
    colorClass: "from-[#2ab7e7] to-[#1ea8dd]",
  },
];

export default function ContactApp() {
  return (
    <div className="h-full overflow-hidden rounded-xl border border-zinc-700/80 bg-zinc-900/70 p-4 text-zinc-100">
      <div className="mx-auto w-[460px] max-w-full">
        <div className="mb-2.5 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-zinc-600/70 bg-zinc-800/90 shadow-[0_8px_18px_rgba(0,0,0,0.35)]">
          <div
            className="flex h-full w-full items-center justify-center text-4xl font-semibold text-white"
            style={{
              background: "radial-gradient(circle at 25% 20%, #737373 0%, #404040 42%, #171717 100%)",
            }}
          >
            J
          </div>
        </div>

        <h2 className="text-[42px] leading-[1] font-semibold text-zinc-100">
          Let&apos;s Connect
        </h2>

        <p className="mt-3 text-[16px] leading-[1.25] font-medium text-zinc-200">
          Got an idea? A bug to squash? Or just wanna talk tech? I&apos;m in.
        </p>

        <div className="mt-4">
          <div className="flex gap-3">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className={`group flex h-[76px] w-[106px] flex-col justify-between rounded-xl border border-white/12 bg-linear-to-br ${card.colorClass} px-3 py-2 text-white shadow-[0_8px_16px_rgba(0,0,0,0.22)] transition duration-200 hover:-translate-y-0.5 hover:brightness-105`}
              >
                <span>{card.icon}</span>
                <span className="text-[13px] leading-none font-semibold tracking-[-0.01em]">
                  {card.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
