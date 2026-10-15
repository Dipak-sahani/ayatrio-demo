import { EmptyPagePlaceholder } from "@/components/EmptyPagePlaceholder";

export default function ClientPage() {
  return (
    <EmptyPagePlaceholder
      title="Client"
      category="Sidebar"
      description="Client master directory, GSTIN/PAN registry, authorized signatories, and KYC."
      iconName="Users"
      actionText="Add New Client"
    />
  );
}
