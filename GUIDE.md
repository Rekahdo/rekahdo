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

vitest for testing in development
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
doc: https://testing-library.com/docs/

react scroll
npm install react-scroll
doc:





- npm run zip: 
- npm run build:
- npx vitest: 
- npx vitest run file.test.ts: 
- npm test file.test.ts: 













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



