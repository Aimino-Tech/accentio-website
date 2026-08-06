import { useRef, useState, useEffect, useCallback } from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useInView } from "@/hooks/useInView";

// Bilingual learning content (German sentence + term glosses) is locale-
// selected here rather than in i18n.ts because each entry is inherently
// two-language (the German term stays German in both locales).
const useCases = [
  {
    idx: 1,
    titleKey: "uc_1_title",
    subKey: "uc_1_sub",
    problemKey: "uc_1_problem",
    solutionKey: "uc_1_solution",
    diffKey: "uc_1_diff",
    sampleLabelKey: "usecase_1_sample_label",
    audioSrc: "/audio/usecase/usecase-tr.wav",
    sentence: "Der Patient hat starke Schmerzen im Brustbereich, bitte geben Sie Morphin fünf Milligramm.",
    vocab: [
      { term: "der Patient", en: "the patient", de: "der Patient" },
      { term: "starke Schmerzen", en: "severe pain", de: "starke Schmerzen" },
      { term: "der Brustbereich", en: "chest area", de: "der Brustbereich" },
      { term: "das Morphin", en: "morphine", de: "das Morphin" },
      { term: "fünf Milligramm", en: "five milligrams", de: "fünf Milligramm" },
    ],
  },
  {
    idx: 2,
    titleKey: "uc_2_title",
    subKey: "uc_2_sub",
    problemKey: "uc_2_problem",
    solutionKey: "uc_2_solution",
    diffKey: "uc_2_diff",
    sampleLabelKey: "usecase_2_sample_label",
    audioSrc: "/audio/usecase/usecase-fr.wav",
    sentence: "Bei der Auskultation hören wir feuchte Rasselgeräusche über beiden Lungenflügeln.",
    vocab: [
      { term: "die Auskultation", en: "auscultation (listening)", de: "die Auskultation" },
      { term: "feuchte Rasselgeräusche", en: "moist crackles (rales)", de: "feuchte Rasselgeräusche" },
      { term: "die Lungenflügel", en: "the lungs", de: "die Lungenflügel" },
      { term: "hören", en: "to hear", de: "hören" },
      { term: "beide", en: "both", de: "beide" },
    ],
  },
  {
    idx: 3,
    titleKey: "uc_3_title",
    subKey: "uc_3_sub",
    problemKey: "uc_3_problem",
    solutionKey: "uc_3_solution",
    diffKey: "uc_3_diff",
    sampleLabelKey: "usecase_3_sample_label",
    audioSrc: "/audio/usecase/usecase-en.wav",
    sentence: "Mayday, wir haben einen Notfall an Bord, bitte bereiten Sie die Landebahn vor.",
    vocab: [
      { term: "Mayday", en: "international distress call", de: "Notruf (Seefunk)" },
      { term: "der Notfall", en: "emergency", de: "der Notfall" },
      { term: "an Bord", en: "on board", de: "an Bord" },
      { term: "die Landebahn", en: "runway", de: "die Landebahn" },
      { term: "vorbereiten", en: "to prepare", de: "vorbereiten" },
    ],
  },
  {
    idx: 4,
    titleKey: "uc_4_title",
    subKey: "uc_4_sub",
    problemKey: "uc_4_problem",
    solutionKey: "uc_4_solution",
    diffKey: "uc_4_diff",
    sampleLabelKey: "usecase_4_sample_label",
    audioSrc: "/audio/usecase/usecase-es.wav",
    sentence: "Willkommen zum Onboarding. Heute lernen Sie die wichtigsten Abläufe im Krankenhaus kennen.",
    vocab: [
      { term: "das Onboarding", en: "onboarding", de: "das Onboarding" },
      { term: "lernen", en: "to learn", de: "lernen" },
      { term: "die Abläufe", en: "processes / procedures", de: "die Abläufe" },
      { term: "wichtig", en: "important", de: "wichtig" },
      { term: "das Krankenhaus", en: "hospital", de: "das Krankenhaus" },
    ],
  },
  {
    idx: 5,
    titleKey: "uc_5_title",
    subKey: "uc_5_sub",
    problemKey: "uc_5_problem",
    solutionKey: "uc_5_solution",
    diffKey: "uc_5_diff",
    sampleLabelKey: "usecase_5_sample_label",
    audioSrc: "/audio/usecase/usecase-ru.wav",
    sentence: "Achtung! Die Sauerstoffversorgung fällt aus. Alle Einheiten zum Notfallbereich.",
    vocab: [
      { term: "Achtung", en: "attention / alert", de: "Achtung" },
      { term: "die Sauerstoffversorgung", en: "oxygen supply", de: "die Sauerstoffversorgung" },
      { term: "ausfallen", en: "to fail / go down", de: "ausfallen" },
      { term: "die Einheiten", en: "the units", de: "die Einheiten" },
      { term: "der Notfallbereich", en: "emergency area", de: "der Notfallbereich" },
    ],
  },
];

