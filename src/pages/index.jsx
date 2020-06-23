
import React from 'react';
import Layout from "../layouts/index"
import Banner from '../components/banner'

const Index= ({ data }) => (
  <Layout site={data.site} navBg={false}>
      <Banner img={data.datoCmsHomepage.bannerImage.url} title={data.datoCmsHomepage.homepageTitle} />
  </Layout>
);

export default Index

export const query = graphql`
  query HomePageQuery {
    datoCmsHomepage {
      homepageTitle
      bannerImage {
        url
      }
    }
  }
`;