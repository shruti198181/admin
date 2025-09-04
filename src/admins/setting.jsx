import React, { useState } from "react";

const Setting = () => {
  const [siteName, setSiteName] = useState("My Admin Dashboard");
  const [adminEmail, setAdminEmail] = useState("admin@gmail.com");

  const handleSave = () => {
    alert(`Settings saved:\nSite Name: ${siteName}\nAdmin Email: ${adminEmail}`);
    // You can call API here to save settings
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Admin Settings</h2>
      <div className="mb-3">
        <label className="block mb-1">Site Name:</label>
        <input
          type="text"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-3">
        <label className="block mb-1">Admin Email:</label>
        <input
          type="email"
          value={adminEmail}
          onChange={(e) => setAdminEmail(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <button
        onClick={handleSave}
        className="bg-blue-500 text-black px-4 py-2 rounded"
      >
        Save Settings
      </button>
    </div>
  );
};

export default Setting;
