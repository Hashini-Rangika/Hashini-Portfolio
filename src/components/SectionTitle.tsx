interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  className = "",
}: SectionTitleProps) => {
  return (
    <header className={`mb-8 ${className}`}>
      <h2 className='text-3xl font-bold mb-1'>{title}</h2>
      {subtitle && <p className='text-sm text-slate-400'>{subtitle}</p>}
    </header>
  );
};

export default SectionTitle;
