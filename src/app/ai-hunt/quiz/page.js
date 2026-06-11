import QuizGame from '@/components/QuizGame';

export const metadata = {
  title: 'AI Knowledge Quiz – AI Job Hub',
  description: 'Test your AI knowledge with 50 questions on Machine Learning, Deep Learning, NLP, Prompt Engineering and AI Ethics.',
};

export default function QuizPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="border-b border-cyan-500/10 bg-neural-800/40 py-6 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs mb-3">
            🎯 Interactive Learning
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
            AI Knowledge <span className="text-gradient">Quiz</span>
          </h1>
          <p className="text-slate-400 text-sm">
            50 questions · 5 categories · Timed · Hints available
          </p>
        </div>
      </div>

      {/* Quiz */}
      <QuizGame />
    </div>
  );
}
