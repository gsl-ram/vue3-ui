
This is the planned stucture of the project

├── types <-- here we can declare global types that will be used in different packages inside
│   └── vue.d.ts <-- type declaration for the Vue component for Typescript
├── packages
│   ├── base <--- base project, will have the base variables and styles that would be required in multiple packages
│   │   ├── src
│   │   │   ├── style.css
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   ├── buttons <-- button package, all the codes specific to button library will be inside this
│   │   ├── src
│   │   │   ├── Button.vue
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   ├── playground <-- Vue3 Storybook documentation for the project
│   │   ├── src
│   │   │   └── stories
│   │   │       ├── RdmButtonLocal.stories.ts
│   │   │       └── RdmButtonLocal.stories.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
├── package.json
├── .gitignore
└── tsconfig.json


In the root of the project we create
package.json and tsconfig.json

types/vue.d.ts
```
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
```

package.json
```
{
  "name": "ramdayal.m/vue3-ui",
  "description": "A Vue3 UI library",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "pnpm -r build",
    "build:base": "pnpm --filter=@ramdayal.m/vue3-ui-base build",
    "publish:base": "pnpm --filter=@ramdayal.m/vue3-ui-base publish --access public",
  }
}
```

tsconfig.json
```
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": [
    "packages/*/src/**/*",
    "types/**/*.d.ts"
  ],
  "exclude": [
    "node_modules",
    "dist"
  ]
}
```

.gitignore
```
node_modules
dist
```


After making all these files we can start with the creation of the base package

