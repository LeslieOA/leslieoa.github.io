import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Secret = ({ data }) => (
  <Layout>
    <Head pageTitle={data.secretJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.secretJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Secret.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Secret;

export const query = graphql`
  query SecretQuery {
    secretJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
