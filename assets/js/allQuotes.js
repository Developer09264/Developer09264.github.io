
const quoteListElement = document.getElementById("quote-list");

fetch("../quotes.txt")
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
    })
    .then(data => {
        quotes = data.split('\n').filter(quote => quote.trim() !== '');

        // 将所有田语添加到田语列表
        quotes.forEach(quote => {
            const listItem = document.createElement("li");
            listItem.innerHTML = quote;
            quoteListElement.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });