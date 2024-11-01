import H2 from "../ui/H2";
import Section from "../ui/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Products() {
  return (
    <Section id="المنتجات" className="mt-40">
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <H2 text="المنتجات" className="text-center" />
        <div className="w-full">
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-lg mx-auto"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                قطع الغيار والمستهلكات التي نقوم بتوريدها في مجال الليزر
                التجميلي
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                قطع الغيار الخاصه بالليزر الصناعي
              </AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                قطع الغيار الخاصه بأجهزة المجال الصناعي
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Section>
  );
}
