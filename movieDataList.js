const home = document.querySelector('.home');
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
        
        if(keyName !== 'no' && keyName !== 'service') {
            const link = document.createElement('a');
            // html뒤에 ?no= 추가 필요
            link.setAttribute('href', './viewMovie.html');
            // div.appendChild(link); a href태그 뒤로 이미지가 들어가버림
            
            if (keyName === 'img') {
                const img = document.createElement('img');
                img.setAttribute('src', value);
                div.appendChild(img);
                console.log(div)
            } else if (keyName === 'name' && keyName === 'star') {
                div.appendChild(text);
            }
        } else {
            continue;
        }
        moviediv.appendChild(div);

        if (item['service'] === 'boxoffice') {
            boxoffice.appendChild(moviediv);
        } else if (item['service'] === 'netflix') {
            netflix.appendChild(moviediv);
        } else if (item['service'] === 'disneyPlus') {
            disneyPlus.appendChild(moviediv);
    }
    
    home.appendChild(boxoffice);
    home.appendChild(netflix);
    home.appendChild(disneyPlus);
}
})
