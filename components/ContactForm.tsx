import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useActionState } from 'react';
import { submitContactForm } from '@/app/actions/submitContact'
import {contactFormSchema, contactFormInitState} from '@/app/zschema'
interface ContactFormProps {
    tourName: string,
    onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ tourName, onClose }) => {
    const { register, formState: { errors }, setValue } = useForm<
        z.input<typeof contactFormSchema>,
        unknown,
        z.output<typeof contactFormSchema>
        >({
        resolver: zodResolver(contactFormSchema),
    });
    const [state, formAction, isPending] = useActionState(submitContactForm, contactFormInitState);

    /*
    const onSubmitForm = (data: ContactFormData) => {
        console.log('Form submitted:' , JSON.stringify(data));
        console.log(JSON.stringify(state));
    };*/

    useEffect(() => {
        if (state.success) {
            onClose();
        }
    }, [state.success, onClose]);

    useEffect(() => {
     setValue('name', state.name || '');
     setValue('email', state.email || '');
     setValue('phone', state.phone || '');
     setValue('whatsapp', state.whatsapp || false);
     setValue('telegram', state.telegram || '');
     setValue('tour', state.tour || '');
    }, [state, setValue]);
    return (
        <form action={formAction}>
            <h3 className="tour-header">Контактная информация</h3>
            <div className="form-body">
            <div className="tour-body">Я очень рада, что вас интересует {tourName}. Чтобы присоединиться, оставьте свои контакты:</div>
            <div className="mb-4">
                <label className="grid gap-1">Ваше имя&nbsp;&nbsp;
                <input className="p-2 border border-gray-300 rounded" {...register('name')} />
                {errors.name && <div className="form-error">{errors.name.message}</div>}
                </label>
            </div>
            <div className="mb-4">
            <label className="grid gap-1">
                Адрес эл почты&nbsp;&nbsp;
                <input className="p-2 border border-gray-300 rounded" {...register('email')} />
                {errors.email && <div className="form-error">{errors.email.message}</div>}
            </label>
            </div>
            <div className="mb-4">
            <label className="grid gap-1">
                Номер телефона&nbsp;&nbsp;
                <input className="p-2 border border-gray-300 rounded" {...register('phone')} />
                {errors.phone && <div className="form-error">{errors.phone.message}</div>}
            </label>
            </div>
            <div className="mb-4">
                <label className="grid gap-1">
                    Ник в Telegram&nbsp;&nbsp;
                    <input className="p-2 border border-gray-300 rounded" {...register('telegram')} />
                    {errors.telegram && <div className="form-error">{errors.telegram.message}</div>}
                </label>
            </div>
            <div className="mb-4">
            <label>
                <input type="checkbox" {...register('whatsapp')} />&nbsp;Я использую Whatsapp
            </label>
            </div>
            </div>
            <input type="hidden" value={tourName} {...register("tour")} />
            {/* Display server errors */}
            {!state.success && state?.errMessage && <div className="mb-4"><div className="form-error">{state.errMessage}</div></div>}
            <button type="submit" disabled={isPending} className="book-button">
                {isPending ? 'Выполняется запись...' : 'Отправить'}
            </button>
        </form>
    );
};

export default ContactForm;