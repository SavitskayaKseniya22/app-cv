import { ComponentType, SVGProps } from "react";
import clsx from "clsx";
import styles from "./icon.module.scss";

type Properties = {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    size?: "big" | "medium" | "small";
    view?: "accent" | "normal";
};

export default function Icon({ icon: IconComponent, size = "big", view = "accent" }: Properties) {
    return <IconComponent className={clsx(styles.icon, styles[`icon_${size}`], styles[`icon_${view}`])} />;
}
