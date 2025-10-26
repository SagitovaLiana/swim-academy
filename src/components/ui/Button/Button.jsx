import './Button.css';

const Button = ({ children, href, external = false }) => {
  const className = "button text-default";
  if (external) {
    return (
      <a href={href} className={className} target="_blank"rel="noopener noreferrer" >
        {children} </a>
    );
  }
  return (
    <a href={href} className={className}>{children}</a>
  );
};

export default Button;
