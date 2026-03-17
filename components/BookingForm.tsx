'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition, useMemo, useActionState } from 'react';
import { getBookingFormSchema, bookingFormInitState, BookingFormData } from '@/app/zbkschema';
import { submitBookingForm } from "@/app/actions/bookTour";
import { useTranslations } from "next-intl";
import { TourProgram } from "@/types/tour";
import { TourSelect } from "@/components/TourSelect";

interface BookingFormProps {
    allTours: Map<string, TourProgram>;
    onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ allTours, onClose }) => {
    const t = useTranslations('BookingForm');
    const schema = useMemo(() => getBookingFormSchema(t), [t]);

    const { register, control, handleSubmit, formState: { errors }, setValue } = useForm<BookingFormData>({
        resolver: zodResolver(schema),
    });
    const [state, formAction, isPending] = useActionState(submitBookingForm, bookingFormInitState);
    const [isTransitioning, startTransition] = useTransition();

    const isSubmitting = isPending || isTransitioning;

    useEffect(() => {
        if (state.success) {
            onClose();
        }
    }, [state.success, onClose]);

    useEffect(() => {
        setValue('name', state.name || '');
        setValue('contact', state.contact || '');
        setValue('tour', state.tour || '');
        setValue('tourId', state.tourId || '');
        setValue('date', state.date || '');
        setValue('groupSize', state.groupSize || 3);
        setValue('extra', state.extra || '');
    }, [state, setValue]);
    return (
        // <div className="tour-body">Большое спасибо, что вы посетили тур "{tourName}". Пожалуйста опишите свои впечатления:</div>
        <form action={formAction} onSubmit={(e) => {
            e.preventDefault();
            handleSubmit((data) => {
                // When valid, run the server action inside transition
                startTransition(() => {
                    const formData = new FormData();
                    Object.entries(data).forEach(([key, value]) => {
                        formData.append(key, value?.toString() || '');
                    });
                    formAction(formData);
                });
            })(e);
        }}>
            <div className="form-body">{t('body')}
                <div>
                    <label htmlFor="name" className="block text-sm font-bold mb-2">
                        {t('name')}
                    </label>
                    <input
                        type="text"
                        id="name"
                        autoComplete="name"
                        required
                        {...register('name')}
                        className="w-full p-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                </div>
                <div>
                    <label htmlFor="contact" className="block text-sm font-bold mb-2">
                        {t('contact')}
                    </label>
                    <input
                        type="text"
                        id="contact"
                        autoComplete="email"
                        required
                        {...register('contact')}
                        className="w-full p-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">{t('tourLabel')}</label>
                    <TourSelect
                        control={control}
                        name="tourId"
                        allTours={allTours}
                        defaultOptionValueText={t('tourDefaultSelectOption')}
                        onSelectionChange={(id, title) => {
                            setValue('tour', title);
                        }}
                    />
                    <input type="hidden" {...register('tour')} />
                    {errors.tourId && <div className="form-error">{errors.tourId.message}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="date" className="block text-sm font-bold mb-2">{t('dateLabel')}</label>
                    <input
                        type="date"
                        id="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        {...register('date')}
                        className="w-full p-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    {errors.date && <div className="form-error">{errors.date.message}</div>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">{t('extraLabel')}</label>
                    <textarea
                        rows={2}
                        className="w-full p-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        {...register('extra')}
                    />
                    {errors.extra && <div className="form-error">{errors.extra.message}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="groupSize" className="block text-sm font-bold mb-2">{t('groupLabel')}</label>
                    <input
                        type="number"
                        id="groupSize"
                        min="1"
                        max="10"
                        required
                        {...register("groupSize", { valueAsNumber: true })}
                        className="w-full p-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    {errors.groupSize && <div className="form-error">{errors.groupSize.message}</div>}
                </div>
            </div>
            <input type="hidden" value={(new Date()).toISOString().split('T')[0]} {...register("created")} />

            {/* Display server errors */}
            {!state.success && state?.errMessage && <div className="mb-4"><div className="form-error">{state.errMessage}</div></div>}
            <button type="submit" disabled={isSubmitting} className="book-button">
                {isSubmitting ? t('pending') : t('submit')}
            </button>
        </form>
    );
};

export default BookingForm;