import type { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  bgColor?: 'white' | 'gray' | 'blue';
};

const Section = ({
  children,
  className = '',
  id,
  bgColor = 'white',
}: SectionProps) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-50',
  };

  return (
    <section id={id} className={`py-16 ${bgColors[bgColor]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section; 