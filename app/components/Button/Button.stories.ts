// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Design System/Molecules/Button",
  component: Button,
  argTypes: {
    children: {
      type: "string",
      description: "Conteúdo do botão",
      control: {
        type: "text",
      },
    },
    variant: {
      description: "Variação do botão",
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
    },
    disabled: {
      description: "Estado desabilitado do botão",
      type: "boolean",
      control: {
        type: "boolean",
      },
    },
    className: {
      description: "Classes CSS adicionais",
      type: "string",
      control: {
        type: "text",
      },
    },
    onClick: {
      action: "clicked",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Botão",
  },
};

export const Disabled: Story = {
  args: {
    children: "Botão",
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    children: "Botão",
    variant: "secondary",
  },
};

export const SecondaryDisabled: Story = {
  args: {
    children: "Botão",
    variant: "secondary",
    disabled: true,
  },
};

export const Violet: Story = {
  args: {
    children: "Botão",
    className: "theme-violet",
  },
};

export const VioletSecondary: Story = {
  args: {
    children: "Botão",
    className: "theme-violet",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Botão",
    variant: "tertiary",
  },
};

export const TertiaryDisabled: Story = {
  args: {
    children: "Botão",
    variant: "tertiary",
    disabled: true,
  },
};

export const VioletTertiary: Story = {
  args: {
    children: "Botão",
    className: "theme-violet",
    variant: "tertiary",
  },
};
