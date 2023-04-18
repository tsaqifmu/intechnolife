const getCurrentYear = () => {
  const now = new Date();
  return now.getFullYear();
};
const currenttYear = getCurrentYear();

const Footer = () => (
  <div>
    <p>{`© Copyright ${currenttYear} Intechnolife`}</p>
  </div>
);

export default Footer;
