'use client';

export default function GridBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(26,24,21,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(26,24,21,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    />
  );
}
