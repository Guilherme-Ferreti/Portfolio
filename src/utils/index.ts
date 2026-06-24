export function image(path: string) {
  return import.meta.env.VITE_BASE_URL + `images/${path}`;
}

export const technologies = {
  css: {
    name: 'CSS',
    iconPath: image('icons/css.svg'),
  },
  filament: {
    name: 'Filament PHP',
    iconPath: image('icons/filamentphp.svg'),
  },
  flask: {
    name: 'Flask',
    iconPath: image('icons/flask.svg'),
  },
  html: {
    name: 'HTML',
    iconPath: image('icons/html.svg'),
  },
  inertia: {
    name: 'Inertia',
    iconPath: image('icons/inertiajs.svg'),
  },
  javascript: {
    name: 'Javascript',
    iconPath: image('icons/javascript.svg'),
  },
  laravel: {
    name: 'Laravel',
    iconPath: image('icons/laravel.svg'),
  },
  livewire: {
    name: 'Livewire',
    iconPath: image('icons/livewire.svg'),
  },
  nativephp: {
    name: 'Nativephp',
    iconPath: image('icons/nativephp.svg'),
  },
  nuxt: {
    name: 'Nuxt',
    iconPath: image('icons/nuxt.svg'),
  },
  phpstan: {
    name: 'PHPStan',
    iconPath: image('icons/phpstan.svg'),
  },
  python: {
    name: 'Python',
    iconPath: image('icons/python.svg'),
  },
  sass: {
    name: 'SASS',
    iconPath: image('icons/sass.svg'),
  },
  tailwind: {
    name: 'Tailwind',
    iconPath: image('icons/tailwind.svg'),
  },
  typescript: {
    name: 'Typescript',
    iconPath: image('icons/typescript.svg'),
  },
  vue: {
    name: 'Vue',
    iconPath: image('icons/vue.svg'),
  },
};
