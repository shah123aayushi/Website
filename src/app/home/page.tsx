export default function Home() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
        <div className="bg-white rounded-2xl shadow-xl p-10 max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Hi,i am ayushi Shah 👋
          </h2>
          <p className="text-lg text-gray-700">
            WELCOME
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="/about"
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Learn More About Me
            </a>
            <a
              href="/contact"
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-100 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    );
  }
  