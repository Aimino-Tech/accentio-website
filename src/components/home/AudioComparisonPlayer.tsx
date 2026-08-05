import { useRef, useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Play, Pause } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { Badge } from "@/components/ui/badge";

const audioTracks = [
  {
    key: "audio_real_label",
    src: "/audio/real_speaker_zh.wav",
    isVerified: false,
  },
  {
    key: "audio_accentio_label",
    src: "/audio/accentio_zh.wav",
    isVerified: true,
  },
  {
    key: "audio_gemini_label",
    src: "/audio/gemini_zh.wav",
    isVerified: false,
  },
  {
    key: "audio_elevenlabs_label",
    src: "/audio/elevenlabs_zh.wav",
    isVerified: false,
  },
];

interface AudioRowProps {
  label: string;
  src: string;
  isVerified: boolean;
  verifiedBadge: string;
  playLabel: string;
  pauseLabel: string;
}

function AudioRow({
  label,
  src,
  isVerified,
  verifiedBadge,
  playLabel,
  pauseLabel,
}: AudioRowProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTimeUpdate = () => {
      setProgress(audio.currentTime);
    };
    const onLoaded = () => setDuration(audio.duration);
    const onEnded = () => setPlaying(false);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      // Pause all other audio
      document.querySelectorAll("audio").forEach((a) => {
        if (a !== audio) a.pause();
      });
      audio.play();
      setPlaying(true);
    }
  }, [playing]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setProgress(time);
    if (audioRef.current) audioRef.current.currentTime = time;
  };

  return (
    <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl border border-border bg-card">
      <audio ref={audioRef} src={src} preload="none" />
      <button
        onClick={togglePlay}
        className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors focus-ring"
        aria-label={playing ? pauseLabel : playLabel}
      >
        {playing ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4 ml-0.5" />
        )}
      </button>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium truncate">{label}</span>
          {isVerified && (
            <Badge
              variant="secondary"
              className="shrink-0 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px]"
            >
              {verifiedBadge}
            </Badge>
          )}
        </div>
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
  );
}

const AudioComparisonPlayer = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useInView();

  return (
    <section
      ref={ref}
      className={`py-20 sm:py-24 lg:py-32 ${isVisible ? "reveal is-visible" : "reveal"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
            {t("audio_badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            {t("audio_title")}
          </h2>
          <p className="text-muted-foreground">{t("audio_sub")}</p>
        </div>
        <div className="max-w-2xl mx-auto space-y-3">
          {audioTracks.map((track) => (
            <AudioRow
              key={track.key}
              label={t(track.key)}
              src={track.src}
              isVerified={track.isVerified}
              verifiedBadge={t("audio_verified_badge")}
              playLabel={t("audio_play")}
              pauseLabel={t("audio_pause")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudioComparisonPlayer;
