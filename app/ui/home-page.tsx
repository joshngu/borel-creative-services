"use client";

import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const markActiveLink = () => {
      const sections = document.querySelectorAll<HTMLElement>("main section[id]");
      const checkpoint = window.scrollY + 120;
      let currentId = "";

      sections.forEach((section) => {
        if (checkpoint >= section.offsetTop) {
          currentId = section.id;
        }
      });

      setActiveId(currentId);
    };

    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 12);
    };

    const onScroll = () => {
      markActiveLink();
      updateHeaderState();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const business = String(data.get("business") || "").trim();
    const interest = String(data.get("interest") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = `New inquiry from ${name || "a local business"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Business: ${business}`,
      `Interested in: ${interest}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:joshuanguyen@borelcreativeservice.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="home-page">
      <header className={`site-header${isScrolled ? " scrolled" : ""}`} id="top">
        <div className="container nav-wrap">
          <a className="brand" href="#top">
            <span className="brand-logo" aria-hidden="true">
              <Image src="/assets/IMG_8404.jpg" alt="" width={30} height={30} />
            </span>
            <span className="brand-text">Borel Creative Services</span>
          </a>
          <button
            className="menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="site-nav"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            Menu
          </button>
          <nav
            id="site-nav"
            className={`site-nav${isMenuOpen ? " open" : ""}`}
            aria-label="Main navigation"
          >
            <a
              href="#services"
              className={activeId === "services" ? "active" : undefined}
              onClick={handleNavLinkClick}
            >
              Services
            </a>
            <a
              href="#contact"
              className={activeId === "contact" ? "active" : undefined}
              onClick={handleNavLinkClick}
            >
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      <main className="curtain-stack">
        <section className="hero curtain-section">
          <div className="hero-bg-video" aria-hidden="true">
            <video autoPlay loop muted playsInline preload="metadata">
              <source src="/assets/vid1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-bg-video-overlay" aria-hidden="true" />

          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <h1>
                  <span className="hero-lead">BOREL CREATIVE SERVICES</span>
                  <span className="hero-tail">
                    Is a collective of creative minds hammering out ideas, one story at a
                    time.
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section curtain-section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Services</p>
            </div>
            <div className="services-layout">
              <div className="services-copy">
                <h2 className="services-headline">
                  Technology that helps local businesses get more customers.
                </h2>
                <p className="services-intro">
                  We help restaurants and small businesses build a stronger online
                  presence, automate everyday tasks, and make it easier for customers to
                  find, contact, and order from them.
                </p>
                <div className="services-note">
                  <p className="services-note-title">Built around your business</p>
                  <p>
                    Every business is different. Instead of forcing you into a
                    one-size-fits-all package, we identify where technology can have the
                    biggest impact and build a solution around your needs.
                  </p>
                  <p className="services-note-highlight">
                    More visibility. More automation. More opportunities to turn visitors
                    into customers.
                  </p>
                </div>
              </div>
              <div className="services-process">
                <p className="services-process-title">What we offer</p>
                <ol className="process-list">
                  <li>
                    <details className="process-item">
                      <summary className="process-step-name">Custom Websites</summary>
                      <div className="process-step-detail">
                        <p className="service-summary">
                          A professional website built specifically for your business.
                        </p>
                        <ul className="service-feature-list">
                          <li>Custom-designed business websites</li>
                          <li>Mobile-friendly design</li>
                          <li>Menu and service pages</li>
                          <li>Online ordering integration</li>
                          <li>Contact forms and calls-to-action</li>
                          <li>Google-friendly structure</li>
                          <li>Hosting and ongoing updates available</li>
                        </ul>
                        <p className="service-price">Starting at $2,500</p>
                      </div>
                    </details>
                  </li>
                  <li>
                    <details className="process-item">
                      <summary className="process-step-name">AI Receptionist</summary>
                      <div className="process-step-detail">
                        <p className="service-summary">
                          Never miss a customer because you were too busy to answer the
                          phone. Our AI receptionist handles common calls and questions
                          automatically, so your staff can focus on serving customers.
                        </p>
                        <ul className="service-feature-list">
                          <li>Answers common questions</li>
                          <li>Provides business information</li>
                          <li>Handles frequently asked questions</li>
                          <li>Helps customers outside busy hours</li>
                          <li>Reduces repetitive phone calls</li>
                          <li>Available around the clock</li>
                        </ul>
                        <p className="service-price">
                          Custom pricing based on business needs
                        </p>
                      </div>
                    </details>
                  </li>
                  <li>
                    <details className="process-item">
                      <summary className="process-step-name">
                        Online Growth &amp; Marketing
                      </summary>
                      <div className="process-step-detail">
                        <p className="service-summary">
                          Turn your online presence into a tool for attracting new
                          customers. We improve how your business presents itself online
                          and create content designed to drive customers through the door.
                        </p>
                        <ul className="service-feature-list">
                          <li>Short-form social media content</li>
                          <li>Promotional content</li>
                          <li>Product and food showcases</li>
                          <li>Social media optimization</li>
                          <li>Local marketing strategies</li>
                          <li>Online presence improvements</li>
                        </ul>
                        <p className="service-price">Custom pricing</p>
                      </div>
                    </details>
                  </li>
                  <li>
                    <details className="process-item">
                      <summary className="process-step-name">Business Automation</summary>
                      <div className="process-step-detail">
                        <p className="service-summary">
                          Spend less time on repetitive work. We use modern software and AI
                          tools to automate processes that would otherwise take hours of
                          manual work.
                        </p>
                        <ul className="service-feature-list">
                          <li>Customer communication workflows</li>
                          <li>Data organization</li>
                          <li>Repetitive administrative tasks</li>
                          <li>AI-powered workflows</li>
                          <li>Custom business automations</li>
                          <li>Integrations between existing tools</li>
                        </ul>
                        <p className="service-price">
                          Custom pricing based on the project
                        </p>
                      </div>
                    </details>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section section-alt curtain-section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Contact</p>
            </div>
            <div className="contact-wrap">
              <div className="contact-copy">
                <h2 className="services-headline">Tell us what your business needs.</h2>
                <p className="services-intro">
                  Share a few details and we will follow up with the fastest way to help
                  customers find you, reach you, and buy from you.
                </p>
                <p className="contact-line">
                  Prefer email?{" "}
                  <a
                    className="contact-link"
                    href="mailto:joshuanguyen@borelcreativeservice.com"
                  >
                    joshuanguyen@borelcreativeservice.com
                  </a>
                </p>
              </div>
              <form className="lead-form" onSubmit={handleContactSubmit}>
                <label>
                  Name
                  <input type="text" name="name" autoComplete="name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" autoComplete="email" required />
                </label>
                <label>
                  Business
                  <input type="text" name="business" autoComplete="organization" />
                </label>
                <label>
                  Interested in
                  <select name="interest" required defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Custom Websites">Custom Websites</option>
                    <option value="AI Receptionist">AI Receptionist</option>
                    <option value="Online Growth & Marketing">
                      Online Growth &amp; Marketing
                    </option>
                    <option value="Business Automation">Business Automation</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="What should we know about your business?"
                    required
                  />
                </label>
                <button className="btn" type="submit">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>&copy; {year} Borel Creative Services</p>
          <div className="footer-links">
            <a
              className="footer-email-link"
              href="mailto:joshuanguyen@borelcreativeservice.com"
            >
              joshuanguyen@borelcreativeservice.com
            </a>
            <a href="#top">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
