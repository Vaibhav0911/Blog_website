const Logo = ({ width = "40px" }) => {
  return (
    <div className="flex items-center gap-2">
      
      {/* SVG ICON */}
      <svg
        width={width}
        height={width}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="10"
          y="10"
          width="80"
          height="80"
          rx="20"
          stroke="#3B82F6"
          strokeWidth="6"
        />
        <path
          d="M35 40L25 50L35 60"
          stroke="#3B82F6"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M65 40L75 50L65 60"
          stroke="#3B82F6"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* TEXT */}
      <span className="text-lg font-bold tracking-wide text-white">
        CodeCanvas
      </span>
    </div>
  );
};

export default Logo;