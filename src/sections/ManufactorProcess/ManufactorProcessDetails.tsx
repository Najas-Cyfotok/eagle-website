import { manufacturingProcess } from "@/assets/asset";
import ManufactorDetailsSection from "@/components/ManufactorDetailsSection";

const ManufactorProcessDetails = () => {
  return (
    <div className="m-5 ">
      {manufacturingProcess.map((item, index) => (
        <ManufactorDetailsSection key={index} {...item} />
      ))}
    </div>
  );
};

export default ManufactorProcessDetails;
