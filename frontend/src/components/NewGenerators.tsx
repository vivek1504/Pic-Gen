import mq1 from "@/assets/mq1.webp";
import mq2 from "@/assets/mq2.webp";
import mq3 from "@/assets/mq3.webp";
import mq4 from "@/assets/mq4.webp";

const generators = [
  {
    title: "AI Art Generator",
    img: mq1,
  },
  {
    title: "Image to Image AI",
    img: mq2,
  },
  {
    title: "AI Design Generator",
    img: mq3,
  },
  {
    title: "Photo to Art Converter",
    img: mq4,
  },
];

const NewGenerators = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
          Upcoming Ai Generators on {" "}
          <span className="text-purple-400">Pic-Gen</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {generators.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 "
              />
              <div className="p-3">
                <h3 className="text-sm md:text-base font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewGenerators;
