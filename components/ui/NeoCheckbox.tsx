"use client";

import { motion } from "framer-motion";
import { type ChangeEvent, useId } from "react";

type NeoCheckboxProps = {
  id?: string;
  name?: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function NeoCheckbox({
  id,
  name,
  label,
  checked,
  onChange,
}: NeoCheckboxProps) {
  const autoId = useId();
  const inputId = id ?? `neo-checkbox-${autoId}`;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label
      htmlFor={inputId}
      className="inline-flex cursor-pointer select-none items-center gap-3">
      <span className="relative flex h-6 w-6 items-center justify-center">
        <input
          id={inputId}
          name={name}
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          onChange={handleChange}
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 border-[3px] border-black bg-white transition-colors duration-100 peer-checked:bg-black peer-focus-visible:shadow-[2px_2px_0_0_#181c20]"
        />
        <motion.span
          aria-hidden="true"
          initial={false}
          animate={{
            opacity: checked ? 1 : 0,
            scale: checked ? 1 : 0.6,
            rotate: checked ? 0 : -45,
          }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="font-headline relative text-base font-black leading-none text-white">
          X
        </motion.span>
      </span>
      <span className="font-headline text-sm font-bold uppercase tracking-wide text-black sm:text-base">
        {label}
      </span>
    </label>
  );
}
