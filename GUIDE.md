- (default) : Unprefixed -> Targets < 640px (Mobile view)
- sm:       : min-width: 640px  (Large phones / Small tablets)
- md:       : min-width: 768px  (Tablets / Small laptops)
- lg:       : min-width: 1024px (Laptops / Desktops)
- xl:       : min-width: 1280px (Large Desktop screens)
- 2xl:      : min-width: 1536px (Extra Large / 4K monitors)



TAILWIND CSS BREAKPOINT & VARIANT REFERENCE
=============================================================================

sm: 640px - 767px
min-sm: screen >= 640px  (Standard `sm:` — applies from 640px and up)
max-sm: screen < 640px   (Applies ONLY below 640px, i.e., @media (max-width: 639px))

md: 768px - 1023px
min-md: screen >= 768px  (Standard `md:` — applies from 768px and up)
max-md: screen < 768px   (Applies ONLY below 768px, i.e., @media (max-width: 767px))

lg: 1024px - 1279px
min-lg: screen >= 1024px (Standard `lg:` — applies from 1024px and up)
max-lg: screen < 1024px  (Applies ONLY below 1024px, i.e., @media (max-width: 1023px))

xl: 1280px - 1535px
min-xl: screen >= 1280px (Standard `xl:` — applies from 1280px and up)
max-xl: screen < 1280px  (Applies ONLY below 1280px, i.e., @media (max-width: 1279px))

2xl: 1536px and above
min-2xl: screen >= 1536px (Standard `2xl:` — applies from 1536px and up)
max-2xl: screen < 1536px  (Applies ONLY below 1536px, i.e., @media (max-width: 1535px))

=============================================================================
NOTE: `max-*` modifiers (like `max-md:hidden`) are built-in Tailwind v3.2+ 
utilities used to target screens strictly smaller than the given breakpoint.



NPM COMMANDS
- npm create vite



axios
npm install axios
docs: https://axios.rest/pages/getting-started/first-steps

dayjs
npm install dayjs
doc: https://day.js.org/

react-router
npm install react-router
doc: https://reactrouter.com/start/declarative/routing

tailwindcss
npm install tailwindcss @tailwindcss/vite
doc: https://tailwindcss.com/docs/installation/using-vite

shadcn.ui
npx shadcn@latest init -t vite
doc: https://ui.shadcn.com/docs/installation

vitest for testing in development
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
doc: https://testing-library.com/docs/

react scroll
npm install react-scroll
doc:

lucid react for icon
npm install lucide-react 
doc: https://lucide.dev/icons

tweakcn
doc: https://tweakcn.com/editor/theme




- npm run zip: 
- npm run build:
- npx vitest: 
- npx vitest run file.test.ts: 
- npm test file.test.ts: 









SHADCN.UI
Configure tsconfig.app.json
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
  }
}
```

Configure tsconfig.json
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Configure vite.config.ts
```typescript
import path from "path"
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

run commands
- npm install -D @types/node
- npx shadcn@latest init -t vite








VITEST
create file: setupTests.ts
inside file: type {
    import '@testing-library/jest-dom';
}

create file: vitest.config.ts
inside file: type {
    import { defineConfig } from 'vitest/config'
    import react from '@vitejs/plugin-react'

    export default defineConfig({
        plugins: [react()],
        test: {
            environment: 'jsdom',
            globals: true,
            setupFiles: './setupTests.ts',
        }
    });
}






RUNNING BUILD COMMAND
command: npm run build
inside file "vite.config.ts", add this inside {
    export default defineConfig({
        build: {
            outDir: "../comeshop-js-backend/dist",
        },
    });
}







oxc-transform-react
inside file "vite.config.ts", add this inside {
    export default defineConfig({
        plugins: [
            react({
                compiler: true,
            })
        ],
    });
}







tailwind css
inside file "vite.config.ts", add this inside {
    import tailwindcss from '@tailwindcss/vite'

    export default defineConfig({
        plugins: [
            tailwindcss()
        ],
    });

    Note: type is your css file "@import "tailwindcss";"
}







Typescript
inside file "tsconfig.app.json", type this to allow javascript import in typescript {
    {
        "compilerOptions": {
            "allowJs": true,
        },
    }
}



