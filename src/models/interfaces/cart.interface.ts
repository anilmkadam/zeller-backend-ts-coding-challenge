export interface Cart {
    scan(sku: string): void;
    total(): void;
}