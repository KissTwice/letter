// main.js - 无强制登录版本，直接初始化应用

// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM 已加载，开始初始化应用...');
    
    // 可选：显示一个简单的提醒（不阻止使用）
    setTimeout(() => {
        if (typeof showToast === 'function') {
            showToast('本应用来自dc尾巴镇-ee小手机主频道，二改版本仅供个人使用，请勿传播', 3000);
        } else {
            alert('本应用来自dc尾巴镇-ee小手机主频道，二改版本仅供个人使用，请勿传播');
        }
    }, 1000);
    
    try {
        // 初始化数据库（loadData 和 initDatabase 应该在之前定义）
        if (typeof initDatabase === 'function') {
            await initDatabase();
        } else {
            console.warn('initDatabase 未定义，请确保 db.js 已加载');
        }
        
        if (typeof init === 'function') {
            await init();
        } else {
            console.warn('init 未定义，请检查其他脚本');
        }
    } catch (err) {
        console.error('初始化失败:', err);
        alert('初始化失败，请刷新页面重试');
    }
});

// 如果需要在 Service Worker 注册等，可以保留原代码中的相关部分
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker 注册成功，作用域:', registration.scope);
            })
            .catch(error => {
                console.error('ServiceWorker 注册失败:', error);
            });
    });
}