"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./form.module.scss";
import { useLanguage, useTranslations } from "@/components/language/language-provider";

const emailServiceId = "service_h0yuidd";
const emailTemplateId = "template_8fl60sd";
const emailPublicKey = "SDGBlEDoTs9cNxtLw";

type Inputs = {
    from_name: string;
    from_email: string;
    message: string;
};

function ContactsForm() {
    const t = useTranslations();
    const { isLanguageReady } = useLanguage();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const [status, setStatus] = useState<null | "sent" | "error">(null);
    const [isSending, setIsSending] = useState<boolean>(false);

    useEffect(() => {
        let timerId: NodeJS.Timeout;
        if (status !== null) {
            timerId = setTimeout(() => {
                setStatus(null);
            }, 3000);
        }
        return () => {
            clearTimeout(timerId);
        };
    }, [status]);

    const onSubmit: SubmitHandler<Inputs> = async values => {
        setStatus(null);
        setIsSending(true);
        try {
            const emailjs = await import("@emailjs/browser");
            await emailjs.send(emailServiceId, emailTemplateId, values, {
                publicKey: emailPublicKey,
            });
            reset();
            setStatus("sent");
        } catch (error) {
            console.error("EmailJS error:", error);
            setStatus("error");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            style={{ visibility: isLanguageReady ? "visible" : "hidden" }}>
            <input
                type="text"
                {...register("from_name", {
                    validate: value => value.trim().length > 0 || t("form", "nameRequired"),
                })}
                aria-label={t("form", "name")}
                aria-invalid={Boolean(errors.from_name)}
                aria-describedby={errors.from_name ? "name-error" : undefined}
                placeholder={t("form", "enterName")}
                className={styles.input}
            />
            {errors.from_name && (
                <p id="name-error" role="alert">
                    {errors.from_name.message}
                </p>
            )}
            <input
                type="email"
                {...register("from_email", {
                    required: t("form", "emailRequired"),
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t("form", "emailInvalid") },
                })}
                aria-label={t("form", "email")}
                aria-invalid={Boolean(errors.from_email)}
                aria-describedby={errors.from_email ? "email-error" : undefined}
                placeholder={t("form", "enterEmail")}
                className={styles.input}
            />
            {errors.from_email && (
                <p id="email-error" role="alert">
                    {errors.from_email.message}
                </p>
            )}
            <textarea
                rows={3}
                {...register("message", {
                    validate: value => value.trim().length > 0 || t("form", "messageRequired"),
                })}
                aria-label={t("form", "message")}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                placeholder={t("form", "enterMessage")}
                className={styles.input}
            />
            {errors.message && (
                <p id="message-error" role="alert">
                    {errors.message.message}
                </p>
            )}
            <button type="submit" disabled={isSending || status === "sent"} className={styles.button}>
                {isSending ? t("form", "sending") : t("form", "send")}
            </button>
            <p role="status" aria-live="polite">
                {status === "sent" && t("form", "sent")}
                {status === "error" && t("form", "error")}
            </p>
        </form>
    );
}

export default ContactsForm;
