import React, { useState } from 'react';
import { Plus, X, Globe, Trash2 } from 'lucide-react';


const SMSGateway = () => {
  const [smsGatewayUrl, setSmsGatewayUrl] = useState('https://sms.mobileadz.in/api/push');
  const [smsMethod, setSmsMethod] = useState('Post');
  const [provideSmsHeader, setProvideSmsHeader] = useState(true);

  const [headers, setHeaders] = useState([
    { name: 'Content-Type', value: 'application/x-www-form-urlencoded' },
    { name: 'Accept', value: 'application/json' }
  ]);

  const [bodyParams, setBodyParams] = useState([
    { name: 'mobileno', value: '{{PHONE}}' },
    { name: 'text', value: '{{MESSAGE}}' },
    { name: 'apikey', value: '685d41097ba9d' },
    { name: 'sender', value: 'WvNett' }
  ]);

  const [gatewayParams, setGatewayParams] = useState([
    { name: 'phone [User Contact Number *]', value: '{{PHONE}}' },
    { name: 'text [User Message *]', value: '{{MESSAGE}}' },
    { name: 'User', value: 'abcd' },
    { name: 'pass', value: '1234' },
    { name: 'sender', value: 'PHPISP' },
    { name: 'templateid', value: '{{TEMPID}}' }
  ]);

  const addHeader = () => {
    setHeaders([...headers, { name: '', value: '' }]);
  };

  const removeHeader = (index) => {
    setHeaders(headers.filter((_, i) => i !== index));
  };

  const updateHeader = (index, field, value) => {
    const newHeaders = [...headers];
    newHeaders[index][field] = value;
    setHeaders(newHeaders);
  };

  const addBodyParam = () => {
    setBodyParams([...bodyParams, { name: '', value: '' }]);
  };

  const removeBodyParam = (index) => {
    setBodyParams(bodyParams.filter((_, i) => i !== index));
  };

  const updateBodyParam = (index, field, value) => {
    const newBodyParams = [...bodyParams];
    newBodyParams[index][field] = value;
    setBodyParams(newBodyParams);
  };

  const addGatewayParam = () => {
    setGatewayParams([...gatewayParams, { name: '', value: '' }]);
  };

  const removeGatewayParam = (index) => {
    setGatewayParams(gatewayParams.filter((_, i) => i !== index));
  };

  const updateGatewayParam = (index, field, value) => {
    const newGatewayParams = [...gatewayParams];
    newGatewayParams[index][field] = value;
    setGatewayParams(newGatewayParams);
  };

  const renderTag = (tag) => (
    <span key={tag} className="inline-block bg-blue-800 text-white text-xs px-2 py-0.25 rounded mr-0.5 mb-1">
      {tag}
    </span>
  );

  const smsTemplates = [
    {
      id: 'new-user',
      title: 'New User',
      text: 'Welcome {{CUSTOMER_NAME}}! Your Wavesnett internet account (ID: {{CUSTOMER_USERID}}) is now active. Plan: {{PLAN_NAME}}. Access your portal at www.wavesnett.com – Wavesnett',
      description: 'Welcome, Your account is created, Your username is {{CUSTOMER_USERNAME}} and planname {{PLAN_NAME}}',
      tags: ['{{CURRENT_DATE}}', '{{ISP_NAME}}', '{{ISP_EMAIL}}', '{{ISP_PHONE}}', '{{CLIENT_PORTAL}}', '{{CUSTOMER_NAME}}', '{{CUSTOMER_USERNAME}}', '{{CUSTOMER_USERID}}', '{{CUSTOMER_PHONE}}', '{{PASSWORD}}', '{{PLAN_NAME}}', '{{AMOUNT}}', '{{PAYMENT_LINK}}']
    },
    {
      id: 'recharge-user',
      title: 'Recharge User',
      text: 'Hi {{CUSTOMER_NAME}}, your Wavesnett account (ID: {{CUSTOMER_USERID}}) has been recharged with {{AMOUNT}} for plan {{PLAN_NAME}}. Thank you for choosing Wavesnett.',
      description: 'Hello {{CUSTOMER_USERNAME}}, Your account is recharged with {{AMOUNT}} for plan {{PLAN_NAME}} and quantity {{QTY_PLAN}}',
      tags: ['{{CURRENT_DATE}}', '{{ISP_NAME}}', '{{ISP_EMAIL}}', '{{ISP_PHONE}}', '{{CLIENT_PORTAL}}', '{{CUSTOMER_NAME}}', '{{CUSTOMER_USERNAME}}', '{{CUSTOMER_USERID}}', '{{CUSTOMER_PHONE}}', '{{PASSWORD}}', '{{PLAN_NAME}}', '{{AMOUNT}}', '{{QTY_PLAN}}', '{{EXP_DATE}}', '{{PAYMENT_LINK}}']
    },
    {
      id: 'plan-change',
      title: 'Plan Change',
      text: 'Hello {{CUSTOMER_NAME}}, your Wavesnett subscription (ID: {{CUSTOMER_USERID}}) has been updated to plan {{NEW_PLAN}}. For more details, visit www.wavesnett.com – Wavesnett',
      description: 'Hello {{CUSTOMER_USERNAME}}, Your subscription is changed to plan {{NEW_PLAN}} and quantity {{QTY_PLAN}}',
      tags: ['{{CURRENT_DATE}}', '{{ISP_NAME}}', '{{ISP_EMAIL}}', '{{ISP_PHONE}}', '{{CLIENT_PORTAL}}', '{{CUSTOMER_NAME}}', '{{CUSTOMER_USERNAME}}', '{{CUSTOMER_USERID}}', '{{CUSTOMER_PHONE}}', '{{PASSWORD}}', '{{NEW_PLAN}}', '{{QTY_PLAN}}', '{{OLD_PLAN}}', '{{OLD_QTY_PLAN}}']
    },
    {
      id: 'receipt-send',
      title: 'Receipt Send',
      text: 'Dear {{CUSTOMER_NAME}}, payment of {{RECEIPT_TYPE}} for Wavesnett account ID {{CUSTOMER_USERID}} has been received. Receipt No. {{RECEIPT_NUMBER}}, dated {{RECEIPT_DATE}} – Wavesnett',
      description: 'Dear {{CUSTOMER_NAME}}, your payment of {{RECEIPT_AMOUNT}} was received and receipt {{RECEIPT_NUMBER}} was generated on {{RECEIPT_DATE}}.',
      tags: ['{{CURRENT_DATE}}', '{{ISP_NAME}}', '{{ISP_EMAIL}}', '{{ISP_PHONE}}', '{{CLIENT_PORTAL}}', '{{CUSTOMER_NAME}}', '{{CUSTOMER_USERNAME}}', '{{CUSTOMER_USERID}}', '{{CUSTOMER_PHONE}}', '{{PASSWORD}}', '{{RECEIPT_NUMBER}}', '{{RECEIPT_TYPE}}', '{{RECEIPT_AMOUNT}}', '{{RECEIPT_DATE}}']
    },
    {
      id: 'reset-password',
      title: 'Reset Password',
      text: 'Hi {{CUSTOMER_USERNAME}}, your portal password for Wavesnett account ID {{CUSTOMER_USERID}} has been reset. For help, call 9886411162 or visit www.wavesnett.com – Wavesnett',
      description: 'Hello {{CUSTOMER_USERNAME}}, your {{INTERNET_PASSWORD}} {{PORTAL_PASSWORD}} have been reset successfully.',
      tags: ['{{CURRENT_DATE}}', '{{ISP_NAME}}', '{{ISP_EMAIL}}', '{{ISP_PHONE}}', '{{CLIENT_PORTAL}}', '{{CUSTOMER_NAME}}', '{{CUSTOMER_USERNAME}}', '{{CUSTOMER_USERID}}', '{{CUSTOMER_PHONE}}', '{{INTERNET_PASSWORD}}', '{{PORTAL_PASSWORD}}']
    },
    {
      id: 'expiry',
      title: 'Expiry',
      text: 'Reminder: Your Wavesnett plan {{PLAN_NAME}} will expire on {{END_DATE}}. Renew soon at www.wavesnett.com to avoid service interruption – Wavesnett',
      description: 'Hello {{CUSTOMER_USERNAME}}, Your subscription will expire on {{END_DATE}}',
      tags: ['{{CURRENT_DATE}}', '{{ISP_NAME}}', '{{ISP_EMAIL}}', '{{ISP_PHONE}}', '{{CLIENT_PORTAL}}', '{{CUSTOMER_NAME}}', '{{CUSTOMER_USERNAME}}', '{{CUSTOMER_USERID}}', '{{CUSTOMER_PHONE}}', '{{PASSWORD}}', '{{PLAN_NAME}}', '{{NEXT_PLAN_NAME}}', '{{NEXT_PLAN_COST}}', '{{END_DATE}}']
    },
    {
      id: 'expired',
      title: 'Expired',
      text: 'Hello{{CUSTOMER_USERNAME}}your Wavesnett plan{{PLAN_NAME}}has expired. Renew now at {{CLIENT_PORTAL}} or call 9886411162 Wavesnett',
      description: 'Hello {{CUSTOMER_USERNAME}}, Your subscription was expired. Renew your plan {{NEXT_PLAN_NAME}} for {{NEXT_PLAN_COST}} to continue enjoying our services',
      tags: ['{{CURRENT_DATE}}', '{{ISP_NAME}}', '{{ISP_EMAIL}}', '{{ISP_PHONE}}', '{{CLIENT_PORTAL}}', '{{CUSTOMER_NAME}}', '{{CUSTOMER_USERNAME}}', '{{CUSTOMER_USERID}}', '{{CUSTOMER_PHONE}}', '{{PASSWORD}}', '{{PLAN_NAME}}', '{{NEXT_PLAN_NAME}}', '{{NEXT_PLAN_COST}}']
    },
    {
      id: 'quota used',
      title: 'Quota used',
      text: '',
      description: 'Hello {{CUSTOMER_USERNAME}}, Your {{PLAN_NAME}} plan has reached {{USED_DATA}} of its usage limit.',
      tags: ['{{CURRENT_DATE}}', '{{ISP_NAME}}', '{{ISP_EMAIL}}', '{{ISP_PHONE}}', '{{CLIENT_PORTAL}}', '{{CUSTOMER_NAME}}', '{{CUSTOMER_USERNAME}}', '{{CUSTOMER_USERID}}', '{{CUSTOMER_PHONE}}', '{{PASSWORD}}', '{{PLAN_NAME}}', '{{PLAN_TYPE}}', '{{USED_DATA}}']
    },
    {
      id: 'fup over',
      title: 'FUP Over',
      text: 'Dear {{CUSTOMER_USERNAME}}, your plan {{PLAN_NAME}} on Wavesnett has reached its data limit. Speed is now reduced as per policy – Wavesnett',
      description: 'Hello {{CUSTOMER_USERNAME}}, Your FUP {{PLAN_NAME}} plan quota limit is over and your internet speed has reduced to {{FUP_BANDWIDTH}}.',
      tags: ['{{CURRENT_DATE}}', '{{ISP_NAME}}', '{{ISP_EMAIL}}', '{{ISP_PHONE}}', '{{CLIENT_PORTAL}}', '{{CUSTOMER_NAME}}', '{{CUSTOMER_USERNAME}}', '{{CUSTOMER_USERID}}', '{{CUSTOMER_PHONE}}', '{{PASSWORD}}', '{{PLAN_NAME}}', '{{FUP_BANDWIDTH}}']
    },
    {
      id: 'nas',
      title: 'NAS',
      text: 'Wavesnett Alert: Account ID {{ISP_NAME}} – connection issue on NAS {{NASIP}}. Reason: {{REASON}}. For help, call 9886411162 – Wavesnett',
      description: 'Hello, {{ISPNAME}} {{CONNSTATUS}} in your NAS IP [{{NASIP}}]. {{REASON}}.',
      tags: ['{{CURRENT_DATETIME}}', '{{CONNSTATUS}}', '{{NASIP}}', '{{REASON}}', '{{ISP_NAME}}']
    },
    {
      id: 'otp',
      title: 'OTP',
      text: 'Your OTP for Wavesnett account registration is {{OTP}}. Do not share this code with anyone. For help, visit www.wavesnett.com – Wavesnett',
      description: 'OTP is {{OTP}} for {{ISPNAME}} user registration.',
      tags: ['{{CURRENT_DATE}}', '{{ISP_NAME}}', '{{ISP_EMAIL}}', '{{ISP_PHONE}}', '{{CLIENT_PORTAL}}', '{{CUSTOMER_USERNAME}}', '{{OTP_RESONE}}', '{{OTP}}']
    },
    {
      id: 'enable-user',
      title: 'Enable User',
      text: 'Hello {{CUSTOMER_NAME}}, your Wavesnett account (ID: {{CUSTOMER_USERID}}) has been successfully enabled. Enjoy our services – Wavesnett',
      description: 'Hello {{CUSTOMER_USERNAME}}, your account with {{ISP_NAME}} has been successfully enabled.',
      tags: ['{{CURRENT_DATE}}', '{{ISP_NAME}}', '{{ISP_EMAIL}}', '{{ISP_PHONE}}', '{{CLIENT_PORTAL}}', '{{CUSTOMER_NAME}}', '{{CUSTOMER_USERNAME}}', '{{CUSTOMER_USERID}}', '{{CUSTOMER_PHONE}}', '{{PASSWORD}}']
    },
    {
      id: 'disable-user',
      title: 'Disable User',
      text: 'Hi {{CUSTOMER_NAME}}, your Wavesnett account (ID: {{CUSTOMER_USERID}}) has been disabled. For support, contact 9886411162 or info@wavesnett.com – Wavesnett',
      description: 'Hello {{CUSTOMER_USERNAME}}, your account with {{ISP_NAME}} has been disabled.',
      tags: ['{{CURRENT_DATE}}', '{{ISP_NAME}}', '{{ISP_EMAIL}}', '{{ISP_PHONE}}', '{{CLIENT_PORTAL}}', '{{CUSTOMER_NAME}}', '{{CUSTOMER_USERNAME}}', '{{CUSTOMER_USERID}}', '{{CUSTOMER_PHONE}}', '{{PASSWORD}}']
    },
    {
      id: 'service-resume',
      title: 'Service Resume',
      text: 'Hello {{CUSTOMER_NAME}}, internet services for your Wavesnett account (ID: {{CUSTOMER_USERID}}) have been resumed successfully. Thank you – Wavesnett',
      description: 'Hello {{CUSTOMER_USERNAME}}, your account with {{ISP_NAME}} has been successfully Start.',
      tags: ['{{CURRENT_DATE}}', '{{ISP_NAME}}', '{{ISP_EMAIL}}', '{{ISP_PHONE}}', '{{CLIENT_PORTAL}}', '{{CUSTOMER_NAME}}', '{{CUSTOMER_USERNAME}}', '{{CUSTOMER_USERID}}', '{{CUSTOMER_PHONE}}', '{{PASSWORD}}']
    },
    {
      id: 'service-suspend',
      title: 'Service Suspend',
      text: 'Hi {{CUSTOMER_USERNAME}}, your Wavesnett internet service (Account ID: {{CUSTOMER_USERID}}) has been suspended due to {{REASON}}. Contact 9886411162 for support – Wavesnett',
      description: 'Hello {{CUSTOMER_USERNAME}}, your account with {{ISP_NAME}} has been Stop.',
      tags: ['{{CURRENT_DATE}}', '{{ISP_NAME}}', '{{ISP_EMAIL}}', '{{ISP_PHONE}}', '{{CLIENT_PORTAL}}', '{{CUSTOMER_NAME}}', '{{CUSTOMER_USERNAME}}', '{{CUSTOMER_USERID}}', '{{CUSTOMER_PHONE}}', '{{PASSWORD}}', '{{REASON}}']
    },
    {
      id: 'user-complaint',
      title: 'User Complaint',
      text: 'Hi {{CUSTOMER_USERNAME}}, your complaint for Wavesnett account ID {{CUSTOMER_USERID}} has been received. Token ID: {{TOKEN_NUMBER}}. We’ll get back to you shortly – Wavesnett',
      description: 'Hi {{OPERATOR_NAME}}, My name is {{CUSTOMER_NAME}}, and I\'m reaching out regarding an issue {{COMPLAINT_TITLE}}. I\'ve noticed the following problems {{COMPLAINT_MESSAGE}}',
      tags: ['{{CURRENT_DATE}}', '{{ISP_NAME}}', '{{ISP_EMAIL}}', '{{ISP_PHONE}}', '{{CUSTOMER_NAME}}', '{{CUSTOMER_USERNAME}}', '{{CUSTOMER_USERID}}', '{{CUSTOMER_PHONE}}', '{{OPERATOR_NAME}}', '{{TOKEN_NUMBER}}', '{{COMPLAINT_TITLE}}', '{{COMPLAINT_MESSAGE}}', '{{RESOLVE_TIME}}']
    },

    {
      id: 'complaint-ack',
      title: 'User Complaint Acknowledgement',
      text: 'Hi {{CUSTOMER_USERNAME}}, your Wavesnett complaint (ID: {{CUSTOMER_USERID}}) is logged. Resolution expected by: {{RESOLVE_TIME}} – Wavesnett',
      description: 'Hi {{CUSTOMER_USERNAME}}, we have received your complaint about {{COMPLAINT_TITLE}}. Your Token Number is {{TOKEN_NUMBER}}. It is assigned to {{OPERATOR_NAME}} (Contact: {{OPERATOR_PHONE}}). We expect to resolve this within {{RESOLVE_TIME}}.',
      tags: ['{{CURRENT_DATE}}', '{{ISP_NAME}}', '{{ISP_EMAIL}}', '{{ISP_PHONE}}', '{{CLIENT_PORTAL}}', '{{CUSTOMER_NAME}}', '{{CUSTOMER_USERNAME}}', '{{CUSTOMER_USERID}}', '{{PASSWORD}}', '{{OPERATOR_NAME}}', '{{OPERATOR_PHONE}}', '{{TOKEN_NUMBER}}', '{{COMPLAINT_TITLE}}', '{{COMPLAINT_MESSAGE}}', '{{RESOLVE_TIME}}']
    },
    {
      id: 'renewal-reminder',
      title: 'Renewal Reminder',
      text: 'Hello {{CUSTOMER_USERNAME}}, your Wavesnett plan ({{PLAN_NAME}}) has expired. Renew now at www.wavesnett.com or call 9886411162 – Wavesnett',
      description: 'Hello {{CUSTOMER_USERNAME}}, your subscription has expired. Please renew your plan {{PLAN_NAME}} for {{PLAN_COST}} to continue enjoying our services.',
      tags: ['{{CURRENT_DATE}}', '{{ISP_NAME}}', '{{ISP_EMAIL}}', '{{ISP_PHONE}}', '{{CLIENT_PORTAL}}', '{{CUSTOMER_NAME}}', '{{CUSTOMER_USERNAME}}', '{{CUSTOMER_USERID}}', '{{CUSTOMER_PHONE}}', '{{PASSWORD}}', '{{PLAN_NAME}}', '{{PLAN_COST}}']
    },
    {
      id: 'outstanding-reminder',
      title: 'Outstanding Reminder',
      text: 'Hi {{CUSTOMER_NAME}}, your Wavesnett bill (Account ID: {{CUSTOMER_USERID}}) of {{OUTSTANDING_AMOUNT}} is pending. Clear dues at www.wavesnett.com to avoid service interruption – Wavesnett',
      description: 'Hello {{CUSTOMER_USERNAME}}, your outstanding payment of {{OUTSTANDING_AMOUNT}} is due. Please pay to avoid service disruption.',
      tags: ['{{CURRENT_DATE}}', '{{ISP_NAME}}', '{{ISP_EMAIL}}', '{{ISP_PHONE}}', '{{CLIENT_PORTAL}}', '{{CUSTOMER_NAME}}', '{{CUSTOMER_USERNAME}}', '{{CUSTOMER_USERID}}', '{{CUSTOMER_PHONE}}', '{{PASSWORD}}', '{{OUTSTANDING_AMOUNT}}']
    }
  ];

  const [templateTexts, setTemplateTexts] = useState(
    smsTemplates.reduce((acc, template) => {
      acc[template.id] = template.text;
      return acc;
    }, {})
  );

  const updateTemplateText = (templateId, newText) => {
    setTemplateTexts(prev => ({
      ...prev,
      [templateId]: newText
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* SMS Gateway Configuration */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">SMS Gateway Configuration</h2>

        <div className="flex w-3/4 gap-4 mb-4 items-end">
          <div className="flex-1 w-1/2 mr-20">
            <label className="block text-sm text-gray-800 mb-0">SMS Gateway URL</label>
            <div className="relative">
              <input
                type="text"
                value={smsGatewayUrl}
                onChange={(e) => setSmsGatewayUrl(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <Globe className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex gap-6 pb-2">
            <label className="text-sm text-gray-600 mb-2">SMS Gateway Method</label>
            <label className="flex items-center">
              <input
                type="radio"
                name="smsMethod"
                value="Get"
                checked={smsMethod === 'Get'}
                onChange={(e) => setSmsMethod(e.target.value)}
                className="mr-2"
              />
              Get
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="smsMethod"
                value="Post"
                checked={smsMethod === 'Post'}
                onChange={(e) => setSmsMethod(e.target.value)}
                className="mr-2"
              />
              Post
            </label>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">
            To provide SMS header, enable SMS header option below and fill provided input boxes
          </p>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={provideSmsHeader}
              onChange={(e) => setProvideSmsHeader(e.target.checked)}
              className="mr-2"
            />
            Provide SMS header
          </label>
        </div>

        {provideSmsHeader && (
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-4">
              Provide name of header in name and its value in value column example <span className="text-red-500">Name : Accept and Value : application/json, Name : Content-Type and Value : application/json</span>
            </p>


            <div className="bg-gray-50 px-4 py-2 border-b border-gray-300 flex justify-between items-center">
              <div className="flex gap-4 flex-1">
                <div className="w-1/2 font-medium text-gray-700">Name</div>
                <div className="w-1/2 font-medium text-gray-700">Value</div>
              </div>
              <button
                onClick={addHeader}
                className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-blue-600"
              >
                <Plus size={14} />
              </button>
            </div>

            {headers.map((header, index) => (
              <div key={index} className="px-4 py-2 border-b border-gray-300 last:border-b-0 flex gap-4 items-center">
                <input
                  type="text"
                  value={header.name}
                  onChange={(e) => updateHeader(index, 'name', e.target.value)}
                  className="flex-1 px-2 py-1"
                  placeholder="Header name"
                />
                <input
                  type="text"
                  value={header.value}
                  onChange={(e) => updateHeader(index, 'value', e.target.value)}
                  className="flex-1 px-2 py-1"
                  placeholder="Header value"
                />
                <button
                  onClick={() => removeHeader(index)}
                  className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}

          </div>
        )}

        {/* SMS Gateway Body */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">SMS Gateway Body</h3>


          <div className="bg-gray-50 px-4 py-2 border-b border-gray-300 flex justify-between items-center">
            <div className="flex gap-4 flex-1">
              <div className="w-1/2 font-medium text-gray-700">Parameters</div>
              <div className="w-1/2 font-medium text-gray-700">Value</div>
            </div>
            <button
              onClick={addBodyParam}
              className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-blue-600"
            >
              <Plus size={14} />
            </button>
          </div>

          {bodyParams.map((param, index) => (
            <div key={index} className="px-4 py-2 border-b border-gray-300 last:border-b-0 flex gap-4 items-center">
              <input
                type="text"
                value={param.name}
                onChange={(e) => updateBodyParam(index, 'name', e.target.value)}
                className="flex-1 px-2 py-1 "
                placeholder="Parameter name"
              />
              <input
                type="text"
                value={param.value}
                onChange={(e) => updateBodyParam(index, 'value', e.target.value)}
                className="flex-1 px-2 py-1 "
                placeholder="Parameter value"
              />
              <button
                onClick={() => removeBodyParam(index)}
                className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}

        </div>

        {/* For example */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">For example</h3>
          <p className="text-sm text-gray-600 mb-2">Sample URL:</p>
          <p className="text-sm mb-2">
            http://sms.abc.com/msg.php?user=abcd&pass=1234&sender=PHPISP&templateid=1569847&phone=
            <span className="text-red-500">987654321</span> &text=
            <span className="text-red-500">Hi, Test Message</span>
          </p>
          <p className="text-sm text-gray-600 mb-2">Replace With:</p>
          <p className="text-sm text-red-500 mb-4">SMS Gateway URL http://sms.abc.com/msg.php</p>

          {/* Gateway Parameters */}
          <div className="bg-gray-50 px-4 py-2 border-b border-gray-300 flex justify-between items-center">
            <div className="flex gap-4 flex-1">
              <div className="w-1/2 font-medium text-gray-700">Parameters</div>
              <div className="w-1/2 font-medium text-gray-700">Value</div>
            </div>
          </div>

          {gatewayParams.map((param, index) => (
            <div
              key={index}
              className="px-4 py-2 border-b border-gray-300 last:border-b-0 flex gap-4 items-center"
            >
              <p className="flex-1 text-gray-800">{param.name}</p>
              <p className="flex-1 text-red-500 ">{param.value}</p>
            </div>
          ))}
        </div>

      </div>

      {/* SMS Editing */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">SMS Editing</h2>

        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Note: -</p>
          <ol className="text-sm text-gray-600 list-decimal list-inside mb-4">
            <li>Here SMS text is compulsory.</li>
            <li>If your sms gateway use template then here pass templateid(It will display when you have entered template id in sms gateway body as per given example).</li>
          </ol>
          <p className="text-sm text-gray-600 mb-4">
            Use labels following text box for replace some value in your message like --&gt; to print user name in SMS, write {'{'}{'{'}{'}'}USERNAME{'{'}{'}'}{'{'}{'}'} in your message.
          </p>
        </div>

        {smsTemplates.map((template) => (
          <div key={template.id} className="">
            <div className="bg-gray-50 px-4 py-1 border-b border-gray-300">
              <h3 className="text-sm font-semibold underline">{template.title}</h3>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <label className="block text-xs font-medium text-gray-700 mb-0">SMS Text</label>
                <textarea
                  value={templateTexts[template.id] || template.text}
                  onChange={(e) => updateTemplateText(template.id, e.target.value)}
                  rows={3}
                  className="w-full px-3 py-0.5 border border-gray-300 rounded focus:outline-none focus:border-blue-1000"
                />
              </div>

              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2 mt-0 ">{template.description}</p>
              </div>

              <div className="flex flex-wrap text-xs gap-0">
                {template.tags.map(tag => renderTag(tag))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="bg-cyan-500 text-white px-5 py-1 rounded hover:bg-cyan-600">
          APPLY
        </button>
        <button className="bg-gray-500 text-white px-5 py-1 rounded hover:bg-gray-600">
          CANCEL
        </button>
        <button className="bg-yellow-500 text-white px-5 py-1 rounded hover:bg-yellow-600">
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default SMSGateway;