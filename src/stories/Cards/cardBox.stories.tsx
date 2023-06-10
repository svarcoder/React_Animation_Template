import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardBox, CardHover, SimpleCard, OtCard, Loading, CardHoverEffect, Animatedcard,Card  } from './cardBox';

export default {
  title: 'Example/CardBox',
  component: CardBox,
  // argTypes: {
  //   background: { control: 'color' },
  //   cardBackgroundColor: { control: 'color' },

  // }
} as ComponentMeta<typeof CardBox>;

const Template: ComponentStory<typeof CardBox> = (args) => <CardBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  content: 'Write Something here!'
};
const Template2: ComponentStory<typeof CardHover> = (args2) => (
  <CardHover {...args2} />
);

const simpleCardTemplate: ComponentStory<typeof SimpleCard> = (args) => <SimpleCard {...args} />;

export const Secondary = Template2.bind({});
Secondary.args = {
  title: "Neymar",
  imgLink: "https://github.com/free-source-code-bd/all-public-resource/blob/main/neymar2.jpg?raw=true",
  score: 10,
  player1: "PSG",
  player2: "BRA",
  player1ImageLink:
    "https://github.com/free-source-code-bd/all-public-resource/blob/main/psg.jpg?raw=true",
  description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  Ea, in animi doloribus reprehenderit debitis voluptas
  pariatur eaque! Rem, accusamus tempora?`,
  player2ImageLink:
    "https://github.com/free-source-code-bd/all-public-resource/blob/main/bra.jpg?raw=true",
  animation: "from-right",
};

export const PrimarySimpleCard = simpleCardTemplate.bind({});
PrimarySimpleCard.args = {
  title: 'Someone famous',
  subtitle: 'team leader',
  content: 'Lorem ipsum is simple dummy text on the printing and typesetting industry.',
  imgLink: 'http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg'
};


const OtCardTemplate: ComponentStory<typeof OtCard> = (args) => <OtCard {...args} />;

export const PrimaryOtCard = OtCardTemplate.bind({});
PrimaryOtCard.args = {
  imgLink: "https://images.unsplash.com/photo-1587733761351-c75905de4127?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  title: "Card One",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut dolor vel sem ultricies iaculis. Morbi et blandit dolor, id consequat diam."
};


const LoadingTemplate: ComponentStory<typeof Loading> = (args) => <Loading {...args} />;

export const PrimaryLoading = LoadingTemplate.bind({});
PrimaryLoading.args = {
  type: 'type1'
};

const CardHoverEffectTemplate: ComponentStory<typeof CardHoverEffect> = (args) => <CardHoverEffect {...args} />;

export const CardHoverEffectPrimary = CardHoverEffectTemplate.bind({});
CardHoverEffectPrimary.args = {
  imgLink: "https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true",
  title: "Design",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Quas cum cumque minus iste veritatis provident at.`,
  buttonlabel: "Read More"
};

const AnimatedcardTemplate: ComponentStory<typeof Animatedcard> = (args) => <Animatedcard {...args} />;

export const animatedCardExample = AnimatedcardTemplate.bind({});
animatedCardExample.args = {
  headline: `How's it goin Fam ?`,
  content: `This is Sachin Samal, your tech mate!!! I love you all. Lets
  make this world a better place for all of us. Keep
  prospering...Keep learning!!!`,
  size: 'medium',
};

const CardTemplate: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const cardExample = CardTemplate.bind({});
cardExample.args = {
  label: 'Some details about this awesome thing.',
};


