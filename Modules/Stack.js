// 栈
export default function(item) {
    // 不使用因为const item = [];当使用Stack创建多个栈时,使用的都是这个[]
    // const item = [];

    this.item = item ? item : [];
    // 不使用this.push的原因是因为这样做,每一个new出来的对象都会去开辟一块空间用来保存这个方法,因为this会指向对象
    // 入栈
    this.__proto__.push = function(Element) {
        this.item.push(Element);
    };

    // 出栈
    this.__proto__.pop = function() {
        return this.item.pop();
    };

    // 获取整个栈
    this.__proto__.getStack = function() {
        return this.item;
    };

    // 检查栈顶元素
    this.__proto__.peek = function() {
        return this.item[this.item.length - 1];
    };

    // 检查栈是否为空
    this.__proto__.isEmpty = function() {
        return this.item.length == 0;
    };

    // 清除栈
    this.__proto__.clear = function() {
        this.item = [];
    };

    // 获取栈的长度
    this.__proto__.size = function() {
        return this.item.length;
    };
};