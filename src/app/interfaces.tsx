export type ProjectType = {
    name: string;
    translations: {
        en: ProjectTranslation;
        ru: ProjectTranslation;
    };
    deploy: string;
    github: string;
    instruments: string[];
    preview: string;
    isItReady: boolean;
    task?: string;
    markup?: string[];
};

export type ProjectTranslation = {
    description: string;
    type: string;
    features?: string[];
};
