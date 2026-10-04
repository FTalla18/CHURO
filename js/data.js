/* =========================================================
   CHURO — business knowledge base
   Single source of truth for the website AND the chatbot.
   Update a car's status, prices or photos here and every
   tile, calculator and chatbot answer follows.

   status:
     "available" – in the rental fleet (may be out on a rental today)
     "rto"       – already on a Rent-to-Own agreement (not offered)
   ========================================================= */

window.CHURO = {
  company: {
    name: "CHURO Car Rentals",
    tagline: "Fast. Easy. Available!",
    city: "Sarasota, FL",
    turoTrips: "480+",
    rating: "4.9",
    bookingUrl: "https://forms.fillout.com/t/pHEsqVXHKaus",
    contactUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdDgjD5kFGaFIEEmNzoNym8B8v12XjKW2jX8AZsHEpCmtCb_Q/viewform?usp=sharing&ouid=115600938134616394240",
    signingPlace: "MIDFLORIDA",
  },

  // Rent-to-Own terms
  rto: {
    apr: 0.08,            // annual interest on the amount financed
    maxMonths: 12,
    minMonths: 1,
    firstWeekRequired: true, // must rent the car for at least one week first
  },

  // Rental rates: daily = the "starting from" price on the previous site.
  // TODO(owner): confirm weekly rates — currently estimated at 5 × daily.
  fleet: [
    {
      id: "sorento-2022-lx", year: 2022, make: "Kia", model: "Sorento", trim: "LX", color: "Everlasting Silver",
      type: "SUV", seats: 7, daily: 130, weekly: 650, value: 29780, down: 5000, status: "available",
      photos: ["assets/cars/sorento-2022-lx-1.jpg"],
      blurb: "Our newest 7-seater. Third row folds flat when you need cargo space — perfect for families and groups.",
    },
    {
      id: "sorento-2018-sx", year: 2018, make: "Kia", model: "Sorento", trim: "SX", color: "White",
      type: "SUV", seats: null, daily: 125, weekly: 625, value: 16991, down: 1500, status: "available",
      photos: ["assets/cars/sorento-2018-sx-1.jpg"],
      blurb: "Top-trim SX with blacked-out wheels — bold, loaded and confident on I-75 road trips.",
    },
    {
      id: "sorento-2018-lx", year: 2018, make: "Kia", model: "Sorento", trim: "LX", color: "Black",
      type: "SUV", seats: null, daily: 120, weekly: 600, value: 17248, down: 1200, status: "available",
      photos: ["assets/cars/sorento-2018-lx-1.jpg"],
      blurb: "Sleek in black, comfortable and roomy — a smart pick for airport runs and weekend getaways.",
    },
    {
      id: "sorento-2016-sx", year: 2016, make: "Kia", model: "Sorento", trim: "SX", color: "White",
      type: "SUV", seats: null, daily: 115, weekly: 575, value: 16991, down: 1200, status: "available",
      photos: ["assets/cars/sorento-2016-sx-1.jpg"],
      blurb: "SX comfort and features at a great value. Plenty of room for beach gear and luggage.",
    },
    {
      id: "optima-2020-lx", year: 2020, make: "Kia", model: "Optima", trim: "LX", color: "Blue",
      type: "Sedan", seats: 5, daily: 105, weekly: 525, value: 15291, down: 960, status: "available",
      photos: ["assets/cars/optima-2020-lx-1.jpg"],
      blurb: "Our newest sedan in a head-turning blue. Smooth, efficient and easy on gas.",
    },
    {
      id: "optima-2019-lx-grey", year: 2019, make: "Kia", model: "Optima", trim: "LX", color: "Grey",
      type: "Sedan", seats: 5, daily: 105, weekly: 525, value: 14791, down: 960, status: "available",
      photos: ["assets/cars/optima-2019-lx-grey-1.jpg"],
      blurb: "Clean, modern and comfortable — ideal for commuters and professionals.",
    },
    {
      id: "sentra-2013-sv", year: 2013, make: "Nissan", model: "Sentra", trim: "SV", color: "Gray",
      type: "Sedan", seats: 5, daily: 80, weekly: 400, value: 11267, down: 600, status: "available",
      photos: ["assets/cars/sentra-2013-sv-1.jpg"],
      blurb: "Compact, efficient and budget-friendly. The lowest down payment in our fleet.",
    },

    // ---- Currently on Rent-to-Own agreements (shown as "spoken for")
    {
      id: "sorento-2019-lx", year: 2019, make: "Kia", model: "Sorento", trim: "LX", color: "Gray",
      type: "SUV", seats: null, daily: 120, weekly: 600, value: 17248, down: 1200, status: "rto",
      photos: ["assets/cars/sorento-2019-lx-1.jpg", "assets/cars/sorento-2019-lx-2.jpg"],
      blurb: "Spacious, practical and reliable.",
    },
    {
      id: "sorento-2016-lx", year: 2016, make: "Kia", model: "Sorento", trim: "LX", color: "Silver",
      type: "SUV", seats: null, daily: 110, weekly: 550, value: 15991, down: 1000, status: "rto",
      photos: ["assets/cars/sorento-2016-lx-1.jpg"],
      blurb: "Spacious and family-friendly SUV versatility.",
    },
    {
      id: "optima-2019-lx-white", year: 2019, make: "Kia", model: "Optima", trim: "LX", color: "White",
      type: "Sedan", seats: 5, daily: 105, weekly: 525, value: 13291, down: 960, status: "rto",
      photos: ["assets/cars/optima-2019-lx-white-1.jpg", "assets/cars/optima-2019-lx-white-2.jpg"],
      blurb: "Clean, modern and smooth on the road.",
    },
    {
      id: "optima-2016-sx", year: 2016, make: "Kia", model: "Optima", trim: "SX", color: "White",
      type: "Sedan", seats: 5, daily: 100, weekly: 500, value: 14791, down: 960, status: "rto",
      photos: ["assets/cars/optima-2016-sx-1.jpg"],
      blurb: "Sporty SX styling with everyday comfort.",
    },
    {
      id: "optima-2014-lx", year: 2014, make: "Kia", model: "Optima", trim: "LX", color: "Silver",
      type: "Sedan", seats: 5, daily: 97, weekly: 485, value: 11997, down: 960, status: "rto",
      photos: ["assets/cars/optima-2014-lx-1.jpg", "assets/cars/optima-2014-lx-2.jpg"],
      blurb: "Budget-friendly, reliable and stylish.",
    },
  ],

  policies: {
    age: "Renters must be at least 21 years old. Additional fees may apply for drivers under 25.",
    documents: "A valid driver's license and a credit card for payment. Additional identification may be requested.",
    rentals: "We offer daily and weekly rentals. Weekly rentals are preferred and deeply discounted.",
    oneWay: "We focus on round-trip rentals only — no one-way trips.",
    delivery: "Local delivery around Sarasota is available. Just ask when you book.",
    extend: "Contact us before your rental ends and we'll extend it whenever possible.",
    cancellation: "Plans change — contact us as early as possible and we'll work with you.",
    issues: "If anything goes wrong during your rental, contact us right away and we'll resolve it as quickly as possible.",
    insurance: "Insurance options are available and can be added during booking. For Rent-to-Own you can use your own insurance or ours.",
    payment: "Major credit cards are accepted for rentals.",
    cleanliness: "Every car is cleaned and maintained between rentals.",
    cash: "Buy outright with cash: bring the full amount in cash, we sign the clean title over to you, and you take it to the DMV for your registration and license plate.",
    rto: "Rent-to-Own is a low-stakes way into car ownership for people tired of renting week after week. No credit check. You must rent the car for at least one week first so you can get a feel for it. Then we meet at MIDFLORIDA to sign and notarize the agreement, you make the down payment and show proof of insurance (your own or ours). You pay weekly or every two weeks until the car is paid off (12 months max), and you take over ongoing maintenance.",
  },
};

