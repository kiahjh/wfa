import { type Component, type JSXElement } from "solid-js";
import cx from "classnames";
import type { IconTypes } from "solid-icons";

interface SubmitProps {
  type: "submit";
}
interface ButtonProps {
  type: "button";
  onClick: () => void;
}
interface LinkProps {
  type: "link";
  href: string;
}
interface CommonProps {
  children: JSXElement;
  Icon?: IconTypes;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
}

type Props = CommonProps & (ButtonProps | LinkProps | SubmitProps);

const Button: Component<Props> = (props) => {
  const classes = cx(
    `flex justify-center items-center font-poppins font-medium transition-[background-color,transform] duration-200 active:scale-95 select-none`,
    {
      "bg-gradient-to-b from-black/80 to-black text-white hover:bg-black":
        props.variant === `primary`,
      "bg-gradient-to-b from-cream-200/50 to-cream-200 text-cream-800 hover:bg-cream-300":
        props.variant === `secondary`,
      "text-cream-800 hover:bg-cream-100": props.variant === `tertiary`,
    },
    {
      "text-lg px-4 py-2 rounded-xl tracking-[1.5px] gap-3":
        props.size === `lg`,
      "text-base px-3 py-1.5 rounded-lg tracking-[1.3px] gap-2":
        props.size === `md` || !props.size,
      "text-sm px-2.5 py-1 rounded-lg tracking-[1px] gap-1.5":
        props.size === `sm`,
    },
  );

  const iconSize = (() => {
    switch (props.size || `md`) {
      case `lg`:
        return 20;
      case `md`:
        return 18;
      case `sm`:
        return 16;
    }
  })();

  if (props.type === `button`)
    return (
      <button onClick={props.onClick} class={classes}>
        {props.Icon && <props.Icon size={iconSize} />}
        <span>{props.children}</span>
      </button>
    );

  if (props.type === `submit`)
    return (
      <button type="submit" class={classes}>
        {props.Icon && <props.Icon size={iconSize} />}
        <span>{props.children}</span>
      </button>
    );

  if (props.type === `link`)
    return (
      <a href={props.href} class={classes}>
        {props.Icon && <props.Icon size={iconSize} />}
        <span>{props.children}</span>
      </a>
    );

  return null;
};

export default Button;
