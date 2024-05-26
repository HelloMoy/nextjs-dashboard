import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import EditInvoiceWrapper from '@/app/ui/invoices/edit-invoice-wrapper';
import { EditInvoiceFormSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Suspense fallback={<EditInvoiceFormSkeleton />}>
        <EditInvoiceWrapper id={id} />
      </Suspense>
    </main>
  );
}