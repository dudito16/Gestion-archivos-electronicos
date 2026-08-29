import { SectionHeading } from "../../../../components/common/SectionHeading";
import { DragDropClassifier } from "../../../../components/common/DragDropClassifier";
import { dragDropCategories, dragDropItems } from "../week04.data";

export function Activity1ClassifySection() {
  return (
    <section id="actividad-clasificar" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Actividad 1"
        title="¿Qué tipo de metadato es?"
        description="Arrastra cada campo hacia su tipo (o tócalo y luego toca el tipo, si usas pantalla táctil)."
      />
      <DragDropClassifier items={dragDropItems} categories={dragDropCategories} />
    </section>
  );
}
