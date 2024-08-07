import React, { Suspense } from 'react';

interface ComponentVersions {
  [componentName: string]: {
    [version: string]: React.LazyExoticComponent<React.ComponentType<any>>;
  };
}

const componentVersions: ComponentVersions = {
  RegistrationForm: {
    v1: React.lazy(() => import('../components/RegistrationForm/v1')),
    v2: React.lazy(() => import('../components/RegistrationForm/v2')),
  },
};

interface ComponentLoaderProps {
  componentName: string;
  version: string;
}

const ComponentLoader: React.FC<ComponentLoaderProps> = ({ componentName, version }) => {
  const Component = componentVersions[componentName]?.[version];
  return Component ? (
    <Suspense fallback={<div>Loading component...</div>}>
      <Component />
    </Suspense>
  ) : null;
};

export default ComponentLoader