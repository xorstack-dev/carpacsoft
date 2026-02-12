import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Requirements Management: AI and Machine Learning",
    excerpt: "Discover how artificial intelligence is transforming the way teams manage requirements and improve product development outcomes.",
    category: "Technology",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Best Practices for Medical Device Requirements Management",
    excerpt: "Learn the essential practices for managing requirements in FDA-regulated medical device development.",
    category: "Industry",
    author: "Michael Rodriguez",
    date: "2024-01-12",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 3,
    title: "How to Achieve Complete Traceability in Complex Systems",
    excerpt: "A comprehensive guide to implementing end-to-end traceability across your product development lifecycle.",
    category: "Best Practices",
    author: "Emily Thompson",
    date: "2024-01-10",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Agile vs. Traditional Requirements Management",
    excerpt: "Comparing approaches and finding the right balance for your organization's needs.",
    category: "Methodology",
    author: "David Kim",
    date: "2024-01-08",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    title: "ISO 26262 Compliance: A Practical Guide",
    excerpt: "Everything you need to know about achieving automotive safety compliance with proper requirements management.",
    category: "Compliance",
    author: "Lisa Wang",
    date: "2024-01-05",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Streamlining Review Cycles with Digital Workflows",
    excerpt: "How to reduce review cycle times and improve stakeholder collaboration with modern tools.",
    category: "Productivity",
    author: "James Miller",
    date: "2024-01-03",
    readTime: "4 min read",
    featured: false,
  },
];

const categories = ["All", "Technology", "Industry", "Best Practices", "Methodology", "Compliance", "Productivity"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-jama-light-blue to-jama-sky py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-jama-navy mb-4">
                CarpacSoft Blog
              </h1>
              <p className="text-lg text-jama-gray mb-8">
                Insights, best practices, and industry trends in requirements management 
                and product development.
              </p>

              {/* Search */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-jama-gray" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg bg-white border-0 rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-jama-orange text-white"
                      : "bg-jama-light-blue text-jama-navy hover:bg-jama-sky"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-jama-navy mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                  <FeaturedPostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-12 bg-jama-light-blue">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-jama-navy mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-jama-gray">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-jama-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-white/70 mb-6">
                Get the latest insights and best practices delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white border-0"
                />
                <button className="gradient-orange text-white px-6 py-2 rounded-md font-semibold hover:opacity-90">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

interface PostProps {
  post: typeof blogPosts[0];
}

function FeaturedPostCard({ post }: PostProps) {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="h-48 bg-gradient-to-br from-jama-navy to-jama-navy-dark flex items-center justify-center">
        <span className="text-4xl opacity-50">📝</span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-jama-orange/10 text-jama-orange text-xs font-medium rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-jama-gray">{post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-jama-navy mb-2 group-hover:text-jama-orange transition-colors">
          {post.title}
        </h3>
        <p className="text-jama-gray mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-jama-gray">
            <User className="h-4 w-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-2 text-jama-gray">
            <Calendar className="h-4 w-4" />
            {new Date(post.date).toLocaleDateString()}
          </div>
        </div>
      </div>
    </Link>
  );
}

function PostCard({ post }: PostProps) {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center gap-2 mb-3">
        <Tag className="h-4 w-4 text-jama-orange" />
        <span className="text-sm text-jama-orange font-medium">{post.category}</span>
      </div>
      <h3 className="text-lg font-semibold text-jama-navy mb-2 group-hover:text-jama-orange transition-colors">
        {post.title}
      </h3>
      <p className="text-sm text-jama-gray mb-4 line-clamp-2">{post.excerpt}</p>
      <div className="flex items-center justify-between text-xs text-jama-gray">
        <span>{post.author}</span>
        <span>{post.readTime}</span>
      </div>
    </Link>
  );
}

export default Blog;



