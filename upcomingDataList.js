const upcomings = document.querySelector('.upcomings');

upcomingData.forEach( (item, index) => {
    const moviediv = document.createElement('div');
    moviediv.setAttribute('class', 'movie');
    const keys = Object.keys(item);

    for(let i=0; i<keys.length; i++) {
        const keyName = keys[i];
        const value = item[keyName];

        const div = document.createElement('div');
        const span = document.createElement('span');
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

        } else if (keyName === 'date') {
            if (value.length == 10){
                const movieDay = new Date(value).getMonth() + 1 + '월 ' + new Date(value).getDate() + '일 '
                date = document.createTextNode(movieDay);
            } else if ( value.length == 7 ) {
                const movieDay = new Date(value).getMonth() + 1 + '월 '
                date = document.createTextNode(movieDay);
            } else if (value.length == 4) {
                const movieDay = new Date(value).getFullYear() + '년 '
                date = document.createTextNode(movieDay);
            }
            span.appendChild(date);
            span.setAttribute('class', 'date');  
            moviediv.appendChild(span);      

        } else if(keyName === 'name') {
            const link = document.createElement('a');
            link.setAttribute('href', './viewUpcomingMovie.html?no=' + item['no']);
            link.appendChild(text);
            span.appendChild(link);
            span.setAttribute('class', 'name');  
            moviediv.appendChild(span);
        }

        upcomings.appendChild(moviediv);
    }
    
})
