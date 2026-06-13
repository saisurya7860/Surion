import { React, useEffect } from "react";

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing and using this portfolio website, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of this website.",
    },
    {
      title: "Website Purpose",
      content:
        "This website serves as a personal portfolio showcasing my projects, skills, education, experience, and professional achievements. The content is intended for informational and professional networking purposes only.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content on this website, including project case studies, source code snippets, designs, graphics, logos, images, and written content, is the intellectual property of Surya B unless otherwise stated. Unauthorized reproduction or distribution is prohibited.",
    },
    {
      title: "Project Information",
      content:
        "Projects displayed on this website are presented for demonstration, educational, and professional purposes. Some projects may include prototypes, research concepts, or experimental implementations.",
    },
    {
      title: "Contact Form Usage",
      content:
        "If you submit information through the contact form, please provide accurate information and avoid spam, malicious content, or misuse of the communication service.",
    },
    {
      title: "External Links",
      content:
        "This website may contain links to third-party platforms such as GitHub, LinkedIn, or other resources. I am not responsible for the content or practices of external websites.",
    },
    {
      title: "Prohibited Activities",
      content:
        "You agree not to attempt unauthorized access, interfere with website functionality, distribute malicious software, or use automated tools to scrape website content without permission.",
    },
    {
      title: "Disclaimer",
      content:
        'This website and its contents are provided on an "as is" basis. While every effort is made to keep information accurate and up to date, no guarantees are made regarding completeness, accuracy, or uninterrupted availability.',
    },
    {
      title: "Limitation of Liability",
      content:
        "Under no circumstances shall I be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or reliance on its content.",
    },
    {
      title: "Privacy",
      content:
        "Information submitted through the contact form will only be used for communication purposes and will not be sold, rented, or shared with third parties unless required by law.",
    },
    {
      title: "Changes to Terms",
      content:
        "These Terms & Conditions may be updated periodically. Continued use of this website after updates constitutes acceptance of the revised terms.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#f1f4f8] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Terms & Conditions
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Please read these terms carefully before using this website.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {section.title}
              </h2>

              <p className="text-slate-600 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
      </div>
    </section>
  );
};

export default TermsPage;
