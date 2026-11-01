/* ==========================================================
   GLAMOUR SHOTS — all site content lives here.
   Edit this file (and drop images into /public/portfolio/).
   Text is bilingual: { en: "...", bn: "..." }.
   ========================================================== */
export type L = { en: string; bn: string };

export const site = {
  name: "Glamour Shots",
  url: "", // TODO: final domain, e.g. "https://glamourshots.com.bd"
  tagline: { en: "Photography · Videography · Cinematography", bn: "ফটোগ্রাফি · ভিডিওগ্রাফি · সিনেমাটোগ্রাফি" },

  contact: {
    phone: "+8801957695469",
    phoneDisplay: "+880 1957-695469",
    whatsapp: "8801957695469", // digits only. TODO: change if WhatsApp number differs
    email: "",                 // TODO: add email (hidden while empty)
    facebook: "https://www.facebook.com/profile.php?id=100083240803312",
    instagram: "",             // TODO
    youtube: "",               // TODO: channel URL
    tiktok: "",                // TODO
  },

  address: {
    text: { en: "Dhaka, Bangladesh", bn: "ঢাকা, বাংলাদেশ" }, // TODO: full address
    mapEmbed: "",                                              // TODO: Google Maps > Share > Embed > src URL
    hours: { en: "Open every day · Call or WhatsApp anytime", bn: "প্রতিদিন খোলা · যেকোনো সময় কল বা হোয়াটসঅ্যাপ করুন" }, // TODO: confirm
  },

  // TODO: confirm real numbers before launch — these are placeholders
  stats: [
    { value: 150, suffix: "+", label: { en: "Events covered", bn: "ইভেন্ট কভার" } },
    { value: 80, suffix: "+", label: { en: "Weddings & Holud", bn: "বিয়ে ও গায়ে হলুদ" } },
    { value: 3, suffix: "+", label: { en: "Years of storytelling", bn: "বছরের অভিজ্ঞতা" } },
    { value: 100, suffix: "%", label: { en: "Happy clients", bn: "সন্তুষ্ট ক্লায়েন্ট" } },
  ],

  venues: ["Panshi Dhanmondi", "Dhaka Party Center"],

  testimonials: [
    { text: "Very friendly, glamorous shots and many more.", name: "Nexus Prince Masud Rana", note: "Facebook recommendation" },
    // TODO: add more real client reviews
  ],
};

export type Category = "wedding" | "holud" | "engagement" | "birthday" | "corporate";
export const categoryLabel: Record<Category | "all", L> = {
  all: { en: "All", bn: "সব" },
  wedding: { en: "Wedding", bn: "বিয়ে" },
  holud: { en: "Holud", bn: "গায়ে হলুদ" },
  engagement: { en: "Engagement", bn: "এনগেজমেন্ট" },
  birthday: { en: "Birthday", bn: "জন্মদিন" },
  corporate: { en: "Corporate", bn: "কর্পোরেট" },
};

/* Portfolio images: put files in /public/portfolio/ and set src: "/portfolio/name.jpg".
   Empty src shows an elegant placeholder tile. */
export const gallery: { src: string; title: string; category: Category }[] = [
  { src: "", title: "Bride & Groom", category: "wedding" },
  { src: "", title: "Haldi Night", category: "holud" },
  { src: "", title: "Engagement Rings", category: "engagement" },
  { src: "", title: "Birthday Celebration", category: "birthday" },
  { src: "", title: "Reception Moments", category: "wedding" },
  { src: "", title: "Holud Colours", category: "holud" },
  { src: "", title: "Couple Portrait", category: "engagement" },
  { src: "", title: "Corporate Gala", category: "corporate" },
  { src: "", title: "Bridal Details", category: "wedding" },
];

/* YouTube video id = the part after v= in the link. */
export const videos: { id: string; title: string; category: Category; fb?: string }[] = [
  // Facebook Reel/video: { id: "", fb: "https://www.facebook.com/reel/XXXX", title: "...", category: "wedding" }
  { id: "", title: "Wedding Cinematic Highlights", category: "wedding" },
  { id: "", title: "Holud Night Film", category: "holud" },
  { id: "", title: "Birthday Highlights", category: "birthday" },
];

export type Service = {
  slug: string; icon: string; category: Category;
  title: L; short: L; intro: L; includes: L[]; ideal: L;
};
export const services: Service[] = [
  {
    slug: "wedding", icon: "💍", category: "wedding",
    title: { en: "Wedding", bn: "বিয়ে" },
    short: { en: "Full-day coverage from Gaye Holud to reception — candid photos, cinematic film and a highlights reel.", bn: "গায়ে হলুদ থেকে রিসেপশন — ক্যান্ডিড ছবি, সিনেমাটিক ফিল্ম ও হাইলাইট রিল।" },
    intro: { en: "Your wedding is a once-in-a-lifetime story. Our photo and video crew stays close to the emotion — the nervous smiles, the family hugs, the little details — and turns them into images and a film you will replay for decades.", bn: "বিয়ে জীবনে একবারই আসে। আমাদের ফটো ও ভিডিও টিম আবেগের কাছাকাছি থেকে প্রতিটি হাসি, আলিঙ্গন ও ছোট ডিটেইল ধরে রাখে — যা আপনি বছরের পর বছর দেখবেন।" },
    includes: [
      { en: "Candid + traditional photography", bn: "ক্যান্ডিড ও ট্র্যাডিশনাল ফটোগ্রাফি" },
      { en: "Cinematic wedding film & highlights reel", bn: "সিনেমাটিক ওয়েডিং ফিল্ম ও হাইলাইট রিল" },
      { en: "Bride & groom portrait session", bn: "বর-কনের পোর্ট্রেট সেশন" },
      { en: "Colour grading & professional retouching", bn: "কালার গ্রেডিং ও প্রফেশনাল রিটাচ" },
      { en: "Online gallery + printed album on request", bn: "অনলাইন গ্যালারি + চাইলে প্রিন্টেড অ্যালবাম" },
    ],
    ideal: { en: "Akd, Gaye Holud, Wedding ceremony, Reception, Bou-bhat.", bn: "আক্দ, গায়ে হলুদ, বিয়ের অনুষ্ঠান, রিসেপশন, বউভাত।" },
  },
  {
    slug: "holud", icon: "🌼", category: "holud",
    title: { en: "Holud / Haldi Night", bn: "গায়ে হলুদ" },
    short: { en: "Colour, music and laughter, preserved in vibrant detail.", bn: "রং, গান আর হাসি — প্রতিটি মুহূর্ত ফ্রেমে।" },
    intro: { en: "Holud is the most colourful, playful part of the celebration. We capture the dances, the haldi, the flowers and the joy of family and friends in bright, true-to-life colour.", bn: "গায়ে হলুদ আয়োজনের সবচেয়ে রঙিন ও প্রাণবন্ত অংশ। নাচ, হলুদ, ফুল ও পরিবার-বন্ধুদের আনন্দ আমরা উজ্জ্বল রঙে ধরে রাখি।" },
    includes: [
      { en: "Candid photography of rituals and dances", bn: "রীতি ও নাচের ক্যান্ডিড ফটোগ্রাফি" },
      { en: "Short cinematic Holud film", bn: "ছোট সিনেমাটিক হলুদ ফিল্ম" },
      { en: "Group & family portraits", bn: "গ্রুপ ও পারিবারিক পোর্ট্রেট" },
      { en: "Fast preview shots for social media", bn: "সোশ্যাল মিডিয়ার জন্য দ্রুত প্রিভিউ" },
    ],
    ideal: { en: "Gaye Holud for bride or groom, Mehendi night, Haldi Night.", bn: "কনে বা বরের গায়ে হলুদ, মেহেদি নাইট, হলুদ নাইট।" },
  },
  {
    slug: "engagement", icon: "🥂", category: "engagement",
    title: { en: "Engagement & Pre-wedding", bn: "এনগেজমেন্ট ও প্রি-ওয়েডিং" },
    short: { en: "Relaxed couple portraits and ring-ceremony moments.", bn: "কাপল পোর্ট্রেট ও আংটি বদলের মুহূর্ত।" },
    intro: { en: "Natural, relaxed portraits that show who you two really are — at the ring ceremony or in a dedicated couple shoot at a location you love.", bn: "আংটি বদলের অনুষ্ঠান বা আপনার পছন্দের লোকেশনে আলাদা কাপল শুট — যেখানে আপনাদের আসল রূপটি ফুটে ওঠে।" },
    includes: [
      { en: "Ring ceremony coverage", bn: "আংটি বদল অনুষ্ঠানের কভারেজ" },
      { en: "Outdoor / studio couple shoot", bn: "আউটডোর / স্টুডিও কাপল শুট" },
      { en: "Pre-wedding cinematic teaser", bn: "প্রি-ওয়েডিং সিনেমাটিক টিজার" },
      { en: "Edited, colour-graded photos", bn: "এডিট ও কালার-গ্রেডেড ছবি" },
    ],
    ideal: { en: "Engagement, pre-wedding shoot, save-the-date.", bn: "এনগেজমেন্ট, প্রি-ওয়েডিং শুট, সেভ-দ্য-ডেট।" },
  },
  {
    slug: "birthday", icon: "🎂", category: "birthday",
    title: { en: "Birthday & Family", bn: "জন্মদিন ও পারিবারিক" },
    short: { en: "Kids' parties, milestone birthdays and family gatherings.", bn: "বার্থডে পার্টি, মাইলস্টোন ও পারিবারিক আয়োজন।" },
    intro: { en: "From a baby's first birthday to a 50th celebration, we capture the smiles, the cake and the people who matter — so you can enjoy the party while we do the remembering.", bn: "শিশুর প্রথম জন্মদিন থেকে ৫০তম উদযাপন — হাসি, কেক আর প্রিয় মানুষদের মুহূর্ত আমরা ধরে রাখি, আপনি উপভোগ করুন।" },
    includes: [
      { en: "Event photography & family portraits", bn: "ইভেন্ট ফটোগ্রাফি ও পারিবারিক ছবি" },
      { en: "Highlights video", bn: "হাইলাইট ভিডিও" },
      { en: "Cake-cutting & decoration details", bn: "কেক কাটা ও ডেকোরেশনের ডিটেইল" },
    ],
    ideal: { en: "Birthdays, Aqeeqah, anniversaries, family get-togethers.", bn: "জন্মদিন, আকিকা, বিবাহবার্ষিকী, পারিবারিক আড্ডা।" },
  },
  {
    slug: "cinematography", icon: "🎬", category: "wedding",
    title: { en: "Cinematography", bn: "সিনেমাটোগ্রাফি" },
    short: { en: "Storytelling films with cinematic grading and smooth, film-style framing.", bn: "কালার গ্রেডিংসহ গল্পনির্ভর সিনেমাটিক ফিল্ম।" },
    intro: { en: "More than a video — a short film of your day. Thoughtful shot design, stabilised movement, sound and colour grading give your event a true cinema feel.", bn: "শুধু ভিডিও নয় — আপনার দিনের একটি ছোট সিনেমা। সুচিন্তিত শট, স্টেবল মুভমেন্ট, সাউন্ড ও কালার গ্রেডিং আপনার আয়োজনকে দেয় সত্যিকারের সিনেমার অনুভূতি।" },
    includes: [
      { en: "Cinematic highlights film (3–5 min)", bn: "সিনেমাটিক হাইলাইট ফিল্ম (৩–৫ মিনিট)" },
      { en: "Full-length event video", bn: "সম্পূর্ণ ইভেন্ট ভিডিও" },
      { en: "Social-media teaser / reel", bn: "সোশ্যাল মিডিয়া টিজার / রিল" },
      { en: "Licensed music & colour grading", bn: "লাইসেন্সড মিউজিক ও কালার গ্রেডিং" },
    ],
    ideal: { en: "Weddings, holud, couple stories, brand films.", bn: "বিয়ে, হলুদ, কাপল স্টোরি, ব্র্যান্ড ফিল্ম।" },
  },
  {
    slug: "corporate", icon: "🏢", category: "corporate",
    title: { en: "Corporate & Events", bn: "কর্পোরেট ও ইভেন্ট" },
    short: { en: "Launches, galas and brand events with fast turnaround.", bn: "লঞ্চ, গালা ও ব্র্যান্ড ইভেন্ট — দ্রুত ডেলিভারি।" },
    intro: { en: "Professional coverage for company events, product launches, conferences and parties — delivered quickly and ready to post.", bn: "কোম্পানি ইভেন্ট, প্রোডাক্ট লঞ্চ, কনফারেন্স ও পার্টির প্রফেশনাল কভারেজ — দ্রুত ও পোস্টের উপযোগী।" },
    includes: [
      { en: "Event photography & speaker shots", bn: "ইভেন্ট ও স্পিকার ফটোগ্রাফি" },
      { en: "Event recap video", bn: "ইভেন্ট রিক্যাপ ভিডিও" },
      { en: "Fast same-week delivery on request", bn: "অনুরোধে দ্রুত ডেলিভারি" },
    ],
    ideal: { en: "Launches, annual dinners, seminars, brand shoots.", bn: "লঞ্চ, বার্ষিক ডিনার, সেমিনার, ব্র্যান্ড শুট।" },
  },
];

