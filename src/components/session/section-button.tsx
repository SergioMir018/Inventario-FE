import classNames from 'classnames';

interface SectionButtonProps {
  text: string;
  isClicked: boolean;
  onClick: () => void;
}

export default function SectionButton({
  text,
  isClicked,
  onClick,
}: SectionButtonProps) {
  return (
    <button
      className={classNames(
        'font-gabarito px-6 py-1 text-white text-center rounded-md',
        {
          'bg-dark/70 hover:bg-darker/80': !isClicked,
          'bg-black': isClicked,
        }
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
