import Link from 'next/link';

const LinkHOC = ({ children, href }) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

export default LinkHOC;
