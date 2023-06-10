import { ComponentMeta, ComponentStory } from '@storybook/react';
import ToggleButton from './ToggleButton';

export default {
  title: 'Example/ToggleButton',
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  // @ts-ignore
  <ToggleButton {...args} />
);

export const FullToggle = Template.bind({});
FullToggle.args = {
  checked: false,
  isDisable: false,
  toggleEffect: 'toggleButton-1',
};
