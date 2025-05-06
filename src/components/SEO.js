import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "Ben Boby | Senior Data Scientist & AI Engineer - San Francisco",
  description = "Ben Boby - Senior Data Scientist at NTT Data specializing in AI, ML, and full-stack development. Expert in Python, TensorFlow, and React. Transforming complex data challenges into innovative solutions. Based in San Francisco Bay Area.",
  keywords = "Ben Boby, Senior Data Scientist, NTT Data, AI Engineer, Machine Learning Expert, Data Analytics, Python Developer, TensorFlow, React Developer, San Francisco Tech, Data Science Portfolio, AI Solutions, Full Stack Developer"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ben Boby" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content="Senior Data Scientist at NTT Data with expertise in AI, machine learning, and full-stack development. Discover innovative solutions in data science, deep learning, and web development. San Francisco-based tech professional transforming data into actionable insights." />
      <meta property="og:url" content="https://benbobyabraham.github.io" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${window.location.origin}/og-image.png`} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content="Senior Data Scientist at NTT Data crafting AI solutions and data-driven applications. Expertise in machine learning, Python, TensorFlow, and full-stack development. Based in San Francisco." />
      <meta name="twitter:image" content={`${window.location.origin}/og-image.png`} />
    </Helmet>
  );
};

export default SEO;
