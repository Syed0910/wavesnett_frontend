import React, { useState, useRef, useEffect } from "react";
import { Globe, CheckSquare, Square, Plus, Trash2 } from "lucide-react";

const AutoResizeTextarea = ({ value, readOnly, className }) => {
  const textareaRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      readOnly={readOnly}
      className={className}
      style={{ overflow: "hidden", resize: "none" }}
    />
  );
};

const WhatsAppGateway = () => {
  const [whatsappSettings, setWhatsappSettings] = useState({
    gatewayUrl: "https://crm.officialwa.com/api/meta/v19.0/654068424458530/messages",
    method: "POST",
    provideHeader: true,
    headers: [
      { name: "Authorization", value: "Bearer 4LuBFL4ybULXV191BKhNk8SYDSX7x2lS1ud3cHUssm1gphKANKGM6NzI" },
      { name: "Content-Type", value: "application/json" },
      { name: "API-KEY", value: "c2lzYWRhckB3YXZlc25idHQuY29t" }
    ],
    bodyParams: [
      { name: "to", value: "91((PHONE))" },
      { name: "type", value: "template" },
      { name: "template", value: '{"language": {"policy": "deterministic", "code": "en"}, "name": "((TEMPID))", "compct": ""}' }
    ],
    isEnabled: true
  });

  const [sampleUrl, setSampleUrl] = useState(
    "http://sms.abc.com/msg.php?user=abcd&pass=1234&sender=PHPISP&templateid=1569847&phone=987654321&text=Hi, Test Message"
  );
  const [replaceWith, setReplaceWith] = useState("http://sms.abc.com/msg.php");

  const whatsappTemplates = [
    {
      title: "New User",
      whatsappText:
        '{"type": "text", "text": "{{CUSTOMER_NAME}}"},{"type": "text", "text": "{{CUSTOMER_USERNAME}}"},{"type": "text", "text": "{{PLAN_NAME}}"},{"type": "text", "text": "{{CLIENT_PORTAL}}"},{"type": "text", "text": "{{ISP_NAME}}"}',
      message:
        "Welcome, Your account is created. Your username is {{CUSTOMER_USERNAME}} and planname {{PLAN_NAME}}",
      templateId: "new_user",
      variables: [
        "{{CURRENT_DATE}}",
        "{{ISP_NAME}}",
        "{{ISP_EMAIL}}",
        "{{ISP_PHONE}}",
        "{{CLIENT_PORTAL}}",
        "{{CUSTOMER_NAME}}",
        "{{CUSTOMER_USERNAME}}",
        "{{CUSTOMER_USERID}}",
        "{{CUSTOMER_PHONE}}",
        "{{PASSWORD}}",
        "{{PLAN_NAME}}",
        "{{AMOUNT}}",
        "{{PAYMENT_LINK}}"
      ]
    },
    {
      title: "Recharge User",
      whatsappText:
        '{"type": "text", "text": "{{CUSTOMER_NAME}}"},{"type": "text","text": "{{AMOUNT}}"},{"type":"text","text": "{{PLAN_NAME}}"},{"type": "text","text": "{{QTY_PLAN}}"}',
      message:
        "Hello {{CUSTOMER_USERNAME}},Your account is recharged with {{AMOUNT}} for plan {{PLAN_NAME}} and quantity {{QTY_PLAN}}",
      templateId: "recharge_user1",
      variables: [
        "{{CURRENT_DATE}}",
        "{{ISP_NAME}}",
        "{{ISP_EMAIL}}",
        "{{ISP_PHONE}}",
        "{{CLIENT_PORTAL}}",
        "{{CUSTOMER_NAME}}",
        "{{CUSTOMER_USERNAME}}",
        "{{CUSTOMER_USERID}}",
        "{{CUSTOMER_PHONE}}",
        "{{PASSWORD}}",
        "{{PLAN_NAME}}",
        "{{AMOUNT}}",
        "{{QTY_PLAN}}",
        "{{EXP_DATE}}",
        "{{PAYMENT_LINK}}"
      ]
    },
    {
      title: "Plan Change",
      whatsappText:
        '{"type": "text", "text": "{{CUSTOMER_NAME}}"},{"type": "text", "text": "{{NEW_PLAN}}"},{"type": "text", "text": "{{QTY_PLAN}}"}',
      message:
        "Hello {{CUSTOMER_USERNAME}},Your subscription is changed to plan {{NEW_PLAN}} and quantity {{QTY_PLAN}}",
      templateId: "plan_change1",
      variables: [
        "{{CURRENT_DATE}}",
        "{{ISP_NAME}}",
        "{{ISP_EMAIL}}",
        "{{ISP_PHONE}}",
        "{{CLIENT_PORTAL}}",
        "{{CUSTOMER_NAME}}",
        "{{CUSTOMER_USERNAME}}",
        "{{CUSTOMER_USERID}}",
        "{{CUSTOMER_PHONE}}",
        "{{PASSWORD}}",
        "{{NEW_PLAN}}",
        "{{QTY_PLAN}}",
        "{{OLD_PLAN}}",
        "{{OLD_QTY_PLAN}}"
      ]
    },
    {
      title: "Receipt Send",
      whatsappText:
        '{"type": "text", "text": "{{CUSTOMER_NAME}}"},{"type": "text", "text": "{{RECEIPT_AMOUNT}}"},{"type": "text", "text": "{{RECEIPT_NUMBER}}"},{"type": "text", "text": "{{RECEIPT_DATE}}"}',
      message:
        "Dear {{CUSTOMER_NAME}}, your payment of {{RECEIPT_AMOUNT}} was received and receipt {{RECEIPT_NUMBER}} was generated on {{RECEIPT_DATE}}.",
      templateId: "receipt_send1",
      variables: [
        "{{CURRENT_DATE}}",
        "{{ISP_NAME}}",
        "{{ISP_EMAIL}}",
        "{{ISP_PHONE}}",
        "{{CLIENT_PORTAL}}",
        "{{CUSTOMER_NAME}}",
        "{{CUSTOMER_USERNAME}}",
        "{{CUSTOMER_USERID}}",
        "{{CUSTOMER_PHONE}}",
        "{{PASSWORD}}",
        "{{RECEIPT_NUMBER}}",
        "{{RECEIPT_TYPE}}",
        "{{RECEIPT_AMOUNT}}",
        "{{RECEIPT_DATE}}"
      ]
    },
    {
      title: "Reset Password",
      whatsappText:
        '{"type": "text", "text": "{{CUSTOMER_NAME}}"},{"type": "text", "text": "{{INTERNET_PASSWORD}}"},{"type": "text", "text": "{{PORTAL_PASSWORD}}"}',
      message:
        "Hello {{CUSTOMER_USERNAME}}, your {{INTERNET_PASSWORD}} {{PORTAL_PASSWORD}} have been reset successfully.",
      templateId: "reset_password1_cloneeee",
      variables: [
        "{{CURRENT_DATE}}",
        "{{ISP_NAME}}",
        "{{ISP_EMAIL}}",
        "{{ISP_PHONE}}",
        "{{CLIENT_PORTAL}}",
        "{{CUSTOMER_NAME}}",
        "{{CUSTOMER_USERNAME}}",
        "{{CUSTOMER_USERID}}",
        "{{CUSTOMER_PHONE}}",
        "{{INTERNET_PASSWORD}}",
        "{{PORTAL_PASSWORD}}"
      ]
    },
    {
      title: "Expiry",
      whatsappText:
        '{"type": "text", "text": "{{CUSTOMER_NAME}}"},{"type": "text", "text": "{{END_DATE}}"}',
      message:
        "Hello {{CUSTOMER_USERNAME}}, Your subscription will expire on {{END_DATE}}",
      templateId: "expiry1",
      variables: [
        "{{CURRENT_DATE}}",
        "{{ISP_NAME}}",
        "{{ISP_EMAIL}}",
        "{{ISP_PHONE}}",
        "{{CLIENT_PORTAL}}",
        "{{CUSTOMER_NAME}}",
        "{{CUSTOMER_USERNAME}}",
        "{{CUSTOMER_USERID}}",
        "{{CUSTOMER_PHONE}}",
        "{{PASSWORD}}",
        "{{PLAN_NAME}}",
        "{{NEXT_PLAN_NAME}}",
        "{{NEXT_PLAN_COST}}",
        "{{END_DATE}}"
      ]
    },
    {
      title: "Expired",
      whatsappText:
        "Hi {{CUSTOMER_USERNAME}}, Your internet plan has expired. To continue your service, please renew: 📶 Plan: {{NEXT_PLAN_NAME}} 💳 Cost: ₹{{NEXT_PLAN_COST}} Renew now at: {{CLIENT_PORTAL}}",
      message:
        "Hello {{CUSTOMER_USERNAME}}, Your subscription was expired. Renew your plan {{NEXT_PLAN_NAME}} for {{NEXT_PLAN_COST}} to continue enjoying our services",
      templateId: "Expired",
      variables: [
        "{{CURRENT_DATE}}",
        "{{ISP_NAME}}",
        "{{ISP_EMAIL}}",
        "{{ISP_PHONE}}",
        "{{CLIENT_PORTAL}}",
        "{{CUSTOMER_NAME}}",
        "{{CUSTOMER_USERNAME}}",
        "{{CUSTOMER_USERID}}",
        "{{CUSTOMER_PHONE}}",
        "{{PASSWORD}}",
        "{{PLAN_NAME}}",
        "{{NEXT_PLAN_NAME}}",
        "{{NEXT_PLAN_COST}}"
      ]
    },
    {
      title: "Quota Used",
      whatsappText:
        "Hello {{CUSTOMER_USERNAME}}, Your {{PLAN_NAME}} plan has reached {{USED_DATA}} of its usage limit.",
      message:
        "Hello {{CUSTOMER_USERNAME}}, Your {{PLAN_NAME}} plan has reached {{USED_DATA}} of its usage limit.",
      templateId: "quota_used",
      variables: [
        "{{CURRENT_DATE}}",
        "{{ISP_NAME}}",
        "{{ISP_EMAIL}}",
        "{{ISP_PHONE}}",
        "{{CLIENT_PORTAL}}",
        "{{CUSTOMER_NAME}}",
        "{{CUSTOMER_USERNAME}}",
        "{{CUSTOMER_USERID}}",
        "{{CUSTOMER_PHONE}}",
        "{{PASSWORD}}",
        "{{PLAN_NAME}}",
        "{{PLAN_TYPE}}",
        "{{USED_DATA}}"
      ]
    },
    {
      title: "FUP Over",
      whatsappText:
        '{"type": "text", "text": "{{CUSTOMER_NAME}}"},{"type": "text", "text": "{{PLAN_NAME}}"},{"type": "text", "text": "{{FUP_BANDWIDTH}}"}',
      message:
        "Hello {{CUSTOMER_USERNAME}}, your FUP {{PLAN_NAME}} plan quota limit is over and your internet speed has been reduced to {{FUP_BANDWIDTH}}.",
      templateId: "fup_over1",
      variables: [
        "{{CURRENT_DATE}}",
        "{{ISP_NAME}}",
        "{{ISP_EMAIL}}",
        "{{ISP_PHONE}}",
        "{{CLIENT_PORTAL}}",
        "{{CUSTOMER_NAME}}",
        "{{CUSTOMER_USERNAME}}",
        "{{CUSTOMER_USERID}}",
        "{{CUSTOMER_PHONE}}",
        "{{PASSWORD}}",
        "{{PLAN_NAME}}",
        "{{FUP_BANDWIDTH}}"
      ]
    },
    {
      title: "NAS",
      whatsappText: `📢 Alert from {{ISP_NAME}}
Status: {{CONNSTATUS}}
NAS IP: [{{NASIP}}]
Reason: {{REASON}}
🕒 {{CURRENT_DATETIME}}`,
      message:
        "Hello, {{ISPNAME}} {{CONNSTATUS}} in your NAS IP [{{NASIP}}]. {{REASON}}",
      templateId: "NAS",
      variables: [
        "{{CURRENT_DATETIME}}",
        "{{CONNSTATUS}}",
        "{{NASIP}}",
        "{{REASON}}",
        "{{ISP_NAME}}"
      ]
    },
    {
      title: "OTP",
      whatsappText: `{"type": "text", "text": "{{OTP}}"},{"type": "text", "text": "{{ISPNAME}}"}`,
      message: "OTP is {{OTP}} for {{ISP_NAME}} user registration.",
      templateId: "otp_registration",
      variables: [
        "{{CURRENT_DATE}}",
        "{{ISP_NAME}}",
        "{{ISP_EMAIL}}",
        "{{ISP_PHONE}}",
        "{{CLIENT_PORTAL}}",
        "{{CUSTOMER_USERNAME}}",
        "{{OTP_RESONE}}",
        "{{OTP}}"
      ]
    },
    {
      title: "Enable User",
      whatsappText:
        '{"type": "text", "text": "{{CUSTOMER_NAME}}"},{"type": "text", "text": "{{ISP_NAME}}"}',
      message:
        "Hello {{CUSTOMER_USERNAME}}, your account with {{ISP_NAME}} has been successfully enabled.",
      templateId: "enable_user1",
      variables: [
        "{{CURRENT_DATE}}",
        "{{ISP_NAME}}",
        "{{ISP_EMAIL}}",
        "{{ISP_PHONE}}",
        "{{CLIENT_PORTAL}}",
        "{{CUSTOMER_NAME}}",
        "{{CUSTOMER_USERNAME}}",
        "{{CUSTOMER_USERID}}",
        "{{CUSTOMER_PHONE}}",
        "{{PASSWORD}}"
      ]
    },
    {
      title: "Disable User",
      whatsappText:
        '{"type": "text", "text": "{{CUSTOMER_NAME}}"},{"type": "text", "text": "{{ISP_NAME}}"}',
      message:
        "Hello {{CUSTOMER_USERNAME}}, your account with {{ISP_NAME}} has been disabled.",
      templateId: "disable_user1",
      variables: [
        "{{CURRENT_DATE}}",
        "{{ISP_NAME}}",
        "{{ISP_EMAIL}}",
        "{{ISP_PHONE}}",
        "{{CLIENT_PORTAL}}",
        "{{CUSTOMER_NAME}}",
        "{{CUSTOMER_USERNAME}}",
        "{{CUSTOMER_USERID}}",
        "{{CUSTOMER_PHONE}}",
        "{{PASSWORD}}"
      ]
    },
    {
      title: "Service Resume",
      whatsappText:
        '{"type": "text", "text": "{{CUSTOMER_NAME}}"},{"type": "text", "text": "{{END_DATE}}"}',
      message:
        "Hello {{CUSTOMER_USERNAME}}, your account with {{ISP_NAME}} has been successfully Start.",
      templateId: "service_resume",
      variables: [
        "{{CURRENT_DATE}}",
        "{{ISP_NAME}}",
        "{{ISP_EMAIL}}",
        "{{ISP_PHONE}}",
        "{{CLIENT_PORTAL}}",
        "{{CUSTOMER_NAME}}",
        "{{CUSTOMER_USERNAME}}",
        "{{CUSTOMER_USERID}}",
        "{{CUSTOMER_PHONE}}",
        "{{PASSWORD}}"
      ]
    },
    {
      title: "Service Suspend",
      whatsappText:
        '{"type": "text", "text": "{{CUSTOMER_NAME}}"},{"type": "text", "text": "{{ISP_NAME}}"}',
      message:
        "Hello {{CUSTOMER_USERNAME}}, your account with {{ISP_NAME}} has been Stop.",
      templateId: "service_suspend",
      variables: [
        "{{CURRENT_DATE}}",
        "{{ISP_NAME}}",
        "{{ISP_EMAIL}}",
        "{{ISP_PHONE}}",
        "{{CLIENT_PORTAL}}",
        "{{CUSTOMER_NAME}}",
        "{{CUSTOMER_USERNAME}}",
        "{{CUSTOMER_USERID}}",
        "{{CUSTOMER_PHONE}}",
        "{{PASSWORD}}",
        "{{REASON}}"
      ]
    },
    {
      title: "User Complaint",
      whatsappText:
        "Hi {{OPERATOR_NAME}}, My name is {{CUSTOMER_NAME}}, and I'm reaching out regarding an issue {{COMPLAINT_TITLE}}. I've noticed the following problems {{COMPLAINT_MESSAGE}}",
      message:
        "Hi {{OPERATOR_NAME}}, My name is {{CUSTOMER_NAME}}, and I'm reaching out regarding an issue {{COMPLAINT_TITLE}}. I've noticed the following problems {{COMPLAINT_MESSAGE}}",
      templateId: "user_complaint",
      variables: [
        "{{CURRENT_DATE}}",
        "{{ISP_NAME}}",
        "{{ISP_EMAIL}}",
        "{{ISP_PHONE}}",
        "{{CUSTOMER_NAME}}",
        "{{CUSTOMER_USERNAME}}",
        "{{CUSTOMER_USERID}}",
        "{{CUSTOMER_PHONE}}",
        "{{OPERATOR_NAME}}",
        "{{TOKEN_NUMBER}}",
        "{{COMPLAINT_TITLE}}",
        "{{COMPLAINT_MESSAGE}}",
        "{{RESOLVE_TIME}}"
      ]
    },
    {
      title: "User Complaint Acknowledgement",
      whatsappText:
        '{"type": "text", "text": "{{CUSTOMER_USERNAME}}"},{"type": "text", "text": "{{COMPLAINT_TITLE}}"},{"type": "text", "text": "{{TOKEN_NUMBER}}"},{"type": "text", "text": "{{OPERATOR_NAME}}"},{"type": "text", "text": "{{OPERATOR_PHONE}}"},{"type": "text", "text": "{{RESOLVE_TIME}}"}',
      message:
        "Hi {{CUSTOMER_USERNAME}}, we've received your complaint about {{COMPLAINT_TITLE}}. Your Token Number is {{TOKEN_NUMBER}}. It's assigned to {{OPERATOR_NAME}} (Contact: {{OPERATOR_PHONE}}). We expect to resolve this within {{RESOLVE_TIME}}. Thank you for your patience!.",
      templateId: "user_complaint_acknowledgement",
      variables: [
        "{{CURRENT_DATE}}",
        "{{ISP_NAME}}",
        "{{ISP_EMAIL}}",
        "{{ISP_PHONE}}",
        "{{CLIENT_PORTAL}}",
        "{{CUSTOMER_NAME}}",
        "{{CUSTOMER_USERNAME}}",
        "{{CUSTOMER_USERID}}",
        "{{PASSWORD}}",
        "{{OPERATOR_NAME}}",
        "{{OPERATOR_PHONE}}",
        "{{TOKEN_NUMBER}}",
        "{{COMPLAINT_TITLE}}",
        "{{COMPLAINT_MESSAGE}}",
        "{{RESOLVE_TIME}}"
      ]
    },
    {
      title: "Renewal Reminder",
      whatsappText:
        '{type:"text",text:"{{CUSTOMER_USERNAME}}"}, {type:"text",text:"{{PLAN_NAME}}"}, {type:"text",text:"{{PLAN_COST}}"}',
      message:
        "Hello {{CUSTOMER_USERNAME}}, your subscription has expired. Please renew your plan {{PLAN_NAME}} for {{PLAN_COST}} to continue enjoying our services.",
      templateId: "renewal_reminder",
      variables: [
        "{{CURRENT_DATE}}",
        "{{ISP_NAME}}",
        "{{ISP_EMAIL}}",
        "{{ISP_PHONE}}",
        "{{CLIENT_PORTAL}}",
        "{{CUSTOMER_NAME}}",
        "{{CUSTOMER_USERNAME}}",
        "{{CUSTOMER_USERID}}",
        "{{CUSTOMER_PHONE}}",
        "{{PASSWORD}}",
        "{{PLAN_NAME}}",
        "{{PLAN_COST}}"
      ]
    },
    {
      title: "Outstanding Reminder",
      whatsappText: '{"type":"text", "text": "{{CUSTOMER_USERNAME}}"},{"type": "text", "text": "{{OUTSTANDING_AMOUNT}}"}',
      message:
        "Hello {{CUSTOMER_USERNAME}}, your outstanding payment of {{OUTSTANDING_AMOUNT}} is due. Please pay to avoid service disruption.",
      templateId: "outstanding_reminder",
      variables: [
        "{{CURRENT_DATE}}",
        "{{ISP_NAME}}",
        "{{ISP_EMAIL}}",
        "{{ISP_PHONE}}",
        "{{CLIENT_PORTAL}}",
        "{{CUSTOMER_NAME}}",
        "{{CUSTOMER_USERNAME}}",
        "{{CUSTOMER_USERID}}",
        "{{CUSTOMER_PHONE}}",
        "{{PASSWORD}}",
        "{{OUTSTANDING_AMOUNT}}"
      ]
    },
    {
      title: "Announcement",
      whatsappText: "",
      message: "",
      templateId: "announcement",
      variables: []
    }
  ];

  const sampleUrlParams = [
    { parameter: "phone [User Contact Number * ]", value: "{{PHONE}}" },
    { parameter: "text [User Message * ]", value: "{{MESSAGE}}" },
    { parameter: "User", value: "abcd" },
    { parameter: "pass", value: "1234" },
    { parameter: "sender", value: "PHPISP" },
    { parameter: "templateid", value: "{{TEMPID}}" }
  ];

  const handleInputChange = (field, value) => {
    setWhatsappSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleHeaderChange = (index, field, value) => {
    const updatedHeaders = [...whatsappSettings.headers];
    updatedHeaders[index][field] = value;
    setWhatsappSettings(prev => ({
      ...prev,
      headers: updatedHeaders
    }));
  };

  const handleBodyParamChange = (index, field, value) => {
    const updatedParams = [...whatsappSettings.bodyParams];
    updatedParams[index][field] = value;
    setWhatsappSettings(prev => ({
      ...prev,
      bodyParams: updatedParams
    }));
  };

  const addHeader = () => {
    setWhatsappSettings(prev => ({
      ...prev,
      headers: [...prev.headers, { name: "", value: "" }]
    }));
  };

  const removeHeader = (index) => {
    const updatedHeaders = [...whatsappSettings.headers];
    updatedHeaders.splice(index, 1);
    setWhatsappSettings(prev => ({
      ...prev,
      headers: updatedHeaders
    }));
  };

  const addBodyParam = () => {
    setWhatsappSettings(prev => ({
      ...prev,
      bodyParams: [...prev.bodyParams, { name: "", value: "" }]
    }));
  };

  const removeBodyParam = (index) => {
    const updatedParams = [...whatsappSettings.bodyParams];
    updatedParams.splice(index, 1);
    setWhatsappSettings(prev => ({
      ...prev,
      bodyParams: updatedParams
    }));
  };

  const handleToggleEnable = () => {
    setWhatsappSettings(prev => ({
      ...prev,
      isEnabled: !prev.isEnabled
    }));
  };

  const handleToggleHeader = () => {
    setWhatsappSettings(prev => ({
      ...prev,
      provideHeader: !prev.provideHeader
    }));
  };

  const handleSubmit = (action) => {
    console.log(`${action} clicked with settings:`, whatsappSettings);
  };

  return (
    <div className="space-y-6 p-4 md:p-6 max-w-6xl mx-auto">
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">WhatsApp Gateway Configuration</h2>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            WhatsApp Gateway URL
          </label>
          <div className="flex items-center border rounded px-3 py-2">
            <Globe className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              value={whatsappSettings.gatewayUrl}
              onChange={(e) => handleInputChange('gatewayUrl', e.target.value)}
              className="w-full outline-none text-sm"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            WhatsApp Gateway Method
          </label>
         <div className="flex space-x-4">
  <label className="inline-flex items-center">
    <input
      type="radio"
      checked={whatsappSettings.method === "GET"}
      onChange={() => handleInputChange("method", "GET")}
      className="w-4 h-4 border-gray-300 rounded accent-[var(--primary)]"
    />
    <span className="ml-2 text-sm text-gray-700">GET</span>
  </label>
  <label className="inline-flex items-center">
    <input
      type="radio"
      checked={whatsappSettings.method === "POST"}
      onChange={() => handleInputChange("method", "POST")}
      className="w-4 h-4 border-gray-300 rounded accent-[var(--primary)]"
    />
    <span className="ml-2 text-sm text-gray-700">POST</span>
  </label>
</div>

</div>
<p className="text-sm text-gray-600 py-2">
  To provide WhatsApp header, enable WhatsApp header option below and fill provided input boxes
</p>
<div className="mb-6">
  <label className="inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      checked={whatsappSettings.provideHeader}
      onChange={handleToggleHeader}
      className="w-4 h-4 border-gray-300 rounded accent-[var(--primary)] mr-2"
    />
    <span className="text-sm font-medium text-gray-700">
      Provide WhatsApp header
    </span>
  </label>
  {whatsappSettings.provideHeader && (
    <p className="text-xs text-gray-500 mt-1 ml-7">
      Provide name of header in name and its value in value column example{" "}
      <span className="text-red-500">
        Name : Accept and Value : application/json, Name : Content-Type and Value : application/json
      </span>
    </p>
  )}
</div>

{/** The table and add header button are always visible, no longer conditional **/}
<div className="mb-6 rounded-lg border border-gray-200 overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">Action</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {whatsappSettings.headers.map((header, index) => (
        <tr key={index}>
          <td className="px-4 py-2 whitespace-nowrap">
            <input
              type="text"
              value={header.name}
              onChange={(e) => handleHeaderChange(index, 'name', e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
            />
          </td>
          <td className="px-4 py-2 whitespace-nowrap">
            <input
              type="text"
              value={header.value}
              onChange={(e) => handleHeaderChange(index, 'value', e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
            />
          </td>
          <td className="px-4 py-2 whitespace-nowrap text-center">
            <button
              onClick={() => removeHeader(index)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
    <button
      onClick={addHeader}
      className="mt-2 flex items-center text-sm text-[var(--primary)] hover:opacity-80 p-3"
    >
      <Plus className="w-4 h-4 mr-1" /> Add Header
    </button>

</div>


        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">WhatsApp Gateway Body</h3>
          <div className="rounded-lg border border-gray-200 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parameters</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {whatsappSettings.bodyParams.map((param, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <input
                        type="text"
                        value={param.name}
                        onChange={(e) => handleBodyParamChange(index, 'name', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <input
                        type="text"
                        value={param.value}
                        onChange={(e) => handleBodyParamChange(index, 'value', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-center">
                      <button
                        onClick={() => removeBodyParam(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={addBodyParam}
              className="mt-2 flex items-center text-sm text-cyan-500 hover:text-cyan-700 p-3"
            >
              <Plus className="w-4 h-4 mr-1" /> Add Parameter
            </button>
          </div>
        </div>
        <div className="mb-6 pt-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">For example</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sample URL:
            </label>
            <div className="bg-gray-50 p-3 rounded border border-gray-200 text-sm text-gray-700 mb-3">
              {sampleUrl}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Replace With:
            </label>
            <div className="mb-3">
              <span className="text-sm text-gray-600">Whatsapp Gateway URL: </span>
              <span className="text-sm text-red-500">{replaceWith}</span>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parameters</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sampleUrlParams.map((param, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                      {param.parameter}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-red-500">
                      {param.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-6 pt-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Whatsapp Editing</h3>
          <div className="mb-4">
            <div className="bg-gray-50 p-3 rounded border">
              <p className="text-sm text-gray-700 mb-2"><strong>Note:-</strong></p>
              <ol className="text-sm text-gray-600 ml-4">
                <li>1. Here whatsapp text is compulsory.</li>
              </ol>
              <p className="text-sm text-gray-600 mt-2">
                Use labels following text box for replace some value in your message like → to print user name in SMS, write {`{{USERNAME}}`} in your message.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {whatsappTemplates.map((template, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-t-lg">
                  <h4 className="text-lg font-semibold text-gray-800">{template.title}</h4>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Whatsapp Text
                      </label>
                      <AutoResizeTextarea
                        value={template.whatsappText}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                        rows="3"
                        readOnly
                      />
                    </div>
                    <div>
                      <AutoResizeTextarea
                        value={template.message}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50"
                        rows="2"
                        readOnly
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {template.variables.map((variable, varIndex) => (
                        <span
                          key={varIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {variable}
                        </span>
                      ))}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Whatsapp TemplateId
                      </label>
                      <input
                        type="text"
                        value={template.templateId}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    
        <div className="flex space-x-4">
 <button 
         style={{ backgroundColor: "var(--primary)" }}
            className="hover:opacity-90 text-white px-6 py-2 rounded-md font-medium"
        >
          APPLY
        </button>
  <button
    onClick={() => handleSubmit("CANCEL")}
    className="bg-gray-300 hover:bg-gray-400 active:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 text-gray-700 px-6 py-2 rounded-md font-medium cursor-pointer transition duration-150"
  >
    CANCEL
  </button>
  <button
    onClick={() => handleSubmit("TEST")}
    className="bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 text-white px-6 py-2 rounded-md font-medium cursor-pointer transition duration-150"
  >
    CLEAR
  </button>
</div>

      </div>
    </div>
  );
};
export default WhatsAppGateway;
