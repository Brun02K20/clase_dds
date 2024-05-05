export class ModificationError extends Error {
    status;
    constructor(message) {
        super(message);
        this.status = 400;
    };
};