const { Ds , Ques}=require("./schema");


const array=[ { name: 'Implement a Maxheap/MinHeap using arrays and recursion.',
gfgURL: 'https://www.geeksforgeeks.org/building-heap-from-array/',
isDone: false,
isReview: false },
{ name: 'Sort an Array using heap. (HeapSort)',
gfgURL: 'https://www.geeksforgeeks.org/heap-sort/',
isDone: false,
isReview: false },
{ name: 'Maximum of all subarrays of size k.',
gfgURL: 'https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/',
isDone: false,
isReview: false },
{ name: '“k” largest element in an array',
gfgURL: 'https://practice.geeksforgeeks.org/problems/k-largest-elements4206/1',
isDone: false,
isReview: false },
{ name: 'Kth smallest and largest element in an unsorted array',
gfgURL: 'https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/',
isDone: false,
isReview: false },
{ name: 'Merge “K” sorted arrays. [ IMP ]',
gfgURL: 'https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1',
isDone: false,
isReview: false },
{ name: 'Merge 2 Binary Max Heaps',
gfgURL: 'https://practice.geeksforgeeks.org/problems/merge-two-binary-max-heap/0',
isDone: false,
isReview: false },
{ name: 'Kth largest sum continuous subarrays',
gfgURL: 'https://www.geeksforgeeks.org/k-th-largest-sum-contiguous-subarray/',
isDone: false,
isReview: false },
{ name: 'Leetcode- reorganize strings',
gfgURL: 'https://leetcode.com/problems/reorganize-string/',
isDone: false,
isReview: false },
{ name: 'Merge “K” Sorted Linked Lists [V.IMP]',
gfgURL: 'https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1',
isDone: false,
isReview: false },
{ name: 'Smallest range in “K” Lists',
gfgURL: 'https://practice.geeksforgeeks.org/problems/find-smallest-range-containing-elements-from-k-lists/1',
isDone: false,
isReview: false },
{ name: 'Median in a stream of Integers',
gfgURL: 'https://practice.geeksforgeeks.org/problems/find-median-in-a-stream/0',
isDone: false,
isReview: false },
{ name: 'Check if a Binary Tree is Heap',
gfgURL: 'https://practice.geeksforgeeks.org/problems/is-binary-tree-heap/1',
isDone: false,
isReview: false },
{ name: 'Connect “n” ropes with minimum cost',
gfgURL: 'https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes/0',
isDone: false,
isReview: false },
{ name: 'Convert BST to Min Heap',
gfgURL: 'https://www.geeksforgeeks.org/convert-bst-min-heap/',
isDone: false,
isReview: false },
{ name: 'Convert min heap to max heap',
gfgURL: 'https://www.geeksforgeeks.org/convert-min-heap-to-max-heap/',
isDone: false,
isReview: false },
{ name: 'Rearrange characters in a string such that no two adjacent are same.',
gfgURL: 'https://practice.geeksforgeeks.org/problems/rearrange-characters/0',
isDone: false,
isReview: false },
{ name: 'Minimum sum of two numbers formed from digits of an array',
gfgURL: 'https://practice.geeksforgeeks.org/problems/minimum-sum4058/1',
isDone: false,
isReview: false } ];

 const Heap= new Ds(
    {
        name:"Heap",
        items:array
    }
);
 




 module.exports={Heap};