import StaggeredMenu from './StaggeredMenu';

const Navbar = () => {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home section', link: '#hero' },
    { label: 'About', ariaLabel: 'Go to about section', link: '#about' },
    { label: 'Work', ariaLabel: 'Go to work section', link: '#work' },
    { label: 'Process', ariaLabel: 'Go to process section', link: '#experience' },
    { label: 'Contact', ariaLabel: 'Go to contact section', link: '#contact' },
  ];

  const socialItems = [
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/rafiq-sheriff' },
    { label: 'GitHub', link: 'https://github.com/rafiq-sheriff' },
    { label: 'Instagram', link: 'https://www.instagram.com/rafiq_sheriff/' },
  ];

  return (
    <div className="w-full h-full">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering
        displayDownloadCv
        menuButtonColor="#ffffff"
        openMenuButtonColor="#1e1e1e"
        changeMenuColorOnOpen
        colors={['#1e1e1e', '#545454']}
        logoUrl="/assets/icons/logo2.svg"
        accentColor="#545454"
        isFixed
      />
    </div>
  );
};

export default Navbar;
