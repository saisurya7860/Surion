import React, { useState } from "react";
import { Send } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

const ContactSection = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending message...");

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setResult(""); // Clear sending status on success
        event.target.reset();
      } else {
        toast.error("Failed to send message.");
        setResult("Error sending message.");
        console.log(data);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      setResult("Error sending message.");
      console.error(error);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <section id="contact" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-slate-900">Get In Touch</h2>
            <p className="mt-3 text-slate-600 max-w-xl mx-auto">
              Have a project, opportunity, or just want to connect?
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-md p-6">
              <form onSubmit={onSubmit} className="space-y-5">
                {/* Honeypot Spam Protection */}
                <input type="checkbox" name="botcheck" className="hidden" />

                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Discussion"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                {result && (
                  <p className="text-center text-sm text-slate-600">{result}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
