import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const queries = [
  "What's the best CRM for a growing sales team?",
  "Which project management tool should I use?",
  "What accounting software do you recommend for startups?",
  "Best marketing automation platform for B2B?",
];

const competitors = [
  ["HubSpot", "Salesforce", "Pipedrive"],
  ["Asana", "Monday.com", "ClickUp"],
  ["Xero", "QuickBooks", "FreshBooks"],
  ["Marketo", "ActiveCampaign", "Mailchimp"],
];

const AIConversation = () => {
  const [queryIndex, setQueryIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "answer" | "warning">("typing");

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    // Phase 1: "typing" for 1.2s
    timers.push(setTimeout(() => setPhase("answer"), 1200));
    // Phase 2: show answer, then warning after 1.5s
    timers.push(setTimeout(() => setPhase("warning"), 2700));
    // Phase 3: hold for 4s, then cycle
    timers.push(
      setTimeout(() => {
        setPhase("typing");
        setQueryIndex((prev) => (prev + 1) % queries.length);
      }, 7000)
    );

    return () => timers.forEach(clearTimeout);
  }, [queryIndex]);

  const currentQuery = queries[queryIndex];
  const currentCompetitors = competitors[queryIndex];

  return (
    <div className="premium-card overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-border/40">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-primary/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-primary/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-primary/15" />
        </div>
        <span className="text-xs text-muted-foreground/50 font-sans ml-2">AI Search</span>
      </div>

      <div className="p-5 space-y-4">
        {/* User query */}
        <div className="flex justify-end">
          <motion.div
            key={`q-${queryIndex}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-primary/10 border border-primary/15 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%]"
          >
            <p className="text-sm text-foreground/90 font-sans">{currentQuery}</p>
          </motion.div>
        </div>

        {/* AI response */}
        <div className="flex justify-start">
          <div className="max-w-[90%]">
            {phase === "typing" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-1.5 px-4 py-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 animate-[pulse_1.2s_ease-in-out_infinite]" />
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 animate-[pulse_1.2s_ease-in-out_0.2s_infinite]" />
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 animate-[pulse_1.2s_ease-in-out_0.4s_infinite]" />
              </motion.div>
            )}

            {(phase === "answer" || phase === "warning") && (
              <motion.div
                key={`a-${queryIndex}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-3"
              >
                <p className="text-sm text-muted-foreground font-sans px-1">
                  Based on my analysis, I'd recommend:
                </p>
                <div className="space-y-2">
                  {currentCompetitors.map((name, i) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.15 }}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg bg-secondary/40"
                    >
                      <span className="text-xs text-primary/50 font-sans font-medium w-4">
                        {i + 1}.
                      </span>
                      <span className="text-sm text-foreground/80 font-sans font-medium">
                        {name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {phase === "warning" && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 px-4 py-3 rounded-xl border border-primary/25 bg-primary/5"
              >
                <p className="text-xs font-sans text-primary font-medium">
                  Your brand isn't here. Neither are you.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConversation;
