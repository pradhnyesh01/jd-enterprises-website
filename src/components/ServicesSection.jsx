import { Link } from "react-router-dom";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-800">
            Our Core Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide complete installation, configuration and maintenance
            solutions for audio-visual and surveillance systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">
                    Audio Systems
                    </h3>
                    <p className="text-gray-600 text-sm">
                    Professional PA systems, conference audio setups, amplifiers,
                    mixers and auditorium sound installations.
                    </p>
                </div>

                <Link
                    to="/services"
                    className="mt-6 text-blue-700 font-semibold hover:underline"
                >
                    Learn More →
                </Link>
            </div>


          {/* Card 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">
                    CCTV Surveillance
                    </h3>
                    <p className="text-gray-600 text-sm">
                    IP and analog CCTV systems, remote monitoring, night vision
                    cameras and complete security solutions.
                    </p>
                </div>

                <Link
                    to="/services"
                    className="mt-6 text-blue-700 font-semibold hover:underline"
                >
                    Learn More →
                </Link>
            </div>

          {/* Card 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">
                    LCD Projectors
                    </h3>
                    <p className="text-gray-600 text-sm">
                    Classroom, conference and large venue projection systems with
                    professional installation and calibration.
                    </p>
                </div>

                <Link
                    to="/services"
                    className="mt-6 text-blue-700 font-semibold hover:underline"
                >
                    Learn More →
                </Link>
            </div>

          {/* Card 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">
                    Lighting Systems
                    </h3>
                    <p className="text-gray-600 text-sm">
                    Stage lighting, architectural lighting and energy-efficient
                    LED installations for commercial and industrial facilities.
                    </p>
                </div>

                <Link
                    to="/services"
                    className="mt-6 text-blue-700 font-semibold hover:underline"
                >
                    Learn More →
                </Link>
            </div>

        </div>
      </div>
    </section>
  );
}
