/* eslint-disable @typescript-eslint/no-explicit-any */
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200)
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

const config: Config = {
  darkMode: ["class", "class"],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./posts/**/*.{ts,tsx,md,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: theme("colors.gray.100"),
              color: theme("colors.gray.900"),
              padding: theme("spacing.4"),
              borderRadius: theme("borderRadius.md"),
              fontSize: theme("fontSize.sm")[0],
              lineHeight: theme("lineHeight.snug"),
            },
            code: {
              color: theme("colors.indigo.600"),
              fontWeight: "600",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      }),
      backgroundImage: {
        "letter-top": "linear-gradient(360deg, #130832 0%, #722186 100%)",
        "letter-middle": "linear-gradient(1.77deg, #1a1056 1.57%, #8f1bac 98.43%)",
        "fade-left": "linear-gradient(to right, rgb(0, 0, 0), transparent)",
        "fade-right": "linear-gradient(to left, rgb(0, 0, 0), transparent)",
      },
      boxShadow: {
        "alt-cta": "inset 0px 0px 10px #ffffff",
        cta: "inset 0px 0px 14px #000000",
        "letter-top": "0px 0px 20px #0f0c22",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        handwritting: ["var(--font-handwritting)"],
        monalisa: ["var(--font-monalisa)"],
      },
      colors: {
        "letter-bottom": "#68147d",
        "bg-default": "#07070c",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "marquee-scroll": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        marquee: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        marquee2: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee-scroll": "marquee-scroll 40s linear infinite",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        "marquee-infinite": "marquee 25s linear infinite",
      },
    },
  },
  plugins: [animate, typography, addVariablesForColors],
  variants: {
    extend: {
      animation: ["hover", "group-hover"],
    },
  },
};

export default config;
