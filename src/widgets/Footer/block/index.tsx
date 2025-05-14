import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  footer_title: string;
  title: string;
  link1: string;
  link_title1: string;
  link2: string;
  link_title2: string;
  link3: string;
  link_title3: string;
}

const Footer_Block: React.FC<Props> = ({
  footer_title,
  title,
  link1,
  link_title1,
  link2,
  link_title2,
  link3,
  link_title3,
}): React.ReactElement => {
  const isExternalLink = (url: string) => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

  const renderLink = (url: string, title: string) => {
    if (isExternalLink(url)) {
      return (
        <a href={url} className="footer-link" target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      );
    }
    return (
      <Link to={url} className="footer-link">
        {title}
      </Link>
    );
  };

  return (
    <>
      <div className={`footer-block ${footer_title}`}>
        {' '}
        {/* шаблонные строки (template literals) */}
        <h2 className="footer-title">{title}</h2>
        {renderLink(link1, link_title1)}
        {renderLink(link2, link_title2)}
        {renderLink(link3, link_title3)}
      </div>
    </>
  );
};

export default Footer_Block;
