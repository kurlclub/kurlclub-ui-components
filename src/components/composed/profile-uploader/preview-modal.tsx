import { Button } from '@/components/composed/button/button';
import { Dialog } from '@/components/composed/dialog/dialog';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string | null;
  onDelete: () => void;
  onReupload: () => void;
}

export default function PreviewModal({
  isOpen,
  onClose,
  src,
  onDelete,
  onReupload,
}: PreviewModalProps) {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
      title="Profile Picture Preview"
      className="max-w-[500px]"
      footer={
        <div className="flex items-center gap-2">
          <Button variant="destructive" onClick={onDelete}>
            Delete
          </Button>
          <Button onClick={onReupload}>Re-upload</Button>
        </div>
      }
    >
      {src && (
        <div className="flex justify-center">
          <img
            src={src}
            alt="Profile picture"
            className="rounded-full w-[250px] h-[250px] object-cover"
          />
        </div>
      )}
    </Dialog>
  );
}
