import { createSlice } from '@reduxjs/toolkit';
import { jobs } from './jobsData';

const initialState = {
  allJobs: jobs,
  filteredJobs: jobs,
  filters: {
    location: '',
    department: '',
    minSalary: 0,
    maxSalary: 10000,
  },
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
      state.filteredJobs = state.allJobs.filter((job) => {
        const matchesLocation = !state.filters.location || job.location === state.filters.location;
        const matchesDepartment = !state.filters.department || job.department === state.filters.department;
        const matchesSalary = job.salary >= state.filters.minSalary
          && job.salary <= state.filters.maxSalary;

        return matchesLocation && matchesDepartment && matchesSalary;
      });
    },
    resetFilters(state) {
      state.filters = initialState.filters;
      state.filteredJobs = state.allJobs;
    },
  },
});

export const { setFilters, resetFilters } = jobsSlice.actions;
export default jobsSlice.reducer;
