import { manufacturingProcess } from "@/assets/asset";
import ManufactorDetailsSection from "@/components/ManufactorDetailsSection";

const ManufactorProcessDetails = () => {
  return (
    <section className="m-5">
      {manufacturingProcess.map((item, index) => (
        <ManufactorDetailsSection key={index} {...item} />
      ))}
    </section>
  );
};

export default ManufactorProcessDetails;
