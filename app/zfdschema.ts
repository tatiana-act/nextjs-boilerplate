import { z } from 'zod';

export const feedbackFormSchema = z.object({
    name: z.string().min(3, 'Мне нужно хотя бы 3 буквы Вашего имени.').max(50, 'Меня зовут Татьяна. А Вас?'),
    text: z.string().min(30, 'Пожалуйста опишите свой опыт подробнее.').max(5000, 'Получилось слишком длинно.'),
    tour: z.string(),
    tourId: z.string(),
    date: z.iso.date(),
    success: z.boolean().optional(),
    errMessage: z.string().optional(),
});

export type FeedbackFormData = z.infer<typeof feedbackFormSchema>;

export const feedbackFormInitState = {
    name: '',
    text: '',
    tour: '',
    tourId: '',
    date: '',
    success: false,
    errMessage: ''
}