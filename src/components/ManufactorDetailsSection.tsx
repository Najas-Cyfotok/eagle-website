type ManufactorDetailsSectionProps = {
  title: string;
  des: string;
  img: string;
  logo: string;
  id: number;
};
const ManufactorDetailsSection = ({
  title,
  des,
  img,
  logo,
  id,
}: ManufactorDetailsSectionProps) => {
  return (
    <section
      className={`flex items-center gap-x-6 h-screen max-h-[1000px] max-md:flex-col justify-center px-4  my-5 rounded-lg ${
        id % 2 === 0 ? "flex-row-reverse bg-slate-200" : "bg-orange-200"
      }`}
    >
      <div className="w-1/2 flex justify-center max-md:w-full ">
        <img
          src={img}
          alt={title}
          className="w-full max-w-[500px] rounded-lg object-contain mt-10"
        />
      </div>
      <div className="w-1/2 flex flex-col items-start gap-y-4 max-md:w-full relative max-md:mt-5 max-md:justify-center">
        <img
          src={logo}
          alt="logo"
          className={
            "absolute -top-14 md:max-w-[600px] overflow-x-hidden w-[400px] md:w-full opacity-5 max-md:top-0"
          }
        />
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="text-lg">{des}</p>
      </div>
    </section>
  );
};

export default ManufactorDetailsSection;
