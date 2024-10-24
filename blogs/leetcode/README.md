---
title: 我只是想找个工作
date: 2024-10-24
---

## 双指针

### 四树之和

四数之和：升序后爆搜，第三个数和第四个数可以左右向中间逼近，减少一层循环（双指针），要注意避免重复的元素

```java
class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);
        Map<Integer, Integer> map = new HashMap<>();
        int n = nums.length;
        List<List<Integer>> res = new ArrayList<>();
        for(int i = 0; i < n; i++){
            for(int j = i+1; j < n; j++){
                int k = j+1, l = n-1;
                while(k < l){
                    long sum = (long) nums[i] + nums[j] + nums[k] + nums[l];
                    if(sum == target){
                        res.add(Arrays.asList(nums[i], nums[j], nums[k], nums[l]));
                        while(k+1 < n && nums[k+1] == nums[k]){ k++; }
                        while(l-1 > 0 && nums[l-1] == nums[l]){ l--; }
                        k++; l--;
                    } else if (sum < target){
                        k++;
                    } else {
                        l--;
                    }
                }
                while(j+1 < n && nums[j+1] == nums[j]){ j++; }
            }
            while(i+1 < n && nums[i+1] == nums[i]){ i++; }
        }
        return res;
    }
}
```

对数组排序

```java
Arrays.sort(nums);
```

`List<List<int>>`添加元素的小技巧

```java
res.add(Arrays.asList(nums[i], nums[j], nums[k], nums[l]));
```

## 优先队列

### LRU 缓存

晕了，情况有点多，哈希表保证查找复杂度为 1，双向链表保证调整优先级复杂度为 1（实际上是删除的复杂度为 1）。即，先用哈希表查找结点，再在双向链表中直接操作该结点，如此保证复杂度均为 O(1)

```java
class LRUCache {

    private Map<Integer, Node> map;
    private int capacity;
    private DeLinkedList list;

    static class Node {
        int key, val;
        Node pre, next;

        Node(){ this.val = -1; this.pre = null; this.next = null; }
        Node(int key, int val){ this.key = key; this.val = val; this.next = null; pre = null; }
    }

    static class DeLinkedList {
        public Node head, tail;

        DeLinkedList(){
            head = new Node();
            tail = null;
        }

        public void insert(Node n){
            // 当链表为空
            if(tail == null){ 
                tail = n;
                n.pre = head;
                n.next = null;
                head.next = n;
                return;
            }
            // 当链表不为空
            n.next = head.next;
            head.next.pre = n;
            head.next = n;
            n.pre = head;
        }

        // 删除链表中结点 n
        public void delete(Node n){
            // 当为尾结点
            if(n.next == null){
                if(n.pre == head){
                    tail = null; // 当只剩一个元素
                } else { 
                    tail = n.pre; // 当有多个元素
                }
                n.pre.next = null;
                return;
            }
            n.pre.next = n.next;
            n.next.pre = n.pre;
        }

    }


    public LRUCache(int capacity) {
        this.capacity = capacity;
        map = new HashMap<>();
        list = new DeLinkedList();
    }
    
    public int get(int key) {
        if(map.containsKey(key)){
            Node n = map.get(key);
            // 更新优先级
            list.delete(n); // 删去原有结点
            list.insert(n); // 头插
            return n.val;
        }
        return -1;
    }
    
    public void put(int key, int value) {
        if(map.containsKey(key)){
            Node n = map.get(key);
            map.remove(key);
            list.delete(n);
        }
        while(map.size() >= capacity){
            // 删除最久未使用元素
            int k = list.tail.key; // 获取最久未使用元素 key
            map.remove(k); // 在 map 中删去
            list.delete(list.tail); // 在 list 中删去
        }
        // 再添加元素
        Node n = new Node(key, value);
        list.insert(n);
        map.put(key, list.head.next);
    }
}
```

在类里写类，直接`static class Node {}`就行，本来想用 PriorityQueue 写，但是根本无法满足删除为 1 的复杂度
