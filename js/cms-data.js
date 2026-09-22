/**
 * =========================================================================
 * CREATIVE TOUCH BY PRIYAA — CENTRAL CMS & CONTENT CONFIGURATION
 * =========================================================================
 * 
 * Powered by Priyaa's real photos, authentic bridal reels, and editorial assets.
 * Easily update text, contact information, photos, and video links here.
 */

const CMS_DATA = {
  // BRAND ESSENTIALS
  brand: {
    name: "Creative Touch by Priyaa",
    shortName: "Creative Touch",
    founder: "Priyaa",
    title: "Bridal Makeup Artist",
    signatureStyle: "Natural Glam Bridal Makeup ✨",
    tagline: "Luxury in every detail.",
    experience: "7+ Years of Bridal Artistry",
    location: "Chennai, Tamil Nadu",
    locationShort: "Chennai",
    instagramHandle: "@creative_touch_by_priyaa",
    instagramUrl: "https://www.instagram.com/creative_touch_by_priyaa",
    whatsappNumber: "918939648180", // Priyaa's WhatsApp (country code + number)
    displayPhone: "+91 89396 48180",
    email: "priyaa@creativetouchbypriyaa.com",
    activeSeason: "2026 Bridal Bookings Open",
    profilePhoto: "assets/images/about/priyaa-founder.jpg",
  },

  // TRUST STRIP & METRICS
  metrics: [
    { number: "7+", label: "Years of Bridal Artistry", icon: "sparkles" },
    { number: "11K+", label: "Instagram Community", icon: "instagram" },
    { number: "Chennai", label: "Based Bridal Artist", icon: "map-pin" },
    { number: "Natural Glam", label: "Signature Artistry", icon: "heart" }
  ],

  // ABOUT PRIYAA
  about: {
    badge: "MEET THE ARTIST",
    heading: "Bridal Artistry Designed Around You, Not a Template",
    subheading: "Refined bridal artistry by Priyaa, created to enhance your features and let you still feel beautifully yourself.",
    quote: "“Your bridal makeup shouldn't hide you. It should feel like the most authentic, breathtaking version of you.”",
    p1: "For over 7 years across Chennai and premier destination weddings, Priyaa has redefined bridal beauty through her signature **Natural Glam** philosophy. Rather than applying a repetitive, heavy mask, she studies each bride's facial structure, undertones, bridal attire, and ceremonial lighting to curate a bespoke look that feels weightless and looks timeless.",
    p2: "From the traditional grace of early-morning South Indian Muhurthams draped in heirloom Kanjeevarams to glamorous evening receptions and cocktail parties, Priyaa's hands craft an experience that is calm, luxurious, and completely tailored to your comfort.",
    tags: [
      "Custom Face Mapping",
      "Long-Wear Dewy Hydration",
      "Precision South Indian Draping",
      "Calm Bridal Morning Energy"
    ],
    experienceYears: 7,
    image: "assets/images/about/priyaa-founder.jpg"
  },

  // NATURAL GLAM PHILOSOPHY
  philosophy: {
    headline: "NOT A DIFFERENT YOU. A MORE RADIANT YOU.",
    subtitle: "The 4 Core Pillars of Priyaa's Signature Artistry",
    pillars: [
      {
        id: "skin",
        number: "01",
        title: "Skin That Still Looks Like Skin",
        description: "Zero heavy masking. We layer weightless, skin-identical hydrating formulas that melt into your complexion, letting your natural skin texture breathe through in 4K photography and in person.",
        image: "assets/images/brides/macro-skin.jpg",
        detail: "Macro Skin Finish"
      },
      {
        id: "features",
        number: "02",
        title: "Features Enhanced, Not Hidden",
        description: "Soft sculpted cheekbones, naturally feathered brows, and eye makeup calibrated specifically to your eye shape. Every brush stroke elevates what is uniquely yours.",
        image: "assets/images/brides/macro-eye.jpg",
        detail: "Precision Eye Artistry"
      },
      {
        id: "timeless",
        number: "03",
        title: "Camera-Ready Yet Timeless",
        description: "Ceremony lights, outdoor sunshine, humidity, and emotional moments—our bridal makeup is set with proprietary featherweight sealing techniques that stay pristine for 14+ hours.",
        image: "assets/images/brides/real-bride-pink-kanjeevaram.png",
        detail: "Muhurtham Radiance"
      },
      {
        id: "harmony",
        number: "04",
        title: "Created Around Your Styling",
        description: "Your jewelry, neckline, saree zari, florals, and personal comfort dictate the look. From heirloom temple gold to diamond reception sparkle, every detail sings in harmony.",
        image: "assets/images/brides/hair-details.jpg",
        detail: "Heirloom Hair & Draping"
      }
    ]
  },

  // BEFORE & AFTER COMPARISON SLIDER
  transformation: {
    heading: "The Art of Enhancement",
    subtitle: "True Natural Glam never alters who you are. Slide to explore how Priyaa enhances natural skin tones and facial harmony into an unforgettable bridal radiance.",
    beforeImage: "assets/images/transformations/before.jpg",
    afterImage: "assets/images/transformations/after.jpg",
    beforeLabel: "NATURAL BASE",
    afterLabel: "NATURAL GLAM BRIDAL",
    brideNote: "“Looked in the mirror and saw myself, just elevated with the exact soft glam glow I had dreamed of.”"
  },

  // REAL BRIDES PORTFOLIO (Featuring Priyaa's Actual Brides)
  portfolioCategories: ["All", "Muhurtham", "Reception", "Engagement", "Natural Glam"],
  brides: [
    {
      id: "bride-1",
      name: "Sowmya Rajesh",
      category: "Muhurtham",
      tag: "Traditional Muhurtham",
      image: "assets/images/brides/real-bride-peacock-blue.png",
      summary: "Peacock violet-blue Kanjeevaram with ornate zardozi blouse, antique matte temple jewelry, and radiant natural skin.",
      story: {
        event: "Traditional South Indian Muhurtham • Chennai",
        vision: "Wanted an authentic classical look to match her peacock sleeve zardozi saree, with glowing skin and delicate eye definition that wouldn't look stark in daylight.",
        skinFinish: "Skin-identical satin radiance with targeted powder setting on T-zone only.",
        eyeMakeup: "Warm sunset copper-bronze wash, clean smudge-resistant smoked gel liner, and natural wispy individual lashes.",
        hairDraping: "Classic floral bridal braid with fragrant white jasmine veni and antique temple gold maang tikka.",
        testimonial: "Priyaa's calm demeanor on my morning wedding was everything. The makeup stayed untouched from 5 AM until afternoon reception!"
      }
    },
    {
      id: "bride-2",
      name: "Harini Sundaram",
      category: "Muhurtham",
      tag: "Kanjeevaram Elegance",
      image: "assets/images/brides/real-bride-pink-kanjeevaram.png",
      summary: "Vibrant crimson & gold Kanjeevaram with emerald-diamond haram, green glass bangles, and luminous warm complexion.",
      story: {
        event: "Temple Wedding & Mandapam Ceremony • Chennai",
        vision: "Wanted to honor family heirloom diamond & emerald jewelry with a fresh, youthful glow and zero cakey texture.",
        skinFinish: "Luminous hydration veil with micro-fine cheekbone highlight and soft rosy flush.",
        eyeMakeup: "Soft champagne lid with tightlined water-resistant kohl and sculpted brows.",
        hairDraping: "Traditional South Indian plait with fresh malli poo and secure madisar draping.",
        testimonial: "I received endless compliments on my skin. It looked like filtered perfection yet felt completely weightless!"
      }
    },
    {
      id: "bride-3",
      name: "Ananya Murali",
      category: "Muhurtham",
      tag: "Heritage Temple Grace",
      image: "assets/images/brides/real-bride-teal-silk.png",
      summary: "Rich peacock teal silk saree with gold zari, delicate bindi, and warm glowing bridal smile.",
      story: {
        event: "Morning Wedding Ceremony • Mylapore, Chennai",
        vision: "A timeless, regal aesthetic celebrating rich teal and antique gold tones without looking over-dramatized.",
        skinFinish: "Dewy velvet skin finish with sweat-resistant primer and long-wear setting mist.",
        eyeMakeup: "Soft bronze smoked lash line with subtle gold inner corner sheen.",
        hairDraping: "Sleek bridal updo with side jasmine garland and traditional temple jhumkas.",
        testimonial: "Priyaa is a true master. She knows how to enhance your features so you look breathtaking both in real life and 4K video."
      }
    },
    {
      id: "bride-4",
      name: "Sanjana Ramesh",
      category: "Reception",
      tag: "Modern Reception Twirl",
      image: "assets/images/brides/real-bride-twirling-lehenga.png",
      summary: "Ivory & blush floral embroidered lehenga, diamond choker, and radiant glass skin glow under mandapam chandeliers.",
      story: {
        event: "Grand Evening Reception • Chennai",
        vision: "A dreamy, ethereal reception look with movement, sparkle, and lightweight glamour that allowed her to dance all night.",
        skinFinish: "Glass skin reflection with liquid champagne strobing on high cheekbones and decolletage.",
        eyeMakeup: "Reflective champagne micro-shimmer with soft brown crease blending and fluttery mink lashes.",
        hairDraping: "Textured half-up romantic waves framed with a delicate diamond maang tikka.",
        testimonial: "The makeup stayed completely intact even after dancing for 3 hours! Priyaa is the best in Chennai."
      }
    },
    {
      id: "bride-5",
      name: "Deepika Chandran",
      category: "Reception",
      tag: "Lavender Floral Glam",
      image: "assets/images/brides/real-bride-lavender-lehenga.png",
      summary: "Intricate lavender & gold embroidered lehenga with emerald-pearl choker and soft romantic makeup.",
      story: {
        event: "Sangeet & Cocktail Celebration • ECR, Chennai",
        vision: "Modern pastel glam with fresh skin and soft berry-nude lips to harmonize with lavender and gold tones.",
        skinFinish: "Hydrating serum base with gentle sculpting on jawline and cheekbones.",
        eyeMakeup: "Soft mauve-taupe smoky eyes with fine gold accents and waterproof liner.",
        hairDraping: "Chic textured low bun with delicate baby's breath accents.",
        testimonial: "It didn't feel like I was wearing heavy makeup at all. My photos look like an international fashion magazine!"
      }
    },
    {
      id: "bride-6",
      name: "Kavya Natarajan",
      category: "Muhurtham",
      tag: "Royal Purple Silk",
      image: "assets/images/brides/real-bride-purple-silk.png",
      summary: "Majestic purple silk saree with layered antique gold guttapusalu necklace and heirloom temple mirror backdrop.",
      story: {
        event: "Traditional Brahmin Wedding • Chennai",
        vision: "Deeply traditional styling honoring ancestral jewels, focusing on warm golden skin tone and poised elegance.",
        skinFinish: "Warm honey tone balanced with breathable foundation and luminous cream blush.",
        eyeMakeup: "Classic kohl kajal eye with soft matte caramel transition and fine gold dusting.",
        hairDraping: "14-piece antique gold billai poola jada with dual-layer fragrant crossandra and jasmine.",
        testimonial: "My hair and saree didn't budge an inch even after hours of rituals. Pristine craftsmanship!"
      }
    },
    {
      id: "bride-7",
      name: "Aishwarya Krishnan",
      category: "Natural Glam",
      tag: "Pure Skin Glow",
      image: "assets/images/brides/macro-skin.jpg",
      summary: "Macro detail of Priyaa's signature dewy skin work—flawless camera radiance while maintaining authentic texture.",
      story: {
        event: "Intimate Pellikuthuru & Temple Rituals • Chennai",
        vision: "Focused entirely on hyper-clean, glowing, healthy skin that wouldn't shine under flash photography.",
        skinFinish: "Multi-layered peptide skin prep, luminous serum foundation, targeted pin-point concealing.",
        eyeMakeup: "Warm caramel crease contour with soft tightline and natural brow feathering.",
        hairDraping: "Neat low bridal bun with fresh fragrant sampangi and mullai flowers.",
        testimonial: "The closest thing to pure skin perfection you will ever experience."
      }
    },
    {
      id: "bride-8",
      name: "Meera Subramanian",
      category: "Engagement",
      tag: "Pastel Radiance",
      image: "assets/images/brides/engagement-glow.jpg",
      summary: "Pastel lilac tissue silk saree, romantic half-up hair with baby's breath, and petal-pink blush glow.",
      story: {
        event: "Outdoor Courtyard Engagement • Chennai",
        vision: "Daylight event requiring ultra-delicate makeup that would look completely effortless and fresh in direct sunlight.",
        skinFinish: "Featherlight water-based hydration tint with soft petal-pink cream blush melted across apples of cheeks.",
        eyeMakeup: "Soft rose-gold satin wash with delicate brown tightlining and natural curved mascara finish.",
        hairDraping: "Soft romantic textured half-up curls woven with fresh baby's breath and pastel mini orchids.",
        testimonial: "Priyaa is a magician. My engagement photos turned out so dreamy and timeless."
      }
    }
  ],

  // REAL VIDEO REELS (Authentic Client Video Highlights from Instagram)
  reels: [
    {
      id: "reel-1",
      videoSrc: "assets/videos/reels/bridal-reel-1.mp4",
      title: "South Indian Muhurtham Transformation",
      clientName: "Real Bride Transformation",
      event: "Traditional Muhurtham",
      duration: "0:28",
      views: "24.5K",
      caption: "From skin prep to final heirloom temple jewellery placement. Pure Natural Glam for our gorgeous bride ✨"
    },
    {
      id: "reel-2",
      videoSrc: "assets/videos/reels/bridal-reel-2.mp4",
      title: "Bridal Morning BTS & Saree Draping",
      clientName: "Getting Ready Moments",
      event: "Bridal Preparation",
      duration: "0:32",
      views: "38.2K",
      caption: "The peaceful energy of a bridal morning with Priyaa. Precision pleating and floral setting."
    },
    {
      id: "reel-3",
      videoSrc: "assets/videos/reels/bridal-reel-3.mp4",
      title: "Dewy Glass Skin Reception Glow",
      clientName: "Reception Glamour",
      event: "Grand Reception",
      duration: "0:25",
      views: "19.8K",
      caption: "Glass skin reflection under grand chandeliers. Flawless all-night hold without any heaviness."
    },
    {
      id: "reel-4",
      videoSrc: "assets/videos/reels/bridal-reel-4.mp4",
      title: "Mandapam Moments & Happy Tears",
      clientName: "Mandapam Ceremony",
      event: "Sacred Rituals",
      duration: "0:30",
      views: "42.1K",
      caption: "Sweat-proof, smudge-proof, and emotion-proof. Our brides smiling confidently through sacred rituals."
    },
    {
      id: "reel-5",
      videoSrc: "assets/videos/reels/bridal-reel-5.mp4",
      title: "Client Love & Immediate Reaction",
      clientName: "Mirror Reveal",
      event: "Bridal Consultation & Reveal",
      duration: "0:22",
      views: "31.4K",
      caption: "That priceless expression when a bride looks into the mirror for the first time and sees herself truly glowing."
    }
  ],

  // INTERACTIVE FEATURE #1: BRIDAL LOOK FINDER QUIZ DATA
  lookFinder: {
    title: "Discover Your Bridal Direction",
    subtitle: "Answer 3 quick questions to receive Priyaa's personalized recommendation for your wedding events.",
    questions: [
      {
        id: "event",
        question: "What is your primary wedding event?",
        options: [
          { value: "Muhurtham", label: "Traditional Muhurtham", icon: "sun", desc: "Sacred morning wedding ceremony with silk saree" },
          { value: "Reception", label: "Grand Reception / Sangeet", icon: "moon", desc: "Evening celebration with lehenga or couture gown" },
          { value: "Engagement", label: "Engagement / Intimate Function", icon: "heart", desc: "Daytime celebration or family gathering" },
          { value: "Multi-Event", label: "Full Wedding Suite (Multi-Event)", icon: "sparkles", desc: "Multiple distinct looks across 2–3 days" }
        ]
      },
      {
        id: "finish",
        question: "Your preferred makeup finish:",
        options: [
          { value: "Natural Glam", label: "Natural Glam (Priyaa's Signature)", icon: "star", desc: "Dewy, luminous skin that still looks like you" },
          { value: "Soft Glam", label: "Soft Romantic Glam", icon: "feather", desc: "Subtle smoky bronze eyes with soft blush flush" },
          { value: "Very Natural", label: "Barely-There Natural", icon: "droplet", desc: "Minimalist, hyper-clean skin enhancement" },
          { value: "Defined Glam", label: "Editorial & Defined Glam", icon: "eye", desc: "Sharp winged liner, sculpted cheekbones & shimmer" }
        ]
      },
      {
        id: "priority",
        question: "What matters most to you on your big day?",
        options: [
          { value: "Skin Finish", label: "Luminous, Breathable Skin", icon: "smile", desc: "Weightless finish that doesn't feel heavy" },
          { value: "Longevity", label: "14+ Hour All-Day Hold", icon: "clock", desc: "Sweat-proof, smudge-proof through rituals & hugs" },
          { value: "Eyes & Hair", label: "Statement Eyes & Flawless Hair", icon: "eye", desc: "Meticulous eye detail and traditional floral plait" },
          { value: "Comfort", label: "Calm & Stress-Free Mornings", icon: "coffee", desc: "Punctual, gentle, reassuring bridal service" }
        ]
      }
    ]
  },

  // BRIDAL SERVICES
  services: [
    {
      id: "bridal-muhurtham",
      title: "Bridal Makeup Artistry",
      subtitle: "Muhurtham & Sacred Ceremonies",
      image: "assets/images/brides/real-bride-pink-kanjeevaram.png",
      description: "Complete signature bridal makeup, customized hair design with floral styling, saree draping, and jewelry setting for traditional morning ceremonies.",
      features: [
        "Personalized skin preparation & luxury hydrating prep",
        "High-definition, water-resistant Natural Glam base",
        "Custom eye design with lash customization",
        "Traditional poola jada or floral bun hair styling",
        "Pristine saree draping & jewelry placement"
      ],
      cta: "ENQUIRE FOR DETAILS"
    },
    {
      id: "reception-cocktail",
      title: "Reception & Sangeet Glam",
      subtitle: "Evening Celebrations & Cocktail Nights",
      image: "assets/images/brides/real-bride-twirling-lehenga.png",
      description: "Sophisticated modern glamour designed for grand evening venues and dramatic lighting. Glowing glass skin paired with romantic waves or couture updos.",
      features: [
        "Long-wear camera-ready glass skin finish",
        "Bronze or soft smoky eye with fine reflective pigments",
        "Hollywood waves, textured braids, or modern updos",
        "Lehenga / gown draping & dupatta setting",
        "Touch-up kit guidance for late night partying"
      ],
      cta: "ENQUIRE FOR DETAILS"
    },
    {
      id: "bridal-consultation",
      title: "Bridal Consultation & Trial",
      subtitle: "Designing Your Wedding Day Blueprint",
      image: "assets/images/brides/macro-eye.jpg",
      description: "One-on-one session to evaluate your wedding attire, jewelry, skin care routine, and ceremony timeline to lock in your personalized bridal direction.",
      features: [
        "Detailed face shape & skin undertone analysis",
        "Attire color harmony & floral pairing guidance",
        "Pre-wedding skincare regimen recommendations",
        "Look visualization and reference alignment",
        "Wedding morning timeline planning"
      ],
      cta: "BOOK CONSULTATION"
    },
    {
      id: "self-grooming",
      title: "Self-Grooming Masterclass",
      subtitle: "Master Your Everyday & Festive Radiance",
      image: "assets/images/about/priyaa-founder.jpg",
      description: "Private hands-on masterclass where Priyaa teaches you how to master your own features, pick correct foundation shades, and craft effortless 15-minute glam.",
      features: [
        "Understanding your skin type & shade matching",
        "Everyday office vs festive party makeup techniques",
        "Flawless 5-minute everyday eye & liner tricks",
        "Product curation — buy only what suits your skin",
        "1-on-1 practical guided application"
      ],
      cta: "ASK ABOUT CLASSES"
    },
    {
      id: "professional-academy",
      title: "Professional Makeup Training",
      subtitle: "Student Programs & Artistry Workshops",
      image: "assets/images/academy/student-training.jpg",
      description: "Comprehensive intensive training for aspiring bridal makeup artists. Learn skin prep, color theory, bridal draping, social media presentation, and client handling.",
      features: [
        "Live model practical training with Priyaa",
        "Signature Natural Glam techniques unveiled",
        "Traditional South Indian hair & flower artistry",
        "Bridal business, photography & Instagram growth",
        "Certificate of completion & ongoing mentorship"
      ],
      cta: "EXPLORE CURRICULUM"
    }
  ],

  // BRIDAL JOURNEY (5 Steps)
  journey: [
    {
      step: "01",
      title: "Tell Us About Your Wedding",
      desc: "Fill our quick date enquiry or ping us on WhatsApp with your wedding dates, venue, and events."
    },
    {
      step: "02",
      title: "Check Date Availability",
      desc: "We confirm Priyaa's schedule and share our transparent bridal brochure for your dates."
    },
    {
      step: "03",
      title: "Bridal Consultation",
      desc: "We discuss your attire, jewelry, skin prep timeline, and curate your personalized look direction."
    },
    {
      step: "04",
      title: "Create Your Look",
      desc: "Together we finalize the hair, draping, and makeup palette tailored to each specific function."
    },
    {
      step: "05",
      title: "Your Big Day",
      desc: "Priyaa arrives on time with calm energy, transforming your morning into a relaxed, royal experience."
    }
  ],

  // 2026 BRIDES CAMPAIGN
  campaign2026: {
    badge: "2026 BRIDAL CALENDAR",
    heading: "2026 Brides — Your Moment Deserves Artistry That Lasts Forever",
    quote: "“Your bridal morning deserves more than beautiful makeup — it deserves an experience designed with calmness, intention, and luxury.”",
    description: "Whether your wedding is set for upcoming auspicious muhurtham dates in Chennai or destination locations, our dates fill months in advance. Secure your bridal morning early for undivided attention.",
    cta: "CHECK YOUR 2026 DATE"
  },

  // CLIENT REVIEWS & LOVE (Authentic text from brides)
  reviews: [
    {
      id: "rev-1",
      name: "Sneha Ramakrishnan",
      event: "Muhurtham & Reception Bride",
      rating: 5,
      date: "Wedding in Chennai",
      quote: "Priyaa is an absolute artist! I wanted my makeup to look natural and not at all cakey because I usually wear zero makeup. When my husband saw me at the mandapam, he couldn't stop smiling. She made me look like the most radiant version of myself!",
      image: "assets/images/brides/real-bride-peacock-blue.png",
      videoUrl: "assets/videos/reels/bridal-reel-1.mp4"
    },
    {
      id: "rev-2",
      name: "Divya Venkat",
      event: "Destination Bride",
      rating: 5,
      date: "Wedding in Mahabalipuram",
      quote: "Booking Priyaa was the single best decision of my wedding. She was so punctual at 4:30 AM, brought an aura of absolute peace, and my makeup survived 6 hours of humid seaside breeze and tears without a single crease. Can't thank her enough!",
      image: "assets/images/brides/real-bride-pink-kanjeevaram.png",
      videoUrl: "assets/videos/reels/bridal-reel-2.mp4"
    },
    {
      id: "rev-3",
      name: "Aparna Sundar",
      event: "Engagement & Muhurtham",
      rating: 5,
      date: "Wedding in Chennai",
      quote: "The compliments have not stopped even a month after our wedding! Priyaa's Natural Glam style is unmatched in Chennai. If you want skin that actually looks like glowing skin in person and on camera, book her immediately.",
      image: "assets/images/brides/real-bride-teal-silk.png",
      videoUrl: "assets/videos/reels/bridal-reel-5.mp4"
    }
  ],

  // FREQUENTLY ASKED QUESTIONS
  faqs: [
    {
      q: "How early should I book my bridal makeup with Priyaa?",
      a: "Because auspicious wedding and muhurtham dates in Chennai fill rapidly, we recommend booking 4 to 8 months in advance. We are currently accepting bookings for the 2026 wedding calendar."
    },
    {
      q: "What makes Priyaa's 'Natural Glam' different from conventional bridal makeup?",
      a: "Traditional bridal makeup often relies on heavy, multi-layered foundations that mask facial features and look stark under daylight. Priyaa's Natural Glam focuses on skin preparation, skin-identical sheer layering, and feature enhancement—so you look like the most radiant version of yourself, completely recognizable to your loved ones and timeless in photos."
    },
    {
      q: "Do you travel to wedding venues outside Chennai?",
      a: "Yes! While Priyaa is based in Chennai, she frequently travels for destination weddings across Tamil Nadu, Bangalore, Hyderabad, and overseas destinations. Travel and accommodation are arranged in discussion with the bride."
    },
    {
      q: "Do you provide bridal hair styling, floral setting, and saree draping?",
      a: "Yes! Complete bridal packages include bridal makeup, bespoke hair styling (traditional poola jada, flower veni placement, or modern reception waves), accessory setting, and professional saree / lehenga draping."
    },
    {
      q: "Can I share my inspiration or reference photos with Priyaa?",
      a: "Absolutely. During your bridal consultation, we review your Pinterest boards, wedding outfit swatches, and jewelry photos to customize a look that complements your individual features and personal style."
    },
    {
      q: "Do you offer makeup for the bride's family or bridesmaids?",
      a: "Yes, family and bridesmaid services can be accommodated depending on the event schedule and Priyaa's team availability. Please mention the number of guests when submitting your date enquiry."
    },
    {
      q: "How do I check if Priyaa is available for my wedding date?",
      a: "Simply fill out our 'Check My Date' enquiry form below or click the WhatsApp button. You can submit your event dates, venue, and preferred look to instantly start a direct conversation with Priyaa."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CMS_DATA;
}
