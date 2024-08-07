import React from 'react';

const applicationMap: { [key: string]: React.LazyExoticComponent<React.ComponentType<any>> } = {
  app1: React.lazy(() => import('../apps/App1')),
  app2: React.lazy(() => import('../apps/App2')),
};

interface ApplicationLoaderProps {
  appName: string;
}

const ApplicationLoader: React.FC<ApplicationLoaderProps> = ({ appName }) => {
  const App = applicationMap[appName];
  return App ? <App /> : null;
};

export default ApplicationLoader;