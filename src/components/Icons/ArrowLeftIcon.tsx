type ArrowLeftIconProps = {
  className?: string;
}

const ArrowLeftIcon: React.FC<ArrowLeftIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="#111517"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z"
      />
    </svg>
  );
};

export default ArrowLeftIcon;
