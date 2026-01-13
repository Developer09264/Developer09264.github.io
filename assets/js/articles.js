document.addEventListener("DOMContentLoaded", function () {

  // 1. 选择所有需要动画的卡片
  const cards = document.querySelectorAll('.nav-card');

  // 2. 创建一个观察者 (Intersection Observer)
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // 如果卡片进入了视口 (即用户滑到了这里)
      if (entry.isIntersecting) {
        // 添加 .show 类，触发 CSS 动画
        entry.target.classList.add('show');

        // 停止观察该元素 (保证动画只播放一次，往回滑不会再消失)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // 意思是：当卡片露出 10% 的时候就开始播放动画
  });

  // 3. 让观察者开始观察每一个卡片
  cards.forEach(card => {
    observer.observe(card);
  });
});