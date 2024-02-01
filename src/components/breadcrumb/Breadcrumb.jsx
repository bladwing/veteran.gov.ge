import React from 'react';
import { Link } from 'react-router-dom';
import "./breadcrumb.scss"

const Breadcrumb = ({ pathnames }) => {
  return (
    <div className="breadcrumb-container">
      <Link to="/" className="breadcrumb-item">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <React.Fragment key={index}>
            <span className="breadcrumb-separator">{'>'}</span>
            {isLast ? (
              <span className="breadcrumb-item">{name}</span>
            ) : (
              <Link to={routeTo} className="breadcrumb-item">{name}</Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
