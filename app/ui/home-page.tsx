"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ring1Image from "../../assets/borel-products/ring1.png";
import batmanWatchBoxImage from "../../assets/borel-products/batmanwatch w box1.png";
import hinz1Image from "../../assets/borel-products/hinz1.jpg";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeWorkVideo, setActiveWorkVideo] = useState<string | null>(null);
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

  useEffect(() => {
    if (!activeWorkVideo) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveWorkVideo(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeWorkVideo]);

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
              href="#clients"
              className={activeId === "clients" ? "active" : undefined}
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

        <section id="clients" className="section curtain-section">
          <div className="container">
            <div className="work-grid" aria-label="Work placeholders">
              <article
                className="work-rect work-rect-filled work-rect-interactive"
                aria-label="Work placeholder"
                onClick={() => setActiveWorkVideo("/assets/borel-products/ring1.mp4")}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveWorkVideo("/assets/borel-products/ring1.mp4");
                  }
                }}
              >
                <Image
                  src={ring1Image}
                  alt="Ring concept visual"
                  fill
                  className="work-rect-image"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </article>
              <article
                className="work-rect work-rect-filled work-rect-interactive"
                aria-label="Work placeholder"
                onClick={() => setActiveWorkVideo("/assets/borel-products/batmanwatch1.mp4")}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveWorkVideo("/assets/borel-products/batmanwatch1.mp4");
                  }
                }}
              >
                <Image
                  src={batmanWatchBoxImage}
                  alt="Batman watch concept visual"
                  fill
                  className="work-rect-image"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </article>
              <article
                className="work-rect work-rect-filled work-rect-interactive"
                aria-label="Work placeholder"
                onClick={() => setActiveWorkVideo("/assets/borel-products/hinz5.mp4")}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveWorkVideo("/assets/borel-products/hinz5.mp4");
                  }
                }}
              >
                <Image
                  src={hinz1Image}
                  alt="Hinz concept visual"
                  fill
                  className="work-rect-image"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </article>
              <article
                className="work-rect work-rect-interactive"
                aria-label="Work placeholder"
                onClick={() => setActiveWorkVideo("/assets/borel-products/ring1.mp4")}
              />
              <article
                className="work-rect work-rect-interactive"
                aria-label="Work placeholder"
                onClick={() => setActiveWorkVideo("/assets/borel-products/ring1.mp4")}
              />
              <article
                className="work-rect work-rect-interactive"
                aria-label="Work placeholder"
                onClick={() => setActiveWorkVideo("/assets/borel-products/ring1.mp4")}
              />
            </div>
          </div>
        </section>

        <section id="services" className="section section-alt curtain-section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Services</p>
            </div>
            <div className="services-layout">
              <div className="services-copy">
                <p className="services-intro">
                  Ad-first creative systems for video, static, and social formats that
                  keep testing pipelines full. We pair strategy, testing discipline, and
                  execution support so brands can scale with clear momentum.
                </p>
                <ul className="services-bullets">
                  <li>Content Creation</li>
                  <li>AI Marketing Strategies</li>
                  <li>Brand Activation</li>
                  <li>Consulting</li>
                </ul>
              </div>
              <div className="services-process">
                <p className="services-process-title">Process</p>
                <ol className="process-list">
                  <li>
                    <details className="process-item">
                      <summary className="process-step-name">1. Project Introduction</summary>
                      <p className="process-step-detail">
                        We hold a brief 15-minute call to define the campaign&apos;s exact
                        visual style, lighting, and tone. This ensures we lock in the
                        creative direction early and avoid wasting time on the wrong
                        aesthetic.
                      </p>
                    </details>
                  </li>
                  <li>
                    <details className="process-item">
                      <summary className="process-step-name">2. Asset Collection</summary>
                      <p className="process-step-detail">
                        You upload your brand guidelines and clear, high-resolution product
                        photos to a secure Google Drive folder. We use these existing images
                        as the structural foundation for the video, saving you the hassle of
                        a new photoshoot.
                      </p>
                    </details>
                  </li>
                  <li>
                    <details className="process-item">
                      <summary className="process-step-name">3. Storyboarding</summary>
                      <p className="process-step-detail">
                        We map out specific shots, camera movements, and environments in a
                        simple text outline or mood board. You approve this visual plan
                        before we begin production so we are completely aligned on the
                        concept.
                      </p>
                    </details>
                  </li>
                  <li>
                    <details className="process-item">
                      <summary className="process-step-name">4. Generation</summary>
                      <p className="process-step-detail">
                        We use specialized text models to engineer highly technical prompts
                        that guide our image-to-video AI. This process turns your static
                        photos into cinematic clips with realistic motion, lighting, and
                        accurate product textures.
                      </p>
                    </details>
                  </li>
                  <li>
                    <details className="process-item">
                      <summary className="process-step-name">5. Rendering</summary>
                      <p className="process-step-detail">
                        We budget a day or two to process these generated sequences in the
                        cloud into crisp, high-resolution files. This dedicated rendering
                        time ensures every frame is smooth, sharp, and free of visual
                        glitches before editing begins.
                      </p>
                    </details>
                  </li>
                  <li>
                    <details className="process-item">
                      <summary className="process-step-name">6. Post-Production</summary>
                      <p className="process-step-detail">
                        A human editor brings the raw AI footage into a professional suite to
                        cut clips to the beat, apply color grading, and add text and premium
                        sound design. This hands-on polish ensures the final output looks and
                        sounds like a high-end commercial.
                      </p>
                    </details>
                  </li>
                  <li>
                    <details className="process-item">
                      <summary className="process-step-name">7. Delivery</summary>
                      <p className="process-step-detail">
                        We deliver the final, ready-to-post videos straight to your Google
                        Drive, including one round of minor revisions for things like music,
                        text, or color tweaks. Major changes to environments or camera angles
                        at this stage would require revisiting the storyboard phase.
                      </p>
                    </details>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

      </main>

      {activeWorkVideo ? (
        <div
          className="work-video-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Work video player"
          onClick={() => setActiveWorkVideo(null)}
        >
          <div className="work-video-shell" onClick={(event) => event.stopPropagation()}>
            <video src={activeWorkVideo} autoPlay loop muted playsInline />
          </div>
        </div>
      ) : null}

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>&copy; {year} Borel Creative Services</p>
          <div className="footer-links">
            <a href="#top">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
