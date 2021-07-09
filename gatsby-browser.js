import "./src/styles/theme.scss";

import {navigate} from '@reach/router';

export function onClientEntry() {
    if ((typeof window !== "undefined") && window.location &&
        window.location.href && window.location.hash) {
        const pageNum = parseInt(window.location.hash.slice(1));
        if (!isNaN(pageNum)) {
            const newURL = window.location.origin +
                  (window.location.pathname.endsWith('/') ?
                   window.location.pathname + pageNum :
                   window.location.pathname + '/' + pageNum);
            navigate(newURL);
        }
    }

};
