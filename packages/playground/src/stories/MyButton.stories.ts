import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { MyButton } from '@ramdayal.m/vue3-ui-buttons-local'

const meta = {
  title: 'Local/MyButton',
  component: MyButton,
  tags: ['autodocs'],
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Click me',
  },
};