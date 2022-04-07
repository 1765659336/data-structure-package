// 队列
export default function(item) {
    this.item = item ? item : [];

    // 入列
    this.__proto__.queueIn = function(element) {
        this.item.push(element);
    };

    // 出列
    this.__proto__.queueOut = function() {
        return this.item.shift();
    };

    // 查看队列头
    this.__proto__.peek = function() {
        return this.item[0];
    };

    // 检查队列是否为空
    this.__proto__.isEmpty = function() {
        return this.item.length === 0;
    };

    // 返回队列大小
    this.__proto__.size = function() {
        return this.item.length;
    };

    // 查看整个队列
    this.__proto__.getQueue = function() {
        return this.item;
    };
};