import { AtSymbolIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "./contacts.module.scss";
import Icon from "@/components/icon/icon";

function ContactsList() {
    return (
        <ul className={styles.contacts}>
            <li className={styles.contacts__item}>
                <Icon icon={AtSymbolIcon} size="small" />

                <Link href="mailto:kseniia.savitskaia@gmail.com">kseniia.savitskaia@gmail.com</Link>
            </li>
            <li className={styles.contacts__item}>
                <Icon icon={PhoneIcon} size="small" />

                <Link href="tel:+79520056415">+7-952-005-64-15</Link>
            </li>
            <li className={styles.contacts__item}>
                <Icon icon={PhoneIcon} size="small" />

                <Link href="tel:+359876032638">+359-876-032-638</Link>
            </li>
        </ul>
    );
}

export default ContactsList;
