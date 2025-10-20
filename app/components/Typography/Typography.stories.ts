// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import Typography, { type TypographyProps } from "./Typography";

const meta: Meta<TypographyProps> = {
  title: "Design System/Atoms/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "xl", "title1", "title2", "title3"],
    },
    className: {
      control: "text",
    },
  },
};

export default meta;
export const Primary: StoryObj<TypographyProps> = {
  args: {
    children: "Texto",
  },
};

export const TextHeadingH1: StoryObj<TypographyProps> = {
  args: {
    children: "Texto",
    element: "h1",
    size: "title1",
    className: "font-extrabold",
  },
};

export const TextHeadingH2: StoryObj<TypographyProps> = {
  args: {
    children: "Texto",
    element: "h2",
    size: "title2",
    className: "font-extrabold",
  },
};

export const TextHeadingH3: StoryObj<TypographyProps> = {
  args: {
    children: "Texto",
    element: "h3",
    size: "title3",
    className: "font-extrabold",
  },
};

export const TextParagraph: StoryObj<TypographyProps> = {
  args: {
    children: "Texto",
    element: "p",
    size: "md",
    className: "text-primary",
  },
};
