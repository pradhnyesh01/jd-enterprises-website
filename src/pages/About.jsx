import aboutImage from "../assets/heroabout.jpeg";

export default function About() {
  return (
    <div>

      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">About J.D. Enterprises</h1>
          <p className="mt-4 text-gray-100 max-w-2xl mx-auto">
            Government Registered Contractor providing integrated audio-visual,
            surveillance and lighting solutions.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              Company Overview
            </h2>

            <p className="text-gray-700 mb-6">
              J.D. Enterprises is a government registered contractor specializing
              in professional audio systems, CCTV surveillance, LCD projection
              systems and lighting installations. We provide complete end-to-end
              solutions from consultation and design to installation and
              maintenance.
            </p>

            <p className="text-gray-700">
              Our focus is on delivering reliable, scalable and cost-effective
              solutions for government institutions, educational campuses,
              corporate offices and industrial facilities.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src={aboutImage}
              alt="Professional Installation Work"
              className="rounded-xl shadow-lg w-full object-cover border border-gray-200"
            />

          </div>

        </div>
      </section>

      {/* Business Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">
            Business Profile
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Left Column */}
            <div className="space-y-4">
              <InfoRow label="Nature of Business" value="Service Provider and Others" />
              <InfoRow label="Additional Business" value="Works Contract, Office / Sale Office, Supplier of Services" />
              <InfoRow label="Legal Status of Firm" value="Proprietorship" />
              <InfoRow label="Annual Turnover" value="1.5 - 5 Cr" />
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <InfoRow label="Company CEO" value="Arti Jitendra Deopurkar" />
              <InfoRow label="GST Registration Date" value="01-07-2017" />
              <InfoRow label="GST Partner Name" value="Arti Jitendra Deopurkar" />
              <InfoRow label="GST No." value="27AJTPD1488P1ZD" />
            </div>

          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To provide high-quality, reliable and technologically advanced
              audio-visual and surveillance solutions that enhance security,
              communication and operational efficiency.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To become a trusted and leading solutions provider known for
              excellence, integrity and long-term client relationships.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-12">
            Why Choose J.D. Enterprises
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

            <div>
              <h4 className="font-semibold text-blue-700 mb-2">
                Government Registered Contractor
              </h4>
              <p className="text-gray-600 text-sm">
                Authorized and compliant with government standards and
                procurement processes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-blue-700 mb-2">
                Experienced Technical Team
              </h4>
              <p className="text-gray-600 text-sm">
                Skilled professionals ensuring proper installation and system
                optimization.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-blue-700 mb-2">
                Turnkey Project Execution
              </h4>
              <p className="text-gray-600 text-sm">
                From consultation to commissioning and AMC support.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-700 font-medium">
            <div>Government Institutions</div>
            <div>Educational Campuses</div>
            <div>Corporate Offices</div>
            <div>Industrial Facilities</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">
            Let’s Build a Secure & Smart Infrastructure
          </h2>
          <p className="mt-4 text-gray-200">
            Contact us today for consultation and customized solutions.
          </p>
        </div>
      </section>

    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between border-b border-gray-200 pb-3">
      <span className="font-semibold text-gray-700">
        {label}
      </span>
      <span className="text-gray-600 text-right">
        {value}
      </span>
    </div>
  );
}
