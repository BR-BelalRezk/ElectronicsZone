import H2 from "../ui/H2";
import Section from "../ui/Section";

export default function About() {
  return (
    <Section id="من نحن" className="mt-20">
      <div className="w-full">
        <div className="flex flex-col items-end justify-end gap-5">
          <H2 text="من نحن" />
          <p className="max-w-xl text-right text-sm md:text-lg font-medium text-slate-700">
            مكتب يقدم خدمات احترافية في مجال الليزر التجميلي والصناعي والاتمتة
            الصناعية واصلاح الالكترونيات وتوريد القطع الخاصه بالمجال الطبي
            والصناعي لدينا فريق ممتاز من المهندسين المحترفين في المجال الطبي
            والصناعي والاصلاحات الالكترونية .تعمل الكترونيكس زون علي اصلاح و
            صيانه اجهزة الليزر التجميلي والليزر الصناعي والأجهزة الطبيه وأجهزة
            المجال الصناعي و اصلاح الالكترونيات الطبيه والصناعية , توريد القطع
            والمستهلكات الخاصه باجهزة الليزر والأجهزة الطبيه .
          </p>
        </div>
      </div>
    </Section>
  );
}
