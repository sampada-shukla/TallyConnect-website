import bimage4 from "../../assets/bimage4.jfif";

export function DemoPage() {
  return (
    <div className="relative min-h-screen font-[Inter] overflow-hidden">

    {/* Dark Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#831843]"></div>

    {/* Soft glow blobs */}
    <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-3 pt-28 pb-6">

    {/* GLASS HEADER */}
    <div className="mb-10">
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 
                  rounded-3xl px-8 py-6 text-center 
                  shadow-2xl w-full">

        <h1 className="text-4xl font-bold text-teal-300 mb-4 tracking-tight">
          Contact Support
        </h1>

        <p className="text-sm text-white/80 leading-relaxed">
          Our dedicated support team is here to assist you with any questions
          regarding Tally Connect solutions.
        </p>

      </div>
    </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* Customer Support */}
            <div className="bg-white p-5 rounded-xl shadow-md border border-transparent
                            hover:-translate-y-1 hover:shadow-xl 
                            hover:border-teal-400 transition-all duration-300">
              <h3 className="font-semibold text-base mb-3">
                Customer Support
              </h3>
              <p className="text-xs text-gray-600 mb-1">
                Email: support@tally.com
              </p>
              <p className="text-xs text-gray-600 mb-1">
                Phone: +1 (800) 123-4567
              </p>
              <p className="text-xs text-gray-600">
                24/7 Support Available
              </p>
            </div>

            {/* Sales Inquiries */}
            <div className="bg-white p-5 rounded-xl shadow-md border border-transparent
                            hover:-translate-y-1 hover:shadow-xl 
                            hover:border-blue-400 transition-all duration-300">
              <h3 className="font-semibold text-base mb-3">
                Sales Inquiries
              </h3>
              <p className="text-xs text-gray-600 mb-1">
                Email: sales@tally.com
              </p>
              <p className="text-xs text-gray-600 mb-1">
                Phone: +1 (800) 123-4568
              </p>
              <p className="text-xs text-gray-600">
                Mon-Fri: 9AM - 6PM PST
              </p>
            </div>

            {/* Office Location */}
            <div className="bg-white p-5 rounded-xl shadow-md border border-transparent
                            hover:-translate-y-1 hover:shadow-xl 
                            hover:border-purple-400 transition-all duration-300">
              <h3 className="font-semibold text-base mb-3">
                Office Location
              </h3>
              <p className="text-xs text-gray-600">
                Tally Headquarters 123 Business Ave San Francisco,
                CA 94105 United States
              </p>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="lg:col-span-2 bg-white p-7 rounded-xl shadow-lg border border-transparent
                          hover:shadow-2xl hover:border-teal-400
                          transition-all duration-300">

            <h2 className="text-lg font-semibold mb-2">
              Send us a Message
            </h2>

            <p className="text-xs text-gray-500 mb-5">
              Fill out the form below and our support team will get back to you within 24 hours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                placeholder="Full Name *"
                className="border text-sm p-2 rounded focus:ring-2 focus:ring-teal-400 outline-none"
              />
              <input
                placeholder="Email Address *"
                className="border text-sm p-2 rounded focus:ring-2 focus:ring-teal-400 outline-none"
              />
              <input
                placeholder="Phone Number"
                className="border text-sm p-2 rounded focus:ring-2 focus:ring-teal-400 outline-none"
              />
              <input
                placeholder="Company Name"
                className="border text-sm p-2 rounded focus:ring-2 focus:ring-teal-400 outline-none"
              />
            </div>

            <select className="w-full border text-sm p-2 rounded mb-4 focus:ring-2 focus:ring-teal-400 outline-none">
              <option>Technical Support</option>
              <option>Sales Inquiry</option>
              <option>General Question</option>
            </select>

            <input
              placeholder="Subject *"
              className="w-full border text-sm p-2 rounded mb-4 focus:ring-2 focus:ring-teal-400 outline-none"
            />

            <textarea
              placeholder="Please describe your inquiry in detail..."
              className="w-full border text-sm p-2 rounded mb-6 h-28 focus:ring-2 focus:ring-teal-400 outline-none"
            ></textarea>

            <div className="flex gap-4">
              <button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white text-sm py-2 rounded transition">
                Send Message
              </button>
              <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-sm py-2 rounded transition">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}