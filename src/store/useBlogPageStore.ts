/**
 * @file Blog Feature Store
 * @description State management for blog-specific features
 * @typedef {Object} BlogPageStates - Blog-specific state types
 */

import { create } from 'zustand';

// Define the shape of the store
type BlogPageStates = {
  testMessage: string;
};

// Create the store
// The store is a hook that can be used in any component
// It will return the state and the set function
const useBlogPageStore = create<BlogPageStates>(() => ({
  testMessage: 'I am stored on the Blog Page Store!',
}));

export default useBlogPageStore;
