interface options {
    label: string
    route: string
}

export const generalMemberSBOpts: Array<options> = [
    {
        label: 'Tickets',
        route: '/',
    },
    {
        label: 'Mis eventos',
        route: '/events',
    },
    {
        label: 'Calendario',
        route: '/events-calendar',
    },
    {
        label: 'Notificaciones',
        route: '/user-notifications',
    },
    {
        label: 'Eventos disponibles',
        route: '/available-events',
    },
    {
        label: 'Amigos',
        route: '/friends-list',
    },
    {
        label: 'Novedades',
        route: '/news',
    },
]
