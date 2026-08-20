import { Archive, Cloud, Database, FileSignature, FileText, Server, Tags } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { Progress } from "../../../../components/ui/progress";
import { cn } from "../../../../utils/cn";
import { useWeek01Progress } from "../week01Progress";

interface FloatingIcon {
  Icon: typeof Archive;
  label: string;
  top: string;
  left: string;
  speed: number;
  size?: "sm" | "md" | "lg";
}

const floatingIcons: FloatingIcon[] = [
  { Icon: Server, label: "Computadoras", top: "12%", left: "8%", speed: -40, size: "md" },
  { Icon: FileText, label: "Documentos electrónicos", top: "58%", left: "6%", speed: 30, size: "sm" },
  { Icon: Database, label: "SGD", top: "20%", left: "82%", speed: 50, size: "md" },
  { Icon: FileSignature, label: "Firma digital", top: "70%", left: "80%", speed: -30, size: "sm" },
  { Icon: Archive, label: "Archivo electrónico", top: "78%", left: "30%", speed: 20, size: "md" },
  { Icon: Server, label: "Repositorio", top: "10%", left: "45%", speed: 60, size: "sm" },
  { Icon: Cloud, label: "Nube", top: "38%", left: "92%", speed: -20, size: "lg" },
  { Icon: Tags, label: "Metadatos", top: "85%", left: "58%", speed: 35, size: "sm" },
];

const sizeClasses: Record<NonNullable<FloatingIcon["size"]>, string> = {
  sm: "h-10 w-10",
  md: "h-14 w-14",
  lg: "h-16 w-16",
};

/** Large parallax hero opening the Week 1 module — icons orbit a central "Gestión Documental" core. */
export function Week01HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const { percent } = useWeek01Progress();

  function scrollToStart() {
    document.getElementById("objetivos")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-container to-on-primary-fixed-variant p-lg md:p-xl min-h-[26rem] flex flex-col justify-center"
    >
      {floatingIcons.map(({ Icon, label, top, left, speed, size = "md" }, index) => (
        <ParallaxIcon
          key={label}
          Icon={Icon}
          label={label}
          top={top}
          left={left}
          speed={speed}
          progress={scrollYProgress}
          className={sizeClasses[size]}
          delay={index * 0.06}
        />
      ))}

      <div className="relative z-10 max-w-2xl space-y-sm">
        <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-caption font-caption rounded-full font-medium">
          Semana 1
        </span>
        <h1 className="text-display-lg font-display-lg text-white drop-shadow-sm">
          Gestión de Archivos Electrónicos
        </h1>
        <p className="text-body-lg font-body-lg text-white/90 max-w-[36rem]">
          Conceptos fundamentales, alcance y relación con Gestión de Archivos Electrónicos I.
        </p>

        <div className="max-w-xs pt-xs">
          <div className="flex items-center justify-between text-caption font-caption text-white/80 mb-1">
            <span>Progreso de la semana</span>
            <span>{percent}%</span>
          </div>
          <Progress value={percent} className="bg-white/20" indicatorClassName="bg-white" />
        </div>

        <Button variant="secondary" className="border-white text-white hover:bg-white/10 mt-xs" onClick={scrollToStart}>
          Comenzar aprendizaje
        </Button>
      </div>
    </section>
  );
}

interface ParallaxIconProps {
  Icon: typeof Archive;
  label: string;
  top: string;
  left: string;
  speed: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  className?: string;
  delay: number;
}

function ParallaxIcon({ Icon, label, top, left, speed, progress, className, delay }: ParallaxIconProps) {
  const y = useTransform(progress, [0, 1], [0, speed]);

  return (
    <motion.div
      style={{ top, left, y }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="absolute -translate-x-1/2 -translate-y-1/2 z-0"
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-full bg-white/15 backdrop-blur-sm text-white shadow-lg",
          className,
        )}
        title={label}
      >
        <Icon className="h-1/2 w-1/2" />
      </div>
    </motion.div>
  );
}
