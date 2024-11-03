interface NavItem {
    title: string;
    path: string;
}
export const navbar: NavItem[] = [
    { title: 'Home',path: '/'},
    { title: 'Topics', path: '/blog'},
    { title: 'My Health', path: '/categories'},
    { title: 'Resources', path: '/resources'},
    { title: 'About',path: '/about'},
    { title: 'Contact', path: '/contact'},
   
];

interface FooterLink {
    path: string;
    source: string;
    alt: string;

}

export const footerLinks: FooterLink[] = [
    {
        path: 'https://www.facebook.com/',
        source: 'https://img.icons8.com/color/48/000000/facebook.png',
        alt: 'facebook'
    },
    {
        path: 'https://www.twitter.com/',
        source: 'https://img.icons8.com/color/48/000000/twitter.png',
        alt: 'twitter'
    },
    {
        path: 'https://www.instagram.com/',
        source: 'https://img.icons8.com/color/48/000000/instagram-new.png',
        alt: 'instagram'
    },
    {
        path: 'https://www.linkedin.com/',
        source: 'https://img.icons8.com/color/48/000000/linkedin.png',
        alt: 'linkedin'
    }
]