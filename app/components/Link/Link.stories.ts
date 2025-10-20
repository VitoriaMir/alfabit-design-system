/* eslint-disable storybook/no-renderer-packages */
import type { Meta, StoryObj } from "@storybook/react";
import Link, { LinkProps } from "./Link";

const meta: Meta<LinkProps> = {
  title: "Design System/Molecules/Link",
  component: Link,
  argTypes: {
    children: {
      type: "string",
    },
    href: {
      type: "string",
    },
    disabled: {
      type: "boolean",
    },
    className: {
      type: "string",
    },
    onClick: {
      action: "clicked",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    children: "Link",
    href: "/",
  },
};

export const Disabled: Story = {
  args: {
    children: "Link",
    href: "/",
    disabled: true,
  },
};

export const Violet: Story = {
  args: {
    children: "Link",
    href: "/",
    className: "theme-violet",
  },
};
