import { standards } from "@/constants";
import H2 from "../ui/H2";
import Section from "../ui/Section";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Standards() {
  return (
    <Section id="المعايير" className="mt-40">
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <H2 className="text-center" text="ما هي المعايير التي تمييز المكتب ؟" />
        <Table>
          <TableCaption>المعايير.</TableCaption>

          <TableBody>
            {standards.map((item) => (
              <TableRow key={item.header}>
                <TableCell className="text-xs md:text-lg text-left text-slate-600">
                  {item.description}
                </TableCell>
                <TableCell className="text-right text-lg md:text-2xl text-slate-800">
                  {item.header}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Section>
  );
}
