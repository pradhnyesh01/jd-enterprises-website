import ServiceBlock from "../components/ServiceBlock";

import audioImage from "../assets/speakers.jpg";
import cctvImage from "../assets/cctv.jpg";
import projectorImage from "../assets/projector.jpg";
import lightingImage from "../assets/lighting.jpg";

export default function Services() {
  return (
    <div>

      {/* Page Banner */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-4 text-gray-100 max-w-2xl mx-auto">
            We provide end-to-end installation, integration and maintenance
            services for professional audio-visual and surveillance systems.
          </p>
        </div>
      </section>

      {/* Audio Systems */}
      <ServiceBlock
        title="Audio Systems"
        description="Professional PA systems, conference room audio, auditorium sound setups, mixers, amplifiers and complete sound solutions."
        points={[
          "Public Address Systems",
          "Conference Room Audio",
          "Auditorium Installations",
          "Wireless Microphones",
          "AMC & Maintenance Support",
        ]}
        image={audioImage}
      />

      {/* CCTV */}
      <ServiceBlock
        title="CCTV Surveillance Systems"
        description="Complete CCTV network design, installation and remote monitoring solutions for institutions, offices and industrial facilities."
        points={[
          "IP & Analog Cameras",
          "Night Vision Systems",
          "Remote Monitoring Setup",
          "Control Room Installation",
          "Annual Maintenance Contracts",
        ]}
        image={cctvImage}
        reverse
      />

      {/* LCD Projectors */}
      <ServiceBlock
        title="LCD Projectors & Display Solutions"
        description="High-quality projection systems for classrooms, conference halls and corporate environments."
        points={[
          "Ceiling Mounted Projectors",
          "Interactive Smart Boards",
          "Projection Screens",
          "Corporate Presentation Systems",
        ]}
        image={projectorImage}
      />

      {/* Lighting */}
      <ServiceBlock
        title="Professional Lighting Systems"
        description="Energy-efficient LED and stage lighting installations for commercial and industrial use."
        points={[
          "Architectural Lighting",
          "Stage Lighting",
          "Industrial LED Solutions",
          "Commercial Lighting Systems",
        ]}
        image={lightingImage}
        reverse
      />

      {/* CTA */}
      <section className="bg-blue-800 text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">
            Need Professional Installation for Your Facility?
          </h2>
          <p className="mt-4 text-gray-200">
            Contact J.D. Enterprises today for customized solutions.
          </p>
        </div>
      </section>

    </div>
  );
}
