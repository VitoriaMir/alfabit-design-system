/* eslint-disable storybook/no-renderer-packages */
import type { Meta, StoryObj } from "@storybook/react";
import TextBlock, { TextBlockProps } from "./TextBlock";

const meta: Meta<TextBlockProps> = {
  title: "MOLECULES/TextBlock",
  component: TextBlock,
  argTypes: {
    title: {
      type: "string",
      description: "Título do bloco de texto",
    },
    textBlock: {
      type: "string",
      description: "Conteúdo do bloco de texto",
    },
    className: {
      type: "string",
      description: "Classes CSS adicionais",
    },
  },
};

export default meta;

export const Primary: StoryObj<TextBlockProps> = {
  args: {
    title: "Title",
    textBlock:
      "Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago.\n\nEarth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago.",
  },
};
