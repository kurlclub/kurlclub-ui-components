import { useDialog } from '@/providers/dialog-provider';

type DialogOptions = {
  title: string;
  description: string;
  variant?: 'default' | 'destructive' | 'success';
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void | Promise<void>;
  onCancel?: () => void;
  loadingLabel?: string;
};

export const useAppDialog = () => {
  const { openDialog } = useDialog();

  const showAlert = (
    options: Omit<DialogOptions, 'confirmLabel' | 'cancelLabel'>
  ) => {
    openDialog({
      ...options,
      confirmLabel: 'OK',
    });
  };

  const showConfirm = (options: DialogOptions) => {
    openDialog({
      ...options,
      confirmLabel: options.confirmLabel || 'Confirm',
      cancelLabel: options.cancelLabel || 'Cancel',
    });
  };

  const showSuccess = (
    options: Omit<DialogOptions, 'variant' | 'confirmLabel' | 'cancelLabel'>
  ) => {
    openDialog({
      ...options,
      variant: 'success',
      confirmLabel: 'OK',
    });
  };

  return { showAlert, showConfirm, showSuccess };
};
