import Link from 'next/link';

const LinkHOC = ({ children, href, ...props }) => {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};

export default LinkHOC;
