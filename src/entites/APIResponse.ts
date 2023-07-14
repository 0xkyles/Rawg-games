export default interface APIResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}
