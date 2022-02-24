const boxoffice = document.querySelector('.boxoffice');
const netflix = document.querySelector('.netflix');
const disneyPlus = document.querySelector('.disneyPlus');

movieData.forEach( (item, index) => {
    const moviediv = document.createElement('div');
    moviediv.setAttribute('class', 'movie');
    const keys = Object.keys(item);

    for(let i=0; i<keys.length; i++) {
        const keyName = keys[i];
        const value = item[keyName];

        const div = document.createElement('div');
        const text = document.createTextNode(value);

        if (keyName === 'img') {
            const img = document.createElement('img');
            img.setAttribute('src', value);
            const link = document.createElement('a');
            link.setAttribute('href', './viewMovie.html?no=' + item['no']);
            link.appendChild(img);
            div.appendChild(link);
            div.setAttribute('class', 'img-wrapper');
            moviediv.appendChild(div);
        } else if (keyName === 'name' || keyName === 'star') {
            const link = document.createElement('a');
            link.setAttribute('href', './viewMovie.html?no=' + item['no']);
            link.appendChild(text);
            div.appendChild(link);
        }

        moviediv.appendChild(div);

        if (item['service'] === 'boxoffice') {
            boxoffice.appendChild(moviediv);
        } else if (item['service'] === 'netflix') {
            netflix.appendChild(moviediv);
        } else {
            disneyPlus.appendChild(moviediv);
        }
    }
})
