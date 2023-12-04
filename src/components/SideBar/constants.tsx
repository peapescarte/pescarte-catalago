import { FishIcon, Inbox } from "lucide-react";

export type SideBarItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideBarItem[];
};

export const SIDEBAR_ITENS: SideBarItem[] = [
  {
    title: 'Sugestões',
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
];