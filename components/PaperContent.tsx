'use client';

export default function PaperContent() {
  return (
    <div
      className="bg-white border-2 border-ink p-8 relative overflow-hidden"
      style={{
        boxShadow: '16px 16px 0 #1A1815',
        transform: 'rotate(1deg)',
      }}
    >
      {/* Overlay grid inside card */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(26,24,21,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(26,24,21,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Animated scanline */}
      <div
        className="absolute left-0 w-full pointer-events-none z-10"
        style={{
          height: '2px',
          backgroundColor: 'rgba(26,24,21,0.08)',
          animation: 'scanline 4s linear infinite',
          top: '0%',
        }}
      />

      {/* Content */}
      <div className="relative z-5">
        <h2 className="text-lg font-bold mb-6 leading-tight">
          CROSS-DOMAIN SIGNAL SYNCHRONIZATION IN HYBRID SYSTEMS
        </h2>

        <div className="space-y-5 text-sm leading-relaxed">
          <section>
            <h3 className="font-bold mb-1">Abstract:</h3>
            <p>
              We analyze synchronization across AI, mechanical, and electrical subsystems.
              Results indicate that stable convergence occurs only under constrained states.
            </p>
          </section>

          <section>
            <h3 className="font-bold mb-1">Methodology:</h3>
            <p>
              Each subsystem produces a normalized output between 0 and 1.
              Let S = Σ (ai + mi + ei) for all i ∈ N.
            </p>
          </section>

          <section>
            <h3 className="font-bold mb-1">Observation:</h3>
            <p>
              Under controlled conditions, stability is achieved when S → 42.
            </p>
          </section>

          <section>
            <h3 className="font-bold mb-1">Note:</h3>
            <p>
              In rare edge cases, the convergence constant deviates.
              These cases are typically indexed by the sequence: R, M, T.
            </p>
          </section>

          <section>
            <h3 className="font-bold mb-1">Conclusion:</h3>
            <p>
              The final convergence state is uniquely identified by combining
              the constant and the sequence index.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
