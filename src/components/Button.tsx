import { ButtonHTMLAttributes, ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "../../cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant> {
    children: ReactNode;
}

const buttonVariant = cva("rounded-lg border-2 transition duration-300", {
    variants: {
        variant: {
            primary: "bg-[#006A71] text-white hover:bg-[#00575a]",
            secondary: "bg-white text-[#006A71] hover:bg-gray-100",
        },
        size: {
            sm: "text-sm py-2 px-4",
            md: "text-base py-3 px-6",
            lg: "text-lg py-4 px-8",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    },
});

export function Button({ children, className, variant, size, ...props }: ButtonProps) {
    return (
        <button {...props} className={cn(buttonVariant({ variant, size, className }))}>
            {children}
        </button>
    );
}
