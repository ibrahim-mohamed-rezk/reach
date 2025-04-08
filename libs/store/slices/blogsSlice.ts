import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getApi } from "@/libs/axios/backend";
import { FeaturedPost } from "@/libs/helpers/types";

export interface BlogsState {
  blogs: FeaturedPost[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogsState = {
  blogs: [],
  loading: false,
  error: null,
};



export const fetchBlogBySlug = createAsyncThunk(
  "blogs/fetchBlogBySlug",
  async (slug: string, { rejectWithValue }) => {
    try {
      const response = await getApi(`/api/posts/${slug}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(`Failed to fetch blog with slug: ${slug}`);
    }
  }
);

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchBlogBySlug.fulfilled,
        (state, action: PayloadAction<FeaturedPost>) => {
          state.blogs = [action.payload];
          state.loading = false;
        }
      )
      .addCase(fetchBlogBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default blogsSlice.reducer;
