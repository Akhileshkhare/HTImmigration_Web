import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Location } from 'react-router-dom';

const getPageName = (params: Record<string, string | undefined>, location: Location) => {
  if (params.pageName) return params.pageName;
  // Map pathnames to page names for static routes
  const path = location.pathname;
  if (path === '/') return 'home';
  return path.replace(/^\//, '').replace(/-/g, '_');
};

const StaticPage = () => {
  const params = useParams<Record<string, string | undefined>>();
  const location = useLocation();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const pageName = getPageName(params, location);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/static-pages/${pageName}`)
      .then((res) => {
        if (!res.ok) throw new Error('Page not found');
        return res.json();
      })
      .then((data) => {
        setContent(data.content);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [pageName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="static-page" dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default StaticPage;
