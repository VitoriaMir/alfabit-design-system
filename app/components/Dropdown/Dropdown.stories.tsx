import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Dropdown, { type DropdownProps } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Design System/Molecules/Dropdown",
  component: Dropdown,
  decorators: [
    (Story) => (
      <div style={{ paddingBottom: "15em", paddingTop: "3em" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    list: {
      control: { type: "object" },
      description: "Lista de opções para o dropdown",
    },
    className: {
      type: "string",
      control: { type: "text" },
      description: "Classes CSS adicionais",
    },
    onChange: {
      action: "selected",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  args: {
    list: [],
  },
};

export const Common: Story = {
  args: {
    list: [
      "Durward Reynolds",
      "Kenton Towne",
      "Therese Wunsch",
      "Benedict Kessler",
      "Katelyn Rohan",
    ],
  },
};
