"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This would normally be an API call to send the form data
    console.log("Form submitted:", formData);
    setFormStatus("success");
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    
    // Reset form status after 3 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 3000);
  };

  return (
    <div className="space-y-12">
      <section className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-4">
          Have questions or want to work with us? Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          
          {formStatus === "success" && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              <p>Your message has been sent successfully! We&apos;ll get back to you soon.</p>
            </div>
          )}
          
          {formStatus === "error" && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              <p>There was an error sending your message. Please try again.</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="partnership">Partnership Opportunity</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Headquarters</h3>
              <address className="not-italic text-gray-600">
                <p>123 Main Street</p>
                <p>San Francisco, CA 94105</p>
                <p>United States</p>
              </address>
              <div className="mt-4">
                <p className="text-gray-600"><strong>Phone:</strong> (123) 456-7890</p>
                <p className="text-gray-600"><strong>Email:</strong> info@example.com</p>
              </div>
              <div className="mt-4 h-48 bg-gray-200 rounded-md flex items-center justify-center">
                <p className="text-gray-500">Map would go here</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">European Office</h3>
              <address className="not-italic text-gray-600">
                <p>456 High Street</p>
                <p>London, SW1A 1AA</p>
                <p>United Kingdom</p>
              </address>
              <div className="mt-4">
                <p className="text-gray-600"><strong>Phone:</strong> +44 20 1234 5678</p>
                <p className="text-gray-600"><strong>Email:</strong> europe@example.com</p>
              </div>
              <div className="mt-4 h-48 bg-gray-200 rounded-md flex items-center justify-center">
                <p className="text-gray-500">Map would go here</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 