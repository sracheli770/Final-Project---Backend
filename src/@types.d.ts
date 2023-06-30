export { }

declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}

export type Role={
    name:string
}

/* export type Niggun={
    name:string;
    easyMovie:string;
    advancedMovie: string;
    notes: Array<string>;
    description: string;
    rebbe: string;
    isFavorite: boolean;
} */