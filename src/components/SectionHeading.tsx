import type { ReactNode } from 'react';

type SectionHeadingProps = {
  title: string;
  subtitle?: string | ReactNode;
  centered?: boolean;
  className?: string;
  highlight?: boolean;
};

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  className = '',
  highlight = false,
}: SectionHeadingProps) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${highlight ? 'text-blue-600' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl text-gray-600 leading-relaxed ${centered ? 'mx-auto' : ''} max-w-3xl`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading; 