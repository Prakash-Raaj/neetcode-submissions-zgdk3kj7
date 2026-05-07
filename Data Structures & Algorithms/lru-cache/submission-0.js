class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.cache = new Map();
        this.left = new Node(0);
        this.right = new Node(0);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    remove(node) {
        
        let temp = node.prev
        let nxt = node.next
        temp.next = nxt
        nxt.prev = temp
    }

    insert(node) {
        //every time we insert at the right most node
        let temp = this.right.prev
        this.right.prev = node
        node.next = this.right
        node.prev = temp
        temp.next = node
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            this.remove(node);
            this.insert(node);
            return node.val;
        } else {
            return -1;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.get(key)) {
            //first reove the item from the list to update or create
            this.remove(this.cache.get(key));
        }
        //update the value and move it to the left (most recent)
        const node = new Node(key, value)
        this.cache.set(key, node)
        this.insert(node)

        if (this.cache.size > this.cap) {
            const lru = this.left.next
            this.remove(lru)
            this.cache.delete(lru.key)
        }
    }
}
