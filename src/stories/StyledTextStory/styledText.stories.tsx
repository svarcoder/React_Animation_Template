import { ComponentMeta, ComponentStory } from '@storybook/react';
import StyledText from './StyledText';

export default {
  title: 'Example/StyledText',
  component: StyledText,
} as ComponentMeta<typeof StyledText>;

const Template: ComponentStory<typeof StyledText> = (args) => (
  <StyledText {...args} />
);

export const WavyText = Template.bind({});
WavyText.args = {
  label: 'Loading...',
  size: 'medium',
  textStyle: 'wavy',
  color: 'black',
  shadow: true,
};

export const GradientText = Template.bind({});
GradientText.args = {
  label: 'Gradient Text Animation',
  size: 'medium',
  textStyle: 'gradient',
};

export const HeaderTextSlideUp = Template.bind({});
HeaderTextSlideUp.args = {
  label: 'Header Text SlideUp Animation',
  size: 'medium',
  textStyle: 'headerText',
  color: 'black',
};
