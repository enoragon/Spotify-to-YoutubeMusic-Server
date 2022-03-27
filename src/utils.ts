export function safeParseNumber(str?: string): number | undefined {
    const parsed = Number(str);

    if (isNaN(parsed)) {
        return;
    }

    return parsed;
}
