import React from "react";

const TermsPage = () => {
  return (
    <div className="max-w-8xl p-6 text-lg">
      <h1 className="text-2xl font-bold text-center mb-2">Terms of Service</h1>
      <h2 className="text-lg font-semibold text-center mb-6">
        Log Generation and Maintenance Disclaimer
      </h2>

      <ul className="space-y-4 text-gray-700">
        <li>
          <strong>Service Availability:</strong> Our bandwidth management
          software strives to collect and store ISP logs in the cloud. However,
          we do not guarantee uninterrupted or error-free log generation due to
          potential server issues, maintenance periods, or network instability.
        </li>
        <li>
          <strong>ISP Configuration Responsibility:</strong> It is the
          responsibility of the ISP to correctly configure their network devices,
          such as MikroTik routers, to ensure that logs are properly generated
          and transmitted to our cloud service.
        </li>
        <li>
          <strong>Log Retention Period:</strong> We provide access to logs for a
          maximum period of six months. It is the responsibility of the ISP to
          download and securely store logs periodically to ensure compliance
          with any regulatory requirements or internal policies.
        </li>
        <li>
          <strong>Data Integrity:</strong> While we endeavor to provide accurate
          and up-to-date logs for the past six months, we do not warrant the
          completeness or accuracy of these logs at all times. Any discrepancies
          or data loss due to technical failures, misconfiguration, network
          instability, or other unforeseen issues are not the liability of our
          company.
        </li>
        <li>
          <strong>Log Scope:</strong> We only provide logs for traffic on ports
          80 (HTTP) and 443 (HTTPS). Logs for other ports are not collected or
          stored by our service.
        </li>
        <li>
          <strong>Force Majeure:</strong> We shall not be held liable for any
          failure to perform our obligations under this agreement if such
          failure is caused by events beyond our reasonable control, including
          but not limited to natural disasters, acts of war, terrorism, civil
          unrest, and network outages.
        </li>
        <li>
          <strong>Limited Liability:</strong> To the fullest extent permitted by
          law, our company shall not be liable for any direct, indirect,
          incidental, or consequential damages arising from the use or inability
          to use the log management services.
        </li>
      </ul>
    </div>
  );
};

export default TermsPage;
