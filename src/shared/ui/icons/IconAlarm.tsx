export const IconAlarm = ({
  className = 'w-15 h-15 lg:w-25 lg:h-25 xl:w-38 xl:h-38 mb-8 fill-[#F81DFB] border-2 rounded-full p-3 lg:p-6 bg-gray-300 backdrop-blur-3xl',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Outline"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
    <path d="M12,5a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V6A1,1,0,0,0,12,5Z" />
    <rect x="11" y="17" width="2" height="2" rx="1" />
  </svg>
);
