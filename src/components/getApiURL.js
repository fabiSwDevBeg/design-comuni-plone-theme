export function getApiURL(url) {
    // Trova l'indice del primo '/' dopo 'http://' o 'https://'
    const protocolEndIndex = url.indexOf('://') + 3; // +3 per saltare '://'

    // Trova la posizione del primo '/'
    const firstSlashIndex = url.indexOf('/', protocolEndIndex);

    // Crea la nuova URL con '++api++' inserito dopo il primo '/'
    if (firstSlashIndex !== -1) {
        return url.slice(0, firstSlashIndex) + '/++api++' + url.slice(firstSlashIndex);
    }

    // Se non c'è un '/' dopo il dominio, restituisce la URL originale
    return url;
}
