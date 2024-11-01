import H2 from "../ui/H2";
import Section from "../ui/Section";

export default function Sectors() {
  return (
    <Section id="القطاعات" className="mt-40">
      <div className="w-full">
        <div className="flex items-end justify-end flex-col gap-5">
          <H2 className="text-right" text="القطاعات والانشطه الطبيه" />
          <div className="flex flex-col items-end justify-end gap-5">
            <div className="flex flex-col items-end justify-end gap-3">
              <h3 className="text-xl text-slate-700 font-medium">
                يغطي مجال خدماتنا في المجال الطبي
              </h3>
              <ul className="text-right text-slate-400">
                <li>المؤسسات الطبيه الخاصه والحكوميه</li>
                <li>المراكز الطبيه الخاصه</li>
                <li>الوحدات الصحيه</li>
              </ul>
            </div>
            <div className="flex flex-col items-end justify-end gap-3">
              <h3 className="text-xl text-slate-700 font-medium">
                يغطي مجال خدماتنا في المجال الصناعي
              </h3>
              <ul className="text-right text-slate-400">
                <li>الصناعات المعدنيه والتشكليه ليزر CNC</li>
                <li>الصناعات الغذائية</li>
                <li>مصانع الاعلاف</li>
                <li>الصناعات البلاستيكيه والكرتونيه</li>
                <li>انظمه التحكم في الاضاءه للحيوانات</li>
                <li>صناعات التعبئه والتغليف</li>
                <li>الصناعات الدوائيه</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
