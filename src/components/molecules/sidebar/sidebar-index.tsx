import Logo from 'components/particles/logo/logo-index';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './sidebar-style';
import iconCalendario from './icons/calendario.svg';
import iconDashboard from './icons/dashboard.svg';
import iconConfirugacao from './icons/configuracao.svg';

const sidebarNavItems = [
    {
        display: 'Início',
        icon: <img src={iconDashboard}/>,
        to: '/',
        section: ''
    },
    {
        display: 'Agendamentos',
        icon: <img src={iconCalendario}/>,
        to: '/started',
        section: 'started'
    },
    {
        display: 'Configuração',
        icon: <img src={iconConfirugacao}/>,
        to: '/calendar',
        section: 'calendar'
    },
]

export default function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    return(<S.Sidebar>
        <S.SidebarLogo>
            <Logo />
        </S.SidebarLogo>
        <S.SidebarMenu>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <S.SidebarMenuItem>
                            <S.SidebarMenuItemIcon>
                                {item.icon}
                            </S.SidebarMenuItemIcon>
                            <S.SidebarMenuItemText>
                                {item.display}
                            </S.SidebarMenuItemText>
                        </S.SidebarMenuItem>
                    </Link>
                ))
            }
        </S.SidebarMenu>
    </S.Sidebar>);
};