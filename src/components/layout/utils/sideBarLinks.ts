interface options {
  label: string;
  route: string;
}

export const generalMemberSBOptions: Array<options> = [
  {
    label: 'Tickets',
    route: '/',
  },
  {
    label: 'Eventos',
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
    label: 'Eventos',
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
];
