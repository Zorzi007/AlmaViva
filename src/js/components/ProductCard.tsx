import { motion } from 'framer-motion';
import { useState } from 'react';
import type { Product } from '../data/products';
import { useProductStore, type ProductStore } from '../store/useProductStore';

interface ProductCardProps {
  product: Product;
  viewMode: 'mosaic' | 'list';
}

export const ProductCard = ({ product, viewMode }: ProductCardProps) => {
  const openProduct = useProductStore((state: ProductStore) => state.openProduct);
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <motion.article
      layout
      className={viewMode === 'mosaic' ? 'product-card mosaic' : 'product-card list'}
      style={{
        background:
          viewMode === 'mosaic'
            ? `linear-gradient(135deg, ${product.primaryColor}22, ${product.accentColor}40)`
            : 'var(--surface-soft)',
        borderColor: `${product.primaryColor}40`
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => openProduct(product.id)}
    >
      <div className="product-card__header">
        <div
          className="product-card__avatar"
          style={{ background: `linear-gradient(135deg, ${product.primaryColor}, ${product.accentColor})` }}
        >
          {!logoFailed && product.logo ? (
            <img
              src={product.logo}
              alt={`Logo ${product.name}`}
              loading="lazy"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <span>{product.name.slice(0, 2).toUpperCase()}</span>
          )}
        </div>
        <div>
          <h3>{product.name}</h3>
          <p>{product.segment}</p>
        </div>
      </div>
      <p className="product-card__tagline">{product.tagline}</p>
      <div className="product-card__meta">
        <span className={`status-pill status-${product.status}`}>
          {product.status === 'ativo' && 'Live'}
          {product.status === 'expansao' && 'Em expansão'}
          {product.status === 'beta' && 'Beta controlado'}
        </span>
        <span className="meta-item">{product.headquarters}</span>
        <span className="meta-item">Atualizado em {new Date(product.lastUpdate).toLocaleDateString('pt-BR')}</span>
      </div>
    </motion.article>
  );
};
