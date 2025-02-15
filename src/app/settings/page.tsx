import SettingsClient from "@src/components/SettingsClient";

const SettingsPage = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Settings</h2>

        <SettingsClient />
      </div>
    </div>
  );
};

export default SettingsPage;
