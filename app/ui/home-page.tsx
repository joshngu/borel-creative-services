"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type FormEvent, type MouseEvent } from "react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const year = new Date().getFullYear();
  const releaseNavScroll = useRef<(() => void) | null>(null);

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

  const handleNavLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsMenuOpen(false);

    const href = event.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    event.preventDefault();
    releaseNavScroll.current?.();

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main .curtain-section"));
    const index = sections.indexOf(target);
    const later = index >= 0 ? sections.slice(index + 1) : [];
    later.forEach((section) => {
      section.style.position = "relative";
    });

    const previousPosition = target.style.position;
    target.style.position = "relative";
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY);
    target.style.position = previousPosition;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let settled = false;
    let timeoutId = 0;

    const restore = () => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeoutId);
      window.removeEventListener("scroll", restoreWhenSettled);
      window.removeEventListener("scrollend", restore);
      later.forEach((section) => {
        section.style.position = "";
      });
      if (releaseNavScroll.current === restore) {
        releaseNavScroll.current = null;
      }
    };

    const restoreWhenSettled = () => {
      if (Math.abs(window.scrollY - top) < 4) restore();
    };

    releaseNavScroll.current = restore;
    window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });

    if (reduceMotion || Math.abs(window.scrollY - top) < 2) {
      restore();
      return;
    }

    window.addEventListener("scroll", restoreWhenSettled, { passive: true });
    window.addEventListener("scrollend", restore);
    timeoutId = window.setTimeout(restore, 4000);
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
              href="#contact"
              className={activeId === "contact" ? "active" : undefined}
              onClick={handleNavLinkClick}
            >
              Contact
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
                <a
                  className="hero-meeting"
                  href="https://calendar.app.google/BY7Ee6NkvKMk76Bd6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a meeting
                </a>
                <p className="hero-meeting-note">
                  A short look at how customers find you, contact you, and book.
                </p>
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
                <p className="work-job-place">Houston</p>
                <dl className="work-case">
                  <div>
                    <dt>Problem</dt>
                    <dd>
                      Menu, hours, location, and a way to call were not together on one
                      site.
                    </dd>
                  </div>
                  <div>
                    <dt>What we built</dt>
                    <dd>
                      A mobile-friendly website with the menu, food photos, hours,
                      location, a map link, and click-to-call.
                    </dd>
                  </div>
                  <div>
                    <dt>Result</dt>
                    <dd>
                      Customers can find the menu, hours, location, and phone number in
                      one place.
                    </dd>
                  </div>
                </dl>
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
                  <p className="services-note-title">How it works</p>
                  <ol className="how-steps">
                    <li>We look at the business.</li>
                    <li>We find what is being missed.</li>
                    <li>We build the solution.</li>
                  </ol>
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
                          Get found online. For a new or small local business that needs
                          a credible place for customers to land.
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
                          Bring in more customers. For a business that needs a steadier
                          flow of leads, and follow-up after they inquire.
                        </p>
                        <ul className="service-feature-list">
                          <li>Everything in Launch</li>
                          <li>Short-form social media content</li>
                          <li>Promotional content and product showcases</li>
                          <li>Paid ads that send people to your site</li>
                          <li>Local marketing</li>
                          <li>A way to see which inquiries become customers</li>
                          <li>Email and text follow-up</li>
                          <li>A monthly report</li>
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
                          Stop missing calls and leads. For a business that loses
                          customers when the phone is busy or nobody follows up.
                        </p>
                        <ul className="service-feature-list">
                          <li>Everything in Growth</li>
                          <li>An AI receptionist for common questions</li>
                          <li>Answers outside busy hours</li>
                          <li>Appointment booking</li>
                          <li>A simple list of leads so none get lost</li>
                          <li>Follow-up that goes out without extra staff time</li>
                          <li>Your current tools connected, so work is not retyped</li>
                          <li>We keep improving what is working</li>
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
                  Borel works directly with local owners. You get a recommendation for
                  your business, not a software package to figure out alone.
                </p>
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
