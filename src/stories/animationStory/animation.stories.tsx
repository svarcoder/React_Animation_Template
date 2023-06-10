import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Animation } from "./Animation";

export default {
  title: "Example/Animation",
  component: Animation,
  argTypes: {
  },
} as ComponentMeta<typeof Animation>;

const Template: ComponentStory<typeof Animation> = (args) => <Animation {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

