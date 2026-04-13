'use client';

import React, { useState, useEffect } from 'react';
import { FaCheck, FaRocket, FaShieldAlt, FaTools, FaPlug, FaPlay } from 'react-icons/fa';

export default function SimplyStatic() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const testimonials = [
    {
      quote: "I was having many issues with malware, but it ultimately led me to this static solution for WordPress sites, and I’m enjoying this new approach to developing WordPress projects quickly and securely.",
      name: "Andre Esteves Perrone",
      title: "Developer & Instructor"
    },
    {
      quote: "I ended up converting one WordPress site to static, and it was super simple. I had one question about GitHub access, which was answered quickly.",
      name: "Dan Holloran",
      title: "Full-Stack Developer"
    },
    {
      quote: "This is a great addition, as it allows a site to be hosted in S3/Cloudfront and prevents WordPress attacks.",
      name: "Kevin Withnall",
      title: "CTO"
    },
    {
      quote: "Simply Static is a comprehensive solution for anyone looking to improve their WordPress site’s performance, security, and cost-effectiveness. With the bonus of outstanding support from Patrick, it’s a must-have for any WordPress user. Highly recommended!",
      name: "Maarten Emmerink",
      title: "Founder & CEO"
    },
    {
      quote: "Publishing a Jamstack site from WordPress gives the best of both worlds—flexible content creation with a serverless website (we publish to S3).",
      name: "Douglas Stein",
      title: "Director of Engineering"
    },
    {
      quote: "WordPress is very useful but too insecure, unreliable, and slow to be used by critical sites without a solution like this. This way, we get the benefits of WordPress without the downsides.",
      name: "Jocelyn Earl",
      title: "CTO"
    },
    {
      quote: "As an agency, we work with many customers who come to us with either existing WordPress sites or new sites that are perfect candidates for static sites. Supporting static sites is a lighter lift on the agency site, and the customer wins on better security and typically better performance […]",
      name: "Jim Hankins",
      title: "Founder & CEO"
    },
    {
      quote: "Static sites have many benefits. The pro version has a good feature for a solid implementation. I’ve encountered a few edge cases, and their support has been prompt and professional.",
      name: "Scott Green",
      title: "Founder & CEO"
    },
    {
      quote: "The plugin setup was easy and works great out of the box. The documentation is good, and support is great if needed, too!",
      name: "Herbert Hoekstra",
      title: "WordPress Developer"
    }
  ];

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* HEADER */}
      <header className="bg-[#0d0223] sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <nav className="flex justify-between items-center">
            <img src="./logo-dark.svg" alt="Simply Static" className="h-10" />

            <ul className="hidden md:flex gap-10 text-white font-medium">
              <li><a href="#" className="hover:opacity-80 flex items-center gap-1">Product <span>▼</span></a></li>
              <li><a href="#" className="hover:opacity-80">Pricing</a></li>
              <li><a href="#" className="hover:opacity-80 flex items-center gap-1">Learn <span>▼</span></a></li>
              <li><a href="#" className="hover:opacity-80">Blog</a></li>
            </ul>

            <div className="hidden md:flex items-center gap-6">
              <div className="text-white flex items-center gap-2 cursor-pointer">
                Account <span>▼</span>
              </div>
              <a href="#" className="bg-[#023fe5] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get Started
              </a>
            </div>

            <div className="md:hidden flex flex-col gap-1.5 cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <span className="w-7 h-0.5 bg-white"></span>
              <span className="w-7 h-0.5 bg-white"></span>
              <span className="w-7 h-0.5 bg-white"></span>
            </div>
          </nav>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-6 bg-[#0d0223] py-6 text-white text-center">
              <ul className="flex flex-col gap-6 text-lg">
                <li>Product</li><li>Pricing</li><li>Learn</li><li>Blog</li><li>Account</li>
                <li><a href="#" className="bg-[#023fe5] px-8 py-3 rounded-lg inline-block">Get Started</a></li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section
        className="bg-cover bg-center text-white pt-32 pb-20 relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('./hero.jpg')"
        }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Unhackable, lightning-fast,<br />zero-maintenance WordPress
          </h1>
          <p className="mt-6 text-2xl text-slate-100 max-w-3xl mx-auto">
            Simply Static converts WordPress to static HTML.<br />
            Keep the flexibility, add bulletproof security and instant performance.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#" className="bg-[#023fe5] text-white px-10 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2 hover:bg-blue-700 transition">
              Get Started Today
            </a>
            <a href="#video" className="border border-white/70 hover:bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2 transition">
              <FaPlay className="text-sm" /> Watch Video
            </a>
          </div>

          {/* Separate Backdrop Testimonial Cards */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-left">
            <p className="mt-6 mb-6 italic text-slate-100 leading-relaxed text-[17px]">
                “I was having many issues with malware, but it ultimately led me to this static solution for WordPress sites, and I’m enjoying this new approach to developing WordPress quickly and securely.”
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="./andre-esteves-perrones.webp"
                  alt="Andre Esteves Perrone" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/30"
                />
                <div>
                  <div className="font-semibold text-white">Andre Esteves Perrone</div>
                  <div className="text-sm text-slate-300">Developer &amp; Instructor</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-left">
              <p className="mt-6 mb-6 italic text-slate-100 leading-relaxed text-[17px]">
                  “[…] Supporting static sites is a lighter lift on the agency site, and the customer wins on better security and typically better performance […].”
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="./him-hankis-cb-300x300.webp" 
                  alt="Jim Hankins" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/30"
                />
                <div>
                  <div className="font-semibold text-white">Jim Hankins</div>
                  <div className="text-sm text-slate-300">Founder &amp; CEO</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="text-left mt-20">
      <div className="text-left mb-16">
            <h2 className="text-5xl font-bold mb-6">What is Static WordPress?</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              WordPress powers your content. Static files power your site.<br />
              The best of both worlds for the best results.
            </p>
          </div>

          {/* VIDEO */}
      <div id="video" className="max-w-7xl mx-auto mt-20 relative z-10 px-6">
        <video
          className="w-full shadow-2xl"
          controls
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="./what-is-static-wordpress.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      </section>
      

      {/* TRUST BAR */}
      <section className="bg-[#fafafa] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-2xl font-medium max-w-4xl mx-auto">
            With over <span className="text-[#023fe5]">40,000 active users</span> and over <span className="text-[#023fe5]">1,400,000 downloads</span>,<br />
            Simply Static is the <span className="text-[#023fe5]">most popular</span> static site generator for WordPress. It’s also trusted by industry-leading businesses.
          </p>
         
          <div className="flex flex-wrap justify-center items-center gap-12 mt-16 opacity-75">
            <img src="./microsoft.webp" alt="Microsoft" className="h-8" />
            <img src="./unicef.webp" alt="UNICEF" className="h-8" />
            <img src="./rapid.webp" alt="RapidAPI" className="h-8" />
            <img src="./hp.webp" alt="HP" className="h-8" />
            <img src="./dash.webp" alt="Dash" className="h-8" />
            <img src="./postman.webp" alt="Postman" className="h-8" />
            <img src="./mailtrap.webp" alt="Mailtrap" className="h-8" />
            <img src="./near.webp" alt="NEAR" className="h-8" />
          </div>
        </div>
      </section>

      {/* WHAT IS STATIC WORDPRESS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
         
          <div className="grid md:grid-cols-2 gap-8 mt-20">
            {[
              { icon: FaRocket, title: "Performance", desc: "Forget expensive hosting, complex caching setups, and countless performance plugins. Static WordPress delivers instant page loads from a global CDN." },
              { icon: FaShieldAlt, title: "Security", desc: "No database, no login page, no vulnerabilities. Static sites can’t be hacked the way traditional WordPress can. Rock-solid security by design." },
              { icon: FaTools, title: "Zero Maintenance", desc: "Stop updating plugins every day. Stop worrying about security patches. Focus on your content while Simply Static handles the technical stuff." },
              { icon: FaPlug, title: "Full Compatibility", desc: "Keep using your favorite WordPress plugins – forms, SEO, page builders, and multilingual. Simply Static works with the tools you already love." }
            ].map((f, i) => (
              <div key={i} className="bg-[#f8fafc] p-10 rounded-2xl hover:shadow-xl transition">
                <f.icon className="text-[#2563eb] text-7xl mb-8" />
                <h3 className="text-3xl font-bold mb-4">{f.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR SOLUTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Choose your solution</h2>
            <p className="text-2xl text-gray-600">Two products. Two different needs. Which one fits you?</p>
            <a href="#" className="mt-8 inline-block bg-[#023fe5] text-white px-10 py-4 rounded-xl text-lg font-semibold">
              Compare Studio vs Pro
            </a>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Simply Static Pro */}
            <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-lg">
              <h2 className="text-3xl font-bold">Simply Static Pro</h2>
              <div className="text-xl text-gray-600 mt-2">WordPress plugin for your own server</div>
              <p className="mt-6 text-lg">For developers and agencies who want maximum control and profit margins.</p>
              <a href="#" className="block mt-10 bg-[#2563eb] text-white text-center py-4 rounded-xl font-semibold text-lg">
                Get Simply Static Pro
              </a>
              <div className="mt-12 space-y-10">
                <div>
                  <h4 className="font-bold text-xl mb-4">What you get:</h4>
                  <ul className="space-y-3 text-lg">
                    {["WordPress Plugin", "Deploy to any platform (GitHub, AWS, Netlify, etc.)", "Static-friendly forms & search", "Multilingual and Multisite support", "Complete technical control"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3"><FaCheck className="text-[#2563eb] mt-1 shrink-0" /> {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-4">Pricing:</h4>
                  <ul className="space-y-3 text-lg">
                    <li><FaCheck className="text-[#2563eb] inline" /> $99/year per site</li>
                    <li><FaCheck className="text-[#2563eb] inline" /> $299/year unlimited sites</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Simply Static Studio */}
            <div className="bg-black text-white rounded-2xl p-12 shadow-2xl">
              <h2 className="text-3xl font-bold">Simply Static Studio</h2>
              <div className="text-xl text-gray-400 mt-2">All-in-one managed WordPress hosting.</div>
              <p className="mt-6 text-lg">For businesses and content creators who want zero maintenance.</p>
              <a href="#" className="block mt-10 bg-[#2563eb] text-white text-center py-4 rounded-xl font-semibold text-lg">
                Try Free for 7 Days - No Credit Card
              </a>
              <div className="mt-12 space-y-10">
                <div>
                  <h4 className="font-bold text-xl mb-4">What you get:</h4>
                  <ul className="space-y-3 text-lg text-gray-300">
                    {["Managed WordPress hosting", "Static site hosting on global CDN", "Automated backups & SSL", "One-click WordPress login", "Everything from Simply Static Pro"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3"><FaCheck className="text-blue-400 mt-1 shrink-0" /> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold mb-16">Trusted Worldwide</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div><div className="text-6xl font-bold text-[#2563eb]">40K+</div><p className="text-xl mt-3">Users</p></div>
            <div><div className="text-6xl font-bold text-[#2563eb]">1.5M+</div><p className="text-xl mt-3">Downloads</p></div>
            <div><div className="text-6xl font-bold text-[#2563eb]">4.5/5</div><p className="text-xl mt-3">Rating</p></div>
            <div><div className="text-6xl font-bold text-[#2563eb]">25+</div><p className="text-xl mt-3">Integrations</p></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold mb-4">Hear from our happy users</h2>
          <p className="text-center text-2xl text-gray-600 mb-16">We helped thousands of people switch to Static WordPress.</p>
          <div className="relative">
            <div className="bg-white rounded-3xl p-12 shadow-xl min-h-95 flex flex-col justify-between">
              <div className="text-4xl text-yellow-400 mb-8">★★★★★</div>
              <p className="text-2xl italic leading-relaxed">“{testimonials[currentIndex].quote}”</p>
              <div className="mt-10">
                <div className="font-bold text-xl">{testimonials[currentIndex].name}</div>
                <div className="text-gray-500">{testimonials[currentIndex].title}</div>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-4 h-4 rounded-full transition-all ${i === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORKS WITH TOOLS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-16">Works With Your Favorite Tools</h2>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-8 text-xl font-medium text-gray-600">
            {["Elementor", "WooCommerce", "Yoast SEO", "WPForms", "Polylang", "Rank Math", "Gravity Forms"].map(tool => (
              <div key={tool} className="py-4">{tool}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold">Ready to Make WordPress Fast & Secure?</h2>
          <a href="#" className="mt-10 inline-block bg-white text-blue-700 px-12 py-5 rounded-2xl text-xl font-semibold hover:bg-gray-100 transition">
            Get Started Today
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f172a] text-gray-400 py-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-lg">
            <a href="#" className="hover:text-white mx-3">Blog</a> |
            <a href="#" className="hover:text-white mx-3">Documentation</a> |
            <a href="#" className="hover:text-white mx-3">Pricing</a> |
            <a href="#" className="hover:text-white mx-3">Support</a> |
            <a href="#" className="hover:text-white mx-3">Privacy Policy</a> |
            <a href="#" className="hover:text-white mx-3">Terms of Service</a>
          </p>
          <p className="mt-8">© 2026 Simply Static. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}