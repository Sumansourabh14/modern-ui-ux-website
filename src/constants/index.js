// Static texts to be displayed on the website.

import a from '../assets/a.png';
import b from '../assets/b.png';
import c from '../assets/c.png';
import d from '../assets/d.png';
import e from '../assets/e.png';
import f from '../assets/f.png';
import g from '../assets/g.png';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';

export const navLinks = [
    {
        id: "home",
        nav: "Home",
    },
    {
        id: "pricing",
        nav: "pricing",
    },
    {
        id: "download",
        nav: "download",
    },
    {
        id: "nfts",
        nav: "NFTs",
    },
    {
        id: "contact",
        nav: "contact",
    },
]

export const heroContent = {
    id: 1,
    title: "Discover and collect rare NFTs",
    body: "The most secure marketplace for buying and selling unique crypto assets.",
    buttonText1: "Buy Nfts",
    buttonText2: "Sell Nfts",
    image: d,
}

export const clientsContent = [
    {
        id: 1,
        image: logo1,
        altText: "Fast Company",
    },
    {
        id: 2,
        image: logo2,
        altText: "Tech Crunch",
    },
    {
        id: 3,
        image: logo3,
        altText: "MIT",
    },
    {
        id: 4,
        image: logo4,
        altText: "Forbes",
    },
];

export const analytics = {
    id: 1,
    subtitle: "analytics",
    title: "Built-in analytics to track your NFTs",
    body: "Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.",
    buttonText: "View our pricing",
    image: g,
}

export const getApp = {
    id: 1,
    subtitle: "get our app",
    title: "Browse NFTs from your smartphone",
    body: "Our Krypto app is the easiest way to keep track of your assets when you’re on the go.",
    buttonText: "download on ios",
    image: f,
}

export const access = {
    id: 1,
    subtitle: "24/7 access",
    title: "sell your NFTs from anywhere at anytime",
    body: "Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.",
    buttonText: "get started",
    image: e,
}

export const testimonials = {
    subtitle: "testimonials",
    title: "Read what others have to say",
    content: [
    {
        id: "feedback-1",
        img: a,
        name: "Olivia Cole",
        quote: "My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business through organic search and content marketing.",
    },
    {
        id: "feedback-2",
        img: b,
        name: "Evan White",
        quote: "The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012.",
    },
    {
        id: "feedback-3",
        img: c,
        name: "Jessica Page",
        quote: "I was skeptical of SEO and content marketing at first, but the Lorem Ipsum Company not only proved itself financially speaking, but the response I have received from customers is incredible. The work is top-notch and I consistently outrank all my competitors on Google.",
    },
]};

export const cta = {
    subtitle: "Are your ready?",
    title: "Be a part of the next big thing",
    buttonText: "Get started",
}

export const footerContent = [
    {
        title: "krypto",
        list: [
            {
                name: "Home",
                link: "#",
            },
            {
                name: "About",
                link: "#",
            },
            {
                name: "Buy NFTs",
                link: "#",
            },
            {
                name: "Contact",
                link: "#",
            },
        ]
    },
    {
        title: "market",
        list: [
            {
                name: "Browse NFTs",
                link: "#",
            },
            {
                name: "Buy NFTs",
                link: "#",
            },
            {
                name: "Sell NFTs",
                link: "#",
            },
        ]
    },
    {
        title: "contact",
        list: [
            {
                name: "Email",
                link: "#",
            },
            {
                name: "LinkedIn",
                link: "#",
            },
            {
                name: "Instagram",
                link: "#",
            },
            {
                name: "Twitter",
                link: "#",
            },
        ]
    },
]