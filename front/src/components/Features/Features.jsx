import React from 'react';
import './features.css';

const Features = (props) => {
  return (
    <section className="features">
        <div className="feature-item">
          <img src={props.element.image} alt={props.element.alt} className="feature-icon" />
          <h3 className="feature-item-title">{props.element.title}</h3>
          <p>{props.element.description}</p>
        </div>
      </section>
  );
};

export default Features;