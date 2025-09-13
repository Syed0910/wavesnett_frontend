import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const NewBasePlan = () => {

    const [formData, setFormData] = useState({
        planName: '',
        packageType: 'Unlimited',
        planCategory: 'Prepaid',
        planStartOnFirstLogin: false,
        planExpiryOnCalendarDate: false,
        planExpiredAtMidnight: false,
        expiryDateMidnightTime: '',
        downloadBandwidth: '',
        uploadBandwidth: '',
        data: '',
        dataUnit: 'GB',
        planDataLimit: 'None',
        fupDownloadBandwidth: '',
        fupUploadBandwidth: '',
        nightDownloadBandwidth: '',
        nightUploadBandwidth: '',
        nightTimeStart: '21:00',
        nightTimeEnd: '08:00',
        // Burst limit fields
        burstDownload: '',
        burstDownloadUnit: 'Mbps',
        burstUpload: '',
        burstUploadUnit: 'Mbps',
        burstThresholdDownload: '',
        burstThresholdDownloadUnit: 'MB',
        burstThresholdUpload: '',
        burstThresholdUploadUnit: 'MB',
        burstTimeDownload: '',
        burstTimeUpload: '',
        // FUP Burst limit fields
        fupBurstDownload: '',
        fupBurstDownloadUnit: 'Mbps',
        fupBurstUpload: '',
        fupBurstUploadUnit: 'Mbps',
        fupBurstThresholdDownload: '',
        fupBurstThresholdDownloadUnit: 'MB',
        fupBurstThresholdUpload: '',
        fupBurstThresholdUploadUnit: 'MB',
        fupBurstTimeDownload: '',
        fupBurstTimeUpload: '',
        // Day Burst limit fields
        dayBurstDownload: '',
        dayBurstDownloadUnit: 'Mbps',
        dayBurstUpload: '',
        dayBurstUploadUnit: 'Mbps',
        dayBurstThresholdDownload: '',
        dayBurstThresholdDownloadUnit: 'MB',
        dayBurstThresholdUpload: '',
        dayBurstThresholdUploadUnit: 'MB',
        dayBurstTimeDownload: '',
        dayBurstTimeUpload: '',
        // Night Burst limit fields
        nightBurstDownload: '',
        nightBurstDownloadUnit: 'Mbps',
        nightBurstUpload: '',
        nightBurstUploadUnit: 'Mbps',
        nightBurstThresholdDownload: '',
        nightBurstThresholdDownloadUnit: 'MB',
        nightBurstThresholdUpload: '',
        nightBurstThresholdUploadUnit: 'MB',
        nightBurstTimeDownload: '',
        nightBurstTimeUpload: ''
    });

    const [expandedSections, setExpandedSections] = useState({
        burstLimit: false,
        fupBurstLimit: false,
        dayBurstLimit: false,
        nightBurstLimit: false
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Form Data:', formData);
        // Handle form submission logic here
    };

    const handleCancel = () => {
        // Navigate back to packages/base
        window.history.back();
    };

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const renderBurstLimitFields = (prefix = '') => {
        const fieldPrefix = prefix ? `${prefix}Burst` : 'burst';
        
        return (
            <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Burst Download"
                            value={formData[`${fieldPrefix}Download`]}
                            onChange={(e) => handleInputChange(`${fieldPrefix}Download`, e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <select
                            value={formData[`${fieldPrefix}DownloadUnit`]}
                            onChange={(e) => handleInputChange(`${fieldPrefix}DownloadUnit`, e.target.value)}
                            className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>Mbps</option>
                            <option>Kbps</option>
                            <option>Gbps</option>
                        </select>
                    </div>

                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Burst Upload"
                            value={formData[`${fieldPrefix}Upload`]}
                            onChange={(e) => handleInputChange(`${fieldPrefix}Upload`, e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <select
                            value={formData[`${fieldPrefix}UploadUnit`]}
                            onChange={(e) => handleInputChange(`${fieldPrefix}UploadUnit`, e.target.value)}
                            className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>Mbps</option>
                            <option>Kbps</option>
                            <option>Gbps</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Burst Threshold (Download)"
                            value={formData[`${fieldPrefix}ThresholdDownload`]}
                            onChange={(e) => handleInputChange(`${fieldPrefix}ThresholdDownload`, e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <select
                            value={formData[`${fieldPrefix}ThresholdDownloadUnit`]}
                            onChange={(e) => handleInputChange(`${fieldPrefix}ThresholdDownloadUnit`, e.target.value)}
                            className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>MB</option>
                            <option>GB</option>
                            <option>KB</option>
                        </select>
                    </div>

                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Burst Threshold (Upload)"
                            value={formData[`${fieldPrefix}ThresholdUpload`]}
                            onChange={(e) => handleInputChange(`${fieldPrefix}ThresholdUpload`, e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <select
                            value={formData[`${fieldPrefix}ThresholdUploadUnit`]}
                            onChange={(e) => handleInputChange(`${fieldPrefix}ThresholdUploadUnit`, e.target.value)}
                            className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>MB</option>
                            <option>GB</option>
                            <option>KB</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Burst Time (Download)"
                            value={formData[`${fieldPrefix}TimeDownload`]}
                            onChange={(e) => handleInputChange(`${fieldPrefix}TimeDownload`, e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <div className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-600 flex items-center">
                            seconds
                        </div>
                    </div>

                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Burst Time (Upload)"
                            value={formData[`${fieldPrefix}TimeUpload`]}
                            onChange={(e) => handleInputChange(`${fieldPrefix}TimeUpload`, e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <div className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-600 flex items-center">
                            seconds
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderBandwidthFields = () => {
        const fields = [];

        // Bandwidth fields for FUP
        if (formData.packageType === "FUP") {
            fields.push(
                <div key="bandwidth-row" className="grid grid-cols-2 gap-6 mb-4">
                    {/* Row 1: Download Bandwidth + FUP Download Bandwidth */}
                    <div className="flex w-full">
                        <input
                            type="text"
                            placeholder="Download Bandwidth"
                            value={formData.downloadBandwidth}
                            onChange={(e) =>
                                handleInputChange("downloadBandwidth", e.target.value)
                            }
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent"
                        />
                        <select className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-white 
                             focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Mbps</option>
                            <option>Kbps</option>
                        </select>
                    </div>

                    <div className="flex w-full">
                        <input
                            type="text"
                            placeholder="FUP Download Bandwidth"
                            value={formData.fupDownloadBandwidth}
                            onChange={(e) =>
                                handleInputChange("fupDownloadBandwidth", e.target.value)
                            }
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent"
                        />
                        <select className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-white 
                             focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Mbps</option>
                            <option>Kbps</option>
                            <option>Gbps</option>
                        </select>
                    </div>

                    {/* Row 2: Upload Bandwidth + FUP Upload Bandwidth */}
                    <div className="flex w-full">
                        <input
                            type="text"
                            placeholder="Upload Bandwidth"
                            value={formData.uploadBandwidth}
                            onChange={(e) =>
                                handleInputChange("uploadBandwidth", e.target.value)
                            }
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent"
                        />
                        <select className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-white 
                             focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Mbps</option>
                            <option>Kbps</option>
                        </select>
                    </div>

                    <div className="flex w-full">
                        <input
                            type="text"
                            placeholder="FUP Upload Bandwidth"
                            value={formData.fupUploadBandwidth}
                            onChange={(e) =>
                                handleInputChange("fupUploadBandwidth", e.target.value)
                            }
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent"
                        />
                        <select className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-white 
                             focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Mbps</option>
                            <option>Kbps</option>
                            <option>Gbps</option>
                        </select>
                    </div>
                </div>
            );
        }

        // Bandwidth fields for Day/Night
        else if (formData.packageType === "Day/Night") {
            fields.push(
                <div key="night-time-range" className=" ml-250 mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Night Time Range
                    </label>
                    <div className="flex items-center space-x-4">
                        <input
                            type="time"
                            value={formData.nightTimeStart}
                            onChange={(e) => handleInputChange("nightTimeStart", e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="w-16 h-1 bg-cyan-400 rounded"></div>
                        <input
                            type="time"
                            value={formData.nightTimeEnd}
                            onChange={(e) => handleInputChange("nightTimeEnd", e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            );

            fields.push(
                <div key="night-bandwidth-row" className="grid grid-cols-2 gap-6 mb-4">
                    {/* Row 1: Download + Night Download */}
                    <div className="flex w-full">
                        <input
                            type="text"
                            placeholder="Download Bandwidth"
                            value={formData.downloadBandwidth}
                            onChange={(e) =>
                                handleInputChange("downloadBandwidth", e.target.value)
                            }
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent"
                        />
                        <select className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-white 
                             focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Mbps</option>
                            <option>Kbps</option>
                        </select>
                    </div>

                    <div className="flex w-full">
                        <input
                            type="text"
                            placeholder="Night Download Bandwidth"
                            value={formData.nightDownloadBandwidth}
                            onChange={(e) =>
                                handleInputChange("nightDownloadBandwidth", e.target.value)
                            }
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent"
                        />
                        <select className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-white 
                             focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Mbps</option>
                            <option>Kbps</option>
                            <option>Gbps</option>
                        </select>
                    </div>

                    {/* Row 2: Upload + Night Upload */}
                    <div className="flex w-full">
                        <input
                            type="text"
                            placeholder="Upload Bandwidth"
                            value={formData.uploadBandwidth}
                            onChange={(e) =>
                                handleInputChange("uploadBandwidth", e.target.value)
                            }
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent"
                        />
                        <select className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-white 
                             focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Mbps</option>
                            <option>Kbps</option>
                        </select>
                    </div>

                    <div className="flex w-full">
                        <input
                            type="text"
                            placeholder="Night Upload Bandwidth"
                            value={formData.nightUploadBandwidth}
                            onChange={(e) =>
                                handleInputChange("nightUploadBandwidth", e.target.value)
                            }
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent"
                        />
                        <select className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-white 
                             focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Mbps</option>
                            <option>Kbps</option>
                            <option>Gbps</option>
                        </select>
                    </div>
                </div>
            );
        }

        // Default: only common bandwidth fields
        else {
            fields.push(
                <div key="bandwidth-row" className="grid grid-cols-1 gap-4 mb-4">
                    <div className="flex w-1/2">
                        <input
                            type="text"
                            placeholder="Download Bandwidth"
                            value={formData.downloadBandwidth}
                            onChange={(e) =>
                                handleInputChange("downloadBandwidth", e.target.value)
                            }
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent"
                        />
                        <select className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-white 
                             focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Mbps</option>
                            <option>Kbps</option>
                        </select>
                    </div>

                    <div className="flex w-1/2">
                        <input
                            type="text"
                            placeholder="Upload Bandwidth"
                            value={formData.uploadBandwidth}
                            onChange={(e) =>
                                handleInputChange("uploadBandwidth", e.target.value)
                            }
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent"
                        />
                        <select className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-white 
                             focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Mbps</option>
                            <option>Kbps</option>
                        </select>
                    </div>
                </div>
            );
        }

        return fields;
    };

    const renderBurstLimitSections = () => {
        const sections = [];

        if (formData.packageType === 'Unlimited') {
            sections.push(
                <div key="burst-limit" className=" w-1/2 mb-4">
                    <button
                        type="button"
                        onClick={() => toggleSection('burstLimit')}
                        className="flex items-center justify-between w-1/2 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                    >
                        <span className="text-blue-600 font-medium">Burst limit [optional]</span>
                        {expandedSections.burstLimit ? (
                            <ChevronUp size={16} className="text-blue-600" />
                        ) : (
                            <ChevronDown size={16} className="text-blue-600" />
                        )}
                    </button>
                    {expandedSections.burstLimit && (
                        <div className="mt-2 p-4 bg-white border border-gray-200 rounded-lg">
                            {renderBurstLimitFields()}
                        </div>
                    )}
                </div>
            );
        }

        if (formData.packageType === 'FUP') {
            sections.push(
                <div key="fup-burst-limits" className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <button
                            type="button"
                            onClick={() => toggleSection('burstLimit')}
                            className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                        >
                            <span className="text-blue-600 font-medium">Burst limit [optional]</span>
                            {expandedSections.burstLimit ? (
                                <ChevronUp size={16} className="text-blue-600" />
                            ) : (
                                <ChevronDown size={16} className="text-blue-600" />
                            )}
                        </button>
                        {expandedSections.burstLimit && (
                            <div className="mt-2 p-4 bg-white border border-gray-200 rounded-lg">
                                {renderBurstLimitFields()}
                            </div>
                        )}
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={() => toggleSection('fupBurstLimit')}
                            className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                        >
                            <span className="text-blue-600 font-medium">Fup Burst limit [optional]</span>
                            {expandedSections.fupBurstLimit ? (
                                <ChevronUp size={16} className="text-blue-600" />
                            ) : (
                                <ChevronDown size={16} className="text-blue-600" />
                            )}
                        </button>
                        {expandedSections.fupBurstLimit && (
                            <div className="mt-2 p-4 bg-white border border-gray-200 rounded-lg">
                                {renderBurstLimitFields('fup')}
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        if (formData.packageType === 'Day/Night') {
            sections.push(
                <div key="day-night-burst-limits" className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <button
                            type="button"
                            onClick={() => toggleSection('dayBurstLimit')}
                            className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                        >
                            <span className="text-blue-600 font-medium">Day Burst limit [optional]</span>
                            {expandedSections.dayBurstLimit ? (
                                <ChevronUp size={16} className="text-blue-600" />
                            ) : (
                                <ChevronDown size={16} className="text-blue-600" />
                            )}
                        </button>
                        {expandedSections.dayBurstLimit && (
                            <div className="mt-2 p-4 bg-white border border-gray-200 rounded-lg">
                                {renderBurstLimitFields('day')}
                            </div>
                        )}
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={() => toggleSection('nightBurstLimit')}
                            className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                        >
                            <span className="text-blue-600 font-medium">Night Burst limit [optional]</span>
                            {expandedSections.nightBurstLimit ? (
                                <ChevronUp size={16} className="text-blue-600" />
                            ) : (
                                <ChevronDown size={16} className="text-blue-600" />
                            )}
                        </button>
                        {expandedSections.nightBurstLimit && (
                            <div className="mt-2 p-4 bg-white border border-gray-200 rounded-lg">
                                {renderBurstLimitFields('night')}
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return sections;
    };

    return (
        <div className="w-full h-screen bg-white p-6">
            <h1 className="text-xl font-semibold text-gray-900 mb-6">New Base Plan</h1>

            <div className="space-y-6">
                {/* Package Type and Plan Category Row */}
                <div className="flex items-center gap-20 mb-6">
                    {/* Package Type */}
                    <div className="flex items-center gap-3">
                        <label className="text-sm font-medium text-gray-700">Package Type:</label>
                        <div className="flex space-x-6">
                            {['Unlimited', 'Data', 'FUP', 'Day/Night'].map((type) => (
                                <label key={type} className="flex items-center">
                                    <input
                                        type="radio"
                                        name="packageType"
                                        value={type}
                                        checked={formData.packageType === type}
                                        onChange={(e) => handleInputChange('packageType', e.target.value)}
                                        className="w-4 h-4 text-cyan-600 border-gray-300 focus:ring-cyan-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Plan Category */}
                    <div className="flex items-center  ml-120 gap-3">
                        <label className="text-sm font-medium text-gray-700">Plan Category:</label>
                        <div className="flex space-x-6">
                            {['Prepaid', 'Postpaid'].map((category) => (
                                <label key={category} className="flex items-center">
                                    <input
                                        type="radio"
                                        name="planCategory"
                                        value={category}
                                        checked={formData.planCategory === category}
                                        onChange={(e) => handleInputChange('planCategory', e.target.value)}
                                        className="w-4 h-4 text-cyan-600 border-gray-300 focus:ring-cyan-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">{category}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Plan Name and Data Fields Row */}
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Plan Name"
                        value={formData.planName}
                        onChange={(e) => handleInputChange('planName', e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-10"
                    />

                    {(formData.packageType === 'Data' || formData.packageType === 'FUP' || formData.packageType === 'Day/Night') && (
                        <div className="flex flex-col">
                            <div className='flex'>
                                <input
                                    type="text"
                                    placeholder="Data"
                                    value={formData.data}
                                    onChange={(e) => handleInputChange('data', e.target.value)}
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <select
                                    value={formData.dataUnit}
                                    onChange={(e) => handleInputChange('dataUnit', e.target.value)}
                                    className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="GB">GB</option>
                                    <option value="MB">MB</option>
                                    <option value="TB">TB</option>
                                </select>
                            </div>
                            {/* Plan Data Limit Radio Buttons */}
                            {(formData.packageType === 'Data' || formData.packageType === 'FUP') && (

                                <div className="flex items-center space-x-6 mb-4 mt-2">
                                    {/* Inline label */}
                                    <label className="text-sm font-medium text-gray-700 mr-6">
                                        Plan Data Limit
                                    </label>

                                    {/* Radio buttons */}
                                    <div className="flex space-x-6">
                                        {['None', 'Daily', 'Monthly'].map((limit) => (
                                            <label key={limit} className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="planDataLimit"
                                                    value={limit}
                                                    checked={formData.planDataLimit === limit}
                                                    onChange={(e) =>
                                                        handleInputChange('planDataLimit', e.target.value)
                                                    }
                                                    className="w-4 h-4 text-cyan-600 border-gray-300 focus:ring-cyan-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{limit}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                            )}
                        </div>

                    )}
                </div>

                {/* Checkboxes - only show if Prepaid */}
                {formData.planCategory === 'Prepaid' && (
                    <div className="space-y-3">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={formData.planStartOnFirstLogin}
                                onChange={(e) => handleInputChange('planStartOnFirstLogin', e.target.checked)}
                                className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">Plan start on first login</span>
                        </label>

                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={formData.planExpiryOnCalendarDate}
                                onChange={(e) => handleInputChange('planExpiryOnCalendarDate', e.target.checked)}
                                className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">Plan expiry on calendar date</span>
                        </label>

                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={formData.planExpiredAtMidnight}
                                onChange={(e) => handleInputChange('planExpiredAtMidnight', e.target.checked)}
                                className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">Plan expired at midNight</span>
                        </label>
                    </div>
                )}

                {/* Expiry Date Midnight Time Dropdown */}
                {formData.planExpiredAtMidnight && (
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex">
                            <select
                                value={formData.expiryDateMidnightTime}
                                onChange={(e) => handleInputChange('expiryDateMidnightTime', e.target.value)}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-white 
                   text-gray-700 focus:outline-none focus:ring-2 
                   focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="" disabled hidden className="text-gray-200">
                                    Select Expiry date midnight time
                                </option>
                                <option value="23:59:59">One day before end of day (23:59:59)</option>
                                <option value="00:00:00">Start Of Day (00:00:00)</option>
                                <option value="23:59:59">End Of Day (23:59:59)</option>
                            </select>
                        </div>

                        {/* Keep grid structure (blank second column) */}
                        <div></div>
                    </div>
                )}

                {/* Dynamic Bandwidth Fields */}
                {renderBandwidthFields()}

                {/* Dynamic Burst Limit Sections */}
                {renderBurstLimitSections()}

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-colors"
                    >
                        SUBMIT
                    </button>
                    <button
                        onClick={handleCancel}
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                    >
                        CANCEL
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewBasePlan;