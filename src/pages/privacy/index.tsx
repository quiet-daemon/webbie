import Head from 'next/head';
import React from 'react';

import withPageTransition from '../../components/hoc/with-page-transition';
import Page from '../../components/page/Page';
import PageBody from '../../components/page-body/PageBody';
import PageHeader from '../../components/page-header/PageHeader';

const heading = 'text-secondary font-black text-xl md:text-2xl mt-10 mb-3';
const para = 'text-base md:text-lg leading-relaxed mb-4';
const link = 'text-primary';

/**
 * Privacy policy. Required by Google AdSense and by most privacy laws,
 * since the site uses analytics and advertising cookies.
 */
const PrivacyPage: React.FC = () => (
  <>
    <Head>
      <title>Privacy Policy</title>
      <meta property="og:title" content="Privacy Policy" />
      <meta
        name="description"
        content="How this website collects, uses and protects information, including cookies used for analytics and advertising."
      />
    </Head>
    <Page>
      <PageBody>
        <PageHeader
          title="privacy"
          description="Last updated: November 2026. This page explains what information this website collects and how it is used."
        />

        <h2 className={heading}>Information we collect</h2>
        <p className={para}>
          This is a personal portfolio and blog. There are no user accounts, and
          the site does not ask you to submit personal information. When you
          visit, your browser automatically sends standard technical data such
          as your IP address, browser type, device, pages viewed and referring
          page.
        </p>

        <h2 className={heading}>Cookies and similar technologies</h2>
        <p className={para}>
          Cookies are small files stored on your device. This website and its
          third-party partners use them for analytics and for showing ads.
          Third-party services used on this site are listed below.
        </p>
        <ul className="list-disc pl-6 mb-4 text-base md:text-lg leading-relaxed space-y-2">
          <li>
            <strong>Google Analytics</strong> measures how visitors use the site
            (pages viewed, approximate location, device) so content can be
            improved.
          </li>
          <li>
            <strong>Microsoft Clarity</strong> records anonymised usage
            patterns, such as clicks and scrolling, to help improve the design.
          </li>
          <li>
            <strong>Google AdSense</strong> may show advertising. Google and its
            partners use cookies to serve ads based on your visits to this and
            other websites.
          </li>
          <li>
            <strong>DEV.to</strong> provides the articles shown in the Posts and
            Nuggets sections. Clicking through to DEV.to is governed by their
            own privacy policy.
          </li>
        </ul>

        <h2 className={heading}>Google advertising and your choices</h2>
        <p className={para}>
          Google, as a third-party vendor, uses cookies to serve ads on this
          site. Google&apos;s use of advertising cookies enables it and its
          partners to serve ads based on your visit to this site and/or other
          sites on the Internet. You can opt out of personalised advertising by
          visiting{' '}
          <a
            className={link}
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer">
            Google Ads Settings
          </a>
          , or opt out of third-party vendors&apos; use of cookies for
          personalised advertising at{' '}
          <a
            className={link}
            href="https://www.aboutads.info"
            target="_blank"
            rel="noopener noreferrer">
            aboutads.info
          </a>
          . You can also block or delete cookies in your browser settings, and
          opt out of Google Analytics with the{' '}
          <a
            className={link}
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer">
            browser add-on
          </a>
          .
        </p>

        <h2 className={heading}>Links to other sites</h2>
        <p className={para}>
          The site links to external websites such as GitHub, LinkedIn, X and
          DEV.to. Those sites have their own privacy practices, and this policy
          does not cover them.
        </p>

        <h2 className={heading}>Children</h2>
        <p className={para}>
          This website is not directed to children under 13, and information
          from children is not knowingly collected.
        </p>

        <h2 className={heading}>Changes to this policy</h2>
        <p className={para}>
          This policy may be updated from time to time. The date at the top of
          the page shows when it was last changed.
        </p>

        <h2 className={heading}>Contact</h2>
        <p className={para}>
          Questions about this policy? Email{' '}
          <a className={link} href="mailto:me@krishnakishore.co.in">
            me@krishnakishore.co.in
          </a>
          .
        </p>
      </PageBody>
    </Page>
  </>
);

export default withPageTransition(PrivacyPage);
