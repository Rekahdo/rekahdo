// 'use client'

// import { ReactNode } from "react";
// import { Header } from "@/components/shared-ui/header";
// import { Logo } from "@/components/shared-ui/logo";
// import { Container } from "@/components/shared-ui/container";
// import { ThemeToggle } from "@/components/shared-ui/toggle";
// import { Navigation, NavItem } from "@/components/shared-ui/navigation";
// import { ADMIN_DASHBOARD } from "@/app/(admin)/admin/page";
// import {
//   BookDashed,
//   FileText,
//   Download,
//   ExternalLink,
//   Users,
//   Mail,
//   Info,
//   Layers,
//   FolderKanban,
//   PanelTop,
//   PanelBottom,
//   Home,
//   Circle,
// } from "lucide-react";

// export interface LayoutProps {
//   children: ReactNode
// }

// export default function Layout(props: LayoutProps) {
//   // const { isAuthenticated } = useConvexAuth()
//   // if (!isAuthenticated) {
//   //     toast.success("Login to continue to dashboard")
//   //     redirect(ADMIN_WELCOME, RedirectType.push);
//   // }

//   const navItems: NavItem[] = [
//     // ---------- 1. Page navigation ----------
//     {
//       link: {
//         type: "page",
//         href: ADMIN_DASHBOARD.root,
//         label: "Dashboard",
//         icon: <BookDashed className="size-4" />,
//         description: "Overview of everything",
//       },
//     },
//     {
//       link: {
//         type: "page",
//         href: ADMIN_DASHBOARD.header,
//         label: "Header",
//         icon: <PanelTop className="size-4" />,
//       },
//     },
//     {
//       link: {
//         type: "page",
//         href: ADMIN_DASHBOARD.hero,
//         label: "Hero",
//         icon: <Home className="size-4" />,
//       },
//     },
//     {
//       link: {
//         type: "page",
//         href: ADMIN_DASHBOARD.about,
//         label: "About",
//         icon: <Info className="size-4" />,
//       },
//     },
//     {
//       link: {
//         type: "page",
//         href: ADMIN_DASHBOARD.stack,
//         label: "Tech Stack",
//         icon: <Layers className="size-4" />,
//       },
//     },
//     {
//       link: {
//         type: "page",
//         href: ADMIN_DASHBOARD.projects,
//         label: "Projects",
//         icon: <FolderKanban className="size-4" />,
//       },
//     },
//     {
//       link: {
//         type: "page",
//         href: ADMIN_DASHBOARD.contact,
//         label: "Contact",
//         icon: <Mail className="size-4" />,
//       },
//     },
//     {
//       link: {
//         type: "page",
//         href: ADMIN_DASHBOARD.footer,
//         label: "Footer",
//         icon: <PanelBottom className="size-4" />,
//       },
//     },

//     // ---------- 2. Scroll links (use #) ----------
//     {
//       link: {
//         type: "scroll",
//         href: "features",       // → rendered as `#features`
//         label: "Features",
//         offset: 80,
//       },
//     },
//     {
//       link: {
//         type: "scroll",
//         href: "pricing",        // → rendered as `#pricing`
//         label: "Pricing",
//         offset: 100,            // larger offset for sticky header
//       },
//     },
//     {
//       link: {
//         type: "scroll",
//         href: "faq",            // → rendered as `#faq`
//         label: "FAQ",
//       },
//     },

//     // ---------- 3. Download ----------
//     {
//       link: {
//         type: "download",
//         href: "/files/resume.pdf",
//         filename: "Rekahdo-Resume.pdf",
//         label: "Download Resume",
//         icon: <Download className="size-4" />,
//         description: "PDF · 240 KB",
//       },
//     },

//     // ---------- 4. External (opens in new tab) ----------
//     {
//       link: {
//         type: "external",
//         href: "https://github.com/rekahdo",
//         label: "GitHub",
//         icon: <Circle className="size-4" />,
//         description: "Open source work",
//       },
//     },
//     {
//       link: {
//         type: "external",
//         href: "https://docs.example.com",
//         label: "Docs",
//         icon: <ExternalLink className="size-4" />,
//         description: "Guides and reference",
//       },
//     },

//     // ---------- 5. Dropdown (grouped links) ----------
//     {
//       label: "Content",
//       links: [
//         {
//           type: "page",
//           href: ADMIN_DASHBOARD.hero,
//           label: "Hero",
//           icon: <Home className="size-4" />,
//           description: "Landing section lorem Landing section lorem Landing section lorem Landing section lorem Landing section lorem Landing section lorem ",
//         },
//         {
//           type: "page",
//           href: ADMIN_DASHBOARD.about,
//           label: "About",
//           icon: <Users className="size-4" />,
//           description: "Bio and info",
//         },
//         {
//           type: "page",
//           href: ADMIN_DASHBOARD.projects,
//           label: "Projects",
//           icon: <FolderKanban className="size-4" />,
//           description: "Things you've built",
//         },
//         {
//           type: "download",
//           href: "/files/portfolio.pdf",
//           filename: "Portfolio.pdf",
//           label: "Portfolio",
//           icon: <FileText className="size-4" />,
//           description: "Download PDF",
//         },
//       ],
//     },
//   ];

//   return (
//     <>
//       <Container id="admin-header" width={'w400'} height={'header'}>
//         <Header
//           headerLeft={<Logo />}

//           headerCenter={
//             <>
//               <Navigation
//                 orientation={'horizontal'}
//                 textAlign={'center'}
//                 navItems={navItems}
//               />
//             </>
//           }

//           headerRight={
//             <>
//               <ThemeToggle />
//             </>
//           }
//         />

//         {props.children}
//       </Container>

//     </>
//   );
// }
