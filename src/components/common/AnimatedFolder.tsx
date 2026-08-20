import { Folder, FolderOpen } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { getIcon } from "../../utils/getIcon";

export interface AnimatedFolderDoc {
  id: string;
  title: string;
  icon: string;
  note?: string;
}

interface AnimatedFolderProps {
  label: string;
  docs: AnimatedFolderDoc[];
}

/** Click-to-open folder that reveals its documents with a staggered entrance — used for every "expediente" visual. */
export function AnimatedFolder({ label, docs }: AnimatedFolderProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex flex-col items-center gap-sm mx-auto text-primary-container hover:text-primary transition-colors"
      >
        <motion.div animate={{ rotate: open ? -4 : 0, scale: open ? 1.05 : 1 }} transition={{ duration: 0.3 }}>
          {open ? <FolderOpen size={72} /> : <Folder size={72} />}
        </motion.div>
        <span className="text-label-md font-label-md font-semibold text-on-surface">
          {label} — {open ? "haz clic para cerrar" : "haz clic para abrir"}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-sm mt-lg">
              {docs.map((doc, index) => {
                const Icon = getIcon(doc.icon);
                return (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.06 }}
                    className="rounded-lg border border-outline-variant bg-surface-container-low p-sm flex items-start gap-xs"
                  >
                    <Icon className="text-primary-container shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-label-md font-label-md font-semibold text-on-surface">
                        {index + 1}. {doc.title}
                      </p>
                      {doc.note && <p className="text-caption font-caption text-on-surface-variant mt-0.5">{doc.note}</p>}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
