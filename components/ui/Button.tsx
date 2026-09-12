import { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline-light";
  size?: "md" | "lg";
  className?: string;
  icon?: ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

type ButtonAsButton = BaseProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variants = {
  primary:
    "bg-gold text-ink hover:bg-gold-dark hover:text-cream shadow-[0_8px_24px_-8px_rgba(182,145,60,0.55)]",
  secondary:
    "bg-ink text-cream hover:bg-charcoal",
  ghost:
    "bg-transparent text-ink border border-ink/15 hover:border-gold hover:text-gold-dark",
  "outline-light":
    "bg-transparent text-cream border border-cream/40 hover:bg-cream/10 hover:border-cream",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

function classes(variant: BaseProps["variant"] = "primary", size: BaseProps["size"] = "md", className = "") {
  return `inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 active:scale-[0.97] ${variants[variant]} ${sizes[size]} ${className}`;
}

export default function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant, size, className, icon } = props;

  if ("href" in props && props.href) {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel}
        onClick={props.onClick}
        className={classes(variant, size, className)}
      >
        {icon}
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      onClick={buttonProps.onClick}
      className={classes(variant, size, className)}
    >
      {icon}
      {children}
    </button>
  );
}
