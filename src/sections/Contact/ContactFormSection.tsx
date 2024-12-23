import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        "service_zt4h6jd", // Your Service ID
        "template_ybnk1hm", // Your Template ID
        templateParams, // Mapped template variables
        "ceU1zJoScDkS-f0si" // Your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          // Clear form after successful submission
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message, please try again later.");
        }
      );
  };
  return (
    <section className="flex justify-center gap-4 items-center my-10 min-h-[50vh] max-[1099px]:flex-col-reverse px-3">
      <div className="w-1/2 flex justify-center max-md:w-full  ">
        <form
          onSubmit={sendEmail}
          className="px-8 py-8 bg-orange-300 rounded-md flex flex-col gap-2 md:flex-row md:flex-wrap max-sm:flex-nowrap"
        >
          <div className="flex gap-2 w-full ">
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="px-2 py-1 text-black rounded-lg border-2 outline-none w-full"
              placeholder="First Name"
            />
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="px-2 py-1 text-black rounded-lg border-2 outline-none w-full"
              placeholder="Last Name"
            />
          </div>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="px-2 py-1 text-black rounded-lg border-2 outline-none w-full"
            placeholder="Email"
          />
          <input
            required
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="px-2 py-1 text-black rounded-lg border-2 outline-none w-full"
            placeholder="Phone Number"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="px-2 py-1 text-black rounded-lg border-2 outline-none w-full"
            placeholder="Message"
            rows={5}
          />

          <Button className="bg-orange-600 hover:bg-orange-500">Submit</Button>
        </form>
      </div>
      <div className="w-1/2 max-w-[400px] max-md:w-full">
        <h2 className="text-4xl font-bold">Let's Connect</h2>
        <p className="text-lg mt-4">
          Questions, comments, or suggestions? Simply fill in the form and we’ll
          be in touch shortly.
        </p>
        <div className="text-lg mt-4 flex  gap-2">
          <MapPin className="w-12 h-12 text-orange-600" />{" "}
          <p>
            No: 23, Lakshmi Nagar, Vadavalli Road, Edayarpalayam, Coimbatore
            641025
          </p>
        </div>
        <div className="text-lg mt-4 flex  gap-2">
          <Phone className="w-6 h-6 text-orange-600" />{" "}
          <p className="text-sm font-semibold">7395889955, 7395889922</p>
        </div>

        <div className="text-lg mt-4 flex  gap-2">
          <Mail className="w-6 h-6 text-orange-600" />{" "}
          <p className="text-sm font-semibold">info@epfv.in</p>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
