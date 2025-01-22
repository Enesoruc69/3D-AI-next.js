'use client';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <div className={className} style={{ width: '100%', height: '100%' }}>
      <Spline 
        scene={scene}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
