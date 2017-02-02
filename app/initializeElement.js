'use strict';

const searchDiv = document.createElement('div');
searchDiv.className = 'search';
document.body.appendChild(searchDiv);
const searchLabel = document.createElement('label');
searchLabel.innerHTML = `<i class="fa fa-search" aria-hidden="true"></i>`;
searchDiv.appendChild(searchLabel);
const search = document.createElement('input');
search.setAttribute('id', 'stringSearch');
search.setAttribute('type', 'text');
search.setAttribute('placeholder', 'Search');
searchDiv.appendChild(search);
searchLabel.setAttribute('for', 'stringSearch');
const wrapper = document.createElement('div');
wrapper.setAttribute('id', 'wrapper');
document.body.appendChild(wrapper);
const resultDiv = document.createElement('div');
resultDiv.setAttribute('id', 'result');
wrapper.appendChild(resultDiv);
const pages = document.createElement('div');
pages.setAttribute('id', 'pages');
document.body.appendChild(pages);

module.exports = {searchDiv, searchLabel, search, wrapper, resultDiv, pages};