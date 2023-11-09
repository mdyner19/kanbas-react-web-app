import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assignments: [],
    assignment: { "title": "New Assignment" },
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },

        addAssignment: (state, action) => {
            state.assignments = [action.payload, ...state.assignments];
        },

        deleteAssignment: (state, action) => {
            const assignmentId = action.payload;
            const assignmentToDelete = state.assignments.find(assignment => assignment._id === assignmentId);
            if (!assignmentToDelete) {
                return;
            }
            // Show dialog asking user to confirm
            const confirmDelete = window.confirm(`Are you sure you want to delete the assignment: ${assignmentToDelete.title}?`);
            // Delete assignment if "yes" is clicked on the dialog
            if (confirmDelete) {
                state.assignments = state.assignments.filter(assignment => assignment._id !== assignmentId);
            }
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        selectAssignment: (state, action) => {
            state.assignment = action.payload;
        },
    },
});


export const { addAssignment, deleteAssignment,
    updateAssignment, selectAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;