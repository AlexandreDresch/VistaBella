interface BadgeProps {
  icon: string;
  description: string;
}
export default function Badge({ icon, description }: BadgeProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 md:gap-4 md:flex-row">
      <img src={icon} alt={description} className="size-6 lg:size-12"/>
      <span className="font-merriweather text-xs sm:text-sm lg:text-lg font-bold">{description}</span>
    </div>
  );
}
