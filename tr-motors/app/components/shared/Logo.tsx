export default function Logo({ size = 26, subtitleColor = '#888' }: { size?: number; subtitleColor?: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: `${size}px`,
        fontWeight: 900,
        letterSpacing: '0.04em',
        background: 'linear-gradient(180deg, #E8E8E8 0%, #C0C0C0 40%, #888 70%, #C0C0C0 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        T<span style={{
          background: 'linear-gradient(180deg, #FF4444 0%, #CC2222 50%, #991111 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>R</span> MOTORS
      </span>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '8px',
        letterSpacing: '0.25em',
        color: subtitleColor,
        marginTop: '2px',
      }}>
        PERFORMANCE X DETAILING
      </span>
    </div>
  );
}
