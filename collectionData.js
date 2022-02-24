const collectionData = [
    {
    title: '눈 오는날의 영화들',
    movie1: '헤이트풀8',
    movie2: '러브레터', 
    movie3: '나홀로집에',
    summary: '눈오는 배경을 가진 영화들이에요!'
    },
    {
    title: '잔잔한 듯 흥미진진',
    movie1: '캐치미이프유캔',
    movie2: '기생충', 
    movie3: '트루먼쇼',
    summary: ''
    },
    {
    title: '하마터면 눈물흘릴뻔...',
    movie1: '소울', 
    movie2: '업',
    movie3: '',
    summary: '휴지 한 장 준비하세요ㅠㅠ'
    }
]

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
