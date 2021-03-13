import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Simplified',
    imageUrl: '/icon-simplyfied.svg',
    description: (
      <>
        A simplified, but flexible interface for CSS Grid Layout. 
      </>
    ),
  },
  {
    title: 'Centralized',
    imageUrl: '/icon-centralized.svg',
    description: (
      <>
        Manage your Grid and all CSS directly in your React Components. 
      </>
    ),
  },
  {
    title: 'Combinable',
    imageUrl: '/icon-combinable.svg',
    description: (
      <>
        Combinable with your favorite tools like NextJS and Framer Motion.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Documentation`}
      description="Documentation for react-raster, a grid-system for simplifying layout.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={styles.bannerImg}>
          <img className={clsx(styles.heroImg)} src={useBaseUrl("/react-raster-logo.svg")} alt="react-raster Logo"/>
        </div>
        <div className={clsx("container")}>
          <h1 className={clsx("hero__subtitle", styles.heroSubtitle)}>{siteConfig.tagline}</h1>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/getting-started')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
