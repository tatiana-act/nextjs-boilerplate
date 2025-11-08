import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useActionState } from 'react';
import {feedbackFormSchema, feedbackFormInitState, FeedbackFormData} from '@/app/zfdschema'
import {submitFeedbackForm} from "@/app/actions/sendFeedback";

interface FeedbackFormProps {
    tourName: string,
    tourId: string,
    date: string,
    onClose: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ tourName, tourId, date, onClose }) => {
    const { register, formState: { errors }, setValue } = useForm<FeedbackFormData>({
        resolver: zodResolver(feedbackFormSchema),
    });
    const [state, formAction, isPending] = useActionState(submitFeedbackForm, feedbackFormInitState);

    useEffect(() => {
        if (state.success) {
            onClose();
        }
    }, [state.success, onClose]);

    useEffect(() => {
     setValue('name', state.name || '');
     setValue('tour', state.tour || '');
     setValue('tourId', state.tourId || '');
     setValue('date', state.date || '');
     setValue('text', state.text || '');
    }, [state]);
    return (
        // <div className="tour-body">Большое спасибо, что вы посетили тур "{tourName}". Пожалуйста опишите свои впечатления:</div>
        <form action={formAction}>
            <h3 className="tour-header">Отзыв об экскурсии</h3>
            <div className="form-body">
            Большое спасибо, что вы посетили тур &quot;{tourName}&quot;. Пожалуйста опишите свои впечатления:
            <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2">
                    Ваше имя
                </label>
                <input
                    type="text"
                    id="name"
                    autoComplete="name"
                    required
                    {...register('name')}
                    className="w-full p-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                {/*
                <label className="form-label">Ваше имя&nbsp;&nbsp;
                <input className="p-2 border border-gray-300 rounded" {...register('name')} />
                {errors.name && <div className="form-error">{errors.name.message}</div>}
                </label>
                */}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Ваш отзыв</label>
                <textarea
                    placeholder="Текст"
                    rows={7}
                    className="w-full p-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    {...register('text')}
                />
                {errors.text && <div className="form-error">{errors.text.message}</div>}
            </div>
            </div>
            <input type="hidden" value={tourName} {...register("tour")} />
            <input type="hidden" value={tourId} {...register("tourId")} />
            <input type="hidden" value={date} {...register("date")} />
            {/* Display server errors */}
            {!state.success && state?.errMessage && <div className="mb-4"><div className="form-error">{state.errMessage}</div></div>}
            <button type="submit" disabled={isPending} className="book-button">
                {isPending ? 'Выполняется запись...' : 'Отправить'}
            </button>
        </form>
    );
};

export default FeedbackForm;