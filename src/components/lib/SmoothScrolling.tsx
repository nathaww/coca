import { ReactLenis } from 'lenis/react'

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ duration: 0.5 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;