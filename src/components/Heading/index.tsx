import React from 'react';

interface IHeadingProps {
  headerRender: string;
  className?: string;
}

const Heading: React.FC<IHeadingProps> = ({ children, headerRender }) => {
  const Tag = `h${headerRender}` as keyof JSX.IntrinsicElements;

  return <Tag>{children}</Tag>;
};

export default Heading;
