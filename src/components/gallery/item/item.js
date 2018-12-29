import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
//import { A, Link } from 'gatsby';
import { Title, Copy } from './item.css';

const Item = ({ title, copy, image }) => (
  <figure>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <figcaption>
      <Title>
        {title} <span>(coming soon)</span>
      </Title>
      <Copy>{copy}</Copy>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  link: PropTypes.string,
};

export default Item;
