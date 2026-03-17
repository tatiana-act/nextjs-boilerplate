"use client";

import { Select } from "@headlessui/react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { TourProgram } from "@/types/tour";

type Props<TFormValues extends FieldValues> = {
    control: Control<TFormValues>;
    name: Path<TFormValues>;
    allTours: Map<string, TourProgram>;
    defaultOptionValueText: string;
    onSelectionChange?: (id: string, title: string) => void;
};

export function TourSelect<TFormValues extends FieldValues>({
                                                                   control,
                                                                   name,
                                                                   allTours,
                                                                   defaultOptionValueText,
                                                                   onSelectionChange,
                                                               }: Props<TFormValues>) {
    const defaultOptionValue = "";
    
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                return (
                    <Select
                        name={field.name}
                        value={field.value || defaultOptionValue}
                        onChange={(e) => {
                            const selectedId = e.target.value;
                            field.onChange(selectedId);
                            if (onSelectionChange && selectedId) {
                                const selectedTour = allTours.get(selectedId);
                                if (selectedTour) {
                                    onSelectionChange(selectedId, selectedTour.title);
                                }
                            } else if (onSelectionChange && !selectedId) {
                                onSelectionChange('', '');
                            }
                        }}
                        className="w-full p-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                        <option value={defaultOptionValue} disabled>{defaultOptionValueText}</option>
                        {Array.from(allTours.entries()).map(([id, tour]) => (
                            <option key={id} value={id}>
                                {tour.title}
                            </option>
                        ))}
                    </Select>
                );
            }}
        />
    );
}