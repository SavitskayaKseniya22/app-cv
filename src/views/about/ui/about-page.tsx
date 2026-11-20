import { Skills, Contacts } from "@/entities/profile";
import { ContactsForm } from "@/features/send-message";
import AboutIntro from "./about-intro";

function AboutMe() {
    return (
        <>
            <Skills />
            <AboutIntro />
            <Contacts />
            <ContactsForm />
        </>
    );
}

export default AboutMe;
