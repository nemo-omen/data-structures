import {assert, assertEquals, assertExists, assertObjectMatch} from "https://deno.land/std/testing/asserts.ts";
import chai from 'https://cdn.skypack.dev/chai';
import LinkedList from './LinkedList.js';

Deno.test("LinkedList was instantiated: ", () => {
  assertObjectMatch(new LinkedList(), {head: undefined, tail: undefined, length: 0});
});

Deno.test("Pushing node to list returns node", () => {
  const testList = new LinkedList();
  assertObjectMatch(testList.push('One'), {data: 'One', next: undefined});
});