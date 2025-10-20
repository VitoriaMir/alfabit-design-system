import classNames from "classnames";

type StyleProps = {
  variant: "common" | "contract";
  enabled: boolean;
  disabled?: boolean;
};

const useStyle = ({ variant, enabled, disabled }: StyleProps) => {
  const containerClasses = classNames(
    "relative inline-flex h-6 w-11 items-center rounded-full focus:outline-none transition-colors duration-200 ease-in-out",
    {
      "bg-primary": enabled && !disabled,
      "bg-disabled": disabled,
      "bg-gray-200": !enabled && !disabled,
    },
    {
      "cursor-pointer": !disabled,
      "cursor-not-allowed": disabled,
    }
  );

  const switchClasses = classNames(
    "inline-flex items-center justify-center bg-white h-4 w-4 rounded-full transform transition-transform duration-200 ease-in-out",
    enabled ? "translate-x-6" : "translate-x-1"
  );

  const iconClasses = classNames(
    "h-3 w-3",
    { "text-success": enabled && !disabled },
    { "text-error": !enabled && !disabled },
    { "text-disabled": disabled }
  );

  return {
    Icon: iconClasses,
    Switch: switchClasses,
    Container: containerClasses,
  };
};

export default useStyle;
