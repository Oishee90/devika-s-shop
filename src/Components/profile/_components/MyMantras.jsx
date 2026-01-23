import React, { useState } from "react";
import { BsUpload } from "react-icons/bs";

const collections = [
  { name: "Spiritual Journey Collection", total: 3, collected: 0 },
  { name: "Mindfulness Collection", total: 3, collected: 0 },
  { name: "Inner Peace Collection", total: 3, collected: 0 },
];

const MyMantras = () => {
  const [uploads, setUploads] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setUploads((prev) => [...prev, ...previews]);
  };

  return (
    <div className="w-full h-full bg-[#f7eed8]  p-12">
      <div className="w-fulll space-y-10">

        {/* Header */}
        <h2 className="text-3xl canela font-serif text-[#6b0f12]">My Mantras</h2>

        {/* Upload Box */}
        <div className="border-2 border-dashed border-[#c9a6a6] rounded-md p-10 text-center space-y-3">
          <p className="font-medium">Upload Your Maantra Pictures</p>
          <p className="text-sm text-[#6b0f12]">
            Share your spiritual journey by uploading pictures of your mantras
          </p>

          <label className="inline-block mt-3">
            <input type="file" multiple hidden onChange={handleUpload} />
            <span className="gap-3 bg-[#6b0f12] text-white flex items-center  px-6 py-2 text-sm cursor-pointer">
              <BsUpload /> Choose Image
            </span>
          </label>
        </div>

        {/* Total Count */}
        <div className="bg-[#e3dac7] text-center py-4 text-[#6b0f12] font-medium">
          ★ {uploads.length} <br />
          <span className="text-sm inter text-[16px]">Total Verified Mantras Collected</span>
        </div>

        {/* Collection Progress */}
        <div className="space-y-4">
          <h3 className="font-medium text-[16px] inter text-[#6b0f12]">Collection Progress</h3>

          {collections.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="inter text-[#0A0A0A]">{item.name}</span>
                <span>
                  {item.collected}/{item.total}
                </span>
              </div>
              <div className="h-2 bg-[#ddd2bf]">
                <div
                  className="h-full bg-[#6b0f12]"
                  style={{ width: `${(item.collected / item.total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Recent Uploads */}
        <div className="space-y-3 pb-20">
          <h3 className="font-[16px] inter text-[#6b0f12]">Recent Uploads</h3>

          {uploads.length === 0 ? (
            <div className="border inter border-[#c9a6a6] py-10 text-center text-sm text-[#6b0f12]">
              No mantras uploaded yet
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {uploads.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Mantra"
                  className="h-24 w-full object-cover border"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyMantras;