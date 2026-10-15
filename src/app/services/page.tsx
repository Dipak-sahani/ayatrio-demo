import { EmptyPagePlaceholder } from "@/components/EmptyPagePlaceholder";

export default function ServicesPage() {
  return (
    <EmptyPagePlaceholder
      title="Services"
      category="Sidebar"
      description="Service catalog, pricing templates, recurring retainer packages, and billing terms."
      iconName="Briefcase"
      actionText="Configure Services"
    />
  );
}
