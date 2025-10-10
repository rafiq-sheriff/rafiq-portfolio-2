// Scaffold: Navbar using StaggeredMenu
'use client';
import StaggeredMenu from '@/components/ui/StaggeredMenu';

const StaggeredMenuNavbar = () => {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/#about' },
    { label: 'Projects', ariaLabel: 'View our services', link: '/#process' },
    { label: 'Experience', ariaLabel: 'View our services', link: '/#process' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/#contact' },
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
  ];

  return (
    <div style={{ height: '100vh', background: '#1a1a1a' }}>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#5227FF']}
        logoUrl="/images/logo.svg"
        accentColor="#ff6b6b"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
        isFixed={true}
      />
    </div>
  );
};

export default StaggeredMenuNavbar;
