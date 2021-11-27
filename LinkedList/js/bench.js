import {
  bench,
  runBenchmarks,
} from "https://deno.land/std@0.95.0/testing/bench.ts";

import { LinkedList } from './LinkedList.js'

bench({
  name: "run100push()x1,000,000",
  runs: 100,
  func(b) {
    let list = new LinkedList();
    b.start();
    for(let i = 0; i < 1000000; i++) {
      list.push(i);
    }
    b.stop();
  }
});

bench({
  name: "run100unshift()x1,000,000",
  runs: 100,
  func(b) {
    let list = new LinkedList();
    b.start();
    for(let i = 0; i < 1000000; i++) {
      list.unshift(i);
    }
    b.stop();
  }
});

bench({
  name: "run1pop()x10,000",
  runs: 100,
  func(b) {
    let list = new LinkedList();
    for(let i = 0; i < 10000; i++) {
      list.push(i);
    }
    b.start();
    for(let i = 0; i < 10000; i++) {
      list.pop();
    }
    b.stop();
  }
});

bench({
  name: "run100shift()x1,000,000",
  runs: 100,
  func(b) {
    let list = new LinkedList();
    for(let i = 0; i < 1000000; i++) {
      list.push(i);
    }
    b.start();
    for(let i = 0; i < 1000000; i++) {
      list.shift();
    }
    b.stop();
  }
});

runBenchmarks()
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });