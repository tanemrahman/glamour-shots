/* ==========================================================
   GLAMOUR SHOTS — site content. Edit this file only.
   Everything on the page (contact, gallery, videos, map…)
   is driven from here, so no HTML changes are needed.
   ========================================================== */
window.SITE = {
  name: "Glamour Shots",
  tagline: "Photography · Videography · Cinematography",

  contact: {
    phone: "+8801957695469",          // call button
    phoneDisplay: "+880 1957-695469",
    whatsapp: "8801957695469",        // digits only, with country code. TODO: change if WhatsApp number differs
    email: "",                        // TODO: add email, e.g. "hello@glamourshots.com" (hidden while empty)
    facebook: "https://www.facebook.com/profile.php?id=100083240803312",
    instagram: "",                    // TODO (optional)
    youtube: "",                      // TODO: channel URL
    tiktok: ""                        // TODO (optional)
  },

  address: {
    text: "Dhaka, Bangladesh",        // TODO: full studio / office address
    mapEmbed: ""                      // TODO: Google Maps > Share > Embed a map > copy the src="..." URL
  },

  // TODO: confirm real numbers before launch (these are placeholders)
  stats: [
    { value: 150, suffix: "+", label: "Events covered" },
    { value: 80,  suffix: "+", label: "Weddings & Holud" },
    { value: 3,   suffix: "+", label: "Years of storytelling" },
    { value: 100, suffix: "%", label: "Happy clients" }
  ],

  /* Portfolio. Put image files in /assets/portfolio/ and list them here.
     category: wedding | holud | engagement | birthday | corporate
     Leave src empty to show an elegant placeholder tile.            */
  gallery: [
    { src: "", title: "Bride & Groom",       category: "wedding" },
    { src: "", title: "Haldi Night",         category: "holud" },
    { src: "", title: "Engagement Rings",    category: "engagement" },
    { src: "", title: "Birthday Celebration",category: "birthday" },
    { src: "", title: "Reception Moments",   category: "wedding" },
    { src: "", title: "Holud Colours",       category: "holud" },
    { src: "", title: "Couple Portrait",     category: "engagement" },
    { src: "", title: "Corporate Gala",      category: "corporate" },
    { src: "", title: "Bridal Details",      category: "wedding" }
  ],

  /* YouTube video IDs (the part after v= in the link). */
  videos: [
    { id: "", title: "Wedding Cinematic Highlights" },
    { id: "", title: "Holud Night Film" },
    { id: "", title: "Birthday Highlights" }
  ],

  // Venues from the Facebook page check-ins
  venues: ["Panshi Dhanmondi", "Dhaka Party Center"],

  testimonials: [
    { text: "Very friendly, glamorous shots and many more.", name: "Nexus Prince Masud Rana", note: "Facebook recommendation" }
    // TODO: add more real client reviews
  ]
};
