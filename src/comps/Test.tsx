export default function Test() {
  return (
    <div className="p-8 space-y-4 bg-dark min-h-screen text-white">
      <h1 className="text-3xl font-bold text-primary">
        Testing Primary Color (#1d4ed8)
      </h1>
      
      <p className="text-accent">
        Testing Accent Color (#38bdf8)
      </p>

      <div className="p-4 rounded-lg bg-surface border border-primary/30">
        <p className="text-background-light">
          Testing Surface Background (#1e293b) & Light Text (#f8fafc)
        </p>
      </div>

      <button className="px-4 py-2 rounded bg-accent hover:bg-accent-hover text-black font-semibold transition-colors">
        Hover Test (Accent to Accent-Hover)
      </button>
    </div>
  );
}