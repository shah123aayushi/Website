export default function Contact() {
    return (
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
          <textarea placeholder="Your Message" className="w-full border p-2 rounded"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Send
          </button>
        </form>
      </div>
    );
  }
  