interface ContentContainerProps {
  title?: string;
  content: string[];
}
export default function ContentContainer({
  title,
  content,
}: ContentContainerProps) {
  return (
    <div className="space-y-4">
      {title && (
        <h3 className="font-merriweather text-lg font-bold">{title}</h3>
      )}

      {content.map((paragraph, index) => (
        <p className="font-opensans text-base font-normal" key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}
