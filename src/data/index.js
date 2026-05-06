// Gallery Items - Simplified structure with only images
export const GALLERY_ITEMS = [
    {
        id: 1,
        image: '/assets/hero/image1a.jpg',
        size: "large",
    },
    {
        id: 2,
        image: "/assets/hero/image1b.jpg",
        size: "regular",
    },
    {
        id: 3,
        image: "/assets/hero/image1c.jpg",
        size: "regular",
    },
    {
        id: 4,
        image: "/assets/hero/image1d.jpeg",
        size: "wide",
    },
    {
        id: 5,
        image: "/assets/hero/image1e.jpeg",
        size: "regular",
    },
    {
        id: 6,
        image: "/assets/images/about4.jpg",
        size: "regular",
    },
    {
        id: 7,
        image: "/assets/images/about3.jpg",
        size: "large",
    },
    {
        id: 8,
        image: "/assets/images/about.jpg",
        size: "regular",
    },
    {
        id: 9,
        image: "/assets/images/about2.jpg",
        size: "regular",
    },
];

// News/Blog Posts Data
export const newsData = [
    {
        id: 1,
        image: '/assets/images/news/1.png',
        title: "2024 New Outreach Mission Starts Soon",
        slug: "2024-new-outreach-mission-starts-soon",
        excerpt: "As we approach the end of this remarkable year, we are thrilled to share the exciting news of our upcoming initiatives at Glorious Mission Aid Network (GMAN). With unwavering commitment, GMAN is gearing up for two impactful events scheduled for December 2024.",
        content: `Pastor Lublian Tolu Mendel-Idowu

As we approach the end of this remarkable year, we are thrilled to share the exciting news of our upcoming initiatives at Glorious Mission Aid Network (GMAN). With unwavering commitment, GMAN, the Mission and Outreach arm of The Glorious Church Int'l, is gearing up for two impactful events scheduled for the 16th and 18th of December 2024 at the Message Assembly Church, Awoyaya, and Omojolagbe Geriatric Home Isebo in memory of Pastor Lublian Tolu Mendel-Idowu.

Our primary focus this year is to extend a helping hand to vulnerable aged individuals residing in a geriatric home. The mission is not only to provide essential medical aid but also to offer genuine care that transcends physical well-being. In the spirit of the season, we aim to bring warmth and comfort to those who have paved the way for us.

Simultaneously, on these mission days, we will be conducting free food distribution at targeted locations. This initiative seeks to address immediate nutritional needs, especially during a season when solidarity and kindness are paramount. We envision creating moments of joy through the simple act of sharing sustenance.

In line with our commitment to education and empowerment, GMAN is proud to introduce scholarship schemes for targeted school pupils. By investing in the education of the younger generation, we strive to lay the foundation for a brighter and more promising future.

To make these missions a resounding success, we extend a heartfelt invitation for your support. Your contribution, whether big or small, plays a crucial role in achieving our collective goal of making a positive impact in the lives of those who need it most.

Join hands with GMAN this December, and let's make a difference together. Your generosity can transform lives and bring a glimmer of hope to those in need.`,
        author: "gmanglobal23",
        date: "2024-11-15",
        readTime: "2 min read",
        category: "Outreach",
        tags: ["Outreach", "Mission", "Community", "Elderly Care", "Education", "December 2024"],
        featured: true,
    },
    {
        id: 2,
        image: '/assets/images/about2.jpg',
        title: "GMAN's Recent Outreach Highlights | 2024",
        slug: "gman-recent-outreach-highlights-2024",
        excerpt: "The Glorious Mission Aid Network GMAN. Our mission is to reach out to the most vulnerable and impoverished in our society. This is why we give back to the community every time.",
        content: `The Glorious Mission Aid Network GMAN. Our mission is to reach out to the most vulnerable and impoverished in our society. This is why we give back to the community every time.

Recently, we organised a reachout event to show our appreciation and care for the elderly and vulnerable members of our society at the Omojolagbe Geriatric Care Foundation in the Isebo Community. This event was held in memory of GMAN's departed top partner and donor Pastor Tolu Mendel Idowu.

In partnership with the People of Passion and Purpose PPP, we reached out to over 30 widows at the Message Assembly Church, Awoyaya Community, by providing food and other essential items also in memory of Pastor Tolu Mendel Idowu.

Our team came together to make these events a success, and it was such a heartwarming experience.

We're committed to spreading love and kindness throughout the community. We see these events as the beginning of our efforts to give back.

We'd like to thank our team members, volunteers, and partners for their support in making these event possible. Your selflessness and compassion inspire us all.

At GMAN, we're dedicated to making a positive impact in the lives of those around us.

Together, let's continue to spread love and kindness throughout our community.`,
        author: "gmanglobal23",
        date: "2025-01-07",
        readTime: "1 min read",
        category: "Highlights",
        tags: ["Highlights", "Community", "Elderly Care", "Partnership", "Widows", "2024"],
        featured: false,
    },
];

// Helper function to get post by slug
export const getPostBySlug = (slug) => {
    return newsData.find(post => post.slug === slug);
};

// Helper function to get related posts (exclude current post)
export const getRelatedPosts = (currentPostId, limit = 3) => {
    return newsData
        .filter(post => post.id !== currentPostId)
        .slice(0, limit);
};

// Helper function to get featured post
export const getFeaturedPost = () => {
    return newsData.find(post => post.featured === true);
};