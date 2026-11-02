import Skills from "../components/skills/skills";
import ContactsForm from "../components/contacts-form/contacts-form";
import Contacts from "../components/contacts/contacts";
import AboutIntro from "./components/about-intro";

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
