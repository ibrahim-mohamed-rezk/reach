import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getApi } from "@/libs/axios/backend";
import { FeaturedPost, FeaturedProject } from "@/libs/helpers/types";

export interface ProjectsState {
  projects: FeaturedProject[];
  loading: boolean;
  error: string | null;
}

const initialState: ProjectsState = {
  projects: [],
  loading: false,
  error: null,
};

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async (locale: string, { rejectWithValue }) => {
    try {
      const response = await getApi(
        "/api/projects",
        {},
        {
          "accept-language": locale,
        }
      );
      return response;
    } catch (error) {
      return rejectWithValue("Failed to fetch projects");
    }
  }
);

export const fetchProjectBySlug = createAsyncThunk(
  "projects/fetchProjectBySlug",
  async (slug: string, { rejectWithValue }) => {
    try {
      const response = await getApi(`/api/projects/${slug}`);
      return response;
    } catch (error) {
      return rejectWithValue(`Failed to fetch project with slug: ${slug}`);
    }
  }
);

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProjects.fulfilled,
        (state, action: PayloadAction<FeaturedProject[]>) => {
          state.projects = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchProjectBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProjectBySlug.fulfilled,
        (state, action: PayloadAction<FeaturedProject>) => {
          state.projects = [action.payload];
          state.loading = false;
        }
      )
      .addCase(fetchProjectBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default projectsSlice.reducer;
