interface MenuProps {
    id: number,
    title: string,
    icon: string
}

export const menuGroups: MenuProps[][] = [
    [
        { id: 1, title: 'Dashboard', icon: 'dashboard' },
        { id: 2, title: 'Tickets', icon: 'local-activity' },
        { id: 3, title: 'Live Support Chat', icon: 'support-agent' },
    ],
    [
        { id: 5, title: 'Devices', icon: 'devices' },
        { id: 6, title: 'Knowledge Base', icon: 'menu-book' },
        { id: 7, title: 'Analytics', icon: 'analytics' },
        { id: 8, title: 'AI Assistant', icon: 'smart-toy' },
    ],
    [
        { id: 9, title: 'Settings', icon: 'settings' },
        { id: 0, title: 'Help & Support', icon: 'help-outline' },
        { id: 1, title: 'About App', icon: 'info-outline' },
    ],
    [
        { id: 12, title: 'Logout', icon: 'logout' },
    ]
];