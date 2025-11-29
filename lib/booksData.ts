// Shared books data
export interface Book {
  id: number;
  slug: string;
  title: string;
  author: string;
  authorSlug: string;
  year: string;
  category: string;
  series?: string;
  pages: number;
  kindle?: string;
  paperback?: string;
  hardcover?: string;
  description: string;
  fullDescription?: string;
  rating?: string;
  asin: string;
  isbn?: string;
  amazonUrl: string;
  status?: string;
  releaseDate?: string;
  features?: string[];
}

export const booksData: Book[] = [
  {
    id: 7,
    slug: "the-knock",
    title: "THE KNOCK: Why Most Believers Stop One Prayer Away From Their Miracle",
    author: "Apostle Dr. Ivon L. Valerie",
    authorSlug: "ivon-valerie",
    year: "2026",
    category: "Christian Faith",
    pages: 309,
    kindle: "$9.99 (Pre-order)",
    description: "Do you feel like you're one prayer away from quitting? THE KNOCK reveals why most believers quit right before their miracle arrives, and more importantly, how to outlast the wait until the door finally opens. Drawing from a transformative 18-month wilderness, this book unpacks the powerful progression hidden in Matthew 7:7-8.",
    fullDescription: "Do you feel like you're one prayer away from quitting? THE KNOCK reveals why most believers quit right before their miracle arrives, and more importantly, how to outlast the wait until the door finally opens. Drawing from a transformative 18-month wilderness, this book unpacks the powerful progression hidden in Matthew 7:7-8.",
    status: "Pre-Order",
    releaseDate: "January 16, 2026",
    asin: "Pre-order",
    isbn: "979-8992849066",
    amazonUrl: "https://a.co/d/2m87zLQ",
    features: [
      "31-Day Devotional",
      "Complete Study Guide with discussion questions for all 11 chapters",
      "Practical action steps at the end of each chapter"
    ]
  },
  {
    id: 8,
    slug: "the-wilderness-season",
    title: "THE WILDERNESS SEASON: God's Hidden Path to Your Greatest Breakthrough",
    author: "Marcus J. Raymond",
    authorSlug: "marcus-raymond",
    year: "2025",
    category: "Christian Faith",
    pages: 401,
    kindle: "$9.99",
    paperback: "$16.99",
    description: "You're not supposed to feel this lost. Not when you've been faithful. Not when you've prayed. Not when you've done everything right. But here you are in a season you never chose, walking through darkness you don't understand. What if this wilderness isn't what you think it is? The Wilderness Season is raw, honest testimony from someone who walked through three years of devastating loss and emerged transformed.",
    fullDescription: "You're not supposed to feel this lost. Not when you've been faithful. Not when you've prayed. Not when you've done everything right. But here you are in a season you never chose, walking through darkness you don't understand.\n\nWhat if this wilderness isn't what you think it is? What if the season destroying you is actually the one making you? What if God's silence isn't absence but presence in a form you don't recognize?\n\nThe Wilderness Season is raw, honest testimony from someone who walked through three years of devastating loss and emerged transformed. Through twelve powerful chapters grounded in Scripture and lived experience, you'll discover why God allows the bottom to drop out, why your timeline had to die, what His silence is actually accomplishing, and how you'll emerge with authority that only wilderness can forge.",
    rating: "#1,459 in Christian Faith",
    asin: "B0FWRZMY2K",
    isbn: "979-8992849073",
    amazonUrl: "https://a.co/d/60f8DW7"
  },
  {
    id: 6,
    slug: "the-unknown",
    title: "The Unknown: What You Need to Know but Don't Know",
    author: "Apostle Dr. Ivon L. Valerie",
    authorSlug: "ivon-valerie",
    year: "2025",
    category: "Christian Living",
    pages: 401,
    kindle: "$19.99",
    paperback: "$22.99",
    hardcover: "$29.99",
    description: "What if the reason you're stuck is something you don't even see? You're not limited by your past. You're limited by what you were never told. A powerful wake-up call for anyone tired of hitting invisible walls, this book offers deep, practical, and spiritual insight into invisible cycles, spiritual laws, sabotaging mindsets, and hidden principles shaping your life.",
    fullDescription: "What if the reason you're stuck is something you don't even see? You're not limited by your past. You're limited by what you were never told.\n\nA powerful wake-up call for anyone tired of hitting invisible walls, this book offers deep, practical, and spiritual insight into invisible cycles, spiritual laws, sabotaging mindsets, and hidden principles shaping your life.\n\nFor leaders, believers, dreamers, or anyone stuck in a frustrating season seeking clarity, freedom, and transformation.",
    rating: "New Release",
    asin: "B0FTZXKSPT",
    isbn: "979-8992849059",
    amazonUrl: "https://a.co/d/9FEstCW"
  },
  {
    id: 5,
    slug: "bloom",
    title: "Bloom: Thrive and Flourish After Trauma",
    author: "Apostle Dr. Ivon L. Valerie",
    authorSlug: "ivon-valerie",
    year: "2025",
    category: "Trauma Healing",
    series: "Trauma Detox Series - Book 3",
    pages: 127,
    kindle: "$9.99",
    paperback: "$19.99",
    description: "The final book of the transformative Trauma Detox Series, guiding you to a life of abundance, joy, and flourishing. Bloom challenges you to embrace your identity, rediscover your purpose, and create a life marked by growth. This book isn't just about surviving: it's about flourishing.",
    fullDescription: "The final book of the transformative Trauma Detox Series, guiding you to a life of abundance, joy, and flourishing.\n\nBloom challenges you to embrace your identity, rediscover your purpose, and create a life marked by growth. This book isn't just about surviving: it's about flourishing.\n\nAfter you've named your scars and mended what was broken, it's time to bloom—to step into the vibrant, purposeful life God always intended for you.",
    asin: "B0DXDKPKXC",
    amazonUrl: "https://www.amazon.com/dp/B0DXDKPKXC"
  },
  {
    id: 4,
    slug: "mended",
    title: "Mended: Restore and Rebuild What Was Broken",
    author: "Apostle Dr. Ivon L. Valerie",
    authorSlug: "ivon-valerie",
    year: "2025",
    category: "Trauma Healing",
    series: "Trauma Detox Series - Book 2",
    pages: 127,
    kindle: "$9.99",
    paperback: "$19.99",
    description: "Healing is not just about moving forward: it's about restoring what was lost and rebuilding what was broken. Mended is your guide to navigating the path of restoration with courage and faith, helping you repair broken relationships, rebuild self-worth, and rediscover joy after trauma.",
    fullDescription: "Healing is not just about moving forward: it's about restoring what was lost and rebuilding what was broken.\n\nMended is your guide to navigating the path of restoration with courage and faith, helping you repair broken relationships, rebuild self-worth, and rediscover joy after trauma.\n\nThis is the steady, intentional work of putting the pieces back together—not as they were, but better, stronger, and anchored in God's grace.",
    asin: "B0DXDDHCG8",
    amazonUrl: "https://www.amazon.com/dp/B0DXDDHCG8"
  },
  {
    id: 3,
    slug: "scarred",
    title: "Scarred: Proof of Survival, Marks of Strength",
    author: "Apostle Dr. Ivon L. Valerie",
    authorSlug: "ivon-valerie",
    year: "2025",
    category: "Trauma Healing",
    series: "Trauma Detox Series - Book 1",
    pages: 120,
    kindle: "$9.99",
    paperback: "$19.99",
    description: "Life leaves scars. Some are visible, while others lie hidden deep within the heart. Scarred is the first book in the Trauma Detox Series, providing empathetic guidance and biblical truth to help you name the pain and begin the healing journey.",
    fullDescription: "Life leaves scars. Some are visible, while others lie hidden deep within the heart.\n\nScarred is the first book in the Trauma Detox Series, providing empathetic guidance and biblical truth to help you name the pain and begin the healing journey.\n\nThis book meets you where you are—in the aftermath of what broke you—and gently leads you toward the hope of healing. Your scars are not the end of your story. They are proof that you survived.",
    asin: "B0DXFQ6NDC",
    amazonUrl: "https://www.amazon.com/dp/B0DXFQ6NDC"
  },
  {
    id: 2,
    slug: "the-meaningful-life",
    title: "The Meaningful Life: Discovering God's Unique Purpose For You",
    author: "Apostle Dr. Ivon L. Valerie",
    authorSlug: "ivon-valerie",
    year: "2025",
    category: "Christian Self Help",
    pages: 170,
    kindle: "$9.99",
    paperback: "$22.90",
    description: "A profound and enlightening book that guides readers on a spiritual journey of self-discovery, helping them unlock their God-given potential and embrace their ultimate life purpose. Through insightful reflections and practical exercises, readers learn to dispel anxiety and find direction by gaining clarity on their innate talents, core motivations, and life experiences that serve as clues guiding them toward their divine destiny.",
    fullDescription: "A profound and enlightening book that guides readers on a spiritual journey of self-discovery, helping them unlock their God-given potential and embrace their ultimate life purpose.\n\nThrough insightful reflections and practical exercises, readers learn to dispel anxiety and find direction by gaining clarity on their innate talents, core motivations, and life experiences that serve as clues guiding them toward their divine destiny.\n\nFor anyone seeking to discover their unique calling and live out their God-given purpose with clarity and confidence.",
    rating: "5.0 out of 5 stars",
    asin: "B0DW1LWRKY",
    isbn: "978-0997465563",
    amazonUrl: "https://www.amazon.com/dp/B0DW1LWRKY"
  },
  {
    id: 1,
    slug: "prayer-lifestyle",
    title: "Prayer Lifestyle: Navigating Daily Challenges with Faith and Prayer",
    author: "Apostle Dr. Ivon L. Valerie",
    authorSlug: "ivon-valerie",
    year: "2023",
    category: "Christian Prayer",
    pages: 422,
    kindle: "$9.99",
    paperback: "$25.99",
    hardcover: "$35.95",
    description: "A comprehensive book written to deepen your spiritual practice through prayer and declaration. This prayer and declaration guide has been created specifically for readers who want to strengthen their bond with God and discover the profound power of praying daily. Each chapter is filled with clear guidance and powerful prayers rooted in scripture, providing practical tools for living out faith through prayer every day.",
    fullDescription: "A comprehensive book written to deepen your spiritual practice through prayer and declaration.\n\nThis prayer and declaration guide has been created specifically for readers who want to strengthen their bond with God and discover the profound power of praying daily. Each chapter is filled with clear guidance and powerful prayers rooted in scripture, providing practical tools for living out faith through prayer every day.\n\nFor anyone seeking to deepen their prayer life and spiritual connection with God, from beginners to experienced prayer warriors.",
    rating: "5.0 out of 5 stars",
    asin: "B0BV76NV8J",
    isbn: "978-0997465532",
    amazonUrl: "https://www.amazon.com/dp/B0BV76NV8J"
  }
];

