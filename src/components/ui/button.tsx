import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-[1px]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/80 active:bg-primary-focus",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-focus active:bg-secondary/80",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent/80 active:bg-accent-focus",
        warning:
          "bg-warning text-warning-foreground hover:bg-warning/80 active:bg-warning-focus",
        success:
          "bg-success text-success-foreground hover:bg-success/80 active:bg-success-focus",
        error:
          "bg-error text-error-foreground hover:bg-error/80 active:bg-error-focus",
        outline:
          "border border-input bg-transparent hover:bg-secondary border-border text-foreground shadow-sm",
        ghost:
          "hover:bg-secondary-focus text-foreground active:bg-secondary/80",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-7 rounded-md px-3 text-xs",
        md: "h-8 px-3",
        lg: "h-10 rounded-md px-4 text-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
