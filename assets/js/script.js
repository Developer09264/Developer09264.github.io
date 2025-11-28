const quoteElement = document.getElementById("quote");
const quoteListElement = document.getElementById("quote-list");

let quotes = [];

// 显示随机田语
function showRandomQuote() {
  if (quotes.length === 0) return; // 如果quotes为空，直接返回

  //获取随机数
  const randomIndex = Math.floor(Math.random() * quotes.length);

  //获取随机田语
  const newQuote = quotes[randomIndex];

  // 添加淡出效果
  quoteElement.style.opacity = 0;
  quoteElement.style.transition = 'opacity 1s'; // 设置过渡效果，持续1秒

  // 设置新的田语内容
  setTimeout(() => {
    quoteElement.innerHTML = newQuote;
    // 添加淡入效果
    setTimeout(() => {
      quoteElement.style.opacity = 1;
    }, 100); // 在0.1秒后淡入
  }, 1000); // 在1秒后改变内容
}


// 异步加载田语数据（假设quotes.txt包含每行一个田语）
fetch("assets/quotes.txt")
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
      listItem.innerHTML = quote;
      quoteListElement.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


setInterval(showRandomQuote, 4000);


//检查屏幕滚动
function checkScroll() {
  const scrollPosition = window.scrollY || window.pageYOffset;
  const backToTopButton = document.getElementById('back-to-top');
  const navbar = document.getElementById('navbar');

  if (!navbar) {
    console.error("Element with id 'navbar' not found");
    return;
  }

  if (!backToTopButton) {
    console.error("Element with id 'back-to-top' not found");
    return;
  }

  //判断位置，为按钮元素添加类
  if (scrollPosition > window.innerHeight / 2) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }

  if (scrollPosition > 0) {
    navbar.classList.add('show');
  } else {
    navbar.classList.remove('show');
  }
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

document.getElementById('back-to-top')?.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'hidden') {
    document.title = '人在做，天在看';
  } else {
    document.title = '田语 | 朴实无华，意蕴悠长';
  }
});
