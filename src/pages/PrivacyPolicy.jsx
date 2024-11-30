import Animate from "../components/Animate";

function PrivacyPolicy() {
  return (
    <div>
      <section className=" px-4 md:px-8 mt-16">
        <div className="py-16">
          <Animate>
            <h1 className="text-center text-5xl sm:text-7xl font-bold">
              Privacy Policy
            </h1>
          </Animate>
        </div>
      </section>
      <section className="bg-[#292929] px-4 md:px-8 mt-16">
        <div className="mx-auto max-w-screen-xl lg:px-12 py-16 text-white">
          <div className="flex flex-col gap-8">
            <div className="">
              <h3 className="text-xl font-medium mb-1">1. Introduction</h3>
              <p className="ml-4 text-slate-300 text-sm sm:text-base">
                Welcome to Floating Minds Infotech. We respect your privacy and
                are committed to protecting your personal data. This Privacy
                Policy informs you about how we handle your personal data. This
                Privacy Policy is designed to help you understand how we
                collect, use, disclose, and safeguard your personal information.
                By accessing or using our website, you agree to the terms of
                this Privacy Policy.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">
                2. Information We Collect
              </h3>
              <div className="flex flex-col gap-4 ml-4">
                <div>
                  <h4 className="text-lg font-medium mb-1">
                    1. Personal Information:
                  </h4>
                  <p className="ml-4 text-slate-300 text-sm sm:text-base">
                    We may collect personal information, such as your name,
                    email address, and other identifying information when you
                    voluntarily provide it to us through forms or other
                    interactions on our website, but we will not share your
                    information.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-1">
                    2. Automatically Collected Information:
                  </h4>
                  <p className="ml-4 text-slate-300 text-sm sm:text-base">
                    We may automatically collect certain information about your
                    device, browsing actions, and patterns. This information may
                    include your IP address, browser type, operating system, and
                    other technical details.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-1">
                    3. How We Use Your Information
                  </h4>
                  <div className="ml-4 text-sm sm:text-base">
                    <p>
                      We use the collected information for the following
                      purposes:
                    </p>
                    <ul className="list-disc list-inside text-slate-300">
                      <li>Provide and maintain our website.</li>
                      <li>Respond to your inquiries and requests.</li>
                      <li>Send newsletters or promotional materials.</li>
                      <li>
                        Analyze user trends and improve our website&apos;s
                        functionality.
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-1">
                    4. Cookies and Similar Technologies
                  </h4>
                  <p className="ml-4 text-slate-300 text-sm sm:text-base">
                    We use cookies and similar technologies to enhance your
                    experience on our website. You can manage your cookie
                    preferences through your browser settings.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-1">
                    5. Sharing Your Information
                  </h4>
                  <div className="ml-4 text-sm sm:text-base">
                    <p>
                      We do not share your personal data with third parties
                      except in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside text-slate-300">
                      <li>
                        When required by law or in response to legal process.
                      </li>
                      <li>
                        To protect the rights, property, or safety of Floating
                        Minds Infotech, our users, or others.
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-1">6. Data Security</h4>
                  <p className="ml-4 text-slate-300 text-sm sm:text-base">
                    We have implemented appropriate security measures to prevent
                    your personal data from being accidentally lost, used, or
                    accessed in an unauthorized way, altered, or disclosed.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-1">
                    7. Data Retention
                  </h4>
                  <p className="ml-4 text-slate-300 text-sm sm:text-base">
                    We will only retain your personal data for as long as
                    necessary to fulfill the purposes we collected it for,
                    including for the purposes of satisfying any legal,
                    accounting, or reporting requirements.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-1">
                    8. Changes to This Privacy Policy
                  </h4>
                  <p className="ml-4 text-slate-300 text-sm sm:text-base">
                    We may update our Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy
                    on this page. You are advised to review this Privacy Policy
                    periodically for any changes.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-1">9. Contact Us</h4>
                  <div className="ml-4 text-sm sm:text-base">
                    <p>
                      If you have any questions about this Privacy Policy,
                      please contact us:
                    </p>
                    <ul className="list-disc list-inside text-slate-300">
                      <li>
                        By email: floatingmindsinfotech@gmail.comBy visiting
                        this page on our website: www.floatingminds.in
                      </li>
                      <li>By phone number: +91-986 065 8321</li>
                      <li>By mail: floatingmindsinfotechl@gmail.com</li>
                      <li>
                        Office No 203, 2nd Floor, Gandharva Capital, above Hotel
                        Kolhapuri, near Sahyadri Hospital, Bhosale Nagar,
                        Hadapsar, Pune, Maharashtra 411028
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
