export type ProjectType = {
    name: string;
    description: string;
    deploy: string;
    github: string;
    instruments: string[];
    preview: string;
    complexity: number;
    task?: string;
    features?: string[];
    markup?: string[];
    isItReady: boolean;
};