/* ---------- helpers ---------- */
(function () {
  const C = window.CHURO;
  C.carName = (c) => `${c.year} ${c.make} ${c.model} ${c.trim}`;
  C.money = (n, cents = true) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: cents ? 2 : 0, maximumFractionDigits: cents ? 2 : 0 });
  C.byId = (id) => C.fleet.find((c) => c.id === id);
  C.rtoAvailable = (c) => c.status === "available";

  /** Rental estimate: full weeks at the weekly rate, leftover days at the daily rate (capped at a week). */
  C.rentalQuote = (carId, days) => {
    const c = C.byId(carId);
    if (!c) return null;
    days = Math.max(1, Math.round(days));
    const weeks = Math.floor(days / 7), rest = days % 7;
    const total = weeks * c.weekly + Math.min(rest * c.daily, c.weekly);
    return { car: c, days, weeks, rest, total, savings: days * c.daily - total };
  };

  /**
   * Rent-to-Own quote.
   * Customer rents the car for one week (paid at the weekly rate), then pays
   * the down payment at signing. The rest (value − down) is financed at
   * `rto.apr` and repaid in equal weekly or bi-weekly payments.
   */
  C.rtoQuote = ({ carId, months = 12, frequency = "weekly" }) => {
    const c = C.byId(carId);
    if (!c) return null;
    months = Math.min(C.rto.maxMonths, Math.max(C.rto.minMonths, Math.round(months)));
    const perYear = frequency === "biweekly" ? 26 : 52;
    const n = Math.max(1, Math.round((months * perYear) / 12));
    const r = C.rto.apr / perYear;
    const principal = c.value - c.down;
    const payment = r ? (principal * r) / (1 - Math.pow(1 + r, -n)) : principal / n;
    const totalPayments = payment * n;
    const interest = totalPayments - principal;
    const firstWeek = C.rto.firstWeekRequired ? c.weekly : 0;
    const dueAtSigning = c.down;
    const totalCost = firstWeek + c.down + totalPayments;
    // dates: rental week starts today-ish; signing after it; first payment one period after signing
    const start = new Date(); start.setHours(12, 0, 0, 0);
    const signing = new Date(start); signing.setDate(signing.getDate() + 7);
    const step = frequency === "biweekly" ? 14 : 7;
    const payoff = new Date(signing); payoff.setDate(payoff.getDate() + step * n);
    return {
      car: c, months, frequency, perYear, n, payment, principal, interest, totalPayments,
      firstWeek, dueAtSigning, totalCost, monthlyEquivalent: (payment * perYear) / 12,
      signing, payoff, available: C.rtoAvailable(c),
    };
  };
})();
