class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}
let arr = ['right', 'down', 'left', 'up']
let head
let list = new ListNode('right')
head = list
for (let i = 0; i < arr.length; i++) {
    list.next = new ListNode(arr[i + 1])
    list = list.next
}
// 尾结点连接到头结点
list.next = head
// console.log(head);