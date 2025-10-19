import React from "react";
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "bg-dark text-gray-primary rounded-md p-3 disabled:bg-disabled disabled:border-2 disabled:border-disabled",
  {
    variants: {
      hasLabel: {
        true: "pt-5",
        false: "",
      },
    },
    defaultVariants: {
      hasLabel: false,
    },
  }
);

const labelVariants = cva("absolute pt-1 pl-3 text-xs");

export type InputProps = {
  label?: string;
  multiline?: boolean;
  className?: string;
} & (
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>
);

const InputOrTextArea = (props: InputProps) => {
  if (props.multiline) {
    return (
      <textarea
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }
  return <input {...(props as React.InputHTMLAttributes<HTMLInputElement>)} />;
};

const Input = ({ label, className, ...rest }: InputProps) => {
  return (
    <div className="relative">
      {label && <label className={labelVariants()}>{label}</label>}
      <InputOrTextArea
        className={`${inputVariants({ hasLabel: !!label })} ${className || ""}`}
        {...rest}
      />
    </div>
  );
};

export default Input;
