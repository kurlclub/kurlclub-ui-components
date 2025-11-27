// Base UI components (shadcn)
export { buttonVariants } from './components/ui/button';
export type { ButtonProps as ShadcnButtonProps } from './components/ui/button';

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from './components/ui/sidebar';

// Composed components (custom)
export { Button } from './components/composed';
export type { ButtonProps } from './components/composed';

export { AppSidebar } from './components/composed';
export type { AppSidebarProps, NavItem } from './components/composed';

// Theme
export { theme, themeNames, themePlugin } from './styles/theme';
