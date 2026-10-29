'use client';

import { useEffect, useState } from 'react';

const EXPERIENCE_ITEMS = [
  {
    id: 'james-group',
    category: 'it',
    badgeClass: 'badge-it',
    badgeLabel: 'IT, AI & Nationwide GEO Consulting',
    role: 'Owner / Partner',
    company: 'The James Group, LLC — Columbus, OH (Nationwide)',
    date: 'June 2004 – Present',
    summary:
      'Responsible for the ownership and management of a Professional Information Technology & AI Consulting Practice focused on Nationwide GEO (Generative Engine Optimization) implementations, Agentic AI workflows, Project Management, Enterprise Architecture, Oracle technologies, and software development.',
    bullets: [
      'Lead extensive nationwide GEO (Generative Engine Optimization) implementations for a wide range of companies, optimizing brand visibility and authority across modern AI search and generative engines.',
      'Direct practice core competencies in AI agentic development, J2EE, Microsoft .NET, and HTMLDB software development.',
      'Deliver strategic IT and AI solutions that bring measurable added value and efficiencies to client business processes, with a strong emphasis on customer satisfaction.',
      'Lead project management methodology, RFI/RFP/RFQ/RFS evaluation, contract negotiations, and systems integration initiatives.',
    ],
  },
  {
    id: 'ko-builders',
    category: 'construction',
    badgeClass: 'badge-construction',
    badgeLabel: 'High-Performance Construction',
    role: 'Principal / Senior Project Executive & High-Performance Advisor',
    company: 'KO Builders — Delaware County / Central OH',
    date: '2018 – Present',
    summary:
      'Senior Construction Executive and High-Performance Building Specialist directing ICF, advanced concrete assemblies, and high-efficiency building envelopes across major residential and light commercial builds.',
    bullets: [
      'Direct end-to-end residential and light commercial concrete construction projects, specializing in ICF assemblies, specialized polymer-encased wall systems, and high-performance envelopes.',
      'Serve as a Preferred Advisory Vendor on C-PACE-financed projects, collaborating directly with Nuveen Green Capital to achieve project financing approval based on superior building envelope specifications and long-term energy modeling.',
      'Engineer high-durability, energy-efficient building assemblies—exceeding standard code baselines in R-value performance, airtightness, thermal bridging mitigation, and disaster resilience.',
      'Oversee site logistics, concrete mix design specification (including specialized admixtures), alignment bracing, and multi-lift concrete pour execution.',
      'Advise developers, architects, and custom homebuilders on optimizing structural footprints, integrating earth-sheltered assemblies, and capturing clean energy financing incentives.',
    ],
  },
  {
    id: 'bestwall-supply',
    category: 'construction',
    badgeClass: 'badge-construction',
    badgeLabel: 'National Distribution & Technical Sales',
    role: 'National Supply & Technical Sales Lead – Nuform Products',
    company: 'Bestwall Supply',
    date: '2018 – Present',
    summary:
      'Managing high-volume national distribution, technical takeoffs, and contractor advisory for Nuform Building Technologies systems.',
    bullets: [
      'Lead national distribution and contractor support for Nuform Building Technologies (CONFORM®, RELINE®) products across residential and light commercial sectors.',
      'Provide technical takeoffs, architectural detailing, and on-site assembly guidance to ensure proper installation, rebar placement, and pour-rate management.',
      'Develop national supply channels, establishing freight routes, job-site delivery schedules, and high-volume purchasing agreements for builders transitioning to high-efficiency concrete systems.',
      'Train field crews and sub-trades on fast-track wall erection and envelope integration to maximize job-site efficiency and eliminate thermal defects.',
    ],
  },
  {
    id: 'oracle',
    category: 'it',
    badgeClass: 'badge-it',
    badgeLabel: 'Enterprise Technology',
    role: 'Senior Sales Consultant / Senior Technical Consultant',
    company: 'Oracle Corporation — Columbus, OH',
    date: 'August 2000 – July 2004',
    summary:
      'Responsible for presenting and demonstrating the features and functionality of Oracle products to current and prospective customers, performing installations across operating systems, and reviewing technical architecture plans.',
    bullets: [
      "Helped tune and upgrade the State of Ohio's Oracle database supporting the State's web-based database applications.",
      'Developed a management infrastructure for the Oracle environment of the Ohio Department of Jobs and Family Services (ODJFS).',
      "Consulted with the Columbus Public Schools' IT Department to implement a fully web-enabled architecture delivering applications, reports, and ad hoc queries using Oracle Portal.",
      'Implemented an Oracle9i Real Application Cluster (RAC) system to demonstrate high availability and scalability functionality for clients.',
      'Provided guidance for evaluating and selecting an Ohio Works Program enabling ODJFS to meet business needs and federally mandated deadlines.',
      "Developed internal applications for Oracle Corporation to improve office and employee productivity using Oracle's HTMLDB development environment, and created HTMLDB pilot and proof-of-concept web applications for customers.",
    ],
  },
  {
    id: 'ohio-auditor',
    category: 'it',
    badgeClass: 'badge-it',
    badgeLabel: 'Public Sector Executive Leadership',
    role: 'Chief Information Officer (CIO)',
    company: 'Ohio Auditor of State (State of Ohio Auditor) — Columbus, OH',
    date: 'June 1992 – July 2000',
    summary:
      'Directed day-to-day operations and strategic vision for the Information Technology Division with a $6M budget, 6 managers, and 43 staff members.',
    bullets: [
      'Developed and maintained the strategic direction for the Information Technology Division, reporting to the Board of Managers and Information Technology User Group.',
      'Headed an agency-wide 18-month project as Project Manager to evaluate, select, and implement an ERP solution culminating in the Oracle e-Business Suite.',
      'Designed and implemented a warrant reconciliation system tracking all State of Ohio payments (State Payroll, Income Tax Returns, Welfare payments, and Vendor payments)—reconciling 12 million warrants annually and countless EFT payments, running in production for 11+ years with minimal maintenance.',
      'Implemented an Internet JSP-based application allowing public/entity access to state financial audit reports using Oracle technology.',
      'Completed Y2K compliance re-writes of S/390 legacy warrant-writing and core business systems alongside technical infrastructure and mainframe upgrades.',
      "Designed and implemented the Auditor's public website (Microsoft IIS/NT) and the internal AOSLink website for agency policies, forms, training materials, and budgets.",
      'Acquired and implemented the CoreData RemoteWorx backup solution and dial-up/Internet network access (Novell NetWare 5 & 100mb switches) for 650 remote field auditors.',
      'Implemented a centralized call center, field technician program, hardware self-maintainer program, and Lotus Notes R5.0 on S/390 for IT customer support.',
      'Designed and implemented a self-service employee payroll and project reporting system using DB2 database technology, as well as a Human Resources personnel records imaging system using Gupta relational database and Novell NetWare.',
    ],
  },
  {
    id: 'ups',
    category: 'it',
    badgeClass: 'badge-it',
    badgeLabel: 'Operations & Early Technical Leadership',
    role: 'Supervisor, Next Day Air Distribution / Customer Service',
    company: 'United Parcel Service (UPS) — Maumee, OH',
    date: 'September 1986 – June 1992',
    summary:
      'Managed 8 delivery/pickup drivers and 14 maintenance staff members, developed and managed the departmental budget, and scheduled overnight air pickup routes.',
    bullets: [
      'Tested and implemented the first phase of the digital clipboard used by delivery drivers for the Toledo area operation.',
      'Developed and used a PC-based application (designed in dBase III) for tracking and scheduling pickup routes and monitoring pickup volumes to report profitability and growth to upper management.',
    ],
  },
];

