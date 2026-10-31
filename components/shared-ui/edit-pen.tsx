'use client'

import { Pen } from "lucide-react";
import { Authenticated } from "convex/react";
import { AuthRoute } from "./admin-roles";
import { DialogForm, DialogProps } from "./dialog-form";
import { FieldValues } from "react-hook-form";

export interface EditPenProps<TValues extends FieldValues>
    extends Omit<DialogProps<TValues>, "triggerIcon" | "triggerText" | "triggerVariant"> {
}

export default function EditPen<TValues extends FieldValues>({
    ...dialogProps
}: EditPenProps<TValues>) {
    return (
        <AuthRoute>
            <Authenticated>
                <div className="absolute top-4 right-4">
                    <DialogForm
                        triggerText=""
                        triggerIcon={<Pen />}
                        {...dialogProps}
                    />
                </div>
            </Authenticated>
        </AuthRoute>
    );
}