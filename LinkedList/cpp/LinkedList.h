#ifndef LINKEDLIST_H
#define LINKEDLIST_H
#include <iostream>

template<class T>
class ListNode {
  public:
    T value;
    ListNode<T> *next;

    ListNode(T nodeValue) {
      value = nodeValue;
      next = nullptr;
    }
}

template<class T>
class LinkedList {
  private:
    ListNode<T> *head;
    int length;

  public:
    LinkedList() {
      head = nullptr;
      length = 0;
    }

    ~LinkedList();

    ListNode<T>front();
    ListNode<T>back();
    int size();
    void push_back(T);
    void pop_back(T);
    void push_front(T);
    void pop_front(T);
    void insert(T);
    void erase(T);
    void clear();
}