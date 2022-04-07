// 字典
export default function() {
    this.items = {};

    // 判断字典中是否有该值
    this.__proto__.has = function(key) {
        return this.items.hasOwnProperty(key);
    };

    // 向字典中添加新的值
    this.__proto__.set = function(key, value) {
        this.items[key] = value;
    };

    // 从字典中移除某个值
    this.__proto__.remove = function(key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        } else {
            return false;
        }
    };

    // 通过键查询字典中的值
    this.__proto__.get = function(key) {
        return this.has(key) ? this.items[key] : undefined;
    };

    // 以数组的形式输出字典的所有值
    this.__proto__.values = function() {
        let arr = [];
        for (let key in this.items) {
            if (this.has(key)) {
                arr.push(this.items[key]);
            }
        }
        return arr;
    };

    // 清空字典中所有的值
    this.__proto__.clear = function() {
        this.items = {};
        return true;
    };

    // 返回字典值的数量
    this.__proto__.size = function() {
        let count = 0;
        for (let key in this.items) {
            count++;
        }
        return count;
    };

    // 以数组的形式返回字典所有的键
    this.__proto__.keys = function() {
        let arr = [];
        for (let key in this.items) {
            if (this.has(key)) {
                arr.push(key);
            }
        }
        return arr;
    };

    // 返回字典
    this.__proto__.getItems = function() {
        return this.items;
    };
};