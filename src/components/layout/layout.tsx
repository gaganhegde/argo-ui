import * as React from 'react';
import { NavBar } from '../nav-bar/nav-bar';
import {Banner} from '../ui-banner/ui-banner';

require('./layout.scss');

export interface LayoutProps extends React.Props<any> {
    bannerItems?:{apiUrl:string,fields:Array<string>};
    navItems: Array<{ path: string; iconClassName: string; title: string; }>;
    version?: () => React.ReactElement;
}

export const Layout = (props: LayoutProps) => (
    <div className='layout'>
        <Banner items={props.bannerItems}/>
        <NavBar items={props.navItems} version={props.version}/>
        {props.children}
    </div>
);
