import type { ReactNode } from "react";
import SectionTitle from "./SectionTitle";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

const Section = ({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) => {
  return (
    <section id={id} className={`py-12 ${className}`}>
      {title && <SectionTitle title={title} subtitle={subtitle} />}
      <div>{children}</div>
    </section>
  );
};

export default Section;
