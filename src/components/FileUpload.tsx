import  { useState } from "react";
import axios from "axios";
import emailjs from "emailjs-com";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadUrl, setUploadUrl] = useState("");

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "eagle-file-upload"); // Cloudinary preset

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/diajo7me6/upload"
      );

      const fileUrl = response.data.secure_url;
      console.log("File URL:", fileUrl);

      setUploadUrl(fileUrl);
      alert("File uploaded successfully!");

      // Send email with the file URL
      sendEmail(fileUrl);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed");
    }
  };

  const sendEmail = (fileUrl: string) => {
    const templateParams = {
      to_email: "recipient@example.com",
      file_link: fileUrl,
    };

    emailjs
      .send(
        "service_pm8p1as",
        "template_j9bonsv",
        templateParams,
        "4W8m0TdbkSG1E0xsG"
      )
      .then(() => {
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        alert("Failed to send email");
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload & Send</button>
      {uploadUrl && (
        <div>
          <p>Uploaded File:</p>
          <a href={uploadUrl} target="_blank" rel="noopener noreferrer">
            {uploadUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
