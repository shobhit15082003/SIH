

export const EnquirePage = () => {
    return (
      <div className="mt-20 mb-20 mx-auto max-w-4xl p-8 bg-white shadow-lg rounded-lg">
        <div className="text-center mb-10">
          <h1 className="text-green-700 text-4xl font-semibold">Enquiry</h1>
          <p className="text-gray-600 mt-2">Fill out the form below to enquire about our services</p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2 md:col-span-1">
              <label className="block text-gray-700">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Enter your name"
              />
            </div>
  
            <div className="col-span-2 md:col-span-1">
              <label className="block text-gray-700">Your Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Enter your email"
              />
            </div>
          </div>
  
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2 md:col-span-1">
              <label className="block text-gray-700">Contact Number</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Enter your contact number"
              />
            </div>
  
            <div className="col-span-2 md:col-span-1">
              <label className="block text-gray-700">Select Service</label>
              <select className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700">
                <option>Algo Farming</option>
                <option>Medicinal Farming</option>
                <option>Poultry Farming</option>
                <option>Dairy Farming</option>
              </select>
            </div>
          </div>
  
          <div>
            <label className="block text-gray-700">Your Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Write your message here..."
            />
          </div>
  
          <div className="text-center">
            <button className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-900 transition-colors">
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    );
  };
  