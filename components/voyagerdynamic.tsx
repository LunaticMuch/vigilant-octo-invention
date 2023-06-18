import { ReactElement } from 'react';
import dynamic from 'next/dynamic';

export const VoyagerDynamic = dynamic(() => import('./voyager').then(mod => mod.App), {
  ssr: false,
});

export function App(): ReactElement {
  return <VoyagerDynamic />;
}