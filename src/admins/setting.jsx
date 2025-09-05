import React, { useState } from "react";

const Setting = () => {
  const [siteName, setSiteName] = useState("My Admin Dashboard");
  const [adminEmail, setAdminEmail] = useState("admin@gmail.com");

  const handleSave = () => {
    alert(`Settings saved:\nSite Name: ${siteName}\nAdmin Email: ${adminEmail}`);
    // You can call API here to save settings
  };

  return (
    <div className="p-4" style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',}}>
      <h2 className="text-xl font-bold mb-4" >Admin Settings</h2>
      <div className="mb-3 mt-5">
<label className=" mb-1 text-danger fs-5">Admin SiteName:</label>

        <input
          type="text"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
          className="border p-2 w-full ms-2"
        />
      </div>
      <div className="mb-3">
          <label className="mb-1 fs-5` text-danger">Admin Email:</label>

        <input
          type="email"
          value={adminEmail}
          onChange={(e) => setAdminEmail(e.target.value)}
          className="border p-2 w-full ms-2"
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