export const process: { t: L; d: L }[] = [
  { t: { en: "Message us", bn: "মেসেজ করুন" }, d: { en: "Call or WhatsApp with your date, venue and event type.", bn: "তারিখ, ভেন্যু ও ইভেন্টের ধরন জানিয়ে কল বা হোয়াটসঅ্যাপ করুন।" } },
  { t: { en: "Plan & quote", bn: "প্ল্যান ও কোটেশন" }, d: { en: "We agree on coverage, team and a clear package.", bn: "কভারেজ, টিম ও প্যাকেজ চূড়ান্ত করি।" } },
  { t: { en: "The big day", bn: "বিশেষ দিন" }, d: { en: "Photo + video crew captures every candid detail.", bn: "ফটো ও ভিডিও টিম প্রতিটি মুহূর্ত ধরে রাখে।" } },
  { t: { en: "Edit & colour", bn: "এডিট ও কালার" }, d: { en: "Careful retouching and cinematic grading.", bn: "যত্ন করে রিটাচ ও সিনেমাটিক গ্রেডিং।" } },
  { t: { en: "Delivery", bn: "ডেলিভারি" }, d: { en: "Online gallery, film and printed albums on request.", bn: "অনলাইন গ্যালারি, ফিল্ম ও চাইলে প্রিন্টেড অ্যালবাম।" } },
];

