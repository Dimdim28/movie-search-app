import { useRouter } from 'next/router';
import React from 'react';

const DetailsPage = () => {
  const path = useRouter().asPath;

  return <div>{`${path}`}</div>;
};

export default DetailsPage;