export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sectorFilter, setSectorFilter] = useState('all');

  const filteredExperience = EXPERIENCE_ITEMS.filter(
    (item) => sectorFilter === 'all' || item.category === sectorFilter
  );

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.05 }
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
    const timer = setTimeout(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'));
    }, 800);
    return () => {
      clearTimeout(timer);
      io.disconnect();
    };
  }, [sectorFilter]);

  return (
    <>
      {/* Top Navigation */}
      <header className="site-header" id="top">
        <div className="container nav-container">
          <a href="#top" className="brand">
            <span className="brand-monogram">WLM</span>
            <div className="brand-text">
              <span className="brand-name">William L. Myers</span>
              <span className="brand-sub">
                Executive Leadership &bull; IT &bull; Construction &bull; Philanthropy
              </span>
            </div>
          </a>
          <button
            className="mobile-menu-btn"
            aria-label="Toggle Navigation"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`site-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="#pillars" onClick={() => setMobileMenuOpen(false)}>
              Core Domains
            </a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)}>
              Experience
            </a>
            <a href="#highlights" onClick={() => setMobileMenuOpen(false)}>
              Key Projects
            </a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)}>
              Skills &amp; Credentials
            </a>
            <a href="#philanthropy" onClick={() => setMobileMenuOpen(false)}>
              Philanthropy
            </a>
            <a href="#contact" className="nav-cta" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* 1. Intro / Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow-badge">
              <span className="dot"></span>
              <span>Over 30 Years of Executive Leadership &amp; Innovation</span>
            </div>
            <h1>William L. Myers</h1>
            <p className="hero-subtitle">
              Owner, <strong>The James Group, LLC</strong> &bull; Principal &amp; Senior Project
              Executive, <strong>KO Builders</strong> &bull; National Supply &amp; Technical Sales
              Lead, <strong>Bestwall Supply</strong> &bull; President of the Board,{' '}
              <strong>Fort Care</strong>
            </p>
            <p className="hero-lead">
              A seasoned executive, serial builder, and technology strategist bridging enterprise IT
              architecture, AI &amp; agentic development, nationwide GEO (Generative Engine
              Optimization) implementations, high-performance ICF &amp; concrete construction,
              C-PACE clean-energy qualification, and large-scale military &amp; community
              philanthropy. Empathy is at the core of everything Bill does.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="#experience" className="btn btn-secondary">
                Explore Experience
              </a>
              <a
                href="https://www.linkedin.com/in/bill-myers-b8b70b/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                  />
                </svg>
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/williamlmyers"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                  />
                </svg>
                GitHub
              </a>
            </div>
            <div className="hero-quick-contact">
              <span>
                <strong>Location:</strong> Sunbury, OH (Columbus Metropolitan Area)
              </span>
              <span className="sep">&bull;</span>
              <a href="tel:6144992175">614-499-2175</a>
              <span className="sep">&bull;</span>
              <a href="mailto:william.myers@jamesgrp.com">william.myers@jamesgrp.com</a>
              <span className="sep">&bull;</span>
              <a href="mailto:bill@ko.builders">bill@ko.builders</a>
            </div>
          </div>

          <div className="hero-card-panel">
            <div className="stat-card">
              <span className="stat-number">30+</span>
              <span className="stat-label">
                Years in Information Technology, Executive Leadership &amp; Business Management
              </span>
            </div>
            <div className="stat-card">
              <span className="stat-number">22+</span>
              <span className="stat-label">
                Years Leading The James Group, LLC as Owner &amp; Partner (2004–Present)
              </span>
            </div>
            <div className="stat-card">
              <span className="stat-number">C-PACE</span>
              <span className="stat-label">
                Preferred Advisory Vendor Partnering with Nuveen Green Capital
              </span>
            </div>
            <div className="stat-card highlight">
              <span className="stat-number">50,000+</span>
              <span className="stat-label">
                Military Families Provided Meals Last Year via Fort Care &amp; Power Giving
                Foundation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section className="section" id="about">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="section-tag">Biography &amp; Leadership Philosophy</span>
            <h2>About William L. Myers</h2>
          </div>
          <div className="about-grid">
            <div className="about-main" data-reveal>
              <p className="lead-paragraph">
                Bill is a seasoned professional offering over thirty years of experience in
                Information Technology with a unique combination of experiences and talents. A
                proven leader who capitalizes on team dynamics, strong partnerships, and creative
                thinking to deliver quality results, Bill continually analyzes strategies and
                measures performance for long-term business improvement and success.
              </p>
              <p>
                As a broad-minded quick study with extensive involvement in many domains, Bill has
                always found it fulfilling to help others and to lend his talents to furthering
                other peoples&apos; visions and dreams.{' '}
                <strong>Empathy is at the core of everything Bill does.</strong>
              </p>
              <p>
                Based on strong technological skills, business acumen, project management, and
                leadership, his career progression has been characterized by senior leadership roles
                spanning mainframes, personal computers, networks, applications, relational
                databases, the Internet, customer support, and high-performance building
                construction. Bill is a strong family man with two children, and he has been with
                his wife for over 35 years.
              </p>
              <p>
                A <strong>Serial &ldquo;Entrepre-doer&rdquo; and Builder</strong>, Bill has been
                involved in many start-ups and businesses. From Information Technology to
                Construction to Business Management to Philanthropy, Bill is always looking for that
                next &ldquo;Shark Tank&rdquo; idea and opportunity. He has worked in a large array
                of endeavors and projects, many of them in the multi-million-dollar range with a
                wide variety of government and private organizations.
              </p>
              <p>
                Deeply committed to giving back, Bill serves as <strong>President of the Board</strong>{' '}
                at <a href="https://fortcare.org" target="_blank" rel="noopener noreferrer"><strong>Fort Care (fortcare.org)</strong></a>,
                working year-round to feed military families through daily on-base Honor Package
                deliveries and 4 to 6 large-scale grocery giveaways per year—providing meals to{' '}
                <strong>50,000 military families</strong> last year alone. He is also the founder of
                the <strong>Power Giving Foundation</strong> (part of The Columbus Foundation).
              </p>
            </div>
            <div className="about-sidebar" data-reveal>
              <div className="info-box">
                <h3>Executive Snapshot</h3>
                <ul className="snapshot-list">
                  <li>
                    <span className="label">Full Name</span>
                    <span className="value">William L. Myers (Bill Myers)</span>
                  </li>
                  <li>
                    <span className="label">Address</span>
                    <span className="value">
                      13846 Ulery Rd
                      <br />
                      Sunbury, OH 43074
                    </span>
                  </li>
                  <li>
                    <span className="label">Phone</span>
                    <span className="value">
                      <a href="tel:6144992175">614-499-2175</a>
                    </span>
                  </li>
                  <li>
                    <span className="label">IT &amp; Consulting Email</span>
                    <span className="value">
                      <a href="mailto:william.myers@jamesgrp.com">william.myers@jamesgrp.com</a>
                    </span>
                  </li>
                  <li>
                    <span className="label">Construction Email</span>
                    <span className="value">
                      <a href="mailto:bill@ko.builders">bill@ko.builders</a>
                    </span>
                  </li>
                  <li>
                    <span className="label">Philanthropy Leadership</span>
                    <span className="value">
                      President of the Board,{' '}
                      <a href="https://fortcare.org" target="_blank" rel="noopener noreferrer">
                        Fort Care
                      </a>
                      <br />
                      Founder, Power Giving Foundation
                    </span>
                  </li>
                  <li>
                    <span className="label">Alma Mater</span>
                    <span className="value">Bowling Green State University (B.S., 1991)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Domains / Pillars */}
      <section className="section section-alt" id="pillars">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="section-tag">Multi-Domain Expertise</span>
            <h2>Four Pillars of Leadership</h2>
            <p className="section-desc">
              Combining enterprise technology architecture, high-efficiency concrete construction,
              national supply chain leadership, and community impact.
            </p>
          </div>
          <div className="pillars-grid" data-reveal>
            <article className="pillar-card">
              <div className="pillar-icon">01</div>
              <h3>Enterprise IT, Agentic AI &amp; Nationwide GEO</h3>
              <p>
                Over three decades directing enterprise IT operations and database systems, combined
                with extensive nationwide GEO (Generative Engine Optimization) implementations under
                The James Group and agentic AI development across Antigravity, Claude Code, Gemini,
                ChatGPT, and Codex.
              </p>
            </article>
            <article className="pillar-card">
              <div className="pillar-icon">02</div>
              <h3>High-Performance Building &amp; ICF Construction</h3>
              <p>
                Senior Construction Executive directing Insulated Concrete Forms (ICF), Nuform
                polymer-encased wall systems (CONFORM&reg;, RELINE&reg;, RENU&reg;), cast-in-place
                concrete assemblies, and disaster-resilient building envelopes.
              </p>
            </article>
            <article className="pillar-card">
              <div className="pillar-icon">03</div>
              <h3>C-PACE Clean-Energy Financing Advisory</h3>
              <p>
                Recognized authority and Preferred Advisory Vendor for projects seeking Commercial
                Property Assessed Clean Energy (C-PACE) financing, partnering with Nuveen Green
                Capital to qualify structures that outperform baseline energy standards.
              </p>
            </article>
            <article className="pillar-card">
              <div className="pillar-icon">04</div>
              <h3>Military &amp; Community Philanthropy</h3>
              <p>
                President of the Board at Fort Care (feeding 50,000+ military families last year via
                daily on-base Honor Packages and grocery giveaways) and Founder of the Power Giving
                Foundation at The Columbus Foundation.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 3. Work Experience */}
      <section className="section" id="experience">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="section-tag">Career Track Record</span>
            <h2>Professional Experience</h2>
            <p className="section-desc">
              A comprehensive timeline of executive, technical, construction, and operational
              leadership.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="experience-controls" data-reveal>
            <div className="filter-tabs" role="tablist" aria-label="Filter Experience by Sector">
              <button
                type="button"
                className={`tab-btn ${sectorFilter === 'all' ? 'active' : ''}`}
                onClick={() => setSectorFilter('all')}
                role="tab"
                aria-selected={sectorFilter === 'all'}
              >
                All Experience ({EXPERIENCE_ITEMS.length})
              </button>
              <button
                type="button"
                className={`tab-btn ${sectorFilter === 'it' ? 'active' : ''}`}
                onClick={() => setSectorFilter('it')}
                role="tab"
                aria-selected={sectorFilter === 'it'}
              >
                IT &amp; Executive Leadership
              </button>
              <button
                type="button"
                className={`tab-btn ${sectorFilter === 'construction' ? 'active' : ''}`}
                onClick={() => setSectorFilter('construction')}
                role="tab"
                aria-selected={sectorFilter === 'construction'}
              >
                Construction &amp; High-Performance Building
              </button>
            </div>
          </div>

          <div className="timeline">
            {filteredExperience.map((item) => (
              <article key={item.id} className="timeline-item" data-reveal>
                <div className="timeline-marker"></div>
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div>
                      <span className={`role-badge ${item.badgeClass}`}>{item.badgeLabel}</span>
                      <h3>{item.role}</h3>
                      <h4>{item.company}</h4>
                    </div>
                    <span className="timeline-date">{item.date}</span>
                  </div>
                  <p className="timeline-summary">{item.summary}</p>
                  <ul className="timeline-bullets">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Key Projects & Highlights (with Upgraded Scale Callouts) */}
      <section className="section section-alt" id="highlights">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="section-tag">Selected Accomplishments</span>
            <h2>Signature Projects &amp; Highlights</h2>
            <p className="section-desc">
              Major initiatives demonstrated across enterprise technology, high-performance building
              envelopes, and state-level systems.
            </p>
          </div>

          {/* Upgraded Scale Benchmarks from our Next.js enhancement */}
          <div className="scale-benchmarks" data-reveal>
            <div className="benchmark-card">
              <span className="benchmark-kicker">
                State of Ohio Warrant Reconciliation System &bull; 11+ Years in Production
              </span>
              <div className="benchmark-figure">12M+ Annual Warrants</div>
              <p className="benchmark-desc">
                Designed and implemented the relational database system tracking and reconciling 12
                million warrants annually plus EFT payments across State Payroll, Income Tax
                Returns, Welfare, and Vendor payments.
              </p>
            </div>

            <div className="benchmark-card">
              <span className="benchmark-kicker">
                Nuveen Green Capital Clean-Energy Underwriting &bull; KO Builders &amp; Bestwall
              </span>
              <div className="benchmark-figure">C-PACE Preferred Advisory</div>
              <p className="benchmark-desc">
                Engineered continuous-insulation ICF and Nuform polymer wall assemblies qualifying
                commercial and multi-family builds by outperforming ASHRAE 90.1 energy baselines.
              </p>
            </div>

            <div className="benchmark-card">
              <span className="benchmark-kicker">
                Fort Care (fortcare.org) &bull; President of the Board
              </span>
              <div className="benchmark-figure">50,000 Families Fed</div>
              <p className="benchmark-desc">
                Year-round support feeding military families through daily on-base Honor Package
                deliveries and 4–6 major grocery giveaways annually—providing meals to 50,000
                families last year.
              </p>
            </div>
          </div>

          <div className="projects-grid" data-reveal>
            <article className="project-card">
              <span className="project-category">AI &amp; Digital Visibility &bull; The James Group, LLC</span>
              <h3>Nationwide GEO (Generative Engine Optimization) Implementations</h3>
              <p>
                Leading extensive GEO strategy and technical implementations for companies
                nationwide under The James Group, positioning organizations for high-authority
                discovery across AI answer engines, LLMs, and generative search platforms.
              </p>
            </article>

            <article className="project-card">
              <span className="project-category">Sustainable Construction &amp; Finance</span>
              <h3>C-PACE Project Qualification &amp; Nuveen Green Capital Advisory</h3>
              <p>
                Engineered advanced wall and building envelope assemblies qualifying multiple
                commercial and multi-family builds for Nuveen Green Capital clean-energy financing
                structures, drastically lowering HVAC loads through continuous insulation and
                high-mass concrete core dampening.
              </p>
            </article>

            <article className="project-card">
              <span className="project-category">National Supply Chain &amp; Construction</span>
              <h3>Nuform Building Technologies National Distribution</h3>
              <p>
                Established national supply channels, freight routes, job-site delivery schedules,
                and technical takeoff support for CONFORM&reg;, RELINE&reg;, and RENU&reg;
                polymer-encased formwork systems across residential and light commercial sectors.
              </p>
            </article>

            <article className="project-card">
              <span className="project-category">State Government Financial Systems</span>
              <h3>State of Ohio 12M+ Annual Warrant Reconciliation System</h3>
              <p>
                Designed and implemented a relational database system tracking and reconciling 12
                million warrants annually plus EFT payments across State Payroll, Income Tax
                Returns, Welfare, and Vendor payments with 11+ years of low-maintenance production
                reliability.
              </p>
            </article>

            <article className="project-card">
              <span className="project-category">Enterprise ERP Transformation</span>
              <h3>18-Month Agency-Wide Oracle e-Business Suite ERP</h3>
              <p>
                Served as Chief Information Officer and Project Manager leading an 18-month
                evaluation, selection, and implementation of the Oracle e-Business Suite for the
                Ohio Auditor of State.
              </p>
            </article>

            <article className="project-card">
              <span className="project-category">Public Sector &amp; Education Portals</span>
              <h3>State &amp; School District Web Architectures</h3>
              <p>
                Consulted with Columbus Public Schools on a fully web-enabled Oracle Portal
                architecture, tuned State of Ohio web database applications, and built the Ohio
                Department of Jobs and Family Services Oracle management infrastructure.
              </p>
            </article>

            <article className="project-card">
              <span className="project-category">Military Philanthropy &amp; Board Leadership</span>
              <h3>President of the Board &mdash; Fort Care (fortcare.org)</h3>
              <p>
                Lead year-round operations and partnerships to feed military families on an ongoing
                basis, delivering Honor Packages to families on base daily and organizing 4 to 6
                major grocery giveaways per year—providing meals to 50,000 families last year.
              </p>
            </article>

            <article className="project-card">
              <span className="project-category">Philanthropy &amp; Community Impact</span>
              <h3>Founder of the Power Giving Foundation</h3>
              <p>
                Established the Power Giving Foundation within The Columbus Foundation, partnering
                with non-profit organizations and education providers to raise funding through
                relationships, fundraising activities, and campaigns.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Skills, Education & Credentials */}
      <section className="section" id="skills">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="section-tag">Capabilities &amp; Qualifications</span>
            <h2>Skills, Education &amp; Credentials</h2>
          </div>

          {/* Education & Credentials Row */}
          <div className="edu-cred-grid" data-reveal>
            <div className="edu-card">
              <div className="card-kicker">Education</div>
              <h3>Bowling Green State University</h3>
              <p className="edu-location">Bowling Green, OH &bull; 1984 &ndash; 1991</p>
              <p className="edu-degree">
                <strong>Bachelor of Science (B.S.)</strong>
              </p>
              <p className="edu-major">
                Management Information Systems, General / Business Administration
              </p>
            </div>

            <div className="edu-card">
              <div className="card-kicker">Certifications &amp; Industry Credentials</div>
              <h3>AI, Construction, Safety &amp; Advisory Credentials</h3>
              <ul className="cred-list">
                <li>
                  <strong>Artificial Intelligence (AI) Generalist</strong> &mdash; Multi-Platform AI
                  &amp; Agentic Development (Gemini, ChatGPT, Codex, Claude, Claude Code,
                  Antigravity)
                </li>
                <li>
                  <strong>Preferred Advisory Vendor</strong> &mdash; C-PACE Financing (Partnering
                  with Nuveen Green Capital)
                </li>
                <li>
                  <strong>OSHA Construction Safety</strong>
                </li>
                <li>
                  <strong>ICF &amp; Polymer Wall System Installer</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Skills Matrix */}
          <div className="skills-matrix" data-reveal>
            <div className="skill-group">
              <h3>Executive &amp; IT Leadership</h3>
              <div className="tag-cloud">
                <span>Nationwide GEO (Generative Engine Optimization)</span>
                <span>Enterprise Architecture</span>
                <span>Business Intelligence</span>
                <span>Software Development</span>
                <span>Information Systems Management</span>
                <span>Project Management Methodology</span>
                <span>Administrative Management</span>
                <span>Recruit, Build &amp; Motivate Teams</span>
                <span>Budget Development ($6M+ IT Division)</span>
                <span>HR Development &amp; Management</span>
                <span>RFI, RFP, RFQ &amp; RFS Writing/Evaluation</span>
                <span>Contract Negotiations</span>
                <span>Systems Integration</span>
              </div>
            </div>

            <div className="skill-group">
              <h3>Construction, ICF &amp; High-Performance Systems</h3>
              <div className="tag-cloud">
                <span>Insulated Concrete Forms (ICF)</span>
                <span>Nuform CONFORM&reg;, RELINE&reg;, RENU&reg;</span>
                <span>Cast-in-Place Concrete</span>
                <span>Rebar Placement &amp; Pour Consolidation</span>
                <span>C-PACE Energy Underwriting Alignment</span>
                <span>Nuveen Green Capital Approvals</span>
                <span>Envelope Energy Modeling Optimization</span>
                <span>Continuous Insulation (ci) &amp; Thermal Mass</span>
                <span>ASHRAE 90.1 Envelope Compliance</span>
                <span>ACI Concrete Specifications</span>
                <span>Structural Footprint Engineering</span>
                <span>Disaster-Resilient Construction</span>
                <span>Technical Takeoffs &amp; Cost Estimating</span>
                <span>CPM Scheduling &amp; Supply Chain Logistics</span>
                <span>Laser Screeds &amp; Continuous Boom Pumps</span>
                <span>Waterproofing &amp; Specialized Admixtures</span>
              </div>
            </div>

            <div className="skill-group">
              <h3>Technical Systems, Databases, Languages &amp; AI Platforms</h3>
              <div className="tag-cloud">
                <span>Artificial Intelligence (AI) Generalist</span>
                <span>GEO Implementations &amp; Strategy</span>
                <span>AI Agentic Development</span>
                <span>Google Antigravity</span>
                <span>Claude &amp; Claude Code</span>
                <span>Google Gemini</span>
                <span>ChatGPT &amp; OpenAI Codex</span>
                <span>Multi-Platform AI Orchestration</span>
                <span>Oracle Databases &amp; Oracle9i RAC</span>
                <span>Oracle PL/SQL, HTMLDB, WebDB, Portal, iDS</span>
                <span>Microsoft SQL Server</span>
                <span>IBM DB2</span>
                <span>J2EE / Java / JavaScript</span>
                <span>Microsoft .NET</span>
                <span>C / C++</span>
                <span>HTML</span>
                <span>COBOL</span>
                <span>Relational Database Model/Design (DBA)</span>
                <span>Network System Engineering (LAN/WAN)</span>
                <span>Directory Services / LDAP</span>
                <span>Windows, Linux, UNIX, OS/390, NetWare</span>
                <span>Apache, WebSphere, OC4J, IIS</span>
                <span>Crystal Reports, JBuilder, JDeveloper</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philanthropy Section */}
      <section className="section section-philanthropy" id="philanthropy">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="section-tag" style={{ color: '#fcd34d' }}>
              Community &amp; Giving Back
            </span>
            <h2 style={{ color: '#ffffff' }}>Philanthropy &amp; Board Leadership</h2>
            <p className="section-desc" style={{ color: '#cbd5e1' }}>
              Serving military families across the nation and supporting Central Ohio nonprofits and
              education providers.
            </p>
          </div>

          <div className="philanthropy-grid" data-reveal>
            <div className="philanthropy-box">
              <div className="philanthropy-content">
                <span className="section-tag">President of the Board &bull; Military Families</span>
                <h2>Fort Care</h2>
                <p>
                  As <strong>President of the Board</strong> at <strong>Fort Care</strong>, Bill
                  leads year-round initiatives to feed military families on an ongoing basis. Fort
                  Care provides <strong>daily Honor Package deliveries</strong> directly to families
                  on base and conducts <strong>4 to 6 large-scale grocery giveaways per year</strong>{' '}
                  feeding thousands of families at each event—providing meals to{' '}
                  <strong>50,000 military families last year</strong>.
                </p>
                <div className="philanthropy-links">
                  <a
                    href="https://fortcare.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Visit FortCare.org
                  </a>
                </div>
              </div>
            </div>

            <div className="philanthropy-box">
              <div className="philanthropy-content">
                <span className="section-tag">Founder &bull; The Columbus Foundation</span>
                <h2>The Power Giving Foundation</h2>
                <p>
                  Bill is the founder of the <strong>Power Giving Foundation</strong>, which is a
                  part of <strong>The Columbus Foundation</strong>. Throughout his career, he has
                  worked closely with numerous non-profit organizations and education providers to
                  raise funding through his network of relationships, fundraising activities, and
                  community campaigns.
                </p>
                <div className="philanthropy-links">
                  <a
                    href="https://columbusfoundation.org/Search-Results?searchType=global&searchTerm=power%20giving&faceted=true&grouped=false&take=10&skip=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Power Giving Foundation
                  </a>
                  <a
                    href="https://columbusfoundation.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light"
                  >
                    Visit ColumbusFoundation.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section className="section" id="contact">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="section-tag">Connect</span>
            <h2>Contact William L. Myers</h2>
            <p className="section-desc">
              Reach out directly regarding IT consulting, high-performance ICF &amp; concrete
              building projects, C-PACE advisory, or philanthropic initiatives.
            </p>
          </div>

          <div className="contact-cards" data-reveal>
            <div className="contact-card">
              <div className="contact-label">Email (IT &amp; The James Group)</div>
              <a href="mailto:william.myers@jamesgrp.com" className="contact-value">
                william.myers@jamesgrp.com
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-label">Email (Construction &amp; KO Builders)</div>
              <a href="mailto:bill@ko.builders" className="contact-value">
                bill@ko.builders
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-label">Phone</div>
              <a href="tel:6144992175" className="contact-value">
                614-499-2175
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-label">Mailing Address</div>
              <div className="contact-value">
                13846 Ulery Rd
                <br />
                Sunbury, OH 43074
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-label">LinkedIn</div>
              <a
                href="https://www.linkedin.com/in/bill-myers-b8b70b/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-value"
              >
                linkedin.com/in/bill-myers-b8b70b
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-label">GitHub</div>
              <a
                href="https://github.com/williamlmyers"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-value"
              >
                github.com/williamlmyers
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <strong>William L. Myers</strong> &mdash; Owner, The James Group, LLC &bull; Principal,
            KO Builders &bull; Founder, Power Giving Foundation
          </div>
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/bill-myers-b8b70b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/williamlmyers"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="#top">Back to Top &uarr;</a>
          </div>
        </div>
      </footer>
    </>
  );
}
