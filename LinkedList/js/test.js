import {assert,
        assertExists, 
        assertEquals, 
        assertObjectMatch,
        assertThrows
      } from "https://deno.land/std/testing/asserts.ts";
import { LinkedList, ListNode, UnderflowError } from './LinkedList.js';

const list = new LinkedList();
const pushedNode = list.push('First');

Deno.test("LinkedList was instantiated", () => {
  assert(list instanceof LinkedList);
});

Deno.test("ListNode was instantiated", () => {
  assert(pushedNode instanceof ListNode);
});

Deno.test("ListNode data should be 'First'", () => {
  assertEquals(pushedNode.data, 'First');
});

Deno.test("ListNode.next() should be 'undefined'", () => {
  assertEquals(pushedNode.next, undefined);
});

Deno.test("List size should be 1", () => {
  assertEquals(list.size(), 1);
});

Deno.test("size() should be 0", () => {
    list.pop();
    const size = list.size();
    assertEquals(size, 0);
});

Deno.test("pop() should return ListNode", () => {
  list.push('First');
  const returned = list.pop();
  assert(returned instanceof ListNode);
});

Deno.test("pop() should throw UnderFlowError", () => {
  assertThrows(() => list.pop(), UnderflowError);
})

Deno.test("get() should return ListNode", () => {
    list.push('First');
    list.push('Third');
    const getResult = list.get(1);
    assert(getResult instanceof ListNode);
});

Deno.test("get(1) should return ListNode at 2nd index", () => {
  list.push('Third');
  const getResult = list.get(2);
  assertEquals(getResult.data, 'Third');
});

// Deno.test("insert() should return ListNode", () => {
//   const insertResult = list.insert('Second', 1);
//   assert(insertResult instanceof ListNode);
// });