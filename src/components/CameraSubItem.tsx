interface CameraSubItemProps {
  name: string;
  description: string;
}

export function CameraSubItem({ name, description }: CameraSubItemProps) {
  return (
    <div className="flex items-center justify-between p-3 border border-border rounded-lg bg-bg-surface">
      <span className="text-sm font-semibold text-text-primary">{name}</span>
      <span className="text-xs text-text-secondary">{description}</span>
    </div>
  );
}