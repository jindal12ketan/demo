/**
 * @file Location Feature Store
 * @description State management for location-specific features
 * @typedef {Object} LocationStates - Location-specific state types
 */

import { create } from 'zustand';

// Define the shape of the store
type LocationStates = {
  testMessage: string; // placeholder for a string
};

// Create the store
// The store is a hook that can be used in any component
// It will return the state and the set function
const useLocationStore = create<LocationStates>(() => ({
  testMessage: 'I am stored on the Location Store!',
}));

export default useLocationStore;
