import React, { useState } from 'react';
import { ArrowLeft, Upload, Download } from 'lucide-react';


const ImportPlans = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSave = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile.name);
      // Handle file upload logic here
    } else {
      alert('Please select a file first');
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleSampleDownload = () => {
    // Create a sample CSV content for plans
    const sampleData = "Plan Name,Validity,Bandwidth,Quota,Amount,Type,Status,Base Plan,Plan Group,Zone\nWavesNett 100mbps UL 12M,12 Month,100M/100M,3500G,₹5304.00,Fup,Active,100Mbps,,admin";
    const blob = new Blob([sampleData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Sample.xls';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-8xl mx-auto bg-white p-0 pt-0 min-h-screen">
      <div className="mb-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Import Plans</h2>
          <button
            onClick={handleBack}
            className="flex items-center px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors"
          >
            <ArrowLeft className="w-3 h-3 mr-2" />
            BACK
          </button>
        </div>
      </div>

      
        <div className="mb-6">
          <p className="text-gray-600 mb-2">
            <span className="font-medium">Note:</span> Please upload .xls or .xlsx file format to retrieve base plan's information according to given Sample.xls file format.{' '}
            <button
              onClick={handleSampleDownload}
              className="text-cyan-600 hover:text-cyan-800 underline inline-flex items-center ml-1"
            >
              <Download className="w-4 h-4 mr-1" />
              Sample.xls
            </button>
          </p>
        </div>

        <div className="space-y-6 pt-6 ">
          <div className="flex items-center space-x-4">
            <label className="text-gray-700 font-medium min-w-[120px]">
              Upload File Here
            </label>
            <div className="flex-1 flex items-center space-x-3">
             <label className="flex items-center justify-center w-full max-w-md px-4 py-2 border-b border-solid border-gray-300 cursor-pointer hover:border-gray-400 transition-colors">
                <Upload className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-600">
                  {selectedFile ? selectedFile.name : 'Choose File'}
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept=".xls,.xlsx"
                  onChange={handleFileSelect}
                />
              </label>
              <button
                onClick={handleSave}
                className="px-5 py-1 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition-colors"
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default ImportPlans;