import React from 'react'

const Section = ({id, title, description, img, children}) => {
  return (
    <section className="section" id={id}>
      <h2 className="section__title">
        {title}
      </h2>
      <p className="section__description">{description}</p>
      {children}
    </section>
  );
}

export default Section