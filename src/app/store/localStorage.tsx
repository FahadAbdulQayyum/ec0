// src/store/localStorage.ts
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) return undefined; // No saved state
        return JSON.parse(serializedState); // Load parsed state
    } catch (err) {
        console.error('Could not load state:', err);
        return undefined;
    }
};

export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState);
    } catch (err) {
        console.error('Could not save state:', err);
    }
};






// export const loadState = () => {
//     try {
//         const serializedState = localStorage.getItem('reduxState');
//         if (serializedState === null) {
//             return undefined; // No state found, return undefined
//         }
//         return JSON.parse(serializedState); // Load and parse state
//     } catch (err) {
//         console.error('Error loading state from localStorage', err);
//         return undefined;
//     }
// };

// export const saveState = (state: any) => {
//     try {
//         const serializedState = JSON.stringify(state);
//         localStorage.setItem('reduxState', serializedState); // Save state to localStorage
//     } catch (err) {
//         console.error('Error saving state to localStorage', err);
//     }
// };
