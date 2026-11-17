import Head from 'next/head';
import React from 'react';

import withPageTransition from '../../components/hoc/with-page-transition';
import Page from '../../components/page/Page';
import PageBody from '../../components/page-body/PageBody';
import PageHeader from '../../components/page-header/PageHeader';
import SocialIcons from '../../components/social-icons/SocialIcons';

/**
 * Contact page. Gives visitors (and ad reviewers) a clear way to reach the owner.
 */
const ContactPage: React.FC = () => (
  <>
    <Head>
      <title>Contact</title>
      <meta property="og:title" content="Contact" />
      <meta
        name="description"
        content="Get in touch with Krishna Kishore about projects, collaboration or feedback on the articles."
      />
    </Head>
    <Page>
      <PageBody>
        <PageHeader
          title="contact"
          description="Have a question, feedback on an article, or an idea to build together? I'd love to hear from you."
        />
        <p className="text-base md:text-lg leading-relaxed mb-6">
          The quickest way to reach me is email. I usually reply within a few
          days.
        </p>
        <p className="text-xl md:text-2xl mb-10">
          <a
            className="text-primary glow break-all"
            href="mailto:me@krishnakishore.co.in">
            me@krishnakishore.co.in
          </a>
        </p>
        <h2 className="text-secondary font-black text-xl md:text-2xl mb-3">
          Find me online
        </h2>
        <SocialIcons className="text-3xl md:text-4xl mr-3" />
      </PageBody>
    </Page>
  </>
);

export default withPageTransition(ContactPage);
