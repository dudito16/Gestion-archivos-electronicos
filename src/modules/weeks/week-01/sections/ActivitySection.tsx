import { SectionHeading } from "../../../../components/common/SectionHeading";
import { DragDropClassifier } from "../../../../components/common/DragDropClassifier";
import { dragDropCategories, dragDropItems } from "../week01.data";
import { useWeek01Progress } from "../week01Progress";

export function ActivitySection() {
  const { markComplete } = useWeek01Progress();

  return (
    <section id="actividad" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Actividad 1"
        title="Clasifica los objetos documentales"
        description="Arrastra cada documento hacia la categoría correcta (o tócalo y luego toca la categoría, si usas pantalla táctil)."
      />
      <DragDropClassifier
        items={dragDropItems}
        categories={dragDropCategories}
        onComplete={() => markComplete("actividad-clasificacion")}
      />
    </section>
  );
}
