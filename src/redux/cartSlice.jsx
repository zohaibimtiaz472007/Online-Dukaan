import { createSlice } from '@reduxjs/toolkit';

let initialState;

try {
    const savedCart = localStorage.getItem('cart');
    initialState = savedCart ? JSON.parse(savedCart) : [];
} catch (error) {
    console.error('Error parsing cart data from localStorage:', error);
    initialState = [];
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload); // Mutate the draft state
            localStorage.setItem('cart', JSON.stringify(state)); // Save updated cart to localStorage
        },
        deleteFromCart(state, action) {
            const updatedState = state.filter(item => item.id !== action.payload.id); // Create a new filtered array
            localStorage.setItem('cart', JSON.stringify(updatedState)); // Save updated cart to localStorage
            return updatedState; // Return the new state
        },
        incrementQuantity(state, action) {
            const itemToUpdate = state.find(item => item.id === action.payload); // Find the item to update
            if (itemToUpdate) {
                itemToUpdate.quantity++; // Mutate the draft state
            }
            localStorage.setItem('cart', JSON.stringify(state)); // Save updated cart to localStorage
        },
        decrementQuantity(state, action) {
            const itemToUpdate = state.find(item => item.id === action.payload); // Find the item to update
            if (itemToUpdate && itemToUpdate.quantity > 1) {
                itemToUpdate.quantity--; // Mutate the draft state
            }
            localStorage.setItem('cart', JSON.stringify(state)); // Save updated cart to localStorage
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
