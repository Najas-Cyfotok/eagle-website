"use client";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_pm8p1as", // Your updated Service ID
        "template_m4hexb4", // Your updated Template ID
        templateParams,
        "4W8m0TdbkSG1E0xsG" // Your updated Public Key
      );

      toast.success("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send failed:", error);
      toast.error("Failed to send the message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center gap-4 items-center my-10 min-h-[50vh] max-[1099px]:flex-col-reverse px-3">
      {/* Form Section */}
      <div className="w-1/2 flex justify-center max-md:w-full">
        <form
          onSubmit={sendEmail}
          className="px-8 py-8 bg-orange-300 rounded-md flex flex-col gap-4 w-full max-w-[600px]"
        >
          <div className="flex flex-wrap gap-4">
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="px-4 py-2 text-black rounded-lg border-2 outline-none flex-1"
              placeholder="First Name"
            />
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="px-4 py-2 text-black rounded-lg border-2 outline-none flex-1"
              placeholder="Last Name"
            />
          </div>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-2 text-black rounded-lg border-2 outline-none w-full"
            placeholder="Email"
          />
          <input
            required
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="px-4 py-2 text-black rounded-lg border-2 outline-none w-full"
            placeholder="Phone Number"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="px-4 py-2 text-black rounded-lg border-2 outline-none w-full"
            placeholder="Message"
          />
          <Button
            type="submit"
            disabled={loading}
            className="bg-orange-600 hover:bg-orange-500"
          >
            {loading ? "Sending..." : "Submit"}
          </Button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="w-1/2 max-w-[400px] max-md:w-full">
        <h2 className="text-4xl font-bold">Let's Connect</h2>
        <p className="text-lg mt-4">
          Questions, comments, or suggestions? Simply fill in the form, and
          we’ll be in touch shortly.
        </p>
        <div className="text-lg mt-4 flex gap-2">
          <MapPin className="w-6 h-6 text-orange-600" />
          <a
            href="https://maps.google.com/?q=No: 23, Lakshmi Nagar, Vadavalli Road, Edayarpalayam, Coimbatore 641025"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold"
          >
            No: 23, Lakshmi Nagar, Vadavalli Road, Edayarpalayam, Coimbatore
            641025
          </a>
        </div>
        <div className="text-lg mt-4 flex gap-2">
          <Phone className="w-6 h-6 text-orange-600" />
          <a href="tel:+917395889955" className="text-sm font-semibold">
            7395889955
          </a>
          <span>,</span>
          <a href="tel:+917395889922" className="text-sm font-semibold">
            7395889922
          </a>
        </div>
        <div className="text-lg mt-4 flex gap-2">
          <Mail className="w-6 h-6 text-orange-600" />
          <a href="mailto:info@epfv.in" className="text-sm font-semibold ">
            info@epfv.in
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
