import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const navbarItems = [
  "الرئيسية",
  "من نحن",
  "المعايير",
  "القطاعات",
  "الخدمات",
  "المنتجات",
  ,
] as const;

export const socials = [
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/profile.php?id=61564930793350&mibextid=ZbWKwL",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/electronic-zone/",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/+2001551751883",
  },
  {
    icon: SiGmail,
    href: "mailto: electronics.zone95@gmail.com",
  },
] as const;

export const standards = [
  {
    header: "السهولة",
    description:
      "يوجد الكثير من الحلول التقنية المتكاملة، ولكن نحن نتميز بسهولة حلولنا المتكاملة",
  },
  {
    header: "الاستدامة",
    description:
      "استدامة تطور ونمو المنتجات والخدمات، مع استدامة الشراكة والتعاون مع عملائنا.",
  },
  {
    header: "الجودة",
    description:
      "حرصنا الدائم على استيفاء كل معايير الجودة والإتقان هو سر تميز منتجاتنا وخدماتنا",
  },
  {
    header: "الموثوقية",
    description:
      "تتميز منتجاتنا التقنية بموثوقيتها العالية في التعامل مع البيانات وتخزينها بطرق آمنة.",
  },
  {
    header: "الابتكار",
    description:
      "نفخر بأننا نقدم حلول تقنية فريدة ومبتكرة، تجعلنا في مقدمة اختيارات عملائنا.",
  },
  {
    header: "رؤيتنا",
    description:
      "أن نصبح الشريك التقني الأمثل للشركات والمؤسسات الرائدة في المملكة العربية السعودية والشرق الأوسط، وأن تصبح منتجاتنا وخدماتنا التقنية في متناول الجميع.",
  },
] as const;

export const services = [
  "خدمة اصلاح وصيانة الالكترونيات الصناعيه والطبيه",
  "خدمة اصلاح وصيانة اجهزة الليزر التجميلي والصناعي",
  "خدمة اصلاح و صيانه الأجهزة الطبيه ICU",
  "خدمة اصلاح وصيانة الأجهزة والكروت الخاصه بالأجهزة الصناعيه",
] as const;
