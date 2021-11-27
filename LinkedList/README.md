# Linked List


## Methods
Methods in the following table will be included in each implementation of LinkedList. A ✔️ in the language column for a given method means that method has been implemented in that language. 

| Method | Description | JS | TS | C++ |
| ------ | ----------- | -- | -- | --- |
| `size()` | Returns # of elements in the list. | ✔️ |  |  |
| `empty()` | Returns `true` if list is empty. | ✔️ |  |  |
| `get()` | Returns ListNode at given element. | ✔️ |  |  |
| `find()` | Returns ListNode with data property that matches value parameter. | ✔️ |  |  |
| `push()` | Inserts element at end of list - either by instantiating a new ListNode with a given value or by inserting a pre-instantiated node. | ✔️ |  |  |
| `unshift()` | Inserts element at start of list - either by instantiating a new ListNode with a given value or by inserting a pre-instantiated node. | ✔️ |  |  |
| `insert` | Inserts element at given index - either by instantiating a new ListNode with a given value or by inserting a pre-instantiated node. | ✔️ |  |  |
| `pop()` | Removes element from end of list and returns that element | ✔️ |  |  |
| `shift()` | Removes element from start of list and returns that element | ✔️ |  |  |
| `remove()` | Removes element at given index and returns that element | ✔️ |  |  |
| `update()` | Changes the value of an element at a given index. | ✔️ |  |  |
| `LinkedList.copy()` | __Static method.__ Creates a LinkedList from a given list, returns copy | ✔️ |  |  |
| `filter()` | Filters a list against a specific condition, returns LinkedList of nodes who match the condition. | ✔️ |  |  |
| `sort()` | Sorts a LinkedList - in ascending order by default, but should allow for a given sorting function. Returns sorted copy. | ✔️ |  |  |
| `map()` | Applies a given function to each element in a given list. Returns a copy of transformed list. | ✔️ |  |  |
| `reduce()` | Applies a given reducer method to each element of the list. Returns a single value. | ✔️ |  |  |
| `iterator` | Add iterator (or similar) to make things like `for...of` loops possible | ✔️ |  |  |

## Improvements

Allow for both iteration and indexing. Using the method below, this would also allow for pushing to the LinkedList by using the `spread` operator:

[Make a linked list instance accessible by index and iterable](https://stackoverflow.com/questions/67238582/make-a-linked-list-instance-accessible-by-index-and-iterable)