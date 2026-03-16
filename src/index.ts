// Import styles
import './index.css';

// Base UI components (shadcn)
export { buttonVariants as shadcnButtonVariants } from './components/ui/button';
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
export {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
  useFormField,
} from './components/ui/form';
export {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from './components/ui/input-otp';

// Composed components (custom)
export {
  Button,
  Badge,
  InfoCard,
  InfoBadge,
  InfoBanner,
  BrandLogo,
  Spinner,
  Breadcrumbs,
  CollapsibleSection,
  Separator,
  Search,
  SocialLinkInput,
  RichTextEditor,
  FileUploader,
  ProfileUploader,
  AppLoader,
  buttonVariants as composedButtonVariants,
} from './components/composed';
export type {
  ButtonProps,
  BadgeProps,
  BreadcrumbItemType,
  BreadcrumbsProps,
  CollapsibleSectionProps,
  RichTextEditorProps,
  RichTextToolbarAction,
  RichTextToolbarPreset,
} from './components/composed';

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

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
  CommandSeparator,
  CommandShortcut,
  Dialog,
  Popover,
  PopoverTrigger,
  PopoverContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuRadioGroup,
  DropdownMenuShortcut,
} from './components/composed';

// Form components
export {
  Input,
  PhoneInput,
  MultiSelect,
  Password,
  Select,
  Sheet,
  Switch,
  Tabs,
  Textarea,
  EditableFormField,
  KDatePicker,
  KDateInput,
  KFormField,
  KFormFieldType,
  FieldColumn,
  FieldGrid,
  FieldGridItem,
  FieldRow,
  FieldStack,
} from './components/composed';
export type {
  InputProps,
  PhoneInputProps,
  PhoneInputValue,
  Option,
  TabItem,
  TabVariant,
  TabsProps,
  SheetProps,
} from './components/composed';

// Data Table
export {
  DataTable,
  DataTableToolbar,
  DataTableFacetedFilter,
  DataTableFooter,
  DataTableViewOptions,
} from './components/composed';
export type { FilterConfig } from './components/composed';

// Theme
export { theme, themeNames, themePlugin } from './styles/theme';

// Providers
export { DialogProvider, useDialog } from './providers/dialog-provider';

// Hooks
export { useAppDialog } from './hooks/use-app-dialog';
export { useIsMobile } from './hooks/use-mobile';

// Utils
export { getAvatarColor, getInitials } from './lib/avatar-utils';
export {
  cn,
  calculateDateRange,
  formatDayWithLeadingZero,
  formatFieldName,
  searchItems,
  getGreeting,
  base64ToFile,
  getProfilePictureSrc,
  safeParseDate,
  toUtcDateOnlyISOString,
  safeFormatDate,
  formatDateTime,
  calculateAge,
  calculateDaysRemaining,
  formatAmount,
} from './lib/utils';
