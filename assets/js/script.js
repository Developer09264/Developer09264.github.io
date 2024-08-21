const quoteElement = document.getElementById("quote");
const quoteListElement = document.getElementById("quote-list");

let quotes = [];

// 显示随机田语
function showRandomQuote() {
    if (quotes.length === 0) return; // 如果quotes为空，直接返回

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomIndex];

    // 添加淡出效果
    quoteElement.style.opacity = 0;

    // 设置新的田语内容
    setTimeout(() => {
        quoteElement.textContent = newQuote;
        // 添加淡入效果
        setTimeout(() => {
            quoteElement.style.opacity = 1;
        }, 100); // 在0.1秒后淡入
    }, 500); // 在0.5秒后改变内容
}

// 异步加载田语数据（假设quotes.txt包含每行一个田语）
fetch('quotes.txt')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.text();
  })
  .then(data => {
    quotes = data.split('\n').filter(quote => quote.trim() !== '');
    
    // 在页面加载时显示随机田语
    showRandomQuote();
    
    // 将所有田语添加到田语列表
    quotes.forEach(quote => {
      const listItem = document.createElement("li");
      listItem.textContent = quote;
      quoteListElement.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

// 定时切换田语（每隔3秒）
setInterval(showRandomQuote, 3000);

// 监听页面滚动
window.addEventListener("scroll", () => {
    const welcomePage = document.querySelector(".welcome-page");
    if (!welcomePage) return; // 如果welcomePage不存在，直接返回

    // 如果用户向下滚动足够远，添加.fade-out类以触发动画
    if (window.scrollY > window.innerHeight / 2) {
        welcomePage.classList.add("fade-out");
    } else {
        // 如果用户向上滚动回到顶部，移除.fade-out类以显示欢迎页面
        welcomePage.classList.remove("fade-out");
    }
});

function checkScroll() {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const backToTopButton = document.getElementById('back-to-top');

    if (!backToTopButton) {
        console.error("Element with id 'back-to-top' not found");
        return;
    } else if (scrollPosition > window.innerHeight / 2) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

document.getElementById('back-to-top')?.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});