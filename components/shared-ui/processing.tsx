'use client'

import { ReactNode, useState, useTransition } from "react";

export interface ProcessingProps {
    idle: ReactNode;
    pending?: ReactNode;
    className?: string;
    onPending?: () => void;
    process: () => void | Promise<void>;
}

export default function Processing(props: ProcessingProps) {

    const { idle, pending, className, onPending, process } = props;

    const [current, setCurrent] = useState<ReactNode>(idle)

    const [isPending, startTransition] = useTransition();

    startTransition(async () => {
        setCurrent(p)
        process()
    })

    return (
        {current}
    );
}
