import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="136" cy="135" r="120" />
    <rect x="-6" y="337" rx="3" ry="3" width="280" height="33" />
    <rect x="0" y="314" rx="6" ry="6" width="280" height="100" />
    <rect x="0" y="276" rx="3" ry="3" width="280" height="29" />
    <rect x="4" y="419" rx="3" ry="3" width="90" height="40" />
    <rect x="159" y="421" rx="20" ry="20" width="117" height="40" />
  </ContentLoader>
);

export default MyLoader;
