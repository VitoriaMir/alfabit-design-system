// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import Typography, { type TypographyProps } from "./Typography";

const meta: Meta<TypographyProps> = {
  title: "Atoms/Typography",
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
