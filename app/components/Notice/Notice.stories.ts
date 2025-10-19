// eslint-disable-next-line storybook/no-renderer-packages
import { Meta, StoryObj } from "@storybook/react";
import Notice, { type NoticeProps } from "./Notice";

const meta: Meta<NoticeProps> = {
  title: "Molecules/Notice",
  component: Notice,
  argTypes: {
    type: {
      control: "select",
      options: ["alert", "success", "error"],
    },
    message: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<NoticeProps> = {
  args: {
    type: "alert",
    message: "Amet minim mollit non deserunt ullamco est",
  },
};

export const Alert: StoryObj<NoticeProps> = {
  args: {
    type: "alert",
    message: "Amet minim mollit non deserunt ullamco est",
  },
};

export const Error: StoryObj<NoticeProps> = {
  args: {
    type: "error",
    message: "Amet minim mollit non deserunt ullamco est",
  },
};

export const Success: StoryObj<NoticeProps> = {
  args: {
    type: "success",
    message: "Amet minim mollit non deserunt ullamco est",
  },
};
