import { z } from 'zod';

export const getBookingFormSchema = (t: any) => z.object({
    tourId: z.string().nonempty(t ? t('tourRequired') : 'Tour is required'),
    date: z.string().refine((val) => {
        const selected = new Date(val);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selected >= today;
    }, { message: t ? t('datePast') : "Date cannot be in the past" }),
    name: z.string().min(3, t ? t('nameMin') : 'Name must be at least 3 characters.').max(50, t ? t('nameMax') : 'Name cannot exceed 50 characters.'),
    contact: z.string().nonempty(t ? t('contactRequired') : 'Contact is required'),
    groupSize: z.number().min(1, t ? t('groupSizeMin') : 'Group size must be at least 1').max(15, t ? t('groupSizeMax') : 'Group size cannot exceed 15'),
    created: z.iso.date(),
    tour: z.string(),
    extra: z.string(),
    success: z.boolean().optional(),
    errMessage: z.string().optional(),
});

export type BookingFormData = z.infer<ReturnType<typeof getBookingFormSchema>>;

export const bookingFormInitState = {
    tourId: '',
    date: '',
    name: '',
    contact: '',
    groupSize: 0,
    created: '',
    tour: '',
    extra: '',
    success: false,
    errMessage: ''
}