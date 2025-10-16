import { motion } from 'framer-motion';
import { Filter, Grid2x2, Rows, Search, XCircle } from 'lucide-react';
import { type ChangeEvent } from 'react';
import { productGroups } from '../data/products';
import { useProductStore, type ProductStore } from '../store/useProductStore';

export const FilterToolbar = () => {
  const {
    searchTerm,
    setSearchTerm,
    activeGroups,
    toggleGroup,
    viewMode,
    setViewMode,
    resetFilters
  } = useProductStore((state: ProductStore) => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
    activeGroups: state.activeGroups,
    toggleGroup: state.toggleGroup,
    viewMode: state.viewMode,
    setViewMode: state.setViewMode,
    resetFilters: state.resetFilters
  }));

  return (
    <section className="filter-toolbar" aria-label="Filtro de produtos">
      <div className="filter-primary">
        <div className="search-group">
          <Search size={18} />
          <input
            type="search"
            value={searchTerm}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
            placeholder="Buscar por marca, segmento ou tecnologia"
            aria-label="Buscar produtos"
          />
          {searchTerm && (
            <button type="button" className="reset-icon" onClick={() => setSearchTerm('')}>
              <XCircle size={14} />
            </button>
          )}
        </div>
        <div className="view-toggle" role="group" aria-label="Alternar visualização">
          <button
            type="button"
            className={viewMode === 'mosaic' ? 'view-btn active' : 'view-btn'}
            onClick={() => setViewMode('mosaic')}
          >
            <Grid2x2 size={16} />
            Mosaico
          </button>
          <button
            type="button"
            className={viewMode === 'list' ? 'view-btn active' : 'view-btn'}
            onClick={() => setViewMode('list')}
          >
            <Rows size={16} />
            Lista
          </button>
        </div>
      </div>
      <div className="filter-secondary">
        <div className="filter-group">
          <Filter size={16} />
          <span>Clusters</span>
          <div className="chip-line">
            {productGroups.map((group) => {
              const isActive = activeGroups.has(group);
              return (
                <motion.button
                  key={group}
                  type="button"
                  className={isActive ? 'chip active' : 'chip'}
                  onClick={() => toggleGroup(group)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {group}
                </motion.button>
              );
            })}
          </div>
        </div>
        <motion.button
          type="button"
          className="reset-filters"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          onClick={resetFilters}
        >
          Recarregar Curadoria
        </motion.button>
      </div>
    </section>
  );
};
