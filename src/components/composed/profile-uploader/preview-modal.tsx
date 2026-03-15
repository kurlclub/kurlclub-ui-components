import { Button } from '@/components/composed/button/button';
import { Dialog } from '@/components/composed/dialog/dialog';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string | null;
  onDelete: () => void;
  onReupload: () => void;
  readonly?: boolean;
  showDelete?: boolean;
}

export default function PreviewModal({
  isOpen,
  onClose,
  src,
  onReupload,
  readonly = false,
  showDelete = true,
  onDelete,
}: PreviewModalProps) {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
      modal={false}
      title="Profile Picture"
      className="max-w-[400px]"
      footer={
        readonly ? undefined : (
          <div className="flex items-center gap-2 w-full">
            {showDelete ? (
              <Button
                variant="destructive"
                onClick={onDelete}
                className="flex-1"
              >
                Delete
              </Button>
            ) : null}
            <Button onClick={onReupload} className="flex-1">
              Re-upload
            </Button>
          </div>
        )
      }
    >
      {src && (
        <div className="flex items-center justify-center py-4">
          <img
            src={src}
            alt="Profile picture"
            className="max-w-full max-h-[60vh] object-contain rounded-lg"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      )}
    </Dialog>
  );
}
