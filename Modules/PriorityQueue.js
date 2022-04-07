// 优先级队列
export default function(item) {
    // 封装一个包含元素值和优先级的内部类
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.item = item ? item : [];

    // 入列
    this.__proto__.PriorityQueueIn = function(element, priority) {
        // 创建queueElement对象
        const queueElement = new QueueElement(element, priority);

        if (this.item.length === 0) {
            this.item.push(queueElement);
        } else {
            for (let i = 0; i < this.item.length; i++) {
                if (queueElement.priority > this.item[i].priority) {
                    this.item.splice(i, 0, queueElement);
                    // 当查到最后一位之前已经满足条件进行插入了,代码就不再继续执行
                    return;
                }
            }
            // 可以进行到这一步,说明之前的return没有执行,也就是说这个元素优先级是队列中最低的,应该添加到末尾
            this.item.push(queueElement);
        }
    };

    // 出列
    this.__proto__.PriorityQueueOut = function() {
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
    this.__proto__.getPriorityQueue = function() {
        return this.item;
    };
};