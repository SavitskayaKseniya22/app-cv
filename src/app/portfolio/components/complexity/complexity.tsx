import Icon from "@/components/icon/icon";
import { PuzzlePieceIcon } from "@heroicons/react/24/outline";
import styles from "./complexity.module.scss";
import clsx from "clsx";

function Complexity({ complexity, className }: { complexity: number; className?: string }) {
    return (
        <div title="Complexity" className={clsx(styles.complexity, className)}>
            <Icon icon={PuzzlePieceIcon} />
            {complexity}
        </div>
    );
}

export default Complexity;
