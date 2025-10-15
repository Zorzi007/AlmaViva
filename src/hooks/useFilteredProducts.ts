import { useMemo } from 'react';
import { products, productGroups, type Product, type ProductGroup } from '../data/products';
import { useProductStore, type ProductStore } from '../store/useProductStore';

export type GroupedProducts = {
  group: ProductGroup;
  products: Product[];
};

const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export const useFilteredProducts = () => {
  const { searchTerm, activeGroups } = useProductStore((state: ProductStore) => ({
    searchTerm: state.searchTerm,
    activeGroups: state.activeGroups
  }));

  return useMemo<GroupedProducts[]>(() => {
    const normalizedSearch = normalize(searchTerm.trim());
    const useGroups = activeGroups.size > 0 ? Array.from(activeGroups) : productGroups;

    const matchesSearch = (product: Product) => {
      if (!normalizedSearch) return true;
      const haystack = [product.name, product.segment, product.tagline, product.description, ...product.tags]
        .map(normalize)
        .join(' ');
      return haystack.includes(normalizedSearch);
    };

    const grouped = new Map<ProductGroup, Product[]>();

    for (const group of useGroups) {
      grouped.set(group, []);
    }

    for (const product of products) {
      if (!useGroups.includes(product.group)) continue;
      if (!matchesSearch(product)) continue;
      grouped.get(product.group)?.push(product);
    }

    return Array.from(grouped.entries())
      .map(([group, entries]) => ({ group, products: entries }))
      .filter((item) => item.products.length > 0);
  }, [searchTerm, activeGroups]);
};
