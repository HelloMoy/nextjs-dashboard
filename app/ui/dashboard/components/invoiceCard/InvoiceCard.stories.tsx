import type { Meta, StoryObj } from '@storybook/react';
import InvoiceCard from '@/app/ui/dashboard/components/invoiceCard/invoice-card';
import { userEvent, within, expect } from '@storybook/test';

const meta = {
  title: 'Invoice/InvoiceCard',
  component: InvoiceCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InvoiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    invoice: {
      id: 'amy-burns',
      name: 'Amy Burns',
      image_url: 'customers/amy-burns.png',
      email: 'amy-burns@email.com',
      amount: '250',
    },
  },
};

export const WithCustomClassNameProp: Story = {
  args: {
    invoice: {
      id: 'amy-burns',
      name: 'Amy Burns',
      image_url: 'customers/amy-burns.png',
      email: 'amy-burns@email.com',
      amount: '250',
    },
    className: 'bg-[pink]',
  },
};

export const withPlayFunction: Story = {
  args: {
    invoice: {
      id: 'amy-burns',
      name: 'Amy Burns',
      image_url: 'customers/amy-burns.png',
      email: 'amy-burns@email.com',
      amount: '250',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cardName = canvas.getByText('Amy Burns');
    expect(cardName).toHaveTextContent('Amy Burns');


    // await userEvent.type(emailInput, 'example-email@email.com', {
    //   delay: 100,
    // });

    // const passwordInput = canvas.getByLabelText('password', {
    //   selector: 'input',
    // });

    // await userEvent.type(passwordInput, 'ExamplePassword', {
    //   delay: 100,
    // });
    // // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    // const submitButton = canvas.getByRole('button');

    // await userEvent.click(submitButton);
  },
};