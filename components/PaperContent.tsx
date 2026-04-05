'use client';

export default function PaperContent() {
  return (
    <div
      className="bg-white border-2 border-ink p-6 md:p-8 relative overflow-hidden"
      style={{
        boxShadow: '16px 16px 0 #1A1815',
        transform: 'rotate(0.8deg)',
      }}
    >
      {/* Overlay grid inside card */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(26,24,21,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(26,24,21,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Animated scanline */}
      <div
        className="absolute left-0 w-full pointer-events-none z-10"
        style={{
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(26,24,21,0.12) 30%, rgba(26,24,21,0.12) 70%, transparent 100%)',
          animation: 'scanline 6s linear infinite',
          top: '0%',
        }}
      />

      {/* CLASSIFIED watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 select-none"
        style={{
          fontSize: '72px',
          fontWeight: 'bold',
          color: 'rgba(26,24,21,0.03)',
          transform: 'translate(-50%, -50%) rotate(-30deg)',
          whiteSpace: 'nowrap',
          letterSpacing: '20px',
        }}
      >
        CLASSIFIED
      </div>

      {/* Content */}
      <div className="relative z-5">
        {/* Paper Header */}
        <div className="text-center mb-6 pb-4 border-b border-ink/10">
          <div className="text-[10px] text-brown uppercase tracking-widest mb-2">
            RoboManipal Research Subsystem — Internal Document #RM-2026-TEST
          </div>
          <h2 className="text-base md:text-lg font-bold mb-2 leading-tight uppercase">
            Robotic Manipulation Test of (Task-Phase) Systems
          </h2>
          <div className="text-xs text-brown">
            Authors: Your terrifying RoboManipal Seniors (and Krish Gandhi)
          </div>
          <div className="text-xs text-brown">Published: April 1, 2026</div>
          <div className="text-[10px] text-brown mt-1">
            Published: Internal Review · Classification: MEH!
          </div>
        </div>

        <div className="space-y-4 text-sm leading-relaxed">
          {/* Section 1 */}
          <section>
            <h3 className="font-bold mb-1 text-xs uppercase tracking-wider text-gold">§1 — Abstract</h3>
            <p>
              This paper examines the convergence behavior of multi-domain signal coupling
              across robotic, mechanical, and telemetry subsystems. Our analysis reveals
              that stable synchronization is achievable only when a specific verification
              constant is applied across all system layers. The resulting identification
              code serves as the unique key to unlock the system&apos;s final evaluation state.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h3 className="font-bold mb-1 text-xs uppercase tracking-wider text-gold">§2 — System Architecture</h3>
            <p>
              The architecture comprises three primary subsystems, each contributing a
              normalized output vector:
            </p>
            <div className="ml-4 mt-2 space-y-1 text-xs text-brown border-l-2 border-gold/30 pl-3">
              <p>• <strong>R-Layer</strong> (Robotic Control) — autonomous path planning</p>
              <p>• <strong>M-Layer</strong> (Mechanical Drive) — torque distribution matrix</p>
              <p>• <strong>T-Layer</strong> (Telemetry Feedback) — real-time signal relay</p>
            </div>
            <p className="mt-2 text-xs text-brown italic">
              Note: The layer identifiers (R, M, T) form the system&apos;s signature sequence
              and are critical for final code assembly.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h3 className="font-bold mb-1 text-xs uppercase tracking-wider text-gold">§3 — Methodology</h3>
            <p>
              For each subsystem layer <em>k</em>, a normalized output <em>o<sub>k</sub></em> is
              computed where 0 ≤ o<sub>k</sub> ≤ 1.
              The total synchronization score is defined as:
            </p>
            <div
              className="my-3 p-3 border border-ink/20 text-center bg-bg/50"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              <span className="text-base font-bold">
                S = Σ<sub>i=1</sub><sup>N</sup> (r<sub>i</sub> + m<sub>i</sub> + t<sub>i</sub>)
              </span>
            </div>
            <p>
              Where <em>r</em>, <em>m</em>, and <em>t</em> are the outputs of the R, M, and T layers respectively.
            </p>
          </section>

          {/* Section 4 — THE KEY CLUE */}
          <section className="border-l-4 border-gold pl-4 py-1">
            <h3 className="font-bold mb-1 text-xs uppercase tracking-wider text-gold">§4 — Critical Observation ★</h3>
            <p>
              Empirical testing across 10,000 simulation cycles reveals a single convergence
              point. The system achieves stable synchronization <strong>if and only if</strong>:
            </p>
            <div
              className="my-3 p-4 border-2 border-ink bg-ink/5 text-center"
            >
              <span className="text-xl font-bold tracking-wider">
                S → 42
              </span>
              <p className="text-xs text-brown mt-1">
                (The universal convergence constant)
              </p>
            </div>
            <p>
              This value of <strong>42</strong> has been independently verified across all test
              environments. It is the numeric component of the verification code.
            </p>
          </section>

          {/* Section 5 — SECOND KEY CLUE */}
          <section className="border-l-4 border-gold pl-4 py-1">
            <h3 className="font-bold mb-1 text-xs uppercase tracking-wider text-gold">§5 — Identification Protocol ★</h3>
            <p>
              The verification code is assembled using a two-part protocol:
            </p>
            <div className="ml-4 mt-2 space-y-2 text-xs">
              <p><strong>Part A:</strong> The convergence constant from §4 →{' '}
                <span className="bg-gold/10 px-1 border border-gold/30 font-bold">42</span>
              </p>
              <p><strong>Part B:</strong> The system layer signature sequence (§2) →{' '}
                <span className="bg-gold/10 px-1 border border-gold/30 font-bold">R, M, T</span>
              </p>
            </div>
            <p className="mt-3">
              The final verification code is obtained by <strong>concatenating Part A with Part B</strong>,
              yielding a 5-character alphanumeric string.
            </p>
            <div
              className="my-3 p-3 border-2 border-ink bg-ink text-white text-center"
            >
              <span className="text-xs tracking-widest uppercase">
                Final Code Format: [NUMERIC][ALPHA] = [Constant][Sequence]
              </span>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h3 className="font-bold mb-1 text-xs uppercase tracking-wider text-gold">§6 — Conclusion</h3>
            <p>
              The synchronization constant and the layer signature sequence are both necessary
              and sufficient to uniquely identify the evaluation state. Any candidate who has
              read this document in full should be able to derive the code without ambiguity.
            </p>
            <p className="mt-2 text-xs text-brown italic">
              &ldquo;The answer is always in the paper.&rdquo; — Some guy in a lab coat, probably.
            </p>
          </section>

          {/* Footer */}
          <div className="pt-3 mt-4 border-t border-ink/10 text-[10px] text-brown flex justify-between">
            <span>DOC ID: RM-2026-TEST</span>
            <span>Page 1 of 1</span>
            <span>IDT Anyone Cares</span>
          </div>
        </div>
      </div>
    </div>
  );
}
