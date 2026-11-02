"use client";

import Skills from "../components/skills/skills";
import ContactsForm from "../components/contacts-form/contacts-form";
import Contacts from "../components/contacts/contacts";
import { useTranslations } from "@/components/language/language-provider";

function AboutMe() {
    const t = useTranslations();
    return (
        <>
            <Skills />
            <div>
                <p>{t("about", "intro")}</p>
                <br />
                <p>{t("about", "location")}</p>
                <p>{t("about", "languages")}</p>
            </div>
            <Contacts />
            <ContactsForm />
        </>
    );
}

export default AboutMe;
