import { CloneMe, CloneMeProps } from '.';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'CloneMe',
  component: CloneMe,
  parameters: {
    title: 'CloneMe',
  },
} as Meta;

export const Template: Story<CloneMeProps> = (args) => <CloneMe {...args} />;
