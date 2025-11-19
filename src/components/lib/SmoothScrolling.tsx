import { ReactLenis } from 'lenis/react'

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ duration: 1 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;