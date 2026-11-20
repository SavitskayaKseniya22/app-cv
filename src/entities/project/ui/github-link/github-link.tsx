import Link from "next/link";
import Image from "next/image";

function GithubLink({ href }: { href: string }) {
    return (
        <Link href={href} target="_blank" title="Project on GitHub">
            <Image src="/icons/icon-github.svg" width={32} height={32} alt="GitHub" />
        </Link>
    );
}

export default GithubLink;
