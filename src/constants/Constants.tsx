export const navigationList = [
    "About",
    "Gallery",
    "Contact",
]

export interface ImageInfo {
    fileName: string;
    altText: string;
    title: string;
    tags: string[];
}

export const carouselImages: ImageInfo[] = [
    {
        fileName: "DSCF3913.JPG",
        altText: "",
        title: "",
        tags: []
    },
    {
        fileName: "DSCF3871.JPG",
        altText: "",
        title: "",
        tags: []
    },
    {
        fileName: "000085610008.jpg",
        altText: "",
        title: "",
        tags: []
    },
]

export interface SocialMediaInfo {
    name: string;
    url: string;
    icon: string;
}

export const socialMediaList: SocialMediaInfo[] = [
    {
        name: "Instagram",
        url: "https://instagram.com/brando.photography_/",
        icon: "insta.png",
    },
    {
        name: "Twitter",
        url: "https://twitter.com/brandophoto_/",
        icon: "twitter.png",
    },
]