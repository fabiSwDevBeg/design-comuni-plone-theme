import React, { useState, useEffect } from 'react';

const HeaderBannerUniba = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        const fullEndpoint = `${window.location.origin}/++api++/@@uniba.banner`;
        fetch(fullEndpoint)
            .then(response => response.text()) // Ottieni il contenuto come testo
            .then(html => {
                setContent(html); // Aggiorna lo stato con il contenuto HTML
            })
            .catch(error => console.error("Error fetching the content:", error));
    }, []);
    return (
        <div id="banner-uniba" dangerouslySetInnerHTML={{ __html: content }}/>
    )
}

export default HeaderBannerUniba;