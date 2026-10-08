import data from './data.js';

const renderAlbumPage = (bandId, albumId) => {
  const band = data.find((b) => b.id === bandId);
  const album = band.topAlbums.find((album) => album.id === albumId);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/pages/style.css">
        <title>${album.name}</title>
    </head>
    <body>
        <h1>${album.name}</h1>
        <p>Artist: ${band.name}</p>
        <p>Released in: ${album.year}</p>
    </body>
    </html>
  `;
  return html;
};

export default renderAlbumPage;
