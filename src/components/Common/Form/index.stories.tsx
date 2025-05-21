import type { Meta, StoryObj } from '@storybook/react';

// Components
import Form from '.';

const meta = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultLeaveType: { control: 'text' },
    leave: { control: 'object' },
  },
  args: {
    defaultLeaveType: 'Annual Leave',
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLeaveData: Story = {
  args: {
    leave: {
      type: 'Sick Leave',
      startDate: '2024-06-10',
      endDate: '2024-06-14',
      durations: 5,
      resumptionDate: '2024-06-15',
      reason: 'Medical reasons',
      id: '',
      employeeName: 'Ha Nguyen',
      status: 'Pending',
    },
  },
};
