import { type ReactNode } from 'react';

interface SecurityFeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function SecurityFeature({ icon, title, description }: SecurityFeatureProps) {
  return (
    <div className="flex gap-4">
      <div className="text-primary">{icon}</div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}