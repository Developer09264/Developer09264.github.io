const quoteElement = document.getElementById("quote");
const quoteListElement = document.getElementById("quote-list");
const progressBar = document.querySelector(".progress-bar");

let quotes = [];
let quoteIndex = 0;
let touchStartY = 0;
let touchEndY = 0;

// 异步加载田语数据（假设quotes.txt包含每行一个田语）
fetch('quotes.txt')
  .then(response => response.text())
  .then(data => {
    quotes = data.split('\n').filter(quote => quote.trim() !== '');
    
    // 在页面加载时显示第一条田语
    showQuote(quoteIndex);
    
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
    quoteIndex = (quoteIndex + 1) % quotes.length;
    showQuote(quoteIndex);
}, 3000);

//监听屏幕触摸事件
document.addEventListener("touchstart", (event) => {
    touchStartY = event.touches[0].clientY;
});

document.addEventListener("touchend", (event) => {
    touchEndY = event.changedTouches[0].clientY;
    
    const deltaY = touchEndY - touchStartY;

    if (deltaY > 0) {
        // 向下滑动
        window.scrollBy(0, window.innerHeight);
    } else if (deltaY < 0) {
        // 向上滑动
        window.scrollBy(0, -window.innerHeight);
    }

    // 更新进度条位置
    updateProgressBar();
});

// 监听鼠标滚轮事件
document.addEventListener("wheel", event => {
    if (event.deltaY > 0) {
        // 向下滚动
        window.scrollBy(0, window.innerHeight);
    } else {
        // 向上滚动
        window.scrollBy(0, -window.innerHeight);
    }

    // 更新进度条位置
    updateProgressBar();
});

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
window.addEventListener("scroll", updateProgressBar);

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
