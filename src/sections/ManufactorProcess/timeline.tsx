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
import photo1 from "../../assets/manufactor/shell-moulding.png";
import photo2 from "../../assets/manufactor/co2-moulding.png";
import photo3 from "../../assets/manufactor/power-coating.png";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Timeline = () => {
  /**
   * State for showing/hiding the modal
   */
  const [showModal, setShowModal] = useState(false);
  /**
   * State for the form data
   */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  /**
   * Handles the input change for the form
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e
   */
  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Handles the form submission
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_pm8p1as", // Your service ID
        "template_j9bonsv", // Your template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "4W8m0TdbkSG1E0xsG" // Your public key
      );

      // alert("Your quote request has been sent successfully!");
      toast.success("Your quote request has been sent successfully!");
      setShowModal(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send quote request. Please try again.");
    }
  };

  return (
    <main>
      <style>
        {`
          .timeline-image {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 350px;
            height: 220px;
            object-fit: cover;
            border-radius: 8px;
            z-index: 1;
            transition: all 0.3s ease;
          }

          .timeline-left .timeline-image {
            left: -550px;
          }

          .timeline-right .timeline-image {
            right: -550px;
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
              height: auto;
              margin: 130px auto 0 auto;
            }

            .vertical-timeline-element-content {
              text-align: center;
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
          <h3 className="text-2xl font-bold">SPEED CAST:</h3>
          <h3 className="text-2xl font-bold">SPEED CAST™:</h3>
          <p>
            SPEED CAST is a sand 3D printing process that allows you to share
            the 3D model of your component. This process eliminates the
            manufacture of patterns and core boxes, and the prototype
            manufacturing time and cost are reduced drastically.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="border border-black bg-slate-50 p-2 mt-5"
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
          <img src={photo3} alt="SHELL MOULDING" className="timeline-image" />
          <h3 className="text-2xl font-bold">SHELL MOULDING:</h3>
          <p>
            Shell moulding is an expendable mould-casting process that uses
            resin-covered sand to form the mould. Resin-coated sand is filled
            into the pattern or core box and heated to 450°C for a specific
            time.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="border border-black bg-slate-50 p-2 mt-5"
          >
            Get your Quote
          </button>
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
          <img src={photo1} alt="CO2 MOULDING" className="timeline-image" />
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
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #fed7aa",
          }}
          iconStyle={{
            background: "#fed7aa",
            color: "black",
            top: "170px",
          }}
          icon={<StarIcon />}
        >
          <img src={photo2} alt="CNC MACHINING" className="timeline-image" />
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
          <img src={photo3} alt="POWDER COATING" className="timeline-image" />
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
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #fed7aa",
          }}
          iconStyle={{
            background: "#fed7aa",
            color: "black",
            top: "185px",
          }}
          icon={<StarIcon />}
        >
          <img src={photo1} alt="LASER ENGRAVING" className="timeline-image" />
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
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #e2e8f0",
          }}
          iconStyle={{
            background: "#e2e8f0",
            color: "black",
            top: "180px",
          }}
          icon={<StarIcon />}
        >
          <img src={photo2} alt="LASER CUTTING" className="timeline-image" />
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
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #fed7aa",
          }}
          iconStyle={{
            background: "#fed7aa",
            color: "black",
            top: "170px",
          }}
          icon={<StarIcon />}
        >
          <img src={photo3} alt="3D MODELLING" className="timeline-image" />
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
          <img src={photo1} alt="3D PRINTING" className="timeline-image" />
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

      {/* Modal for "Get Your Quote" */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-[90%] max-w-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
                placeholder="Your Email"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
                placeholder="Your Phone Number"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
                placeholder="Your Message"
                rows={5}
                required
              ></textarea>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border rounded bg-orange-500 text-white hover:bg-orange-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Timeline;
