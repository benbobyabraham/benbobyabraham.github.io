import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "Ben Boby | Data Scientist & AI Engineer",
  description = "Explore the portfolio of Ben Boby, showcasing expertise in data science, AI, and software engineering.",
  keywords = "Ben Boby, Data Science, AI, Portfolio, React Developer, Machine Learning, San Francisco"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ben Boby" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://benbobyabraham.github.io" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${window.location.origin}/og-image.png`} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${window.location.origin}/og-image.png`} />
    </Helmet>
  );
};

export default SEO;
