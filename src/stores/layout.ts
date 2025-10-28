import { defineStore } from 'pinia';

interface LayoutState {
  sidebarIsOpen: boolean;
  currentlyVisibleSectionsIds: string[];
}

export const useLayoutStore = defineStore('layout', {
  state: (): LayoutState => ({
    sidebarIsOpen: false,
    currentlyVisibleSectionsIds: [],
  }),
  actions: {
    addVisibleSection(sectionId: string) {
      this.currentlyVisibleSectionsIds.push(sectionId);
    },
    removeVisibleSection(sectionId: string) {
      this.currentlyVisibleSectionsIds = this.currentlyVisibleSectionsIds.filter(
        (id) => id !== sectionId,
      );
    },
  },
});
