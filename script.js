const quoteElement = document.getElementById("quote");
const quoteListElement = document.getElementById("quote-list");
const progressBar = document.querySelector(".progress-bar");

let quotes = [];

// 显示随机田语
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomIndex];

    // 添加淡出效果
    quoteElement.style.opacity = 0;

    // 等待0.5秒后，将新的田语内容设置并添加淡入效果
    setTimeout(() => {
        quoteElement.textContent = newQuote;
        quoteElement.style.opacity = 1;
    }, 500);
}


// 异步加载田语数据（假设quotes.txt包含每行一个田语）
fetch('quotes.txt')
  .then(response => response.text())
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
  });

// 显示特定索引的田语
function showQuote(index) {
    quoteElement.textContent = quotes[index];
}

// 定时切换田语（每隔3秒）
setInterval(() => {
    showRandomQuote();
}, 3000);

// 更新进度条位置
function updateProgressBar() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const contentHeight = document.body.scrollHeight;
    const progress = (scrollPosition / (contentHeight - windowHeight)) * 100;
    progressBar.style.height = progress + "%";

    // 根据滚动位置显示/隐藏进度条
    if (scrollPosition > 0) {
        progressBar.style.display = "block";
    } else {
        progressBar.style.display = "none";
    }
}

// 监听页面滚动事件，以便在页面加载时更新进度条
window.addEventListener("scroll", () => {
    const welcomePageHeight = document.querySelector(".welcome-page").offsetHeight;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition >= welcomePageHeight) {
        // 当用户滚动到全部田语页面时显示进度条
        progressBar.style.display = "block";
        
        // 计算并更新进度条位置
        updateProgressBar();
    } else {
        // 在欢迎页面上隐藏进度条
        progressBar.style.display = "none";
    }
});

window.addEventListener("scroll", () => {
    const welcomePage = document.querySelector(".welcome-page");
    
    // 如果用户向下滚动足够远，添加.fade-out类以触发动画
    if (window.scrollY > window.innerHeight / 2) {
        welcomePage.classList.add("fade-out");
    } else {
        // 如果用户向上滚动回到顶部，移除.fade-out类以显示欢迎页面
        welcomePage.classList.remove("fade-out");
    }
});
