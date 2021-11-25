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

    describe('at size() + 1 of empty LinkedList', () => {
      it('should throw IndexError', () => {
        assertThrows(() => list.insert(new ListNode('First'), list.size() + 1), IndexError);
      });
    });

    describe('at [-1] of empty LinkedList', () => {
      it('should throw IndexError', () => {
        assertThrows(() => list.insert(new ListNode('First'), -1), IndexError);
      });
    });

    describe('at [1] of non-empty LinkedList', () => {
      let dummyInsert, dummyFirst, dummySecond;
      beforeEach(() => {
        list.push('First');
        list.push('Second');
        dummyFirst = new ListNode('First');
        dummyInsert = new ListNode('Third');
        dummySecond = new ListNode('Second');
        dummyFirst.next = dummyInsert;
        dummyInsert.next = dummySecond;
      });
      
      it('should return LinkNode{data: "Third", next: ListNode{data: "Second", next: undefined}}', () => {
        insertResult = list.insert('Third', 1);
        assertEquals(insertResult, dummyInsert);
      });

      it('should have a head with next: ListNode{data: "Third", next: ListNode{data: "Second", next: undefined}}', () => {
        insertResult = list.insert('Third', 1);
        assertEquals(list.head.next, dummyInsert);
      });
    });
  });

  describe('pop()', () => {
    describe('on empty list', () => {
      it('should throw UnderflowError', () => {
        assertThrows(() => list.pop(), UnderflowError);
      });
    });

    describe('on list size = 3', () => {
      let popResult;
      beforeEach(() => {
        list.push('First');
        list.push('Second');
        list.push('Third');
      });

      it('should return ListNode{data: "Third", next: undefined}', () => {
        popResult = list.pop();
        assertEquals(popResult, new ListNode('Third'));
      });

      it('should result in list size n - 1', () => {
        let preSize = list.size();
        list.pop();
        let postSize = list.size();
        assertEquals(preSize - postSize, 1);
      });
    });
  });

  describe('shift()', () => {
    describe('on empty list', () => {
      it('should throw UnderflowError', () => {
        assertThrows(() => list.shift(), UnderflowError);
      });
    });

    describe('on list size = 3', () => {
      let shiftResult;
      let dummyFirst, dummySecond, dummyThird;

      beforeEach(() => {
        list.push('First');
        list.push('Second');
        list.push('Third');
        dummyFirst = new ListNode('First');
        dummySecond = new ListNode('Second');
        dummyThird = new ListNode('Third');
        dummyFirst.next = dummySecond;
        dummySecond.next = dummyThird;
      });

      it('should return ListNode{data: "First", next: {data: "Second", next: {data: "Third", next: undefined}}', () => {
        assertEquals(list.shift(), dummyFirst);
      });

      it('should result in list size n - 1', () => {
        let preSize = list.size();
        list.shift();
        let postSize = list.size();
        assertEquals(preSize - postSize, 1);
      });
    });
  });

});