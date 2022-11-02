const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'e926f274c155ee153e0c35e3fcd44590',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;