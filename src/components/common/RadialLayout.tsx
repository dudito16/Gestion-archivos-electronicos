import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { getIcon } from "../../utils/getIcon";

interface RadialNode {
  id: string;
  label: string;
  icon: string;
}

interface RadialLayoutProps {
  center: { label: string; icon: string };
  nodes: RadialNode[];
  activeId?: string | null;
  onNodeClick?: (id: string) => void;
  className?: string;
}

/**
 * Generic radial diagram: a central concept with N satellite nodes connected by lines.
 * Renders as a true circle on desktop (md+) and falls back to a wrapped grid on mobile,
 * where a real radial layout has no room to breathe.
 */
export function RadialLayout({ center, nodes, activeId, onNodeClick, className }: RadialLayoutProps) {
  const CenterIcon = getIcon(center.icon);
  const radius = 40; // percentage of container

  const positions = nodes.map((node, index) => {
    const angle = (2 * Math.PI * index) / nodes.length - Math.PI / 2;
    return {
      ...node,
      x: 50 + radius * Math.cos(angle),
      y: 50 + radius * Math.sin(angle),
    };
  });

  return (
    <div className={cn(className)}>
      {/* Desktop: true radial layout */}
      <div className="hidden md:block relative aspect-square w-full max-w-[36rem] mx-auto">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {positions.map((node) => (
            <line
              key={node.id}
              x1={50}
              y1={50}
              x2={node.x}
              y2={node.y}
              className={cn(
                "transition-colors",
                activeId === node.id ? "stroke-primary-container" : "stroke-outline-variant",
              )}
              strokeWidth={activeId === node.id ? 0.6 : 0.3}
            />
          ))}
        </svg>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-full bg-primary-container text-on-primary text-center shadow-md px-2"
        >
          <CenterIcon size={22} />
          <span className="text-caption font-caption font-semibold leading-tight">{center.label}</span>
        </motion.div>

        {positions.map((node, index) => {
          const NodeIcon = getIcon(node.icon);
          const isActive = activeId === node.id;
          return (
            <motion.button
              key={node.id}
              type="button"
              onClick={() => onNodeClick?.(node.id)}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.06 }}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              className={cn(
                "absolute -translate-x-1/2 -translate-y-1/2 flex w-24 flex-col items-center gap-1 rounded-lg border px-2 py-2 text-center shadow-sm transition-colors",
                isActive
                  ? "border-primary-container bg-secondary-container text-on-secondary-container"
                  : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
              )}
            >
              <NodeIcon size={18} className={isActive ? "text-on-secondary-container" : "text-primary-container"} />
              <span className="text-caption font-caption font-medium leading-tight">{node.label}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Mobile: wrapped grid */}
      <div className="md:hidden grid grid-cols-2 gap-xs">
        {nodes.map((node, index) => {
          const NodeIcon = getIcon(node.icon);
          const isActive = activeId === node.id;
          return (
            <motion.button
              key={node.id}
              type="button"
              onClick={() => onNodeClick?.(node.id)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: index * 0.04 }}
              className={cn(
                "flex flex-col items-center gap-1 rounded-lg border px-2 py-3 text-center transition-colors",
                isActive
                  ? "border-primary-container bg-secondary-container text-on-secondary-container"
                  : "border-outline-variant bg-surface-container-lowest text-on-surface",
              )}
            >
              <NodeIcon size={18} className={isActive ? "text-on-secondary-container" : "text-primary-container"} />
              <span className="text-caption font-caption font-medium leading-tight">{node.label}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
