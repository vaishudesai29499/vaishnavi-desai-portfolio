'use client';
import { useState, useEffect, useCallback } from 'react';

const CATEGORIES = [
  { id: 'all',    label: 'All Topics',        icon: '🌐', color: 'border-cyan-500/40 hover:border-cyan-400' },
  { id: 'ml',     label: 'Machine Learning',  icon: '🤖', color: 'border-blue-500/40 hover:border-blue-400' },
  { id: 'dl',     label: 'Deep Learning',     icon: '🧠', color: 'border-purple-500/40 hover:border-purple-400' },
  { id: 'nlp',    label: 'NLP & LLMs',        icon: '💬', color: 'border-cyan-500/40 hover:border-cyan-400' },
  { id: 'pe',     label: 'Prompt Engineering',icon: '✨', color: 'border-yellow-500/40 hover:border-yellow-400' },
  { id: 'ethics', label: 'AI Ethics',         icon: '⚖️', color: 'border-green-500/40 hover:border-green-400' },
];

const TIMER_SECONDS = 30;

export default function QuizGame() {
  const [screen, setScreen]           = useState('welcome'); // welcome | quiz | result
  const [selectedCat, setSelectedCat] = useState('all');
  const [questions, setQuestions]     = useState([]);
  const [current, setCurrent]         = useState(0);
  const [selected, setSelected]       = useState(null);
  const [revealed, setRevealed]       = useState(false);
  const [score, setScore]             = useState(0);
  const [streak, setStreak]           = useState(0);
  const [maxStreak, setMaxStreak]     = useState(0);
  const [hintsLeft, setHintsLeft]     = useState(3);
  const [hintShown, setHintShown]     = useState(false);
  const [timeLeft, setTimeLeft]       = useState(TIMER_SECONDS);
  const [answers, setAnswers]         = useState([]);
  const [loading, setLoading]         = useState(false);

  const q = questions[current];

  // Timer
  useEffect(() => {
    if (screen !== 'quiz' || revealed) return;
    if (timeLeft <= 0) { handleSelect(-1); return; }
    const t = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [screen, timeLeft, revealed]);

  const startQuiz = useCallback(async () => {
    setLoading(true);
    try {
      const cat = selectedCat === 'all' ? '' : selectedCat;
      const res = await fetch(`/api/quiz?category=${cat}&count=10`);
      const data = await res.json();
      setQuestions(data.questions || []);
      setCurrent(0); setScore(0); setStreak(0); setMaxStreak(0);
      setHintsLeft(3); setAnswers([]); setSelected(null);
      setRevealed(false); setTimeLeft(TIMER_SECONDS); setHintShown(false);
      setScreen('quiz');
    } catch {
      alert('Failed to load questions. Please try again.');
    } finally { setLoading(false); }
  }, [selectedCat]);

  const handleSelect = useCallback((idx) => {
    if (revealed || !q) return;
    setSelected(idx);
    setRevealed(true);
    const correct = idx === q.answer;
    const timeBonus = Math.floor(timeLeft * 2);
    const points = correct ? 100 + timeBonus : 0;
    setScore(s => s + points);
    const newStreak = correct ? streak + 1 : 0;
    setStreak(newStreak);
    setMaxStreak(ms => Math.max(ms, newStreak));
    setAnswers(a => [...a, { question: q.question, selected: idx, correct: q.answer, isCorrect: correct, points }]);
  }, [revealed, q, timeLeft, streak]);

  const handleNext = useCallback(() => {
    if (current + 1 >= questions.length) { setScreen('result'); return; }
    setCurrent(c => c + 1);
    setSelected(null); setRevealed(false);
    setTimeLeft(TIMER_SECONDS); setHintShown(false);
  }, [current, questions.length]);

  const useHint = () => {
    if (hintsLeft <= 0 || hintShown || revealed) return;
    setHintsLeft(h => h - 1);
    setHintShown(true);
  };

  const correctCount = answers.filter(a => a.isCorrect).length;
  const pct = questions.length ? Math.round((correctCount / questions.length) * 100) : 0;

  const grade = pct >= 90 ? { label: 'AI Expert', icon: '🏆', color: 'text-yellow-400' }
              : pct >= 70 ? { label: 'AI Practitioner', icon: '🥈', color: 'text-slate-300' }
              : pct >= 50 ? { label: 'AI Learner', icon: '🥉', color: 'text-amber-600' }
              : { label: 'Keep Learning!', icon: '📚', color: 'text-blue-400' };

  // ── Welcome Screen ──────────────────────────────────────────────────────────
  if (screen === 'welcome') return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <div className="text-6xl mb-4">🧠</div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">AI Knowledge Quiz</h1>
        <p className="text-slate-400 text-base">Test your AI expertise across Machine Learning, Deep Learning, NLP, Prompt Engineering & Ethics</p>
      </div>

      <div className="card p-6 mb-6">
        <h2 className="text-white font-semibold mb-4">Choose Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`p-3 rounded-xl border transition-all text-left ${cat.color} ${selectedCat === cat.id ? 'bg-white/10 scale-[1.03]' : 'bg-neural-700/40'}`}
            >
              <div className="text-xl mb-1">{cat.icon}</div>
              <div className="text-white text-xs font-semibold">{cat.label}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-8">
        {[['10', 'Questions'],['30s', 'Per Question'],['3', 'Hints']].map(([val,lbl]) => (
          <div key={lbl} className="card p-4 text-center">
            <div className="text-xl font-display font-bold text-cyan-400">{val}</div>
            <div className="text-slate-500 text-xs">{lbl}</div>
          </div>
        ))}
      </div>

      <button onClick={startQuiz} disabled={loading} className="btn-primary w-full py-3 text-base">
        {loading ? '⏳ Loading...' : '🚀 Start Quiz'}
      </button>
    </div>
  );

  // ── Result Screen ───────────────────────────────────────────────────────────
  if (screen === 'result') return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="card p-8 text-center">
        <div className="text-6xl mb-3">{grade.icon}</div>
        <h2 className={`text-2xl font-display font-bold mb-1 ${grade.color}`}>{grade.label}</h2>
        <p className="text-slate-400 text-sm mb-6">Quiz Complete!</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Score', value: score, icon: '⭐' },
            { label: 'Correct', value: `${correctCount}/${questions.length}`, icon: '✅' },
            { label: 'Accuracy', value: `${pct}%`, icon: '🎯' },
            { label: 'Best Streak', value: maxStreak, icon: '🔥' },
          ].map(s => (
            <div key={s.label} className="bg-neural-700/50 rounded-xl p-3">
              <div className="text-lg">{s.icon}</div>
              <div className="text-lg font-bold text-cyan-400">{s.value}</div>
              <div className="text-slate-500 text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Answer review */}
        <div className="text-left space-y-2 mb-6 max-h-64 overflow-y-auto pr-1">
          {answers.map((a, i) => (
            <div key={i} className={`p-3 rounded-lg text-xs flex items-start gap-2 ${a.isCorrect ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
              <span>{a.isCorrect ? '✅' : '❌'}</span>
              <span className="text-slate-300 line-clamp-1">{a.question}</span>
              {a.isCorrect && <span className="ml-auto text-green-400 font-mono">+{a.points}</span>}
            </div>
          ))}
        </div>

        <div className="flex gap-3 justify-center">
          <button onClick={() => setScreen('welcome')} className="btn-secondary px-6 py-2">
            🔄 New Quiz
          </button>
          <button onClick={startQuiz} className="btn-primary px-6 py-2">
            🔁 Retry
          </button>
        </div>
      </div>
    </div>
  );

  // ── Quiz Screen ─────────────────────────────────────────────────────────────
  if (!q) return null;
  const timerPct = (timeLeft / TIMER_SECONDS) * 100;
  const timerColor = timeLeft > 15 ? 'bg-cyan-500' : timeLeft > 7 ? 'bg-yellow-500' : 'bg-red-500';

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="font-mono text-cyan-400">Q{current + 1}/{questions.length}</span>
          <span className="badge bg-orange-500/10 border border-orange-500/20 text-orange-400">🔥 {streak}</span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="text-slate-400 font-mono">⭐ {score}</span>
          <div className={`font-mono font-bold ${timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-cyan-400'}`}>
            ⏱ {timeLeft}s
          </div>
        </div>
      </div>

      {/* Timer bar */}
      <div className="progress-bar mb-5">
        <div className={`progress-fill ${timerColor}`} style={{ width: `${timerPct}%`, transition: 'width 1s linear, background-color 0.3s' }} />
      </div>

      {/* Progress dots */}
      <div className="flex gap-1.5 mb-6">
        {questions.map((_, i) => (
          <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i < current ? 'bg-cyan-500' : i === current ? 'bg-blue-400' : 'bg-neural-600'}`} />
        ))}
      </div>

      {/* Question */}
      <div className="card p-6 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-mono px-2 py-0.5 rounded ${q.difficulty === 'easy' ? 'text-green-400 bg-green-500/10' : q.difficulty === 'medium' ? 'text-yellow-400 bg-yellow-500/10' : 'text-red-400 bg-red-500/10'}`}>
            {q.difficulty}
          </span>
          <span className="text-xs text-slate-600 font-mono uppercase">{q.category}</span>
        </div>
        <h2 className="text-white text-lg font-semibold leading-snug">{q.question}</h2>

        {hintShown && q.hint && (
          <div className="mt-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-xs">
            💡 Hint: {q.hint}
          </div>
        )}
      </div>

      {/* Options */}
      <div className="space-y-2.5 mb-5">
        {q.options.map((opt, i) => {
          let cls = 'quiz-option';
          if (revealed) {
            if (i === q.answer) cls += ' correct';
            else if (i === selected) cls += ' incorrect';
            else cls += ' opacity-50';
          }
          return (
            <button key={i} className={cls} onClick={() => handleSelect(i)} disabled={revealed}>
              <span className="inline-flex items-center gap-2">
                <span className="w-5 h-5 rounded-full border border-current flex-shrink-0 flex items-center justify-center text-[10px] font-bold">
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
                {revealed && i === q.answer && <span className="ml-auto">✅</span>}
                {revealed && i === selected && i !== q.answer && <span className="ml-auto">❌</span>}
              </span>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {revealed && q.explanation && (
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200 text-xs leading-relaxed mb-4 animate-fade-in">
          📖 {q.explanation}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between">
        <button
          onClick={useHint}
          disabled={hintsLeft <= 0 || hintShown || revealed}
          className="btn-secondary px-4 py-2 text-xs disabled:opacity-40"
        >
          💡 Hint ({hintsLeft} left)
        </button>
        {revealed && (
          <button onClick={handleNext} className="btn-primary px-6 py-2 animate-fade-in">
            {current + 1 >= questions.length ? '🏁 See Results' : 'Next →'}
          </button>
        )}
      </div>
    </div>
  );
}
