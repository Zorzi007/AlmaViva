import { create } from 'zustand';
import type { ProductGroup } from '../data/products';

type ViewMode = 'mosaic' | 'list';

export type ProductStore = {
  searchTerm: string;
  activeGroups: Set<ProductGroup>;
  viewMode: ViewMode;
  selectedProductId: string | null;
  setSearchTerm: (value: string) => void;
  toggleGroup: (group: ProductGroup) => void;
  setViewMode: (mode: ViewMode) => void;
  openProduct: (id: string) => void;
  closeProduct: () => void;
  resetFilters: () => void;
};

const toggleFromSet = <T,>(setToEdit: Set<T>, value: T): Set<T> => {
  const next = new Set(setToEdit);
  if (next.has(value)) {
    next.delete(value);
  } else {
    next.add(value);
  }
  return next;
};

export const useProductStore = create<ProductStore>((set) => ({
  searchTerm: '',
  activeGroups: new Set(),
  viewMode: 'mosaic',
  selectedProductId: null,
  setSearchTerm: (value: string) => set({ searchTerm: value }),
  toggleGroup: (group: ProductGroup) =>
    set((state) => ({
      activeGroups: toggleFromSet(state.activeGroups, group)
    })),
  setViewMode: (mode: ViewMode) => set({ viewMode: mode }),
  openProduct: (id: string) => set({ selectedProductId: id }),
  closeProduct: () => set({ selectedProductId: null }),
  resetFilters: () =>
    set({
      searchTerm: '',
      activeGroups: new Set(),
      viewMode: 'mosaic'
    })
}));
