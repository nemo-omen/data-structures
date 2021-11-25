import {
  assert,
  assertExists, 
  assertEquals,
  assertStrictEquals,
  assertObjectMatch,
  assertThrows
} from "https://deno.land/std/testing/asserts.ts";

import {
  afterEach,
  beforeEach,
  describe,
  it,
} from "https://deno.land/x/test_suite@0.9.1/mod.ts";

import { LinkedList, ListNode, UnderflowError, IndexError } from './LinkedList.js';

describe("Empty LinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  describe('instanceof', () => {
    it('should be LinkedList', () => {
      assertEquals(list instanceof LinkedList, true);
    });
  });

  describe('head', () => {
    it('should be undefined', () => {
      assertEquals(list.head, undefined);
    })
  });

  describe('tail', () => {
    it('should be undefined', () => {
      assertEquals(list.tail, undefined);
    })
  });

  describe("size()", () => {
    it('should return 0', () => {
      assertEquals(list.size(), 0);
    });
  });

  describe('pop()', () => {
    it('should throw UnderflowError', () => {
      assertThrows(() => list.pop(), UnderflowError);
    });
  });

  describe('get()', () => {
    it('should throw UnderflowError', () => {
      assertThrows(() => list.get(1), UnderflowError);
    });
  });

  describe('insert(1)', () => {
    it('should throw IndexError', () => {
      assertThrows(() => list.insert('First', 1), IndexError);
    });
  });

  describe('insert(-1)', () => {
    it('should throw IndexError', () => {
      assertThrows(() => list.insert('First', -1), IndexError);
    });
  });

  describe('push()', () => {
    it('should return instance of ListNode', () => {
      let pushResult = list.push('First');
      assertEquals(pushResult instanceof ListNode, true);
    });
  });

  describe('insert(0)', () => {
    it('should return instance of ListNode', () => {
      let insertResult = list.insert('First', 0);
      assertEquals(insertResult instanceof ListNode, true);
    });
  });

});

describe('Non-Empty LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
    list.push('First');
  });

  describe('size()', () => {
    it('should return 1', () => {
      assertEquals(list.size(), 1);
    })
  });

  describe('head', () => {
    it('should be instance of ListNode', () => {
      assertEquals(list.head instanceof ListNode, true);
    });
  });

  describe('tail', () => {
    it('should be instance of ListNode', () => {
      assertEquals(list.tail instanceof ListNode, true);
    });
  });

  describe('head and tail', () => {
    it('should be strictly equal', () => {
      assertStrictEquals(list.head, list.tail);
    });
  });
});


// Deno.test("ListNode was instantiated", () => {
//   assert(pushedNode instanceof ListNode);
// });

// Deno.test("ListNode data should be 'First'", () => {
//   assertEquals(pushedNode.data, 'First');
// });

// Deno.test("ListNode.next() should be 'undefined'", () => {
//   assertEquals(pushedNode.next, undefined);
// });

// Deno.test("List size should be 1", () => {
//   assertEquals(list.size(), 1);
// });

// Deno.test("pop() should return ListNode", () => {
//   list.push('First');
//   const returned = list.pop();
//   assert(returned instanceof ListNode);
// });

// Deno.test("pop() should throw UnderFlowError", () => {
//   assertThrows(() => list.pop(), UnderflowError);
// })


// Deno.test("get() should return ListNode", () => {
//     list.push('First');
//     list.push('Third');
//     const getResult = list.get(1);
//     assert(getResult instanceof ListNode);
// });

// Deno.test("get(0) should have data: 'First'", () => {
//   const getResult = list.get(0);
//   assertEquals(getResult.data, 'First');
// });

// console.log('list: ', list);

// Deno.test("insert() should return ListNode", () => {
//   const insertResult = list.insert('Second', 1);
//   assert(insertResult instanceof ListNode);
// });