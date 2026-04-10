function Button({
  children,
  type = "button",
  textColor = "text-white",
  bgColor = "bg-blue-600",
  className = "",
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition duration-300 ease-out hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 ${textColor} ${bgColor} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
