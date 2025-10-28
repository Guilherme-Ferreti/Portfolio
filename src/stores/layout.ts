import type { AppSectionId } from '@/enums/AppSectionId';
import { defineStore } from 'pinia';

interface LayoutState {
  sidebarIsOpen: boolean;
  currentlyVisibleSectionsIds: AppSectionId[];
}

export const useLayoutStore = defineStore('layout', {
  state: (): LayoutState => ({
    sidebarIsOpen: false,
    currentlyVisibleSectionsIds: [],
  }),
  actions: {
    addVisibleSection(sectionId: AppSectionId) {
      this.currentlyVisibleSectionsIds.push(sectionId);
    },
    removeVisibleSection(sectionId: AppSectionId) {
      this.currentlyVisibleSectionsIds = this.currentlyVisibleSectionsIds.filter(
        (id) => id !== sectionId,
      );
    },
  },
});
