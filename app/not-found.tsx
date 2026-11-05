'use client';

import Link from 'next/link';
import { Home, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BackRoute, HomeRoute } from '@/components/shared-ui/router-navigation';
import { H1 } from '@/components/shared-ui/headings';
import { Ping } from '@/components/shared-ui/ping';

export default function NotFound() {

    return (
        <main className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden px-4 py-16">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
            >
                <div className="h-128 w-lg rounded-full bg-primary/10 blur-[120px] dark:bg-primary/15" />
                <div className="absolute h-full w-full bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="flex flex-col items-center text-center">
                <span className="text-8xl font-black tracking-tighter text-foreground/10 sm:text-9xl md:text-[11rem]">
                    404
                </span>

                <div className='flex flex-col items-center text-center gap-6'>

                    <H1 title="Lost?" />

                    <p className="text-sm text-muted-foreground sm:text-base">
                        This page doesn't exist
                    </p>

                    <div className="flex justify-center gap-4 *:w-full *:max-w-24">
                        <BackRoute variant={'secondary'} />
                        <HomeRoute />
                    </div>
                </div>

            </div>
        </main>
    );
}
