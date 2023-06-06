import { cva } from "class-variance-authority";

export { default as Button } from "./Button.svelte";

export const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md text-sm font-medium  focus-visible:outline-none duration-100 active:scale-90 transition-all",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground hover:bg-primary",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline:
					"border border-input hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "underline-offset-4 hover:underline text-primary"
			},
			size: {
				default: "h-10 py-2 px-4 m-0",
				sm: "h-9 px-3 rounded-md",
				lg: "h-11 px-8 rounded-md"
			}
		},
		defaultVariants: {
			variant: "default",
			size: "default"
		}
	}
);
