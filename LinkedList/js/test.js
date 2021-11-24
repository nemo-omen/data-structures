import {assert, assertExists, assertEquals, assertObjectMatch} from "https://deno.land/std/testing/asserts.ts";
// import chai from 'https://cdn.skypack.dev/chai';
// import { Merlin } from "https://deno.land/x/merlin/mod.ts";
import { Rhum } from "https://deno.land/x/rhum@v1.1.11/mod.ts";

import { LinkedList, ListNode } from './LinkedList.js';

const list = new LinkedList();
const pushedNode = list.push('First');


Deno.test("LinkedList was instantiated", () => {
  assert(list instanceof LinkedList);
});

Deno.test("Pushed ListNode should be instance of ListNode", () => {
  assert(pushedNode instanceof ListNode);
});

Deno.test("Pushed ListNode data should be 'First'", () => {
  assertEquals(pushedNode.data, 'First');
});

Deno.test("Pushed ListNode next should be undefined", () => {
  assertEquals(pushedNode.next, undefined);
});

Deno.test("List size should be 1 after first push", () => {
  assertEquals(list.size(), 1);
});

Deno.test("Removal of only element should result in list size of 0", () => {
    list.pop();
    const size = list.size();
    assertEquals(size, 0);
});

Deno.test("pop() should return a ListNode", () => {
  list.push('First');
  const returned = list.pop();
  assert(returned instanceof ListNode);
});

Deno.test("pop() on empty LinkedList should return undefined", () => {
  const popResult = list.pop();
  assertEquals(undefined, popResult);
})