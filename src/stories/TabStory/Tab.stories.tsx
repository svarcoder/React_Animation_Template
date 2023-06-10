import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tabs } from "./Tab";

export default {
  title: "Example/Tab",
  component: Tabs,
 
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const TabOne = Template.bind({});
TabOne.args = {
};


