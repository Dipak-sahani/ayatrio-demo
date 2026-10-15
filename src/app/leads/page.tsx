import { EmptyPagePlaceholder } from "@/components/EmptyPagePlaceholder";

export default function LeadsPage() {
  return (
    <EmptyPagePlaceholder
      title="Leads"
      category="Sidebar"
      description="Track potential clients, consultation inquiries, and prospect conversions."
      iconName="UserCheck"
      actionText="Add New Lead"
    />
  );
}
