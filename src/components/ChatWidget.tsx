import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, X, Send, Bot, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { localAnswer, suggestFollowups } from "@/lib/localAssistant";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const INTRO = `Bonjour 👋 Je suis l'assistant de ${site.name}. Je peux vous renseigner sur nos formations, les financements, les prérequis ou l'inscription.`;

// Transforme les chemins /xxx et le numéro de téléphone en liens cliquables.
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\/[a-z0-9-]+(?:\/[a-z0-9-]+)*|\b0\d(?:[ .]?\d\d){4}\b)/gi);
  return (
    <>
      {parts.map((p, i) => {
        if (/^\/[a-z0-9]/i.test(p)) {
          return (
            <Link key={i} to={p} className="font-semibold text-brand-green underline underline-offset-2 hover:text-brand-green-dark">
              {p}
            </Link>
          );
        }
        if (/^0\d/.test(p.replace(/[ .]/g, "")) && p.replace(/[ .]/g, "").length === 10) {
          return (
            <a key={i} href={`tel:${p.replace(/[ .]/g, "")}`} className="font-semibold text-brand-green underline underline-offset-2">
              {p}
            </a>
          );
        }
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [pinged, setPinged] = useState(true); // halo d'appel tant que pas ouvert
  const scrollRef = useRef<HTMLDivElement>(null);

  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const suggestions = suggestFollowups(lastUser?.content);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;
    setInput("");
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      // Repli sur l'assistant local si l'IA n'est pas configurée ou en cas d'erreur.
      if (!res.ok) {
        setMessages((m) => [...m, { role: "assistant", content: localAnswer(content) }]);
        return;
      }
      const data = await res.json();
      const reply = data?.reply || localAnswer(content);
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: localAnswer(content) }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => {
          setOpen((o) => !o);
          setPinged(false);
        }}
        aria-label="Ouvrir l'assistant"
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-emerald-400 text-white shadow-glow transition-transform hover:scale-110"
      >
        {!open && pinged && (
          <span className="absolute inset-0 rounded-full bg-brand-green/60 animate-ping-slow" />
        )}
        {open ? <X className="relative h-6 w-6" /> : <MessageCircle className="relative h-6 w-6" />}
      </button>

      {/* Panneau */}
      {open && (
        <div className="fixed bottom-24 right-5 z-[60] flex h-[34rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl animate-fade-up">
          {/* En-tête dégradé */}
          <div className="relative flex items-center gap-3 overflow-hidden bg-immersive px-4 py-3.5 text-white">
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-cyan/30 blur-2xl" />
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
              <Bot className="h-5 w-5" />
            </span>
            <div className="relative">
              <p className="flex items-center gap-1.5 text-sm font-bold leading-tight">
                Assistant {site.name}
                <Sparkles className="h-3.5 w-3.5 text-brand-cyan" />
              </p>
              <p className="flex items-center gap-1.5 text-xs text-white/70">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" /> En ligne · réponse immédiate
              </p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4">
            {/* message d'accueil */}
            <div className="flex gap-2">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                <Bot className="h-4 w-4 text-brand-green" />
              </span>
              <div className="rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-sm text-slate-700 shadow-sm">
                <RichText text={INTRO} />
              </div>
            </div>

            {messages.map((m, i) => (
              <div key={i} className={`flex gap-2 ${m.role === "user" ? "justify-end" : ""}`}>
                {m.role === "assistant" && (
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                    <Bot className="h-4 w-4 text-brand-green" />
                  </span>
                )}
                <div
                  className={`max-w-[82%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm shadow-sm ${
                    m.role === "user"
                      ? "rounded-tr-sm bg-brand-green text-white"
                      : "rounded-tl-sm bg-white text-slate-700"
                  }`}
                >
                  {m.role === "assistant" ? <RichText text={m.content} /> : m.content}
                </div>
              </div>
            ))}

            {/* indicateur de frappe */}
            {loading && (
              <div className="flex gap-2">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                  <Bot className="h-4 w-4 text-brand-green" />
                </span>
                <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-white px-3.5 py-3 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-bounce-dot" />
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-bounce-dot [animation-delay:0.2s]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-bounce-dot [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          {/* Suggestions contextuelles */}
          {!loading && (
            <div className="flex flex-wrap gap-1.5 border-t border-slate-100 bg-white px-3 pt-3">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-brand-navy transition-colors hover:border-brand-green/50 hover:bg-brand-green/5"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 bg-white p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Écrivez votre question…"
              className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-sm outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Envoyer"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-emerald-400 text-white transition-transform hover:scale-105 disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
