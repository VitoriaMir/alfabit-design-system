import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Molecules/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: {
      type: 'string',
    },
    disabled: {
      type: 'boolean',
    },
    className: {
      type: 'string',
    },
  },
  parameters: {
    docs: {
      description: {
        component: "This is a button component",
      },
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: "Botão",
  },
};

export const Violet: StoryObj<typeof Button> = {
  args: {
    children: "Botão",
    className: "theme-violet",
  },
};
