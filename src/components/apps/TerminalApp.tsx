import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

const PROMPT = "visitor@portfolio:~$";

type TerminalHistoryEntry = {
  id: number;
  command: string;
  output: string[];
};

const COMMAND_OUTPUTS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "whoami",
    "skills",
    "projects",
    "contact",
    "clear",
  ],
  whoami: [
    "Full Stack Developer",
    "React | Django | MongoDB",
  ],
  skills: [
    "Frontend: React, Tailwind, JavaScript",
    "Backend: Django, Node.js",
    "Database: MongoDB, PostgreSQL",
  ],
  projects: [
    "Bridal Rental System",
    "Hotel Booking App",
    "Admin Dashboard",
  ],
  contact: [
    "Email: your@email.com",
    "GitHub: github.com/username",
    "Portfolio: yourportfolio.com",
  ],
};

function resolveCommand(command: string): { clear: boolean; output: string[] } {
  const normalized = command.toLowerCase();

  if (normalized === "clear") {
    return { clear: true, output: [] };
  }

  if (COMMAND_OUTPUTS[normalized]) {
    return { clear: false, output: COMMAND_OUTPUTS[normalized] };
  }

  return { clear: false, output: [`command not found: ${command}`] };
}

export default function TerminalApp() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalHistoryEntry[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyIdRef = useRef(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTop = container.scrollHeight;
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const command = input.trim();
    if (!command) return;

    const result = resolveCommand(command);

    if (result.clear) {
      setHistory([]);
      setInput("");
      return;
    }

    historyIdRef.current += 1;
    setHistory((prev) => [
      ...prev,
      {
        id: historyIdRef.current,
        command,
        output: result.output,
      },
    ]);
    setInput("");
  };

  return (
    <div
      className="h-full overflow-hidden rounded-md bg-zinc-950 p-3 text-sm text-zinc-100"
      onClick={() => inputRef.current?.focus()}
    >
      <div ref={scrollRef} className="h-full overflow-auto">
        {history.map((entry) => (
          <div key={entry.id} className="mb-3">
            <div className="mb-1 flex items-center gap-2">
              <span className="text-emerald-400">{PROMPT}</span>
              <span>{entry.command}</span>
            </div>
            {entry.output.map((line, index) => (
              <div key={`${entry.id}-${index}`} className="leading-6 text-zinc-200">
                {line}
              </div>
            ))}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="shrink-0 text-emerald-400">{PROMPT}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="w-full bg-transparent text-zinc-100 outline-none"
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal command input"
          />
        </form>
      </div>
    </div>
  );
}
