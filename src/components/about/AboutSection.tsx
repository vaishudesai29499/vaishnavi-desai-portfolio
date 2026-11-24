import FadeIn from '../ui/FadeIn'
import ContactButton from '../ui/ContactButton'
import AnimatedText from './AnimatedText'
import FloatingIcon from './FloatingIcon'
import { CodeIcon, CubeIcon, NetworkIcon, ChatIcon } from './AboutIcons'

const ABOUT_PARAGRAPHS = [
  'I build full-stack web applications and integrate production-grade AI into reliable software systems. With 5 years of full-stack engineering experience and hands-on work in AI agents, LLM evaluation, prompt engineering, and workflow automation, I turn prototypes into resilient, maintainable products.',
  'I started with responsive frontends, backend APIs, and relational databases, then expanded into production LLM systems—focusing on input/output validation, structured JSON, failure handling, latency/cost control, and edge cases beyond the happy path. My background spans enterprise platforms, AI-enabled SaaS, and consulting, backed by model evaluation and data annotation for quality-first AI reliability.',
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center gap-16 bg-ink px-5 py-20 sm:gap-20 sm:px-8 md:gap-24 md:px-10"
    >
      <FloatingIcon fromX={-80} delay={0.1} className="left-[1%] top-[4%] w-[64px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]">
        <CodeIcon />
      </FloatingIcon>
      <FloatingIcon fromX={80} delay={0.15} className="right-[1%] top-[4%] w-[64px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]">
        <NetworkIcon />
      </FloatingIcon>
      <FloatingIcon fromX={-80} delay={0.25} className="bottom-[8%] left-[3%] w-[56px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]">
        <CubeIcon />
      </FloatingIcon>
      <FloatingIcon fromX={80} delay={0.3} className="bottom-[8%] right-[3%] w-[64px] sm:right-[6%] sm:w-[150px] md:right-[10%] md:w-[200px]">
        <ChatIcon />
      </FloatingIcon>

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn y={40}>
          <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)]">About me</h2>
        </FadeIn>
        <div className="flex max-w-[640px] flex-col gap-6 sm:gap-8">
          {ABOUT_PARAGRAPHS.map((text) => (
            <AnimatedText
              key={text}
              text={text}
              className="text-left text-[clamp(1rem,1.8vw,1.25rem)] font-medium leading-relaxed text-ice sm:text-center"
            />
          ))}
        </div>
      </div>

      <FadeIn className="relative z-10">
        <ContactButton />
      </FadeIn>
    </section>
  )
}
