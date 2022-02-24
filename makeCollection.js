
document.querySelector('#send').addEventListener('click', function(){
    const title = document.querySelector('input[name="title"]').value;
    const movie1 = document.querySelector('input[name="movie1"]').value;
    const movie2 = document.querySelector('input[name="movie2"]').value;
    const movie3 = document.querySelector('input[name="movie3"]').value;
    const summary = document.querySelector('textarea[name="summary"]').value;

    const sendData = {
        title: title,
        movie1: movie1,
        movie2: movie2,
        movie3: movie3,
        summary: summary
    }
 
    collectionData.push(sendData);
    // console.log(collectionData);
    location.assign('./collection.html')
});
