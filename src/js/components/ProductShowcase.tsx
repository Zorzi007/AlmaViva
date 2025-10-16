import { AnimatePresence, motion } from 'framer-motion';
import { useFilteredProducts, type GroupedProducts } from '../hooks/useFilteredProducts';
import { useProductStore, type ProductStore } from '../store/useProductStore';
import { ProductCard } from './ProductCard';

export const ProductShowcase = () => {
  const groups = useFilteredProducts();
  const viewMode = useProductStore((state: ProductStore) => state.viewMode);

  return (
    <section className="product-showcase" id="products">
      <header className="section-header">
        <div>
          <h2>Portfólio High-End</h2>
          <p>Clusters cuidadosamente curados unindo operações de DC e CX com o máximo de sofisticação.</p>
        </div>
      </header>
      {groups.length === 0 && (
        <div className="empty-state">
          <p>Refine os filtros para visualizar os programas que combinam com sua estratégia.</p>
        </div>
      )}
      <div className="group-stack">
        {groups.map(({ group, products }: GroupedProducts) => (
          <motion.div key={group} layout className="group-section">
            <div className="group-header">
              <h3>{group}</h3>
              <p>{products.length} operações em evolução contínua.</p>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={viewMode}
                className={viewMode === 'mosaic' ? 'product-grid mosaic' : 'product-grid list'}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.24 }}
              >
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
