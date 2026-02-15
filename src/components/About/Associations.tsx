import association1 from "@/assets/industrial associations/1.png";
import association2 from "@/assets/industrial associations/2.png";
import association3 from "@/assets/industrial associations/3.png";
import association4 from "@/assets/industrial associations/4.png";
import association5 from "@/assets/industrial associations/5.png";
import association6 from "@/assets/industrial associations/6.png";
import association7 from "@/assets/industrial associations/7.png";
import association8 from "@/assets/industrial associations/8.png";

const associations = [
  { src: association1, alt: "Industrial association logo 1" },
  { src: association2, alt: "Industrial association logo 2" },
  { src: association3, alt: "Industrial association logo 3" },
  { src: association4, alt: "Industrial association logo 4" },
  { src: association5, alt: "Industrial association logo 5" },
  { src: association6, alt: "Industrial association logo 6" },
  { src: association7, alt: "Industrial association logo 7" },
  { src: association8, alt: "Industrial association logo 8" },
];

const Associations = () => {
  return (
    <section className="py-20 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-text-light dark:text-text-dark">Industrial Associations</h2>
          <p className="mt-2 text-subtext-light dark:text-subtext-dark">
            Recognized for excellence and compliance with international standards.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {associations.map((association) => (
            <div
              className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-card-dark p-4 flex items-center justify-center h-28 md:h-32"
              key={association.src}
            >
              <img
                alt={association.alt}
                className="max-h-full max-w-full object-contain transition-all duration-300"
                src={association.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Associations;
