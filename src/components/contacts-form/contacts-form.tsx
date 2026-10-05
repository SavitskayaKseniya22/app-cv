"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import styles from "./form.module.scss";

const emailServiceId = "service_h0yuidd";
const emailTemplateId = "template_8fl60sd";
const emailPublicKey = "SDGBlEDoTs9cNxtLw";

type Inputs = {
    from_name: string;
    from_email: string;
    message: string;
};

function ContactsForm() {
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

    const onSubmit: SubmitHandler<Inputs> = values => {
        setStatus(null);
        setIsSending(true);
        emailjs
            .send(emailServiceId, emailTemplateId, values, {
                publicKey: emailPublicKey,
            })
            .then(() => {
                reset();
                setStatus("sent");
            })
            .catch(error => {
                console.error("EmailJS error:", error);
                setStatus("error");
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input
                type="text"
                {...register("from_name", {
                    validate: value => value.trim().length > 0 || "Please enter your name.",
                })}
                aria-label="Your name"
                aria-invalid={Boolean(errors.from_name)}
                aria-describedby={errors.from_name ? "name-error" : undefined}
                placeholder="Enter name"
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
                    required: "Please enter your email.",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email address." },
                })}
                aria-label="Your email"
                aria-invalid={Boolean(errors.from_email)}
                aria-describedby={errors.from_email ? "email-error" : undefined}
                placeholder="Enter your email"
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
                    validate: value => value.trim().length > 0 || "Please enter your message.",
                })}
                aria-label="Your message"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                placeholder="Enter your message"
                className={styles.input}
            />
            {errors.message && (
                <p id="message-error" role="alert">
                    {errors.message.message}
                </p>
            )}
            <button type="submit" disabled={isSending || status === "sent"} className={styles.button}>
                {isSending ? "Message in progress" : "Send"}
            </button>
            <p role="status" aria-live="polite">
                {status === "sent" && "Message sent successfully"}
                {status === "error" && "An error has occurred. Try again, please"}
            </p>
        </form>
    );
}

export default ContactsForm;
