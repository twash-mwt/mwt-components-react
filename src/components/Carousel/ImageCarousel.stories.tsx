import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ImageCarousel, ImageCarouselProps } from "./ImageCarousel";

const meta: Meta<typeof ImageCarousel> = {
  component: ImageCarousel,
};

export default meta;
type Story = StoryObj<typeof ImageCarousel>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const props: ImageCarouselProps = {
    itemsPerPage: 3,
    carouselItems:[{
        src: 'https://picsum.photos/seed/1/200/300',
        onClick: () => {},
    },{
        src: 'https://picsum.photos/seed/2/200/300',
        onClick: () => {},
    },{
        src: 'https://picsum.photos/seed/3/200/300',
        onClick: () => {},
    },{
        src: 'https://picsum.photos/seed/4/200/300',
        onClick: () => {},
    },{
        src: 'https://picsum.photos/seed/5/200/300',
        onClick: () => {},
    }
]}

export const Default: Story = {
    render: () => <ImageCarousel {...props} />,
};