import { services } from "@/constants";
import H2 from "../ui/H2";
import Section from "../ui/Section";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Services() {
  return (
    <Section id="الخدمات" className="mt-40">
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <div className="flex items-center justify-center flex-col gap-3">
          <H2 text="خدماتنا" className="text-center" />
          <p className="max-w-sm text-center text-lg font-medium text-slate-700">
            تقدم الكترونيكس زون خدمات لعملائها بجودة واتقان، يفخر بها العميل بكل
            ثقه ونجاح
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent>
            {services.map((item, index) => (
              <CarouselItem key={index} className="sm:basis-1/2">
                <div className="p-1">
                  <Card className="bg-slate-300 text-slate-700">
                    <CardContent className="flex sm:aspect-square h-48  sm:size-auto items-center justify-center sm:p-5">
                      <span className="text-lg font-semibold text-center">
                        {item}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Section>
  );
}
