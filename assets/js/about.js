function updateTimer() {
    const startDate = new Date(2023, 9, 2, 12, 29, 0); 
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('timer').innerHTML = `网站已运行 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒`;
   }
   setInterval(updateTimer, 1000);