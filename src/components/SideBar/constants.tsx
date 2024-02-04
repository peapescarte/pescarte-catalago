import { FishIcon, Inbox, LayoutDashboard, MapPinned } from "lucide-react";

export type SideBarItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideBarItem[];
};

export const SIDEBAR_ITENS: SideBarItem[] = [
  {
    title: 'Dashboard',
    path: '/admin',
    icon: <LayoutDashboard />,
    submenu: false,
  },
  {
    title: 'Nomes Sugeridos',
    path: '/admin/pages/suggestions',
    icon:  <Inbox />,
    submenu: false,
  },
  {
    title: 'Peixes',
    path: '/admin/pages/fish',
    icon: <FishIcon />,
    submenu: true,
    subMenuItems: [
      { title: 'Todos', path: '/admin/pages/fish' },
      { title: 'Novo Peixe', path: '/admin/pages/fish/new' },
    ],
  },
  {
    title: 'Comunidades',
    path: '/admin/pages/communities',
    icon: <MapPinned />,
    submenu: true,
    subMenuItems: [
      { title: 'Todos', path: '/admin/pages/communities' },
      { title: 'Nova comunidade', path: '/admin/pages/communities/new' },
    ],
  },
];