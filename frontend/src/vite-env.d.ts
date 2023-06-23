/// <reference types="vite/client" />
declare module 'swiper';
declare module 'aos';
declare module 'react-router-hash-link'
interface BotCardDetails {
    id: string;
    name: string;
    folderId: string
  }

  interface FolderDetails {
    id: string;
    name: string;
  }

  type State = {
    isUserLoggedIn: boolean;
    currentFolderId: string;
    folderList: FolderDetails[]
    botList: BotCardDetails[]
  }

  type Action = {
    type: string;
    payload: any;
  }
