// 使用链表加数组来解决哈希冲突哈希表
export default function() {
    this.table = [];

    //散列函数,计算传进来的值的ASCLL码的之和
    const hashFunction = function(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    // 向散列表中添加元素
    this.__proto__.put = function(key, value) {
        const hash = hashFunction(key);
        if (this.table[hash] === undefined) {
            this.table[hash] = new LikedList();
        }
        this.table[hash].append(value);
    };

    // 从散列表中查找一个值(根据键名)
    this.__proto__.get = function(key) {
        const hash = hashFunction(key);
        if (this.table[hash] === undefined) {
            return false;
        } else {
            // 应该得到整个链表，后续在链表中加入返回所有值的方法
            return this.table[hash];
        }
    };

    // 清空散列表
    this.__proto__.clear = function() {
        this.table = [];
    };

    // 移除散列表中的一个元素(根据键名)
    this.__proto__.remove = function(key) {
        this.table[hashFunction(key)] = undefined;
    };

    // 输出散列表中所有的元素
    this.__proto__.print = function() {
        for (let i = 0; i < this.table.length; i++) {
            /*在创建稀疏数组时，会存在一些空白单元JavaScript会将这些空白单元隐式的赋值为undefined（但这与将其显式赋值为 undefined是有所区别的）这个过程并且会影响length的值*/
            if (this.table[i] !== undefined) {
                console.log(i + ":  " + this.table[i].getHead());
            }
        }
    };
};