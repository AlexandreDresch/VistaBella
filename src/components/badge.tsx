interface BadgeProps {
  icon: string;
  description: string;
}
export default function Badge({ icon, description }: BadgeProps) {
  return (
    <div className="flex items-center gap-4">
      <img src={icon} alt={description} />
      <span className="font-merriweather text-lg font-bold">{description}</span>
    </div>
  );
}
