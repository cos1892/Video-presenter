'use strict';

const viewResult = require('./reqVideo');
const changeNumberOfPages = require('./changeNumberOfPages');

function req(pages, resultDiv, search, obj) {
    const xhr = new XMLHttpRequest();
    if(obj.nextPageToken !== '') {
       xhr.open('GET', `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBmUKQP_BfLZY-0Q1JbK6pjco-jdThV-Pw&pageToken=${obj.nextPageToken}&type=video&part=snippet&maxResults=15&q=${search.value}`, true); 
    } else {
       xhr.open('GET', `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBmUKQP_BfLZY-0Q1JbK6pjco-jdThV-Pw&type=video&part=snippet&maxResults=15&q=${search.value}`, true); 
    }

    xhr.onload = function() {
        const result = JSON.parse(this.responseText);
        const previousCount = obj.countResult;
        const previousNumberOfPages = obj.numberOfPages;
        obj.countResult = previousCount + result.items.length;
        obj.numberOfPages = Math.floor(obj.countResult / obj.resultPerPage);
        if(obj.nextPageToken === '' && obj.countResult === 0) {
            alert('Поиск не дал результатов');
        } else {
            obj.nextPageToken = result.nextPageToken;
            changeNumberOfPages(pages, previousNumberOfPages, obj.numberOfPages);
            pages.childNodes[obj.currentPage - 1].classList.add('active');
            result.items.forEach(function(item, i, arr) {
                viewResult(item, previousCount + i, resultDiv);
            });
        }
    }

    xhr.onerror = function() {
      alert( 'Ошибка ' + this.status );
    }

    xhr.send();

    return obj;
}

module.exports = req;