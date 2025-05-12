import type { Meta, StoryObj } from '@storybook/react';

// Components
import ProgressBar from '.';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    current: { control: 'number' },
    total: { control: 'number' },
    color: { control: 'color' },
  },
  args: {
    label: 'Annual Leave',
    current: 10,
    total: 60,
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
