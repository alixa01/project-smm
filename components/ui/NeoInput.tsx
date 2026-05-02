"use client";

import { type InputHTMLAttributes, type ReactNode, useId } from "react";

type NeoInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id" | "className"
> & {
  id?: string;
  label: string;
  labelAction?: ReactNode;
  trailing?: ReactNode;
  inputClassName?: string;
  wrapperClassName?: string;
};

export default function NeoInput({
  id,
  label,
  labelAction,
  trailing,
  inputClassName = "",
  wrapperClassName = "",
  type = "text",
  ...inputProps
}: NeoInputProps) {
  const autoId = useId();
  const inputId = id ?? `neo-input-${autoId}`;

  const hasTrailing = Boolean(trailing);
  const inputClasses = [
    "w-full",
    "neo-border",
    "bg-white",
    "text-on-surface",
    "font-sans",
    "text-base",
    "px-4",
    "py-3",
    hasTrailing ? "pr-14" : "",
    "placeholder:text-on-surface-variant",
    "focus:outline-none",
    "focus:shadow-[4px_4px_0_0_#181c20]",
    "transition-shadow",
    "duration-150",
    inputClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`space-y-2 ${wrapperClassName}`.trim()}>
      <div className="flex items-center justify-between gap-3">
        <label
          htmlFor={inputId}
          className="font-headline block text-sm font-bold uppercase tracking-wide text-black sm:text-base">
          {label}
        </label>
        {labelAction ? (
          <div className="shrink-0 text-sm">{labelAction}</div>
        ) : null}
      </div>

      <div className="relative">
        <input {...inputProps} id={inputId} type={type} className={inputClasses} />
        {hasTrailing ? (
          <div className="absolute inset-y-0 right-0 flex items-center border-l-[3px] border-black">
            {trailing}
          </div>
        ) : null}
      </div>
    </div>
  );
}
