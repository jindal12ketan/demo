/**
 * @file Forms Framework Store
 * @description State management for form handling and validation
 * @typedef {Object} FormsFrameworkStoreStates - Form-specific state types
 */

import { create } from 'zustand';

// Define the shape of the store
type FormsFrameworkStoreStates = {
  testMessage: string;
};

// Create the store
// The store is a hook that can be used in any component
// It will return the state and the set function
const useFormsFrameworkStore = create<FormsFrameworkStoreStates>(() => ({
  testMessage: 'I am stored on the Forms Framework Store!',
}));

export default useFormsFrameworkStore;
