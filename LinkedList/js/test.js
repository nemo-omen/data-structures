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

  describe('insert(0)', () => {
    it('should return instance of ListNode', () => {
      let insertResult = list.insert('First', 0);
      assertEquals(insertResult instanceof ListNode, true);
    });
  });

  describe('push()', () => {
    let pushResult;

    beforeEach(() => {
      pushResult = list.push('First');
    })
    it('should return instance of ListNode', () => {
      assertEquals(pushResult instanceof ListNode, true);
    });

    it('should have a size of 1', () => {
      assertEquals(list.size(), 1);
    });

  });

  describe('unshift()', () => {
    let unshiftResult;

    beforeEach(() => {
      unshiftResult = list.unshift('First');
    });

    it('should return instance of ListNode', () => {
      assertEquals(unshiftResult instanceof ListNode, true);
    });

    it('head.data should be "First"', () => {
      assertEquals(list.head.data, 'First');
    });

    it('should have a size of 1', () => {
      assertEquals(list.size(), 1);
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

  describe('head.next', () => {
    it('should be instance of ListNode', () => {
      list.push('Two');
      assertEquals(list.head.next instanceof ListNode, true);
    });
  });

  describe('size() after push', () => {
    it('should be 2', () => {
      list.push('Two');
      assertEquals(list.size(), 2);
    });
  });

});

describe('Multi-Item LinkedList', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
    list.push('First');
    list.push('Second');
    list.push('Third');
  });

  describe('tail.data', () => {
    it('should be "Third"', () => {
      assertEquals(list.tail.data, 'Third');
    });
  });

  describe('get(1)', () => {
    it('should return a ListNode', () => {
      assertEquals(list.get(1) instanceof ListNode, true);
    });

    it('should have data: "Second"', () => {
      assertEquals(list.get(1).data, 'Second');
    });
  });

  describe('insert(\'Four\', 1)', () => {
    let insertReturn;

    beforeEach(() => {
      insertReturn = list.insert('Fourth', 1);
    });

    it('should return a ListNode', () => {
      assertEquals(insertReturn instanceof ListNode, true);
    });

    it('should have data: "Fourth"', () => {
      assertEquals(insertReturn.data, 'Fourth');
    });
  });

  describe('insert at front', () => {
    let insertReturn;

    beforeEach(() => {
      insertReturn = list.insert('Fourth', 0);
    });

    it('should return a ListNode', () => {
      assertEquals(insertReturn instanceof ListNode, true);
    });

    it('head.data should equal "Fourth"', () => {
      assertEquals(list.head.data, 'Fourth');
    });

    it('head.next.data should equal "First"', () => {
      assertEquals(list.head.next.data, 'First');
    });

    it('size() should be 4', () => {
      assertEquals(list.size(), 4);
    });
  });

  describe('insert at end', () => {
    it('should return a ListNode', () => {
      let insertReturn = list.insert('Fourth', 3);
      assertEquals(insertReturn instanceof ListNode, true);
    });
  });

  describe('insert after end', () => {
    it('should throw IndexError', () => {
      assertThrows(() => list.insert('Fourth', 4));
    });
  });

  describe('insert before begin', () => {
    it('should throw IndexError', () => {
      assertThrows(() => list.insert('Fourth', -1), IndexError);
    })
  });

});