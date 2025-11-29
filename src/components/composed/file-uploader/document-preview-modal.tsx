import { Dialog } from '@/components/composed/dialog/dialog';

interface DocumentPreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  documentUrl: string;
  title?: string;
}

export function DocumentPreviewModal({
  open,
  onOpenChange,
  documentUrl,
  title = 'Document Preview',
}: DocumentPreviewModalProps) {
  const isImage = /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(documentUrl);

  return (
    <Dialog
      open={open}
      onOpenChange={() => onOpenChange(false)}
      title={title}
      className="max-w-4xl h-[90vh]"
    >
      <div className="flex-1 overflow-auto bg-secondary-blue-700 rounded-lg p-2">
        {isImage ? (
          <div className="flex items-center justify-center h-[calc(90vh-120px)]">
            <img
              src={documentUrl}
              alt={title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        ) : (
          <iframe
            src={documentUrl}
            className="w-full h-[calc(90vh-120px)] border-0 rounded-lg bg-white"
            title={title}
          />
        )}
      </div>
    </Dialog>
  );
}
