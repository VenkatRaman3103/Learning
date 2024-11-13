export default function bs_list(haystack: number[], needle: number): boolean {
    let p = 0;
    let r = haystack.length;

    while (p < r) {
        const q = Math.floor(p + (r - p) / 2);

        const key = haystack[q];

        if (key == needle) {
            return true;
        } else if (key > needle) {
            r = q;
        } else if (key < needle) {
            p = q + 1;
        }
    }

    return false;
}

