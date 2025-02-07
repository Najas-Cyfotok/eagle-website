/**
 * Timeline component for the manufactoring process
 */
import { useState } from "react";
import { StarIcon } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import photo1 from "../../assets/manufactor/Speed_cast.jpg";
import photo2 from "../../assets/manufactor/Induction-Melting.jpg";
import photo3 from "../../assets/manufactor/Shell_Moulding.jpg";
import photo4 from "../../assets/manufactor/CO2_Moulding.jpg";
import photo5 from "../../assets/manufactor/cnc-machining.png";

import photo6 from "../../assets/manufactor/powder-coatings.jpg";
import photo7 from "../../assets/manufactor/laser.jpg";
import photo8 from "../../assets/manufactor/Laser_Cutting.webp";
import photo9 from "../../assets/manufactor/3D_Modelling.png";
import photo10 from "../../assets/manufactor/3D_Printing.avif";
import { XIcon } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import axios from "axios";

const Timeline = () => {
  // State for showing modal
  const [showModal, setShowModal] = useState(false);

  // Form Data State
  const [form, setForm] = useState({
    company: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectTitle: "",
    message: "",
    driveLink: "",
  });

  const [file, setFile] = useState(null);
  const [uploadUrl, setUploadUrl] = useState("");
  // Checkbox state
  const [isHuman, setIsHuman] = useState(false);

  /**
   * Handles input changes in the form
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /**
   * Handles form submission
   */
  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const maxSize = 10 * 1024 * 1024; // 10MB in bytes

      if (selectedFile.size > maxSize) {
        toast.error("File size exceeds 10MB. Please upload a smaller file.");
        setFile(null); // Reset file state
        return;
      }

      setFile(selectedFile);
    }
  };

  //cloudinary add
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) return alert("Please Select a file");
    if (!isHuman) return alert("Please Verify");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Eagle-Get-your-quote"); // Ensure this preset exists in Cloudinary

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/djaxm6osi/upload",
        formData // <-- Add formData here
      );

      const fileUrl = response.data.secure_url;
      console.log("File URL:", fileUrl);

      setUploadUrl(fileUrl);

      // Sending email details
      await emailjs.send(
        "service_pm8p1as", // Your EmailJS Service ID
        "template_j9bonsv", // Your EmailJS Template ID
        {
          company: form.company,
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          projectTitle: form.projectTitle,
          message: form.message,
          driveLink: fileUrl, // Use Cloudinary URL instead of Drive Link
        },
        "4W8m0TdbkSG1E0xsG" // Your EmailJS Public Key
      );

      toast.success("Your quote request has been sent successfully!");
      setShowModal(false);
      setForm({
        company: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        projectTitle: "",
        message: "",
        driveLink: "",
      });
      setIsHuman(false);
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send quote request. Please try again.");
    }
  };

  // const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (!isHuman) {
  //     toast.error("Please confirm you are not a robot!");
  //     return;
  //   }

  //   try {
  // await emailjs.send(
  //   "service_pm8p1as", // Your EmailJS Service ID
  //   "template_j9bonsv", // Your EmailJS Template ID
  //   {
  //     company: form.company,
  //     firstName: form.firstName,
  //     lastName: form.lastName,
  //     email: form.email,
  //     phone: form.phone,
  //     projectTitle: form.projectTitle,
  //     message: form.message,
  //     driveLink: form.driveLink, // Google Drive link instead of file
  //   },
  //   "4W8m0TdbkSG1E0xsG" // Your EmailJS Public Key
  // );

  // toast.success("Your quote request has been sent successfully!");
  // setShowModal(false);
  // setForm({
  //   company: "",
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   projectTitle: "",
  //   message: "",
  //   driveLink: "",
  // });
  // setIsHuman(false);
  //   } catch (error) {
  // console.error("Error sending email:", error);
  // toast.error("Failed to send quote request. Please try again.");
  //   }
  // };

  return (
    <main>
      <style>
        {`
          .timeline-image {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 450px;
            height: 300px;
            object-fit: cover;
            border-radius: 8px;
            z-index: 1;
            transition: all 0.3s ease;
          }

          .timeline-left .timeline-image {
            left: -650px;
          }

          .timeline-right .timeline-image {
            right: -650px;
          }

          .vertical-timeline-element-content {
            position: relative;
            z-index: 2;
          }

          @media (max-width: 1168px) {
            .timeline-image {
              position: static;
              width: 50%;
              height: auto;
              margin: 250px auto 0 auto;
            }
          }

          @media (max-width: 968px) {
            .timeline-image {
              position: static;
              width: 70%;
              height: auto;
              margin: 200px auto 0 auto;
            }
          }

          @media (max-width: 768px) {
            .timeline-image {
              position: static;
              width: 70%;
              height: 200px;
              margin: 130px auto 0 auto;
            }

            .vertical-timeline-element-content {
              text-align: center;
            }
              .vertical-timeline-element-content h3 {
              text-align: center;
              margin-top: -60px; 
            }
          }
        `}
      </style>

      <VerticalTimeline lineColor="gray">
        {/* Timeline Element 1 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work timeline-right h-screen flex items-center"
          id="VerticalTimelineElement"
          contentStyle={{
            background: "#fed7aa",
            color: "black",
            minHeight: "290px",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #fed7aa",
          }}
          iconStyle={{
            background: "rgba(231, 148, 103, 0.95)",
            color: "black",
            top: "160px",
          }}
          icon={<StarIcon />}
        >
          <img src={photo1} alt="SPEED CAST" className="timeline-image" />
          <h3 className="text-2xl font-bold">SPEED CAST™:</h3>
          <p>
            SPEED CAST is a sand 3D printing process that allows you to share
            the 3D model of your component. This process eliminates the
            manufacture of patterns and core boxes, and the prototype
            manufacturing time and cost are reduced drastically.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="border border-black bg-slate-100 p-2 mt-5 rounded-lg text-xs w-32"
          >
            Get your Quote
          </button>
        </VerticalTimelineElement>

        {/* Timeline Element 2 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work timeline-left h-screen flex flex-row-reverse items-center"
          id="VerticalTimelineElement"
          contentStyle={{
            background: "#e2e8f0",
            color: "black",
            minHeight: "280px",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #e2e8f0",
          }}
          iconStyle={{
            background: "#e2e8f0",
            color: "black",
            top: "160px",
          }}
          icon={<StarIcon />}
        >
          <img
            src={photo2}
            alt="INDUCTION MELTING"
            className="timeline-image"
          />
          <h3 className="text-2xl font-bold">INDUCTION MELTING:</h3>
          <p>
            We use an induction furnace to melt stainless steel and steel at
            high temperatures. Induction melting is a process in which heat is
            applied by induction heating of metal inside a coil with a
            refractory lining.
          </p>
        </VerticalTimelineElement>

        {/* Timeline Element 3 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work timeline-right h-screen flex items-center"
          id="VerticalTimelineElement"
          contentStyle={{
            background: "#fed7aa",
            color: "black",
            minHeight: "280px",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #fed7aa",
          }}
          iconStyle={{
            background: "#fed7aa",
            color: "black",
            top: "160px",
          }}
          icon={<StarIcon />}
        >
          <img src={photo3} alt="SHELL MOULDING" className="timeline-image" />
          <h3 className="text-2xl font-bold">SHELL MOULDING:</h3>
          <p>
            Shell moulding is an expendable mould-casting process that uses
            resin-covered sand to form the mould. Resin-coated sand is filled
            into the pattern or core box and heated to 450°C for a specific
            time.
          </p>
        </VerticalTimelineElement>
        {/* Content 4 */}
        <VerticalTimelineElement
          id="VerticalTimelineElement"
          className="vertical-timeline-element--work timeline-left h-screen flex flex-row-reverse items-center"
          contentStyle={{
            background: "#e2e8f0",
            color: "black",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #e2e8f0",
          }}
          iconStyle={{
            background: "#e2e8f0",
            color: "black",
            top: "140px",
          }}
          icon={<StarIcon />}
        >
          <img src={photo4} alt="CO2 MOULDING" className="timeline-image" />
          <h3 className="text-2xl font-bold">CO2 MOULDING:</h3>
          <p>
            The CO2 or carbon dioxide moulding process: a predetermined
            percentage of sodium silicate is mixed with silica sand, and the
            mixed sand is filled into the mould box with the pattern. CO2 gas is
            passed into the mould for a particular time (gas timings differ as
            per the size and complexity of the mould), and CO2 gas and sodium
            silicate react and form a gel called silica gel. This silica gel
            gives the required strength to bond the sand particles together and
            form a mould.
          </p>
        </VerticalTimelineElement>

        {/* Content 5 */}
        <VerticalTimelineElement
          id="VerticalTimelineElement"
          className="vertical-timeline-element--work timeline-right h-screen flex items-center"
          contentStyle={{
            background: "#fed7aa",
            color: "black",
            minHeight: "290px",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #fed7aa",
          }}
          iconStyle={{
            background: "#fed7aa",
            color: "black",
            top: "150px",
          }}
          icon={<StarIcon />}
        >
          <img src={photo5} alt="CNC MACHINING" className="timeline-image" />
          <h3 className="text-2xl font-bold">CNC MACHINING:</h3>
          <p>
            CNC machining is a metal removal process that uses different kinds
            of machine tools to remove material from a rotating workpiece to
            create a desired shape. In this process, the dimensional accuracy
            and surface finish of the components are well maintained, and
            productivity is also higher.
          </p>
        </VerticalTimelineElement>

        {/* Content 6 */}
        <VerticalTimelineElement
          id="VerticalTimelineElement"
          className="vertical-timeline-element--work timeline-left h-screen flex flex-row-reverse items-center"
          contentStyle={{
            background: "#e2e8f0",
            color: "black",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #e2e8f0",
          }}
          iconStyle={{
            background: "#e2e8f0",
            color: "black",
            top: "150px",
          }}
          icon={<StarIcon />}
        >
          <img src={photo6} alt="POWDER COATING" className="timeline-image" />
          <h3 className="text-2xl font-bold">POWDER COATING:</h3>
          <p>
            Powder coating is a surface finishing process that uses a dry powder
            to create a durable, corrosion-resistant coating. A spray gun sprays
            a dry powder onto the object. The powder is electrostatically
            charged, and the object is grounded to attract the powder. The
            sprayed powder adheres to the object, and the object is baked in a
            curing oven to melt the powder and fuse it into a smooth coating.
          </p>
        </VerticalTimelineElement>

        {/* Content 7 */}
        <VerticalTimelineElement
          id="VerticalTimelineElement"
          className="vertical-timeline-element--work timeline-right h-screen flex items-center"
          contentStyle={{
            background: "#fed7aa",
            color: "black",
            minHeight: "290px",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #fed7aa",
          }}
          iconStyle={{
            background: "#fed7aa",
            color: "black",
            top: "150px",
          }}
          icon={<StarIcon />}
        >
          <img src={photo7} alt="LASER ENGRAVING" className="timeline-image" />
          <h3 className="text-2xl font-bold">LASER ENGRAVING:</h3>
          <p>
            Laser engraving vaporizes materials into fumes to a very shallow
            depth of about 0.01mm to engrave permanent, deep marks. This method
            provides more accurate and faster engraving of specifications or
            other details on the product.
          </p>
        </VerticalTimelineElement>

        {/* Content 8 */}
        <VerticalTimelineElement
          id="VerticalTimelineElement"
          className="vertical-timeline-element--work timeline-left h-screen flex flex-row-reverse items-center"
          contentStyle={{
            background: "#e2e8f0",
            color: "black",
            minHeight: "290px",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #e2e8f0",
          }}
          iconStyle={{
            background: "#e2e8f0",
            color: "black",
            top: "160px",
          }}
          icon={<StarIcon />}
        >
          <img src={photo8} alt="LASER CUTTING" className="timeline-image" />
          <h3 className="text-2xl font-bold">LASER CUTTING:</h3>
          <p>
            We use laser cutting for cutting sheet metal ranging from a
            thickness of 0.5mm to 25mm into precise shapes. In this process, the
            dimensional accuracy is well maintained. Processes like rough
            drilling can be eliminated, and costs can be reduced.
          </p>
        </VerticalTimelineElement>

        {/* Content 9 */}
        <VerticalTimelineElement
          id="VerticalTimelineElement"
          className="vertical-timeline-element--work timeline-right h-screen flex items-center"
          contentStyle={{
            background: "#fed7aa",
            color: "black",
            minHeight: "290px",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #fed7aa",
          }}
          iconStyle={{
            background: "#fed7aa",
            color: "black",
            top: "150px",
          }}
          icon={<StarIcon />}
        >
          <img src={photo9} alt="3D MODELLING" className="timeline-image" />
          <h3 className="text-2xl font-bold">3D MODELLING:</h3>
          <p>
            Our CAD designers use advanced modelling software to generate 3D
            models of the components and assemble them to check for any errors
            before production. We use AI-generated design to improve durability,
            reduce material wastage, and maintain strength under desired load
            and temperature conditions.
          </p>
        </VerticalTimelineElement>

        {/* Content 10 */}
        <VerticalTimelineElement
          id="VerticalTimelineElement"
          className="vertical-timeline-element--work timeline-left h-screen flex flex-row-reverse items-center"
          contentStyle={{
            background: "#e2e8f0",
            color: "black",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #e2e8f0",
          }}
          iconStyle={{
            background: "#e2e8f0",
            color: "black",
            top: "150px",
          }}
          icon={<StarIcon />}
        >
          <img src={photo10} alt="3D PRINTING" className="timeline-image" />
          <h3 className="text-2xl font-bold">3D PRINTING:</h3>
          <p>
            3D printing, or additive manufacturing, is the construction of a 3D
            object from a CAD model. It can be done in a variety of processes
            like FDM, SLA, and SLS, in which material is deposited, joined, or
            solidified under computer control, with the material being added
            typically layer by layer. We combine both AI-generated design and 3D
            printing to manufacture cutting-edge designs.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-[90%] max-w-lg p-6 relative">
            {" "}
            {/* added relative positioning */}
            {/* Close button in top-right corner */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 p-2"
            >
              <XIcon size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
            <form onSubmit={handleFormSubmit} className="space-y-2">
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
                placeholder="Company Name *"
                required
              />
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleInputChange}
                  className="w-1/2 border rounded p-2"
                  placeholder="First Name *"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleInputChange}
                  className="w-1/2 border rounded p-2"
                  placeholder="Last Name *"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
                placeholder="Your Email *"
                required
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
                placeholder="Phone *"
                required
              />
              <input
                type="text"
                name="projectTitle"
                value={form.projectTitle}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
                placeholder="Project Title *"
                required
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
                placeholder="Message"
                rows={3}
              ></textarea>
              <label>Upto 10Mb only*</label>

              {/* Google Drive Link */}
              <input
                type="file"
                // name="driveLink"
                // value={formData.driveLink}
                onChange={handleFileChange}
                className="w-full border rounded p-2"
              />

              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={isHuman}
                  onChange={() => setIsHuman(!isHuman)}
                  className="mr-2"
                />
                <span>I am not a robot</span>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white p-2 rounded"
              >
                {!uploadUrl ? "Submit" : "Uploading..."}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Timeline;
