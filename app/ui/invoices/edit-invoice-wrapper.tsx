import React from 'react'
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import Form from '@/app/ui/invoices/edit-form';

async function EditInvoiceWrapper({ id }: { id: string }) {
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <Form invoice={invoice} customers={customers} />
  )
}

export default EditInvoiceWrapper