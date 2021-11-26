import chai from 'https://cdn.skypack.dev/chai';

import {
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

const assert = chai.assert;

describe("LinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  describe('list', () => {
    it('should be LinkedList{head: undefined, tail: undefined}', () => {
      // use chai assertion here
      assert.deepEqual(list, new LinkedList());
    })
  });

  describe('empty()', () => {
    describe('on empty list', () => {
      it('should return true', () => {
        assertEquals(list.empty(), true);
      });
    });

    describe('on non empty list', () => {
      it('should return false', () => {
        list.push('First');
        list.push('Second');
        list.push('Third');
        assertEquals(list.empty(), false);
      });
    });
  });

  describe("size()", () => {
    it('should be 0', () => {
      assertEquals(list.size(), 0);
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
      
      it('should return LinkNode{data: "Third", next: ListNode{...}', () => {
        insertResult = list.insert('Third', 1);
        assertEquals(insertResult, dummyInsert);
      });

      it('should have a head with next: ListNode{data: "Third", next: ListNode{...}}', () => {
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

      it('should return ListNode{data: "First", next: ListNode{...}}', () => {
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

  describe('remove()', () => {
    describe('on empty list', () => {
      it('should throw UnderflowError', () => {
        assertThrows(() => list.remove(1), UnderflowError);
      });
    });

    describe('on non-empty list', () => {
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

      describe('index smaller than list', () => {
        it('should throw IndexError', () => {
          assertThrows(() => list.remove(-1), IndexError);
        });
      });

      describe('index larger than list', () => {
        it('should throw IndexError', () => {
          assertThrows(() => list.remove(list.size()), IndexError);
        });
      });

      describe('with non-number argument', () => {
        it('should throw IllegalArgumentError', () => {
          assertThrows(() => list.remove('First'), IllegalArgumentError);
        });
      });

      describe('second item', () => {
        it('should return ListNode{data: "Second", next: ListNode{...}}', () => {
          let removeResult = list.remove(1);
          assertEquals(removeResult, dummySecond);
        });
      });
      
      describe('first item', () => {
        it('should return ListNode{data: "First, next: "ListNode...}}', () => {
          let removeResult = list.remove(0);
          assertEquals(removeResult, dummyFirst);
        });
      });

      describe('last item', () => {
        it('should return ListNode{data: "Third, next: undefined}', () => {
          let removeResult = list.remove(list.size() - 1);
          assertEquals(removeResult, dummyThird);
        });
      });
    });

  });

  describe('get()', () => {
    describe('on empty list', () => {
      it('should throw UnderflowError', () => {
        assertThrows(() => list.find('First'), UnderflowError);
      });
    });

    describe('on non-empty list', () => {
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

      describe('index smaller than list', () => {
        it('should throw IndexError', () => {
          assertThrows(() => list.get(-1), IndexError);
        });
      });

      describe('index larger than list', () => {
        it('should throw IndexError', () => {
          assertThrows(() => list.get(list.size()), IndexError);
        });
      });

      describe('with non-number argument', () => {
        it('should throw IllegalArgumentError', () => {
          assertThrows(() => list.get('First'), IllegalArgumentError);
        });
      });

      describe('first item', () => {
        it('should return ListNode{data: "First", next: ListNode{...}}', () => {
          let getResult = list.get(0);
          assertEquals(getResult, dummyFirst);
        });
      });

      describe('second item', () => {
        it('should return ListNode{data: "Second", next: ListNode{...}}', () => {
          let getResult = list.get(1);
          assertEquals(getResult, dummySecond);
        });
      });

      describe('last item', () => {
        it('should return ListNode{data: "Third", next: undefined}', () => {
          let getResult = list.get(list.size() - 1);
          assertEquals(getResult, dummyThird);
        });
      });
    });
  });

  describe('find()', () => {
    describe('on empty list', () => {
      it('should throw UnderflowError', () => {
        assertThrows(() => list.get(1), UnderflowError);
      });
    });

    describe('on non-empty list', () => {
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

      describe('"First"', () => {
        it('should return first item', () => {
          let findResult = list.find('First');
          assertEquals(findResult, dummyFirst);
        });
      });

      describe('item not in list', () => {
        it('should return undefined', () => {
          let findResult = list.find('Whatever');
          assertEquals(findResult, undefined);
        });
      });
    });
  });

  describe('update()', () => {
    describe('on empty list', () => {
      it('should throw UnderflowError', () => {
        assertThrows(() => list.update(1, 'Blahblah'), UnderflowError);
      });
    });

    describe('on non-empty list', () => {
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

      describe('index smaller than list', () => {
        it('should throw IndexError', () => {
          assertThrows(() => list.update(-1, 'Whatever'), IndexError);
        });
      });

      describe('index larger than list', () => {
        it('should throw IndexError', () => {
          assertThrows(() => list.update(list.size(), 'Whatever'), IndexError);
        });
      });

      describe('without value argument', () => {
        it('should throw IllegalArgumentError', () => {
          assertThrows(() => list.update(1), IllegalArgumentError);
        });
      });

      describe('first item', () => {
        it('should return ListNode{data: "Updated first", next: ListNode{...}}', () => {
          let updateResult;
          dummyFirst.data = 'Updated first';
          updateResult = list.update(0, 'Updated first');
          assertEquals(updateResult, dummyFirst);
        });
      });

      describe('middle item', () => {
        it('should return ListNode{data: "Updated second", next: ListNode{...}', () => {
          let updateResult;
          dummySecond.data = 'Updated second';
          updateResult = list.update(1, 'Updated second');
          assertEquals(updateResult, dummySecond);
        });
      });

      describe('last item', () => {
        it('should return ListNode{data: "Updated third", next: undefined', () => {
          let updateResult;
          dummyThird.data = 'Updated third';
          updateResult = list.update(list.size() - 1, 'Updated third');
          assertEquals(updateResult, dummyThird);
        });
      });
    });
  });

  describe('LinkedList.copy()', () => {
    describe('with no parameter', () => {
      it('should throw IllegalArgumentError', () => {
        assertThrows(() => LinkedList.copy(), IllegalArgumentError);
      });
    });

    describe('on empty list', () => {
      it('should return LinkedList{head: undefined, tail: undefined}', () => {
        assert.deepEqual(LinkedList.copy(list), new LinkedList());
      });
    });

    describe('on non-empty list', () => {
      let dummyList;
      beforeEach(() => {
        dummyList = new LinkedList();
        list.push('First');
        dummyList.push('First');
        list.push('Second');
        dummyList.push('Second');
        list.push('Third');
        dummyList.push('Third');
      });

      it('should return a copy of the list', () => {
        assert.deepEqual(LinkedList.copy(list), dummyList);
      });

    });
  });

  describe('map()', () => {
    describe('with no arguments', () => {
      it('should throw IllegalArgumentError', () => {
        assertThrows(() => list.map(), IllegalArgumentError);
      });
    });

    describe('with two arguments', () => {
      it('should throw IllegalArgumentError', () => {
        assertThrows(() => list.map((item) => item = 'Bar', 'Not Good!'), IllegalArgumentError);
      });
    });

    describe('with argument that is not a function', () => {
      it('should throw IllegalArgumentError', () => {
        assertThrows(() => list.map('Nope!'), IllegalArgumentError);
      });
    });


    describe('on empty list', () => {
      it('should return LinkedList{head: undefined, tail: undefined}', () => {
        assert.deepEqual(list.map((item) => item = 'Foo'), list);
      });
    });

    describe('on non-empty list', () => {
      let dummyList = new LinkedList();
      beforeEach(() => {
        list.push('First');
        list.push('Second');
        list.push('Third');
        dummyList.push('Foo');
        dummyList.push('Foo');
        dummyList.push('Foo');
      });
      
      describe('changing ListNode.data', () => {
        it('should return ListNode{data: "Foo", next: ListNode{...}}', () => {
          assert.deepEqual(list.map((item) => item = 'Foo'), dummyList);
        });
      });

    });
  });

  describe('filter()', () => {
    beforeEach(() => {
      list.push('First');
      list.push('First');
      list.push('First');
      list.push('Second');
      list.push('Third');
      list.push(1);
      list.push(2);
      list.push(3);
    });

    describe('with no arguments', () => {
      it('should throw IllegalArgumentError', () => {
        assertThrows(() => list.filter(), IllegalArgumentError);
      });
    });

    describe('with two arguments', () => {
      it('should throw IllegalArgumentError', () => {
        assertThrows(() => list.filter((node) => node.data === 'Second', 'Oops!'), IllegalArgumentError);
      });
    })

    describe('with non-function argument', () => {
      it('should throw IllegalArgumentError', () => {
        assertThrows(() => list.filter('Oops!'), IllegalArgumentError);
      });
    });

    describe('for "First"', () => {
      it('should return LinkedList{...} of 3 elements', () => {
        let listFirsts = new LinkedList();
        listFirsts.push('First');
        listFirsts.push('First');
        listFirsts.push('First');
        assert.deepEqual(list.filter((el) => el.data === 'First'), listFirsts);
      });
    });

    describe('for number', () => {
      it('should return LinkedList{...} of 3 elements', () => {
        let listNumbers = new LinkedList();
        listNumbers.push(1);
        listNumbers.push(2);
        listNumbers.push(3);
        assert.deepEqual(list.filter((el) => typeof el.data === 'number'), listNumbers);
      });
    });
  });

});