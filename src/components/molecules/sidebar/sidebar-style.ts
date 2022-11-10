import styled from "styled-components";

export const Sidebar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 320px;
    background-color: #FFF;
`;

export const SidebarLogo = styled.div`
    display: grid;
    place-items: center;
    height: 120px;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Mochiy Pop P one', sans-serif;
`;

export const SidebarMenu = styled.div`
    position: relative;
    a{text-decoration: none;
    }
`;

export const idebarMenuIndicator = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: calc(100% - 40px);
    border-radius: 10px;
    background-color: #308efe;
    z-index: -1;
    transform: translateX(-50%);
    transition: 0.3s ease-in-out;
`;

export const SidebarMenuItemIcon = styled.div`
    margin-right: 1rem;

        icon {
            font-size: 1.75rem;
        }
`;

export const SidebarMenuItemText = styled.span`
    display: flex;
    align-items: center;
    place-content: flex-start;
    font-size: 1.25rem;
    font-weight: 500;
    color: #555555;
    transition: color 0.3s ease-in-out;
`;

export const SidebarMenuItem = styled.div`
    display: flex;

    padding: 1rem 3rem;
    &.active {
    color: #fff;
    }
`;