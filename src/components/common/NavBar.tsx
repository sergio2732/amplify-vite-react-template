import '@aws-amplify/ui-react/styles.css';
import { Breadcrumbs } from '@aws-amplify/ui-react';

const breadcrumbs = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/example1',
    text: 'Example1',
  },
  {
    href: '/legalDocuments',
    text: 'Legal Documents',
  },
  {
    text: '',
    isCurrent: true,      
  },
];

export const NavBar = () => {
  return (
    <Breadcrumbs.Container
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '10px 0',
      }}
    >
      {breadcrumbs.map(({ href, text, isCurrent }, idx) => (
        <Breadcrumbs.Item key={`${href}${idx}`}>
          <Breadcrumbs.Link
            fontWeight="bold"
            textDecoration="underline"
            fontSize={'1.5rem'}
            color={'black'}
            href={href}
            isCurrent={isCurrent}
          >
            {text}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
      ))}
    </Breadcrumbs.Container>
  );
};
