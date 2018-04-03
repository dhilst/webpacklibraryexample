// @flow 

export function reverse<T>(ar: Array<T>) {
    return ar.slice(0).reverse();
}

export function fst<T>(ar: Array<T>) {
    return ar[0];
}

export function snd<T>(ar: Array<T>) {
    if (ar.length < 2)
        return undefined; 
    return ar[1];
}

export function lst<T>(ar: Array<T>) {
    if (ar.length === 0)
        return undefined;
    return ar[ar.length-1];
}
