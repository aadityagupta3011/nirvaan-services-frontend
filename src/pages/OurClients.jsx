const OurClients = () => {
  const clients = ["Sunrise Apartments", "Green Valley School", "TechCorp Pvt Ltd", "CarePlus Hospital"];

  return (
    <section className="min-h-screen bg-white py-16 px-4">
      
  <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
    <img
      src="/images/logo.png"
      alt="Background Logo"
      className="w-96 opacity-30"
    />
  </div>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6 animate-fade-in">Trusted by Clients Across Industries</h2>
        <p className="text-gray-700 mb-10 animate-fade-in delay-100">
          From homes to hospitals, our expert team has cleaned tanks for clients who trust our quality and consistency.
        </p>
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in delay-200">
          {clients.map((client) => (
            <div key={client} className="bg-blue-50 p-4 rounded-xl shadow text-blue-800 font-medium hover:bg-blue-100 transition">
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
