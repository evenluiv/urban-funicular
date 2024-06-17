import { renderToString } from 'react-dom/server';
import { renderApp } from './main';
import { StaticRouter } from 'react-router-dom/server';

export const render = async (url: string) => {
  return renderToString(
    <StaticRouter location={url}>
      {renderApp()}
    </StaticRouter>
  );
};