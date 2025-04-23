import { ReactNode } from 'react';

interface CardProps {
  className?: string;
  children: ReactNode;
}

const Card = ({ className, children }: CardProps) => (
  <div className={`bg-white p-4 rounded-xl shadow ${className}`}>
    {children}
  </div>
);

export default Card;
