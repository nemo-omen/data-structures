import {assert, assertExists, assertObjectMatch} from "https://deno.land/std/testing/asserts.ts";
import LinkedList from './LinkedList.js';

Deno.test("Test LinkedList was instantiated", () => {
  const list = new LinkedList();
  assertObjectMatch(list, {head: undefined, length: 0});
});