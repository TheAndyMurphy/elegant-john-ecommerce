
import React from 'react';
import Layout from "../layouts/index"

const Index= ({ data }) => (
  <Layout site={data.site}>
    <div className="Banner" style={{backgroundImage: `url(${data.datoCmsHomepage.bannerImage.url})` }}>
      <h1>{data.datoCmsHomepage.homepageTitle}</h1>
    </div>
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