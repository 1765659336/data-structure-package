// 关联矩阵实现有向未加权图
export default function() {
    this.arr = [];

    // 向图中添加边
    this.__proto__.addSide = function(startPoint, endPoint) {
        if (!this.arr[startPoint]) {
            this.arr[startPoint] = [];
            this.arr.length++;
        }
        /* 使用字符作为数组的下标时，数组的length属性不会监听到数组长度的变化 */
        if (!this.arr[startPoint][endPoint]) {
            this.arr[startPoint].length++;
        }
        this.arr[startPoint][endPoint] = 1;
    };

    // 从图中删除边
    this.__proto__.deleteSide = function(startPoint, endPoint) {
        if (this.arr[startPoint] && this.arr[startPoint][endPoint] === 1) {
            this.arr[startPoint][endPoint] = 0;
            this.arr[startPoint].length--;
            // 第二维数组长度为0之后，那么第一维数组长度就要-1
            if (this.arr[startPoint].length === 0) {
                this.arr.length--;
            }
            return true;
        }
        return false;
    };

    // 当前顶点的度
    this.__proto__.getDepth = function(startPoint) {
        if (this.arr[startPoint]) {
            return this.arr[startPoint].length;
        }
        return false;
    };

    // 当前顶点的相邻顶点
    this.__proto__.getNeighbor = function(startPoint) {
        const arr = [];
        if (this.arr[startPoint]) {
            // 当数组使用字符作为下标时，在js中数组其实也是对象，因此可以使用for in 来遍历数组的下标
            for (key in this.arr[startPoint]) {
                arr.push(key);
            }
            return arr;
        }
        return false;
    };

    // 当前图是否有环

    // 当前图是否是连通的

    // 输出两个顶点之间的路径

    // 判断两个顶点之间是否有路径
    this.__proto__.Route = function(startPoint, endPoint) {
        // 出射点
        let allArr = [startPoint];

        // 已经被遍历的出射点
        let downArr = [];

        function a(point) {
            allArr.splice(allArr.indexOf(point), 1);
            downArr.push(point);
            if (this.arr[point]) {
                const arr = [];
                for (key in this.arr[point]) {
                    arr.push(key);
                }
                for (value of arr) {
                    if (downArr.indexOf(value) === -1) {
                        allArr.push(value);
                    }
                }
            }
        }

        while (allArr.length > 0) {
            if (allArr.indexOf(endPoint) !== -1) {
                return true;
            }
            for (value of allArr) {
                a.call(this, value);
            }
        }
        return false;
    };
};