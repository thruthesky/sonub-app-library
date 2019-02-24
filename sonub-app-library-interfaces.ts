export interface ToolbarMenu {
    title: string;
    icon: string;
    url?: string;
    openSideMenu?: boolean;
}


export interface SideMenu {
    title: string;
    icon: string;
    url?: string;
    close?: boolean;
    openWindow?: boolean;
}
