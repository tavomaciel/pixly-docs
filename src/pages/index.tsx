import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button",
              "button--secondary",
              "button--lg",
              styles.pixlyButton,
            )}
            to="download"
          >
            Download now
          </Link>
          <Link
            className={clsx(
              "button",
              "button--secondary",
              "button--lg",
              styles.pixlyButton,
            )}
            to="/docs/features"
          >
            What can Pixly do?
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Pixly`}
      description="Pixly is a complete, game-development oriented, pixel art and animation editor for Android devices."
    >
      <HomepageHeader />
      <main>
        <div className="container">
          <div className="row">
            <div className="col col--4"></div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
