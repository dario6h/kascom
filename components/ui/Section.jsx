import Container from './Container';

export default function Section({
  children,
  className = "",
  containerClassName = "",
  background = "white",
  style
}) {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900',
    primary: 'bg-primary-50'
  };

  return (
    <section className={`py-16 md:py-24 ${bgColors[background]} ${className}`} style={style}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}