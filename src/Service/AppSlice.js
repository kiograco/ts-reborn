import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
        channels: [],
        channelId: null,
        channelName: null,
  },
  
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
    setChannels: (state, action) => {
      state.channels = action.payload;
    }
  },
});

export const { setChannelInfo,setChannels } = appSlice.actions;
export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;
export const selectChannels = (state) => state.app.channels;


export default appSlice.reducer;
