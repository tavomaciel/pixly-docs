import React from 'react';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Download`}
      description="Pixly is out now and free">
      <main>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <img alt="Nexus 7" src="/img/test_frame2.png"/>
            </div>
          </div>
          <div className="row">
            <div className="col col--6">
              <img alt="Nexus 5" src="/img/test_frame.png"/>
            </div>
            <div className="col col--6">
              <h1>Pixly is out now and free</h1>
              <p>Pixly is accesible, anyone can download it for free from the Play Store and start pixeling right away.</p>
              <p>It has no ads at all, and will never be behind a paywall.</p>
              <a
                  target="_blank"
                  href='https://play.google.com/store/apps/details?id=com.meltinglogic.pixly&utm_source=website&utm_campaign=page-download&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                  <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
              </a>
              <p style={{fontWeight: 'lighter', textAlign: 'center'}}>Google Play and the Google Play logo are trademarks of Google LLC.</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}