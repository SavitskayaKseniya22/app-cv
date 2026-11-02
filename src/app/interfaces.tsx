export type ProjectType = {
    name: string;
    description: string;
    type: "app" | "test assignment" | "landing page";
    deploy: string;
    github: string;
    instruments: string[];
    preview: string;
    isItReady: boolean;
    task?: string;
    features?: string[];
    markup?: string[];
};
