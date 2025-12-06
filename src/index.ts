// Import styles
import './index.css';

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
export { Button, Badge } from './components/composed';
export type { ButtonProps, BadgeProps } from './components/composed';

export {
  AppSidebar,
  AppLayout,
  AppHeader,
  TeamSwitcher,
} from './components/composed';
export type {
  AppSidebarProps,
  NavItem,
  AppLayoutProps,
  AppHeaderProps,
  TeamSwitcherProps,
} from './components/composed';

// Form components
export {
  Input,
  MultiSelect,
  Password,
  Select,
  Sheet,
  Switch,
  Tabs,
  Textarea,
  EditableFormField,
} from './components/composed';
export type {
  InputProps,
  Option,
  TabItem,
  TabVariant,
  TabsProps,
  SheetProps,
} from './components/composed';

// Theme
export { theme, themeNames, themePlugin } from './styles/theme';

// Providers
export { DialogProvider, useDialog } from './providers/dialog-provider';

// Hooks
export { useAppDialog } from './hooks/use-app-dialog';
export { useIsMobile } from './hooks/use-mobile';
