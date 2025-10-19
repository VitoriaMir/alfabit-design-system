// eslint-disable-next-line storybook/no-renderer-packages
import { Meta, StoryObj } from "@storybook/react";

import Avatar, { type AvatarProps } from "./Avatar";

const meta: Meta<AvatarProps> = {
  title: "Molecules/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
  },
};

export default meta;

export const Primary: StoryObj<AvatarProps> = {
  args: {},
};

export const ExtraSmall: StoryObj<AvatarProps> = {
  args: {
    size: "xs",
  },
};

export const Small: StoryObj<AvatarProps> = {
  args: {
    size: "sm",
  },
};

export const Medium: StoryObj<AvatarProps> = {
  args: {
    size: "md",
  },
};

export const Large: StoryObj<AvatarProps> = {
  args: {
    size: "lg",
  },
};
