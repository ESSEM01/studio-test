import { useMemo } from "react";

export default function WaveformBar({ playing, bars = 40 }) {
  // Pre-compute random heights so they don't change on re-render
  const barData = useMemo(
    () =>
      Array.from({ length: bars }, (_, i) => ({
        height: 8 + Math.sin(i * 0.5) * 16 + Math.random() * 12,
        opacity: 0.6 + Math.random() * 0.4,
      })),
    [bars]
  );

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2, height: 40 }}>
      {barData.map((bar, i) => (
        <div
          key={i}
          style={{
            width: 3,
            borderRadius: 2,
            background: "linear-gradient(180deg, #D4A853 0%, #8B6914 100%)",
            height: playing ? bar.height : 4,
            opacity: playing ? bar.opacity : 0.3,
            transition: `height 0.4s ease ${i * 0.02}s, opacity 0.4s ease`,
          }}
        />
      ))}
    </div>
  );
}