/* Interface strings */
export const ui = {
  nav: {
    home: { en: "Home", bn: "হোম" }, about: { en: "About", bn: "আমাদের কথা" },
    services: { en: "Services", bn: "সার্ভিস" }, portfolio: { en: "Portfolio", bn: "পোর্টফোলিও" },
    films: { en: "Films", bn: "ভিডিও" }, contact: { en: "Contact", bn: "যোগাযোগ" },
    book: { en: "Book now", bn: "বুক করুন" },
  },
  common: {
    quote: { en: "Get a free quote", bn: "ফ্রি কোটেশন নিন" },
    work: { en: "See our work", bn: "আমাদের কাজ দেখুন" },
    viewAll: { en: "View all", bn: "সব দেখুন" },
    learn: { en: "Learn more", bn: "বিস্তারিত" },
    includes: { en: "What's included", bn: "যা যা থাকছে" },
    ideal: { en: "Perfect for", bn: "যেসব আয়োজনে" },
    otherServices: { en: "Other services", bn: "অন্যান্য সার্ভিস" },
    ctaTitle: { en: "Ready to book your date?", bn: "আপনার তারিখটি বুক করতে চান?" },
    ctaText: { en: "Message us on WhatsApp — we reply fast.", bn: "হোয়াটসঅ্যাপে মেসেজ করুন — আমরা দ্রুত রিপ্লাই দিই।" },
    wa: { en: "Chat on WhatsApp", bn: "হোয়াটসঅ্যাপে চ্যাট" },
    call: { en: "Call now", bn: "এখনই কল করুন" },
    watchMore: { en: "More films on YouTube →", bn: "YouTube-এ আরও ফিল্ম →" },
    comingSoon: { en: "Video coming soon", bn: "ভিডিও শীঘ্রই আসছে" },
  },
};

/* ===== extra sections ===== */
export const marquee = ["Wedding", "Gaye Holud", "Engagement", "Birthday", "Cinematography", "Pre-wedding", "Aqeeqah", "Corporate"];

export const whyUs: { i: string; t: L; d: L }[] = [
  { i: "📸", t: { en: "Photo + Video together", bn: "ফটো + ভিডিও একসাথে" }, d: { en: "One team for stills, film and cinema — no juggling vendors.", bn: "ছবি, ভিডিও ও সিনেমা — একই টিমে, আলাদা ভেন্ডর খুঁজতে হয় না।" } },
  { i: "🎞", t: { en: "Cinematic style", bn: "সিনেমাটিক স্টাইল" }, d: { en: "Film-style framing, colour grading and storytelling edits.", bn: "ফিল্ম-স্টাইল ফ্রেমিং, কালার গ্রেডিং ও গল্পনির্ভর এডিট।" } },
  { i: "🤝", t: { en: "Friendly & discreet", bn: "আন্তরিক ও মার্জিত" }, d: { en: "Clients love how comfortable we make family and guests feel.", bn: "পরিবার ও মেহমানরা আমাদের সাথে স্বস্তি বোধ করেন।" } },
  { i: "💬", t: { en: "Quick WhatsApp replies", bn: "দ্রুত হোয়াটসঅ্যাপ রিপ্লাই" }, d: { en: "Ask about dates and packages any time — we answer fast.", bn: "তারিখ ও প্যাকেজ নিয়ে যেকোনো সময় জিজ্ঞেস করুন।" } },
];

