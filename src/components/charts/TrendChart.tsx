export function TrendChart() {
  return (
    <svg viewBox="0 0 320 150" role="img" aria-label="Focus and consistency trend">
      <path
        d="M24 114C48 106 64 82 88 78s31 18 52 10 34-37 58-36 27 21 46 15 34-38 52-34"
        className="chart-line"
      />
      <path
        d="M24 114C48 106 64 82 88 78s31 18 52 10 34-37 58-36 27 21 46 15 34-38 52-34V136H24Z"
        className="chart-fill"
      />
      {[24, 92, 160, 228, 296].map((x) => (
        <line key={x} x1={x} y1="18" x2={x} y2="136" className="chart-grid" />
      ))}
    </svg>
  );
}
