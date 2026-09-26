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
              href="#work"
              className={activeId === "work" ? "active" : undefined}
              onClick={handleNavLinkClick}
            >
              Work
            </a>
            <a
              href="#services"
              className={activeId === "services" ? "active" : undefined}
              onClick={handleNavLinkClick}
            >
              Services
            </a>
            <a
              href="https://calendar.app.google/BY7Ee6NkvKMk76Bd6"
              target="_blank"
              rel="noreferrer"
              onClick={handleNavLinkClick}
            >
              Book a meeting
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
                    Local businesses get more leads, more bookings, and faster replies.
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="section curtain-section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Work</p>
            </div>
            <article className="work-job">
              <a
                className="work-job-media"
                href="https://www.phoduy.net/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/assets/phoduy-storefront.jpg"
                  alt="Phở Duy Vietnamese noodle house in Houston"
                  width={1280}
                  height={858}
                />
              </a>
              <div>
                <h2 className="services-headline">Phở Duy</h2>
                <p className="services-intro">
                  A website for a Vietnamese noodle house in Houston, with the menu,
                  hours, location, and a way to call.
                </p>
                <a
                  className="work-job-link"
                  href="https://www.phoduy.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the site
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="services" className="section section-alt curtain-section">
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
                  Clients buy an outcome: more leads, more booked appointments, faster
                  replies, and less work for staff. We work with local businesses,
                  including restaurants, and package websites, marketing, and automation
                  into three tiers.
                </p>
                <div className="services-note">
                  <p className="services-note-title">Three ways to start</p>
                  <p>
                    Launch builds the online presence. Growth brings in leads and follows
                    up. Scale answers and books those leads automatically.
                  </p>
                  <p className="services-note-highlight">
                    More leads. More booked appointments. Faster replies.
                  </p>
                </div>
              </div>
              <div className="services-process">
                <p className="services-process-title">Packages</p>
                <ol className="process-list">
                  <li>
                    <details className="process-item">
                      <summary className="process-step-name">Launch</summary>
                      <div className="process-step-detail">
                        <p className="service-summary">
                          For new or small local businesses. Establish a credible online
                          presence and capture leads.
                        </p>
                        <ul className="service-feature-list">
                          <li>Conversion-focused website</li>
                          <li>Mobile-friendly design</li>
                          <li>Service pages</li>
                          <li>Contact and quote forms</li>
                          <li>Online ordering or booking</li>
                          <li>Google-friendly structure</li>
                          <li>Google Business Profile setup or optimization</li>
                          <li>Basic analytics</li>
                          <li>Hosting and ongoing updates available</li>
                        </ul>
                        <p className="service-price">Starting at $2,500</p>
                      </div>
                    </details>
                  </li>
                  <li>
                    <details className="process-item">
                      <summary className="process-step-name">Growth</summary>
                      <div className="process-step-detail">
                        <p className="service-summary">
                          For businesses that need a predictable flow of leads. Generate
                          and follow up with more qualified prospects.
                        </p>
                        <ul className="service-feature-list">
                          <li>Everything in Launch</li>
                          <li>Short-form social media content</li>
                          <li>Promotional content and product showcases</li>
                          <li>Paid-ad campaign setup and management</li>
                          <li>Local marketing strategies</li>
                          <li>Lead tracking</li>
                          <li>Automated email and text follow-up</li>
                          <li>Monthly reporting</li>
                        </ul>
                        <p className="service-price">Custom pricing</p>
                      </div>
                    </details>
                  </li>
                  <li>
                    <details className="process-item">
                      <summary className="process-step-name">Scale</summary>
                      <div className="process-step-detail">
                        <p className="service-summary">
                          For businesses losing leads because replies are slow or manual.
                          Turn leads into booked calls or appointments automatically.
                        </p>
                        <ul className="service-feature-list">
                          <li>Everything in Growth</li>
                          <li>AI receptionist for calls and common questions</li>
                          <li>Help for customers outside busy hours</li>
                          <li>Appointment booking</li>
                          <li>CRM pipeline setup</li>
                          <li>Customer communication workflows</li>
                          <li>AI-powered workflows and tool integrations</li>
                          <li>Ongoing optimization</li>
                        </ul>
                        <p className="service-price">
                          Custom pricing based on business needs
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
                      Select a package
                    </option>
                    <option value="Launch">Launch</option>
                    <option value="Growth">Growth</option>
                    <option value="Scale">Scale</option>
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
