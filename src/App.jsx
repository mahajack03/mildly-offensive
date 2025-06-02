import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-white text-black font-sans p-6">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-pink-600">Mildly Offensive</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Where your mom’s disapproval is our 5-star review.
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-black text-white px-6 py-2 rounded-2xl hover:bg-pink-600 transition">
            Shop the Offense
          </button>
          <button className="border border-black px-6 py-2 rounded-2xl hover:border-pink-600 hover:text-pink-600 transition">
            Mom-Friendly? Think Again
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-10">Hot Off the Offense Press</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "I’m Not Arguing, I’m Just Explaining Why You’re Wrong",
              type: "T-Shirt",
              spice: "😬",
            },
            {
              name: "Caffeine & Consequences",
              type: "Mug",
              spice: "🔥",
            },
            {
              name: "Mentally Unavailable",
              type: "Hoodie",
              spice: "😅",
            },
            {
              name: "Bad Hair, Worse Attitude",
              type: "Hat",
              spice: "🔥",
            },
            {
              name: "Oops, I Said It Again",
              type: "Keychain",
              spice: "🌶️",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border rounded-2xl p-6 shadow-md hover:shadow-lg transition bg-gray-50"
            >
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{item.type}</p>
              <p className="text-xl">{item.spice}</p>
              <p className="mt-2 text-sm text-gray-500">
                Rating: {item.spice === "😬"
                  ? "Mom’s Slightly Concerned"
                  : item.spice === "🔥"
                  ? "We’re Not Speaking Anymore"
                  : "Mildly Spicy"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-500">
        © 2025 Mildly Offensive. Stuff your mom probably won’t approve of.
      </footer>
    </main>
  );
}