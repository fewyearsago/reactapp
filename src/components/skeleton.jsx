import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={290}
    height={415}
    viewBox="0 0 290 415"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="139" cy="146" r="123" />
    <rect x="23" y="295" rx="0" ry="0" width="230" height="31" />
    <rect x="199" y="323" rx="0" ry="0" width="16" height="0" />
    <rect x="51" y="351" rx="24" ry="24" width="178" height="59" />
  </ContentLoader>
);

export default Skeleton;
