"use client";

import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import Image from "next/image";
import { useState } from "react";
import {
  certifications,
  companyLogos,
  contactCards,
  education,
  experiences,
  heroStats,
  impactMetrics,
  leadershipPillars,
  profile,
  projects,
  recognition,
  scrumResponsibilities,
  skillGroups,
  toolKeywords
} from "../portfolio-data";
import { BackToTop } from "./BackToTop";
import { Navigation } from "./Navigation";
import styles from "./PortfolioPage.module.scss";
import { Reveal } from "./Reveal";

export function PortfolioPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navigation />

      <main id="main-content" className={styles.page}>
        <section id="top" className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <Reveal>
                <p className={styles.eyebrow}>Available for senior Agile, Scrum, and UX leadership roles</p>
                <h1 id="hero-title">
                  {profile.name}
                  <span>{profile.role}</span>
                </h1>
                <p className={styles.heroLead}>{profile.descriptor}</p>
              </Reveal>

              <Reveal delay={0.08}>
                <div className={styles.heroActions}>
                  <a className={styles.primaryButton} href="#projects">
                    <TrendingUpRoundedIcon fontSize="small" aria-hidden="true" />
                    View portfolio impact
                  </a>
                  <a className={styles.secondaryButton} href={profile.resumePath} download>
                    <DownloadRoundedIcon fontSize="small" aria-hidden="true" />
                    Download CV
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <dl className={styles.heroStats}>
                  {heroStats.map((stat) => (
                    <div key={stat.label}>
                      <dt>{stat.label}</dt>
                      <dd>{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <Reveal className={styles.heroVisual} delay={0.12}>
              <div className={styles.profileImageWrap}>
                <Image
                  src={profile.photoPath}
                  width={520}
                  height={520}
                  priority
                  alt="Kamal Pandey"
                  className={styles.profileImage}
                />
              </div>
              <div className={styles.heroCredential}>
                <AccountTreeRoundedIcon aria-hidden="true" />
                <span>Scrum ceremonies, UX strategy, WCAG audits, and design systems connected into one delivery model.</span>
              </div>
            </Reveal>
          </div>
        </section>

        <Reveal as="section" id="about" ariaLabelledby="about-title" className={styles.section}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionKicker}>About</p>
            <h2 id="about-title">Hybrid senior leader for Agile product delivery and accessible user experience.</h2>
            <p>
              Kamal combines Scrum Master facilitation, stakeholder management, UX research, wireframing,
              prototyping, design systems, and frontend collaboration to help teams ship accessible,
              high-performing products with predictable sprint outcomes.
            </p>
          </div>

          <div className={styles.pillarGrid}>
            {leadershipPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className={styles.pillarCard}>
                  <Icon aria-hidden="true" />
                  <h3>{pillar.title}</h3>
                  <p>{pillar.copy}</p>
                </article>
              );
            })}
          </div>

          <div className={styles.scrumPanel}>
            <h3>Scrum Master Responsibilities</h3>
            <ul aria-label="Scrum Master responsibilities and ATS keywords">
              {scrumResponsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.metricsBand} aria-label="Measured portfolio outcomes">
            {impactMetrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" id="experience" ariaLabelledby="experience-title" className={styles.section}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionKicker}>Experience</p>
            <h2 id="experience-title">Career timeline across Scrum, UX, accessibility, and frontend delivery.</h2>
          </div>

          <ol className={styles.timeline}>
            {experiences.map((experience) => {
              const Icon = experience.icon;
              return (
                <li key={`${experience.company}-${experience.period}`} className={styles.timelineItem}>
                  <div className={styles.timelineMarker} aria-hidden="true">
                    <Icon />
                  </div>
                  <article className={styles.timelineCard}>
                    <header>
                      <div>
                        <h3>{experience.role}</h3>
                        <p>{experience.company}</p>
                      </div>
                      <div className={styles.timelineMeta}>
                        <span>{experience.period}</span>
                        <span>{experience.location}</span>
                        {experience.current ? <strong>Current</strong> : null}
                      </div>
                    </header>
                    <p>{experience.summary}</p>
                    <ul className={styles.checkList}>
                      {experience.bullets.map((item) => (
                        <li key={item}>
                          <CheckRoundedIcon fontSize="small" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <ul className={styles.tagList} aria-label={`${experience.role} keywords`}>
                      {experience.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </article>
                </li>
              );
            })}
          </ol>
        </Reveal>

        <Reveal as="section" id="skills" ariaLabelledby="skills-title" className={styles.section}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionKicker}>Skills</p>
            {/* <h2 id="skills-title">ATS-ready skill architecture with clear proficiency signals.</h2>
            <p>
              Keywords are integrated naturally across Agile, Scrum, Kanban, User-Centered Design,
              Wireframing, Prototyping, Design Systems, Figma, UX Research, Stakeholder Management,
              accessibility, frontend delivery, and CI/CD collaboration.
            </p> */}
          </div>

          <div className={styles.skillsGrid}>
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.category} className={styles.skillGroup}>
                  <div className={styles.skillHeader}>
                    <Icon aria-hidden="true" />
                    <h3>{group.category}</h3>
                  </div>
                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill.name}>
                        <div>
                          <span>{skill.name}</span>
                          <strong>{skill.level}%</strong>
                        </div>
                        <span
                          className={styles.skillBar}
                          role="progressbar"
                          aria-label={`${skill.name} proficiency`}
                          aria-valuenow={skill.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span style={{ width: `${skill.level}%` }} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <ul className={styles.keywordCloud} aria-label="Industry keywords and platforms">
            {toolKeywords.map((keyword) => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="section" id="projects" ariaLabelledby="projects-title" className={styles.section}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionKicker}>Projects and Portfolio</p>
            <h2 id="projects-title">UI/UX work and Scrum artifacts built for executive review.</h2>
            <p>
              Each portfolio item connects product outcomes to Agile delivery evidence: sprint artifacts,
              design system assets, accessibility criteria, and measurable business impact.
            </p>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article key={project.title} className={styles.projectCard}>
                  <div className={styles.projectImage}>
                    <Image src={project.image} width={760} height={460} alt={`${project.client} project preview`} />
                  </div>
                  <div className={styles.projectBody}>
                    <div className={styles.projectMeta}>
                      <span>{project.period}</span>
                      <span>{project.type}</span>
                    </div>
                    <h3>
                      <Icon fontSize="small" aria-hidden="true" />
                      {project.title}
                    </h3>
                    <p className={styles.projectClient}>{project.client}</p>
                    <p>{project.summary}</p>
                    <div className={styles.projectColumns}>
                      <div>
                        <h4>Outcomes</h4>
                        <ul>
                          {project.outcomes.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4>Artifacts</h4>
                        <ul>
                          {project.artifacts.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <ul className={styles.tagList} aria-label={`${project.title} keywords`}>
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>

        <Reveal as="section" id="education" ariaLabelledby="education-title" className={styles.section}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionKicker}>Certifications and Education</p>
            <h2 id="education-title">Formal credentials across accessibility, Agile practice, and web design.</h2>
          </div>

          <div className={styles.credentialsLayout}>
            <div className={styles.credentialList}>
              {certifications.map((credential) => {
                const Icon = credential.icon;
                return (
                  <article key={credential.title} className={styles.credentialCard}>
                    <Icon aria-hidden="true" />
                    <div>
                      <h3>{credential.title}</h3>
                      <p>{credential.issuer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className={styles.educationList}>
              {education.map((item) => (
                <article key={item.title} className={styles.educationCard}>
                  <h3>{item.title}</h3>
                  <p>{item.issuer}</p>
                  <span>{item.detail}</span>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal as="section" id="recognition" ariaLabelledby="recognition-title" className={styles.section}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionKicker}>Recognition</p>
            <h2 id="recognition-title">Awards and leadership signals from the CV.</h2>
          </div>

          <div className={styles.recognitionGrid}>
            {recognition.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className={styles.recognitionCard}>
                  <Icon aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.issuer}</p>
                  <span>{item.detail}</span>
                </article>
              );
            })}
          </div>

          <div className={styles.logoStrip} aria-label="Organizations represented in Kamal Pandey portfolio">
            {companyLogos.map((company) => (
              <div key={company.name}>
                <Image src={company.image} width={120} height={48} alt={company.name} />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" id="contact" ariaLabelledby="contact-title" className={styles.contactSection}>
          <div className={styles.contactPanel}>
            <div>
              <p className={styles.sectionKicker}>Contact</p>
              <h2 id="contact-title">Ready to discuss Agile delivery, UX leadership, or accessibility transformation.</h2>
              <p>
                Open to on-site roles in Delhi/NCR, hybrid teams, remote engagements, and senior opportunities across
                Scrum Master, Agile Delivery Lead, Lead UI/UX Designer, UX Manager, and hybrid UX plus Agile leadership.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href={`mailto:${profile.email}`}>
                  <EmailRoundedIcon fontSize="small" aria-hidden="true" />
                  Send email
                </a>
                <a className={styles.secondaryButton} href={profile.linkedin} target="_blank" rel="noreferrer">
                  <LinkedInIcon fontSize="small" aria-hidden="true" />
                  LinkedIn
                  <OpenInNewRoundedIcon fontSize="inherit" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className={styles.contactCards}>
              {contactCards.map((card) => (
                <a key={card.label} className={styles.contactCard} href={card.href}>
                  {card.label === "Email" ? <EmailRoundedIcon aria-hidden="true" /> : null}
                  {card.label === "Phone" ? <PhoneIphoneRoundedIcon aria-hidden="true" /> : null}
                  {card.label === "LinkedIn" ? <LinkedInIcon aria-hidden="true" /> : null}
                  <span>{card.label}</span>
                  <strong>{card.value}</strong>
                </a>
              ))}
              <div className={styles.contactCard}>
                <LocationOnRoundedIcon aria-hidden="true" />
                <span>Location</span>
                <strong>{profile.location}</strong>
              </div>
              <button className={styles.copyButton} type="button" onClick={copyEmail} aria-live="polite">
                {copied ? <CheckRoundedIcon aria-hidden="true" /> : <ContentCopyRoundedIcon aria-hidden="true" />}
                {copied ? "Email copied" : "Copy email"}
              </button>
            </div>
          </div>
        </Reveal>
      </main>

      <footer className={styles.footer}>
        <div>
          <strong>{profile.name}</strong>
          <span>{profile.role}</span>
        </div>
        <a href="#top">
          Back to top
          <ArrowForwardRoundedIcon fontSize="small" aria-hidden="true" />
        </a>
      </footer>

      <BackToTop />
    </>
  );
}
