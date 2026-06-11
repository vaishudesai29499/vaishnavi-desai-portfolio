# 🧠 AI Job Hub — Full Production App

A complete full-stack AI career platform with jobs, news, blog, quiz, job radar and portfolio.

---

## 🚀 Quick Start (3 Steps)

```bash
# 1. Install
npm install

# 2. Already configured — just run
npm run dev

# 3. Open
http://localhost:3000
```

---

## 📱 Pages / Routes

| Route | Description |
|---|---|
| `/` | Home — hero, categories, platform cards, features |
| `/jobs` | All AI jobs with search + category filter |
| `/jobs/[category]` | 8 category pages (annotation, prompt-eng, training...) |
| `/job-radar` | 🎯 Job Radar — Outlier + Turing + CrossingHurdles in one view |
| `/news` | AI News with 🇮🇳 India + 🌐 Global filter |
| `/blog` | Medium blog @vaishnavidesai29 |
| `/quiz` | 50-question AI quiz with timer + hints + scoring |
| `/portfolio` | Developer portfolio (Vaishnavi Desai) |

---

## ⚙️ Job Sources (6 total — all FREE)

| Source | Type | API |
|---|---|---|
| **RemoteOK** | Remote AI jobs | Free, no key |
| **Remotive** | Remote tech jobs | Free, no key |
| **Arbeitnow** | Global job board | Free, no key |
| **Outlier AI** | AI Evaluation/Training | Greenhouse API + fallback |
| **Turing.com** | Remote dev roles | Static curated entries |
| **Crossing Hurdles** | AI/Data jobs | API + fallback |

---

## 📰 News Sources

**Global AI:** OpenAI, Anthropic, Google, Meta AI, Hugging Face, TechCrunch...
**Indian Tech:** Times of India · Economic Times · NDTV · Hindustan Times · The Hindu · LiveMint · Business Standard · Inc42 · YourStory

---

## ⏰ Cron Schedule

| Task | Frequency | Manual: POST /api/cron-trigger?type= |
|---|---|---|
| News | Every 6 hours | `news` |
| Jobs | Every 12 hours | `jobs` |
| Blog | Daily 8am | `blog` |

---

## 🔑 Environment (.env.local)

```env
NEWSAPI_KEY=19dadafb959c408fae16eee8609fb48f   # pre-configured
MEDIUM_USERNAME=vaishnavidesai29               # pre-configured
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 🛠 Tech Stack

Next.js 14 · Tailwind CSS · node-cron · axios · xml2js · JSON storage (no DB needed)
