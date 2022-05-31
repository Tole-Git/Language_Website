import React from 'react';
import * as AiIcons from 'react-icons/ai'; 
import * as SiIcons from 'react-icons/si';
import * as DiIcons from 'react-icons/di';

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Java',
        path: '/java',
        icon: <SiIcons.SiJava />,
        cName: 'nav-text'
    },
    {
        title: 'Javascript',
        path: '/javascript',
        icon: <DiIcons.DiJavascript1 />,
        cName: 'nav-text'
    },
    {
        title: 'Python',
        path: '/python',
        icon: <SiIcons.SiPython />,
        cName: 'nav-text'
    },
    {
        title: 'Golang',
        path: '/golang',
        icon: <SiIcons.SiGoland />,
        cName: 'nav-text'
    }
];