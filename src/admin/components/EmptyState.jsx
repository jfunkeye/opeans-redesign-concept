export default function EmptyState({ icon: Icon, title, description, action }) {
  return (
    <div className="bg-white border border-dashed border-line p-12 text-center">
      {Icon && <Icon className="w-10 h-10 mx-auto mb-4 text-line" />}
      <p className="font-extrabold text-brand mb-2">{title}</p>
      {description && (
        <p className="text-sm text-muted max-w-md mx-auto mb-6">
          {description}
        </p>
      )}
      {action}
    </div>
  );
}