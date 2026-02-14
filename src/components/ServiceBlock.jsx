export default function ServiceBlock({
  title,
  description,
  points,
  image,
  reverse,
}) {
  return (
    <section className="py-20 bg-white animate-fadeUp">
      <div
        className={`max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          reverse ? "lg:flex lg:flex-row-reverse" : "lg:flex"
        }`}
      >
        {/* Image */}
        <div className="w-full">
          <img
            src={image}
            alt={title}
            className="rounded-xl shadow-xl w-full h-[380px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            {title}
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            {description}
          </p>

          <ul className="space-y-3">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-600"
              >
                <span className="text-blue-600 font-bold mt-1">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
