// import { ReactNode } from "react";
// import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";


// export interface AppTabProps {
//     className: string;
//     tabsDetails: Record<string, ReactNode>[]
// }

// export default function AppTab({className, tabsDetails}: AppTabProps) {
    
//     return (
//         <Tabs defaultValue={tabsDetails[0].key} className="flex flex-col items-center gap-8 w-full">
//             <TabsList className="bg-card/80 dark:bg-card/60 backdrop-blur-md border border-border/70 p-0 h-fit rounded-full gap-1 sticky top-20 z-20 shadow-sm max-w-fit">
//                 {tabs.map((tab) => (
//                     <TabsTrigger
//                         key={tab}
//                         value={tab}
//                         className={cn(
//                             "capitalize rounded-full px-4 sm:px-6 py-4 text-xs sm:text-sm font-medium transition-all",
//                             "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
//                         )}
//                     >
//                         {tab}
//                     </TabsTrigger>
//                 ))}
//             </TabsList>

//             {tabs.map((tab) => {
//                 const filtered = projects.filter((p) => tab === "all" || p.status === tab);

//                 return (
//                     <TabsContent
//                         key={tab}
//                         value={tab}
//                         className="w-full mt-0 focus-visible:outline-none"
//                     >
//                         {filtered.length === 0 ? (
//                             <p className="text-center text-sm text-muted-foreground py-16">
//                                 No projects in this category yet.
//                             </p>
//                         ) : (
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full items-stretch">
//                                 {filtered.map((project) => (
//                                     <Project key={project.title} project={project} />
//                                 ))}
//                             </div>
//                         )}
//                     </TabsContent>
//                 );
//             })}
//         </Tabs>
//     );
// }