export interface Author {
  slug: string;
  name: string;
  title: string;
  bio: string;
  fullBio: string;
  booksCount: number;
  website?: string;
  socials?: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
}

export const authorsData: Author[] = [
  {
    slug: "ivon-valerie",
    name: "Apostle Dr. Ivon L. Valerie",
    title: "Founder & Senior Pastor, Faith & Works Ministries",
    bio: "Apostle Dr. Ivon Valerie is a pastor, author, certified coach, and mental health advocate with over 20 years of experience in ministry and leadership. As the senior pastor of Faith & Works Ministries, he empowers individuals through faith, trauma healing, and personal development.",
    fullBio: "Apostle Dr. Ivon Valerie is a pastor, author, certified coach, and mental health advocate with over 20 years of experience in ministry and leadership. As the senior pastor of Faith & Works Ministries, he empowers individuals through faith, trauma healing, and personal development.\n\nWith certifications in education, counseling, psychology, and leadership and as a Certified Mental Health Christian Coach, Dr. Valerie inspires transformation through his writing, speaking, and mentorship. He helps others rebuild, thrive, and fulfill their God-given potential.\n\nHe resides in Sint Maarten with his wife, Jeanetta Valerie, and their two children.",
    booksCount: 7,
    website: "https://ivonvalerie.com",
    socials: {
      facebook: "https://www.facebook.com/kingivon",
      instagram: "https://www.instagram.com/ivonvalerie",
      youtube: "https://www.youtube.com/@ivonlvalerie"
    }
  },
  {
    slug: "marcus-raymond",
    name: "Marcus J. Raymond",
    title: "Author & Speaker",
    bio: "Marcus J. Raymond is an author and speaker whose writing emerges from seasons of profound personal transformation. His work explores the intersection of faith, suffering, and breakthrough, offering raw testimony and biblical insight for those navigating life's most difficult seasons.",
    fullBio: "Marcus J. Raymond is an author and speaker whose writing emerges from seasons of profound personal transformation. His work explores the intersection of faith, suffering, and breakthrough, offering raw testimony and biblical insight for those navigating life's most difficult seasons.\n\nMarcus writes for the weary believer who refuses to give up, drawing from his own journey through loss, waiting, and eventual restoration. He is committed to helping others discover that their wilderness has purpose and their breakthrough is closer than it appears.",
    booksCount: 1,
  }
];
