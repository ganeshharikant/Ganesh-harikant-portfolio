// components/Certifications/Certifications.jsx

import { useState } from "react";
import { certifications } from "../../constants";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpenModal = (cert) => {
    setSelectedCert(cert);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  return (
    <section
      id="certifications"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-cyan-400 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Verified credentials and skill development
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            onClick={() => handleOpenModal(cert)}
            className="border border-gray-700 bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-cyan-400/50 hover:-translate-y-2 transition duration-300"
          >
            <div className="relative p-4">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-cover rounded-xl border border-cyan-500 shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="px-6 pb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
              <h3 className="text-gray-400">{cert.issuer}</h3>
              <p className="text-gray-600 text-sm">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-cyan-400"
              >
                &times;
              </button>
            </div>

            <div className="px-6 pb-6 text-white">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full rounded-xl mb-4 shadow-md"
              />
              <h3 className="text-2xl font-bold mb-2">{selectedCert.title}</h3>
              <p className="text-gray-400 mb-1">Issued by: {selectedCert.issuer}</p>
              <p className="text-gray-500 mb-4">Date: {selectedCert.date}</p>
              <p className="text-gray-300 mb-4">{selectedCert.description}</p>
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-md shadow transition"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
