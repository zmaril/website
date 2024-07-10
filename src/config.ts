import { DARK_MODE } from '@constants/constants'
import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Thoughts on Display',
  subtitle: 'Zack Maril\'s Blog',
  lang: 'en',         // 'en', 'zh_CN', 'zh_TW', 'ja'
  themeColor: {
    hue: 0,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: true,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: 'assets/images/profile.jpg', 
    position: 'center', // Equivalent to object-position, defaults center
  },
  favicon: [    // Leave this array empty to use the default favicon
     {
       src: '/favicon/favicon.ico',    // Path of the favicon, relative to the /public directory
      //  theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
      //  sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
     }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/profile.jpg',
  name: 'Zack Maril',
  bio: 'Journal of a man about town on the world wide web. ',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://twitter.com/zackmaril',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/zmaril',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}



export const mode = DARK_MODE; 