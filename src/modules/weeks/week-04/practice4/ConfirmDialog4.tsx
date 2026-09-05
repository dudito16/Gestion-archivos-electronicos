import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";

interface Props {
  title: string;
  message: string;
  confirmLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDialog4({ title, message, confirmLabel, onConfirm, onCancel }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-md" role="alertdialog" aria-modal="true">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-sm rounded-xl bg-surface-container-lowest p-lg shadow-md space-y-md text-center"
      >
        <p className="text-headline-md font-headline-md text-on-surface">{title}</p>
        <p className="text-body-md font-body-md text-on-surface-variant">{message}</p>
        <div className="flex justify-center gap-sm">
          <Button variant="secondary" onClick={onCancel}>
            Cancelar
          </Button>
          <Button onClick={onConfirm}>{confirmLabel}</Button>
        </div>
      </motion.div>
    </div>
  );
}