interface UseCaseAudioDemoProps {
  label: string;
  src: string;
  playLabel: string;
  pauseLabel: string;
}

function UseCaseAudioDemo({ label, src, playLabel, pauseLabel }: UseCaseAudioDemoProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTimeUpdate = () => setProgress(audio.currentTime);
    const onLoaded = () => setDuration(audio.duration);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoaded);
    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoaded);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
    } else {
      document.querySelectorAll("audio").forEach((a) => {
        if (a !== audio) a.pause();
      });
      void audio.play();
    }
  }, []);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setProgress(time);
    if (audioRef.current) audioRef.current.currentTime = time;
  };

  return (
    <div className="mt-4 pt-3 border-t border-border">
      <div className="flex items-center gap-3">
        <audio ref={audioRef} src={src} preload="none" />
        <button
          onClick={togglePlay}
          className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors focus-ring"
          aria-label={playing ? pauseLabel : playLabel}
        >
          {playing ? (
            <Pause className="h-3.5 w-3.5" />
          ) : (
            <Play className="h-3.5 w-3.5 ml-0.5" />
          )}
        </button>
        <div className="flex-1 min-w-0">
          <span className="block text-xs font-medium text-muted-foreground truncate mb-1">
            {label}
          </span>
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={progress}
            onChange={handleSeek}
            className="audio-progress w-full"
            aria-label={`${label} progress`}
          />
        </div>
      </div>
    </div>
  );
}

const UseCasesSection = () => {
  const { t, i18n } = useTranslation();
  const { ref, isVisible } = useInView();
  const [slide, setSlide] = useState(0);
  const lang = (i18n.language || "en").split("-")[0];
  const total = useCases.length;

  const prev = useCallback(() => setSlide((s) => (s - 1 + total) % total), [total]);
  const next = useCallback(() => setSlide((s) => (s + 1) % total), [total]);

  const uc = useCases[slide];

  return (
    <section
      id="use-cases"
      ref={ref}
      className={`py-20 sm:py-24 lg:py-32 ${isVisible ? "reveal is-visible" : "reveal"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
            {t("use_cases_badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            {t("use_cases_title")}
          </h2>
          <p className="text-muted-foreground">{t("use_cases_sub")}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-xl border border-border bg-card overflow-hidden"
            aria-roledescription="carousel"
            aria-label={t("use_cases_title")}
          >
            <div className="grid md:grid-cols-2">
              {/* Left: sentence + vocabulary */}
              <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center rounded-full bg-accentio-500/10 border border-accentio-500/20 px-3 py-1 text-xs font-medium text-accentio-400">
                    {t(uc.diffKey)}
                  </span>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {slide + 1} / {total}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-1">{t(uc.titleKey)}</h3>
                <p className="text-xs text-accentio-400 font-medium mb-4">
                  {t(uc.subKey)}
                </p>

                <p className="text-sm leading-relaxed mb-5 font-medium border-l-2 border-accentio-500/40 pl-3">
                  {uc.sentence}
                </p>

                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-2">
                  {t("usecase_vocab_title")}
                </span>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  {uc.vocab.map((v) => (
                    <div key={v.term} className="flex items-baseline gap-2 border-b border-border/60 pb-1">
                      <dt className="font-medium shrink-0">{v.term}</dt>
                      <dd className="text-muted-foreground text-xs text-left">
                        {lang === "de" ? v.de : v.en}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Right: problem/solution + audio */}
              <div className="p-6 sm:p-8 flex flex-col">
                <div className="space-y-4 text-sm mb-6">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {t("usecase_problem_label")}
                    </span>
                    <p className="text-muted-foreground mt-1">{t(uc.problemKey)}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {t("usecase_solution_label")}
                    </span>
                    <p className="text-muted-foreground mt-1">{t(uc.solutionKey)}</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <UseCaseAudioDemo
                    label={t(uc.sampleLabelKey)}
                    src={uc.audioSrc}
                    playLabel={t("audio_play")}
                    pauseLabel={t("audio_pause")}
                  />
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-border">
              <button
                onClick={prev}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md px-2 py-1"
                aria-label={t("usecase_prev")}
              >
                <ChevronLeft className="h-4 w-4" />
                {t("usecase_prev")}
              </button>
              <div className="flex gap-2" role="tablist" aria-label={t("usecases_dots_label")}>
                {useCases.map((c, i) => (
                  <button
                    key={c.idx}
                    onClick={() => setSlide(i)}
                    role="tab"
                    aria-selected={i === slide}
                    aria-label={`${t("usecases_dots_label")} ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ease-soft focus-ring ${
                      i === slide ? "w-6 bg-primary" : "w-2 bg-muted hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md px-2 py-1"
                aria-label={t("usecase_next")}
              >
                {t("usecase_next")}
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
