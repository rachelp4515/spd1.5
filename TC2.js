var middleNode = function(head) {
    if (!head.next) {
        return head;
    }
    let len = 1;
    let list = head;
    while(list.next) {
        len++;
        list = list.next;
    }
    let mid = Math.floor(len / 2);
    list = head;
    while (mid > 0) {
        list = list.next;
        mid--;
    }
    return list;
};