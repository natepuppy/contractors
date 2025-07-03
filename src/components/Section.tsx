import type { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  bgColor?: 'white' | 'gray' | 'blue' | 'gradient';
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
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-50',
  };

  return (
    <section id={id} className={`py-20 ${bgColors[bgColor]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section; 