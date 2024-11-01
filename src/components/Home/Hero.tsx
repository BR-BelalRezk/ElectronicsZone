import Link from "next/link";
import { Button } from "../ui/button";
import Section from "../ui/Section";

export default function Hero() {
  return (
    <Section id="الرئيسية" className="py-20">
      <article className="container mx-auto">
        <div className="w-full">
          <div className="flex items-start justify-start flex-col gap-3 md:gap-5">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-700">
              Electronics Zone
            </h1>
            <p className=" max-w-lg font-medium">
              <span className="mt-2.5 block text-lg text-slate-600">
                رسالتنا: تقديم حلول مبتكرة وموثوقة تعزز الكفاءة والفعالية
                التشغيلية لعملائنا وتجعلنا في الوقت نفسه عنصرًا أساسيًّا في نجاح
                وتطور شركائنا وموظفينا
              </span>
            </p>
            <div className="flex items-center justify-center gap-5">
              <Button variant={"default"}>
                <Link href={"#الخدمات"}>الخدمات</Link>
              </Button>
              <Button variant={"secondary"}>
                <Link href={"#المنتجات"}>المنتجات</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </Section>
  );
}
