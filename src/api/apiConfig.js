const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '3be3d5ac2fd933b477ebd07c97046c63',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;