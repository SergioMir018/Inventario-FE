import classNames from "classnames";

interface BadgeProps {
  text: string | undefined;
  styles?: string;
}

export default function Badge({ text, styles }: BadgeProps) {
  return (
    <div
      className={classNames(
        'border text-sm flex justify-center items-center text-white/70 py-1 border-white/50 px-4 rounded-3xl font-gabarito'
      , styles)}
    >
      <p>{text}</p>
    </div>
  );
}
