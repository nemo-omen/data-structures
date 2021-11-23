<<<<<<< HEAD
import {assert, assertEquals, assertExists, assertObjectMatch} from "https://deno.land/std/testing/asserts.ts";
import chai from 'https://cdn.skypack.dev/chai';
import LinkedList from './LinkedList.js';

Deno.test("LinkedList was instantiated: ", () => {
  assertObjectMatch(new LinkedList(), {head: undefined, tail: undefined, length: 0});
});

Deno.test("Pushing node to list returns node", () => {
  const testList = new LinkedList();
  assertObjectMatch(testList.push('One'), {data: 'One', next: undefined});
=======
import {assert, assertExists, assertEquals, assertObjectMatch} from "https://deno.land/std/testing/asserts.ts";
import chai from 'https://cdn.skypack.dev/chai';

import { LinkedList, ListNode } from './LinkedList.js';

Deno.test("LinkedList was instantiated", () => {
  const list = new LinkedList();
  assertObjectMatch(list, {head: undefined, length: 0});
});

Deno.test("Pushed ListNode should be instance of ListNode", () => {
  const list = new LinkedList();
  const pushedNode = list.push('First');
  assert(pushedNode instanceof ListNode);
});

Deno.test("Pushed ListNode data should be 'First'", () => {
  const list = new LinkedList();
  const pushedNode = list.push('First');
  assertEquals(pushedNode.data, 'First');
});

Deno.test("Pushed ListNode next should be undefined", () => {
  const list = new LinkedList();
  const pushedNode = list.push('First');
  assertEquals(pushedNode.next, undefined);
});

Deno.test("List size should be 1 after first push", () => {
  const list = new LinkedList();
  const pushedNode = list.push('First');
  assertEquals(list.size(), 1);
});

Deno.test("Removal of only element should result in list size of 0", () => {
    const list = new LinkedList();
    const pushedNode = list.push('First');
    list.pop();
    assertEquals(list.size(), 0);
>>>>>>> 6f531d9ffc4d989ed9c4bd785459c144131dedb0
});