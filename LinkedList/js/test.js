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

import { LinkedList, ListNode, UnderflowError, IndexError, IllegalArgumentError } from './LinkedList.js';

describe("LinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  describe('list', () => {
    it('should equal LinkedList{head: undefined, tail: undefined}', () => {
      assertEquals(list, new LinkedList());
    })
  });

  describe("size()", () => {
    it('should be 0', () => {
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

  describe('push()', () => {
    let pushResult;
    
    describe('with data parameter', () => {
      beforeEach(() => {
        pushResult = list.push('First');
      });
  
      it('should return ListNode {data: "First", next: undefined}', () => {
        assertEquals(pushResult, new ListNode('First'));
      });
  
      it('should have a size of 1', () => {
        assertEquals(list.size(), 1);
      });
    });

    describe('with ListNode instance', () => {
      let node = new ListNode('First');
  
      beforeEach(() => {
        pushResult = list.push(node);
      });
  
      it('should return ListNode {data: "First", next: undefined}', () => {
        assertEquals(pushResult, node);
      });
  
      it('should have a size of 1', () => {
        assertEquals(list.size(), 1);
      });
    });

    describe('with no arguments', () => {
      it('should throw IllegalArgumentError', () => {
        assertThrows(() => list.push(), IllegalArgumentError);
      });
    });

    describe('with null', () => {
      it('should throw IllegalArgumentError', () => {
        assertThrows(() => list.push(null), IllegalArgumentError);
      });
    });

    describe('with undefined', () => {
      it('should throw IllegalArgumentError', () => {
        assertThrows(() => list.push(undefined), IllegalArgumentError);
      });
    });

  });

  describe('unshift()', () => {
    let unshiftResult;

    describe('with data parameter', () => {
      beforeEach(() => {
        unshiftResult = list.unshift('First');
      });

      it('should return ListNode{data: "First", next: undefined}', () => {
        assertEquals(unshiftResult, new ListNode('First'));
      });

      it('should have a size of 1', () => {
        assertEquals(list.size(), 1);
      });
    });

    describe('with ListNode instance', () => {
      beforeEach(() => {
        unshiftResult = list.unshift(new ListNode('First'));
      });

      it('should return ListNode{data: "First", next: undefined}', () => {
        assertEquals(unshiftResult, new ListNode('First'));
      });

      it('should have a size of 1', () => {
        assertEquals(list.size(), 1);
      });
    });

    describe('with no arguments', () => {
      it('should throw IllegalArgumentError', () => {
        assertThrows(() => list.unshift(), IllegalArgumentError);
      });
    });

    describe('with null', () => {
      it('should throw IllegalArgumentError', () => {
        assertThrows(() => list.unshift(null), IllegalArgumentError);
      });
    });

    describe('with undefined', () => {
      it('should throw IllegalArgumentError', () => {
        assertThrows(() => list.unshift(undefined), IllegalArgumentError);
      });
    });
  });

  describe('insert()', () => {
    let insertResult;

    describe('at [0] of empty LinkedList with data parameter', () => {
      it('should return ListNode{data: "First", next: undefined}', () => {
        insertResult = list.insert('First', 0);
        assertEquals(insertResult, new ListNode('First'));
      });
    });

    describe('at [0] of empty LinkedList with ListNode instance', () => {
      it('should return ListNode{data: "First", next: undefined}', () => {
        insertResult = list.insert(new ListNode('First'), 0);
        assertEquals(insertResult, new ListNode('First'));
      });
    });

    describe('at [1] of empty LinkedList', () => {
      it('should throw IndexError', () => {
        assertThrows(() => list.insert(new ListNode('First'), 1), IndexError);
      });
    });

    describe('at [-1] of empty LinkedList', () => {
      it('should throw IndexError', () => {
        assertThrows(() => list.insert(new ListNode('First'), -1), IndexError);
      });
    });

    describe('at [1] of non-empty LinkedList', () => {
      
      it('should return LinkNode{data: "Third", next: ListNode{data: "Second", next: undefined}}', () => {
        list.push('First');
        list.push('Second');
        insertResult = list.insert('Third', 1);
        assertEquals(insertResult instanceof ListNode);
      });
    });
  });






  // describe('insert(1) on empty list', () => {
  //   it('should throw IndexError', () => {
  //     assertThrows(() => list.insert('First', 1), IndexError);
  //   });
  // });

});