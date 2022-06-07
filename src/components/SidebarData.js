import React from 'react';
import * as AiIcons from 'react-icons/ai'; 
import * as SiIcons from 'react-icons/si';
import * as DiIcons from 'react-icons/di';
import * as TbIcons from 'react-icons/tb';

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Closure',
        path: '/closure',
        icon: <TbIcons.TbLetterC />,
        cName: 'nav-text'
    },
    {
        title: 'Erlang',
        path: '/erlang',
        icon: <SiIcons.SiErlang />,
        cName: 'nav-text'
    },
    {
        title: 'Golang',
        path: '/golang',
        icon: <SiIcons.SiGoland />,
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
        title: 'Ruby',
        path: '/ruby',
        icon: <DiIcons.DiRuby />,
        cName: 'nav-text'
    },
    
];