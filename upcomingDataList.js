const upcomings = document.querySelector('.upcomings');

upcomingData.forEach( (item, index) => {
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
            link.setAttribute('href', './viewUpcomingMovie.html?no=' + item['no']);
            link.appendChild(img);
            div.appendChild(link);
            div.setAttribute('class', 'img-wrapper');
            moviediv.appendChild(div);
        } else if (keyName === 'name' || keyName === 'star') {
            const link = document.createElement('a');
            link.setAttribute('href', './viewUpcomingMovie.html?no=' + item['no']);
            link.appendChild(text);
            div.appendChild(link);
        }

        moviediv.appendChild(div);

        upcomings.appendChild(moviediv);
    }
})
