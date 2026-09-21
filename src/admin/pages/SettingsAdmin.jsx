import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import AdminPageHeader from "../components/AdminPageHeader";
import { getSettings, saveSettings } from "../adminStore";

export default function SettingsAdmin() {
  const [settings, setSettings] = useState(getSettings());
  const [saved, setSaved] = useState(false);

  const handleChange = (field, value) =>
    setSettings({ ...settings, [field]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    saveSettings(settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <>
      <AdminPageHeader
        title="Settings"
        description="Site-wide contact information and configuration."
      />

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-line p-6 md:p-8 max-w-2xl grid grid-cols-1 gap-5"
      >
        <div className="field">
          <label>Phone Number</label>
          <input
            value={settings.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            value={settings.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
        <div className="field">
          <label>Website</label>
          <input
            value={settings.website}
            onChange={(e) => handleChange("website", e.target.value)}
          />
        </div>
        <div className="field">
          <label>Address</label>
          <textarea
            value={settings.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </div>
        <div className="field">
          <label>Office Hours</label>
          <input
            value={settings.officeHours}
            onChange={(e) => handleChange("officeHours", e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <button type="submit" className="btn btn-primary">
            Save Settings
          </button>
          {saved && (
            <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600">
              <CheckCircle2 size={16} /> Saved
            </span>
          )}
        </div>
      </form>
    </>
  );
}