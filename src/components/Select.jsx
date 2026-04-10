import { useId } from "react";
import { forwardRef } from "react";

function Select({ label, options, className = "", ...props }, ref) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="mb-2 inline-block pl-1 text-sm font-medium text-slate-200"
        >
          {label}
        </label>
      )}

      <select
        {...props}
        id={id}
        ref={ref}
        className={`w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition duration-300 focus:border-blue-500 focus:bg-slate-900 focus:ring-2 focus:ring-blue-500/20 ${className}`}
      >
        {options?.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-slate-900 text-white"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
