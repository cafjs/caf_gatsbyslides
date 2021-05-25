/** @jsx jsx */
import { jsx } from 'theme-ui';
import Logo from '../svgs/logo.svg';

import Header from './header';
export default ({children}) => {
    return (
        <Header>
          {children}
          <div sx={{display: 'flex', 'flex-direction': 'row-reverse'}}>
            <Logo sx={{ opacity: '100%', width: '10%', height: '5%'}}/>
          </div>
        </Header>
    );
};
