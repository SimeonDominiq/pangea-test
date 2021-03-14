import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

/**
 * ScrollToTop HOC to reset scroll position on route change
 * @param {*} param0
 */
function ScrollToTop({ history, children }) {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, []);

    return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);