/* Packages: TODO — replace with your real packages and prices. */
export const packages: { name: L; tag: L; features: L[]; popular?: boolean }[] = [
  { name: { en: "Essential", bn: "এসেনশিয়াল" }, tag: { en: "Single event", bn: "একটি ইভেন্ট" },
    features: [{ en: "Photography coverage", bn: "ফটোগ্রাফি কভারেজ" }, { en: "Edited & colour-graded photos", bn: "এডিট ও কালার-গ্রেডেড ছবি" }, { en: "Online gallery", bn: "অনলাইন গ্যালারি" }] },
  { name: { en: "Signature", bn: "সিগনেচার" }, tag: { en: "Most popular", bn: "সবচেয়ে জনপ্রিয়" }, popular: true,
    features: [{ en: "Photo + video team", bn: "ফটো + ভিডিও টিম" }, { en: "Cinematic highlights film", bn: "সিনেমাটিক হাইলাইট ফিল্ম" }, { en: "Couple / family portraits", bn: "কাপল / ফ্যামিলি পোর্ট্রেট" }, { en: "Online gallery + reel teaser", bn: "অনলাইন গ্যালারি + রিল টিজার" }] },
  { name: { en: "Royal", bn: "রয়্যাল" }, tag: { en: "Multi-day wedding", bn: "মাল্টি-ডে বিয়ে" },
    features: [{ en: "Holud, wedding & reception", bn: "হলুদ, বিয়ে ও রিসেপশন" }, { en: "Full cinematic wedding film", bn: "পূর্ণ সিনেমাটিক ওয়েডিং ফিল্ম" }, { en: "Pre-wedding shoot", bn: "প্রি-ওয়েডিং শুট" }, { en: "Premium printed album", bn: "প্রিমিয়াম প্রিন্টেড অ্যালবাম" }] },
];

export const faqs: { q: L; a: L }[] = [
  { q: { en: "How do I book Glamour Shots?", bn: "কীভাবে বুক করব?" }, a: { en: "Call or WhatsApp +880 1957-695469 with your date, venue and event type. We'll confirm availability and send a quote.", bn: "তারিখ, ভেন্যু ও ইভেন্টের ধরন জানিয়ে +880 1957-695469 নম্বরে কল বা হোয়াটসঅ্যাপ করুন। আমরা অ্যাভেইলেবিলিটি জানিয়ে কোটেশন দেব।" } },
  { q: { en: "Do you do both photography and videography?", bn: "ফটো ও ভিডিও দুটোই করেন?" }, a: { en: "Yes — photography, videography and cinematography, all by one team.", bn: "হ্যাঁ — ফটোগ্রাফি, ভিডিওগ্রাফি ও সিনেমাটোগ্রাফি, সবই একই টিমে।" } },
  { q: { en: "Which events do you cover?", bn: "কোন কোন ইভেন্ট কভার করেন?" }, a: { en: "Weddings, holud, engagements, birthdays, family and corporate events.", bn: "বিয়ে, গায়ে হলুদ, এনগেজমেন্ট, জন্মদিন, পারিবারিক ও কর্পোরেট ইভেন্ট।" } },
  { q: { en: "Can you travel outside Dhaka?", bn: "ঢাকার বাইরে যাবেন?" }, a: { en: "Message us the location and date and we'll let you know.", bn: "লোকেশন ও তারিখ জানান, আমরা জানিয়ে দেব।" } },
  { q: { en: "When will I receive my photos and film?", bn: "ছবি ও ফিল্ম কবে পাব?" }, a: { en: "Delivery depends on the size of the event; we agree the timeline with you when you book.", bn: "ইভেন্টের আকারের উপর নির্ভর করে; বুকিংয়ের সময় আমরা সময়সীমা ঠিক করে নিই।" } },
];

/* Real event taken from the Facebook page. */
export const featured = {
  title: { en: "Haldi Night of Ramisha & Adam", bn: "রামিশা ও আদমের হলুদ নাইট" },
  date: { en: "17 February 2025", bn: "১৭ ফেব্রুয়ারি ২০২৫" },
  text: { en: "A night of music, marigolds and laughter — covered by Glamour Shots.", bn: "গান, গাঁদা ফুল আর হাসির এক রাত — গ্ল্যামার শটসের ক্যামেরায়।" },
};
