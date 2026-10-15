import { EmptyPagePlaceholder } from "@/components/EmptyPagePlaceholder";

export default function InvoicePage() {
  return (
    <EmptyPagePlaceholder
      title="Invoice"
      category="Sidebar"
      description="Tax invoices, proforma bills, outstanding receivables, and payment receipts."
      iconName="Receipt"
      actionText="Create Invoice"
    />
  );
}
