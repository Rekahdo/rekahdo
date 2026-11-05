'use client'

import { Pen } from "lucide-react";
import { Authenticated } from "convex/react";
import { AppForm, AppFormProps } from "./form";
import { FieldValues } from "react-hook-form";

export interface EditPenProps<TValues extends FieldValues>
    extends Omit<AppFormProps<TValues>, "ui"> {
}

export default function EditPen<TValues extends FieldValues>({
    ...formProps
}: EditPenProps<TValues>) {
    return (
        <Authenticated>
            <div className="absolute top-4 right-4">
                <AppForm
                    ui={{
                        type: "dialog",
                        triggerText: "",
                        triggerIcon: <Pen />,
                    }}
                    {...formProps}
                />
            </div>
        </Authenticated>
    );
}