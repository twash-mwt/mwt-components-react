import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ButtonSize, ButtonKind } from "./Button.types";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const SmallPrimary: Story = {
    render: () => <Button kind={ButtonKind.PRIMARY} size={ButtonSize.SMALL} onClick={() => {}}>Text</Button>,
  };
  export const MediumSecondary: Story = {
    render: () => <Button kind={ButtonKind.SECONDARY} size={ButtonSize.MEDIUM} onClick={() => {}}>Text</Button>,
  };
  export const LargeTertiary: Story = {
    render: () => <Button kind={ButtonKind.TERTIARY} size={ButtonSize.LARGE} onClick={() => {}}>Text</Button>,
  };