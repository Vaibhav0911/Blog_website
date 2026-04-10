import { forwardRef } from "react";
import { useId } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref,
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label
          className="mb-2 inline-block pl-1 text-sm font-medium text-slate-200"
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <input
        type={type}
        className={`w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-blue-500 focus:bg-slate-900 focus:ring-2 focus:ring-blue-500/20 ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
