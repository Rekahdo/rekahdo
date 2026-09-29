Next.js Initialization
cmd: pnpm create next-app@latest rekahdo

Turbor Pack Configuration  ```next.config.ts```
config: turbopackFileSystemCacheForDev: true

Convex installation
doc: https://docs.convex.dev/quickstart/nextjs 
cmd after steps: pnpm dlx convex dev
dashboard: https://dashboard.convex.dev/

Shadcn UI Installation
doc: https://ui.shadcn.com/docs/installation/next
cmd: pnpm dlx shadcn@latest init

React Hook Form Installation
doc: https://react-hook-form.com/get-started#Quickstart
cmd: pnpm install react-hook-form

Zod
doc: https://zod.dev/
cmd: pnpm install zod

Lucide React Icon
doc: https://lucide.dev/icons
cmd: install lucide-react 

Shadcn Dark Theme
doc: https://ui.shadcn.com/docs/dark-mode/next
cmd: pnpm add next-themes

React Scroll
doc: https://www.npmjs.com/package/react-scroll?activeTab=readme
cmd: pnpm install react-scroll

Shadcn UI Component Installation
button: pnpm dlx shadcn@latest add button
aspect-ratio: pnpm dlx shadcn@latest add aspect-ratio
sheet: pnpm dlx shadcn@latest add sheet
drawer: pnpm dlx shadcn@latest add drawer
card: pnpm dlx shadcn@latest add card
field: pnpm dlx shadcn@latest add field
input: pnpm dlx shadcn@latest add input
textarea: pnpm dlx shadcn@latest add textarea
seperator: pnpm dlx shadcn@latest add separator
progress: pnpm dlx shadcn@latest add progress
switch: pnpm dlx shadcn@latest add switch
combobox: pnpm dlx shadcn@latest add combobox
select: pnpm dlx shadcn@latest add select
spinner: pnpm dlx shadcn@latest add spinner
sonner: pnpm dlx shadcn@latest add sonner
avatar: pnpm dlx shadcn@latest add avatar
skeleton: pnpm dlx shadcn@latest add skeleton
hover-card: pnpm dlx shadcn@latest add hover-card








DEPLOYMENT ON VERCEL
doc: https://docs.convex.dev/production/hosting/vercel
1. Navigate to project dashboard on Convex
2. Navigate to general in settings
3. Create deploy key and check `deployment:deploy`
4. Copy deploy key and head to vercel
5. Create new project deployment 
6. Expand `Build and Output Settings`
7. Enable `Build Command` and paste in command `pnpm convex deploy --cmd 'npm run build'`
8. Expand `Environment Variables`
9. First variable name `CONVEX_DEPLOY_KEY` and paste copied `Deploy Key` in the value
10. Import Environment variables from project and deploy