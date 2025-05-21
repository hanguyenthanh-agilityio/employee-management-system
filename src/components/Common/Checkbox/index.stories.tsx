import type { Meta, StoryObj } from '@storybook/react';

// Component
import Checkbox from '.';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    subLabel: { control: 'text' },
    id: { control: 'text' },
    name: { control: 'text' },
    className: { control: 'text' },
  },
  args: {
    id: 'checkbox-1',
    label: 'Accept terms',
    name: 'terms',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Remember Me',
  },
};

export const WithSubLabel: Story = {
  args: {
    label: 'I agree to all the ',
    subLabel: 'Terms, Privacy Policy',
  },
};
