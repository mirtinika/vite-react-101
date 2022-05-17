import React, { Suspense } from 'react';

const LinksComponent = React.lazy(() => import('./components/Links.jsx'));

const Links = props => {
    return (
        <div>
            <Suspense fallback={<div>Loading LandingPageComponent...</div>}>
                <LinksComponent />
            </Suspense>
        </div>
    );
};

export default Links;
