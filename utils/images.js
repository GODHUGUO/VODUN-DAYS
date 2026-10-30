// Laisse le navigateur choisir entre la variante -md (720 px) et l'image complète,
// pour ne pas envoyer aux téléphones une photo bien plus grande que son affichage
export const srcsetOf = (src, width) => `${src.replace(/\.webp$/, '-md.webp')} 720w, ${src} ${width}w`
