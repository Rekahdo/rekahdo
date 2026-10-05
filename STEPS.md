Next.js Initialization
cmd: pnpm create next-app@latest rekahdo

Turbor Pack Configuration  `next.config.ts`
config: turbopackFileSystemCacheForDev: true

Convex installation
doc: https://docs.convex.dev/quickstart/nextjs 
cmd after steps: pnpm dlx convex dev
dashboard: https://dashboard.convex.dev/

Convex with Better Auth
doc: https://labs.convex.dev/better-auth/framework-guides/next
cmd: pnpm install @convex-dev/better-auth-

Generate a secret for encryption and generating hashes
cmd: pnpm convex env set BETTER_AUTH_SECRET=$(node -e "console.log(crypto.randomBytes(32).toString('base64'))")

Shadcn UI Installation
doc: https://ui.shadcn.com/docs/installation/next,ik8
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
spinner: pnpm dlx shadcn@latest add spinner'    
sonner: pnpm dlx shadcn@latest add sonner
avatar: pnpm dlx shadcn@latest add avatar
skeleton: pnpm dlx shadcn@latest add skeleton
hover-card: pnpm dlx shadcn@latest add hover-card
tabs: pnpm dlx shadcn@latest add tabs


Create Schema Validation with Zod library
[doc](https://zod.dev/api)



Create convex database schemas
[doc](https://docs.convex.dev/database/schemas)


Create convex functions (Query, Mutation)
[doc](https://docs.convex.dev/functions/overview)
[query](https://docs.convex.dev/functions/query-functions)
[mutation](https://docs.convex.dev/functions/mutation-functions)

`NOTE:` Authenticate user in convex functions before mutating data.
[doc](https://labs.convex.dev/better-auth/basic-usage/authorization)
[doc-updated](https://labs.convex.dev/better-auth/migrations/migrate-to-0-8#update-authcomponentgetauthuser-usage)
In convex functions inside handler
- Get authenticated user `const user = await authComponent.safeGetAuthUser(ctx)`
- Throw new ConvexError("Not authenticated") if user not found
- perform function action if authenticated


Create Route Handlers for API endpoints
[doc](https://nextjs.org/docs/app/getting-started/route-handlers)


Create Server Functions/Actions to mutate form data in server side
[mutate](https://nextjs.org/docs/app/getting-started/mutating-data)
`NOTE:` Validate parsed form data.
[authComponent.getAuthUser(ctx)](https://labs.convex.dev/better-auth/basic-usage/authorization)
In server actions
- Pass zod form schema data to server function
- Get the parsed zod data `const parsed = schema.safeParse(data)`
- Validate the parsed zod data `if (!parsed.success) throw new Error("Something went wrong :(")`
- Make your API request:
    - server action: `fetch()`, `axios()`
    - query: `useQuery`, `fetchQuery` etc 
    - mutate: `useMutation`,`fetchMutation` etc
    [convex/react](https://docs.convex.dev/api/modules/react)
    [convex/nextjs](https://docs.convex.dev/api/modules/nextjs)
- Programmatically redirect the user when successfull



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