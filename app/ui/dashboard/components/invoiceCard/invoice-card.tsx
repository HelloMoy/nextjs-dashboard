import React from 'react'
import clsx from 'clsx';
import Image from 'next/image';
import { LatestInvoice } from '@/app/lib/definitions';
import { lusitana } from '@/app/ui/fonts';

interface InvoiceCardProps {
  /**
   * Class argument for the component's parent node
   */
  className?: string;
  /**
   * Invoice object belonging to the card
   */
  invoice: LatestInvoice
}

function InvoiceCard({
  className = '',
  invoice,
}: InvoiceCardProps) {
  return (
    <div
      className={clsx(
        'flex flex-row items-center justify-between py-4',
        className,
      )}
    >
      <div className="flex items-center">
        <Image
          src={invoice.image_url}
          alt={`${invoice.name}'s profile picture`}
          className="mr-4 rounded-full"
          width={32}
          height={32}
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold md:text-base">
            {invoice.name}
          </p>
          <p className="hidden text-sm text-gray-500 sm:block">
            {invoice.email}
          </p>
        </div>
      </div>
      <p
        className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
      >
        {invoice.amount}
      </p>
    </div>
  );
}

export default InvoiceCard