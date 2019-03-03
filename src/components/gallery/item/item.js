import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { Title, Copy } from './item.css';

const itemProps = {
  itemTitle: PropTypes.string,
  copy: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object.isRequired,
  link: PropTypes.string,
  external: PropTypes.bool
};

const ItemContent = props => (
  <div>
    <Img fluid={props.image ? props.image.childImageSharp.fluid : {}} alt={props.itemTitle} />
    <figcaption>
      <Title>
        {props.itemTitle} <span>(coming soon)</span>
      </Title>
      <Copy>{props.copy}</Copy>
    </figcaption>
  </div>
);
ItemContent.propTypes = { ...itemProps };

const Item = ({ itemTitle, title, copy, image, link, external }) => (
  <figure className="disabled">
    {
      external ? (
        <a href={link} target="_blank" rel="noopener noreferrer" title={title}>
          <ItemContent image={image} itemTitle={itemTitle} copy={copy} />
        </a>
      ) : (
          <Link to={link} title={title}>
            <ItemContent image={image} title={itemTitle} copy={copy} />
          </Link>
        )
    }
  </figure>
);
Item.propTypes = { ...itemProps };

export default Item;
