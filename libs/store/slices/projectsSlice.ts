import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getApi } from "@/libs/axios/backend";
import { FeaturedProject, Meta } from "@/libs/helpers/types";

export interface ProjectsState {
  projects: FeaturedProject[];
  meta: Meta;
  loading: boolean;
  error: string | null;
}

type ResponseTypes = {
  data: FeaturedProject[];

  meta: Meta;
};

const initialState: ProjectsState = {
  projects: [],
  meta: {
    current_page: 1,
    from: null,
    last_page: 1,
    links: [],
    path: "",
    per_page: 10,
    to: null,
    total: 0,
    total_featured: 0,
    total_technologies: [],
  },
  loading: false,
  error: null,
};

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async (
    { locale, currentPage }: { locale: string; currentPage?: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await getApi(
        "/api/projects",
        { page: currentPage, per_page: 10 },
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

export const fetchProgrammingProjects = createAsyncThunk(
  "projects/fetchProgrammingProjects",
  async (locale: string, { rejectWithValue }) => {
    try {
      const response = await getApi(
        "api/projects/programming",
        {},
        {
          "accept-language": locale,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch programming projects");
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
        (state, action: PayloadAction<ResponseTypes>) => {
          state.projects = action.payload.data;
          state.meta = action.payload.meta;
          state.error = null;
          state.loading = false;
        }
      )
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchProgrammingProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProgrammingProjects.fulfilled,
        (state, action: PayloadAction<FeaturedProject[]>) => {
          state.projects = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchProgrammingProjects.rejected, (state, action) => {
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
