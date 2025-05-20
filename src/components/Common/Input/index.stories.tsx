import type { Meta, StoryObj } from '@storybook/react';

// Components
import Input from '.';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    labelClassName: { control: 'text' },
    inputClassName: { control: 'text' },
    type: {
      control: 'radio',
      options: ['text', 'email', 'password', 'date', 'number'],
    },
    icon: { control: false },
  },
  args: {
    label: 'E-mail Address',
    name: 'name',
    type: 'text',
    labelClassName: 'block text-xl font-bold mb-3 text-primary',
    inputClassName:
      'rounded-md px-4 py-2 text-primary shadow-[5px_2px_10px_3px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-secondary/30',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Start Date',
    name: 'startDate',
    type: 'date',
    labelClassName: 'text-2xl text-darkText',
    inputClassName: 'my-5 bg-[#E3EDF9] text-xl border-none p-3 rounded-[9px]',
    defaultValue: '10-10-2025',
  },
};
