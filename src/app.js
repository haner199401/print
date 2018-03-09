import Print from './print';


// 打字数据格式
var arr = [
    {type: Print.ACTION.TEXT, text: '哈喽，陌生人，很高兴你能打开这个网页........',time:100},
    {type: Print.ACTION.TEXT, text: '嗯嗯，这个打字插件 还没有写完，很简陋，可以各发己见，帮忙修改修改~~~~',time:100},
    {type: Print.ACTION.TEXT, text: '目前仅能打印文字，待开发【退格，图片，延迟等待，等等...】',time:200},
];


new Print(document.getElementById('info'),arr);
