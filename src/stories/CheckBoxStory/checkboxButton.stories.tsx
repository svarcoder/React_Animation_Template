import { ComponentMeta, ComponentStory } from '@storybook/react';
import CheckBoxButton from './CheckboxButton';

export default {
  title: 'Example/CheckBoxButton',
  component: CheckBoxButton,
} as ComponentMeta<typeof CheckBoxButton>;

const Template: ComponentStory<typeof CheckBoxButton> = (args) => (
  <CheckBoxButton {...args} />
);

export const DefaultCheckBox = Template.bind({});
DefaultCheckBox.args = {
  label: 'Off with your head',
  checked: false,
  btnStatus: 'primary',
};
