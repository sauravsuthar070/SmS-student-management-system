import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch students from an API or server
export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
  const response = await fetch('http://localhost:3001/students'); // Replace with your actual API endpoint
  const data = await response.json();
  return data;
});

const initialState = {
  students: [],
  status: 'idle', // for tracking loading status
  error: null,    // for tracking errors
};

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    removeStudent: (state, action) => {
      state.students = state.students.filter(student => student.id !== action.payload);
    },
    updateStudent: (state, action) => {
      const index = state.students.findIndex(student => student.id === action.payload.id);
      if (index !== -1) {
        state.students[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the actions
export const { addStudent, removeStudent, updateStudent } = studentsSlice.actions;

// Export the reducer
export default studentsSlice.reducer;
