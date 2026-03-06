import { Download, FileText, Eye } from "lucide-react";

const resumePath = "/resume/javid_resume.pdf";

export default function ResumeApp() {
  return (
    <div className="h-full space-y-3">
      <div className="flex items-center justify-between rounded-xl border border-zinc-700/80 bg-zinc-800/60 px-3 py-2.5 backdrop-blur">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-600 bg-zinc-900/80">
            <FileText size={15} className="text-zinc-200" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-medium text-zinc-100">javid_resume.pdf</p>
            <p className="text-[11px] text-zinc-400">PDF Document</p>
          </div>
        </div>

        <a
          href={resumePath}
          download="javid_resume.pdf"
          className="inline-flex items-center gap-1.5 rounded-md border border-zinc-500 bg-linear-to-b from-zinc-200 to-zinc-100 px-3 py-1.5 text-xs font-semibold text-zinc-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition hover:brightness-105"
        >
          <Download size={14} />
          Download
        </a>
      </div>

      <div className="flex items-center gap-2 px-1 text-xs text-zinc-400">
        <Eye size={14} />
        <span>Preview</span>
      </div>

      <div className="h-[calc(100%-78px)] overflow-hidden rounded-xl border border-zinc-700 bg-white shadow-[0_10px_24px_rgba(0,0,0,0.28)]">
        <iframe
          src={resumePath}
          title="Javid Resume"
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
