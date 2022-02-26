const tbody = document.querySelector('#tbody');

collectionData.forEach( (item, index) => {
    const tr = document.createElement('tr');
    const keys = Object.keys(item);

    for(let i=0; i<keys.length; i++) {
        const keyName = keys[i];
        const value = item[keyName];

        const elem = document.createElement('td');
        const text = document.createTextNode(value);
        
        elem.appendChild(text);
        if(keyName === 'title') {
            elem.setAttribute('style', 'color: whitesmoke;');
        }
        tr.appendChild(elem);
    }

    tbody.appendChild(tr);
})


document.querySelector('#makeColBtn').addEventListener('click', function(){
    location.assign('./makeCollection.html')
});
