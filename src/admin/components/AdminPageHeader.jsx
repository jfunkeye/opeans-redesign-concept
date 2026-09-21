export default function AdminPageHeader({ title, description, action }) {
  return (
    <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-extrabold text-brand">
          {title}
        </h1>
        {description && (
          <p className="text-muted text-sm mt-1">{description}</p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}