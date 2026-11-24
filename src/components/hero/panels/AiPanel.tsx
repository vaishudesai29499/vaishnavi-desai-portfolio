import { ArrowRight } from 'lucide-react'

const STEPS = ['WhatsApp message', 'n8n webhook', 'AI agent', 'Validated reply']
const TOOLS = ['OpenAI API', 'Gemini API', 'Evolution API', 'Conversation memory']
const PRACTICES = ['Prompt engineering', 'Structured JSON', 'Output guardrails', 'LLM evaluation']

const Arrow = () => <ArrowRight size={14} aria-hidden="true" className="hidden flex-none self-center text-ice/40 sm:block" />

/** Illustrative flow of the WhatsApp agent. */
export default function AiPanel() {
  return (
    <div className="flex min-h-[220px] flex-col gap-3 p-4 sm:min-h-[270px] sm:p-5">
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-stretch sm:gap-2">
        {STEPS.map((step, i) => (
          <div key={step} className="flex min-w-0 flex-1 items-stretch gap-1.5 sm:gap-2">
            <div
              className={`flex min-w-0 flex-1 items-center justify-center rounded-lg border px-2 py-2 text-center text-[11px] leading-tight sm:text-[12px] ${
                i === 2 ? 'border-[#7621B0]/60 bg-[#7621B0]/15 text-white' : i === 3 ? 'border-[#4ade80]/50 bg-[#4ade80]/10 text-white' : 'border-ice/20 bg-white/[0.03] text-ice'
              }`}
            >
              {step}
            </div>
            {i < STEPS.length - 1 && <Arrow />}
          </div>
        ))}
      </div>

      <ul className="flex flex-wrap gap-2">
        {TOOLS.map((t) => (
          <li key={t} className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[11px] text-ice/75">{t}</li>
        ))}
      </ul>

      <ul className="mt-auto flex flex-wrap gap-2">
        {PRACTICES.map((p) => (
          <li key={p} className="rounded-full border border-ice/20 px-2.5 py-0.5 text-[11px] text-ice/80">{p}</li>
        ))}
      </ul>
    </div>
  )
}
