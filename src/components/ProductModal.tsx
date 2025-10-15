import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Product } from '../data/products';
import { products } from '../data/products';
import { useProductStore, type ProductStore } from '../store/useProductStore';

export const ProductModal = () => {
  const { selectedProductId, closeProduct } = useProductStore((state: ProductStore) => ({
    selectedProductId: state.selectedProductId,
    closeProduct: state.closeProduct
  }));

  const product = selectedProductId ? products.find((item) => item.id === selectedProductId) : undefined;
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    setLogoFailed(false);
  }, [product?.id]);
  const statusLabel: Record<Product['status'], string> = {
    ativo: 'Operação ativa',
    expansao: 'Em expansão',
    beta: 'Programa beta'
  };

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-panel"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3 }}
            style={{ borderColor: `${product.primaryColor}40` }}
          >
            <header className="modal-header">
              <div
                className="modal-avatar"
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
                  product.name.slice(0, 2).toUpperCase()
                )}
              </div>
              <div>
                <h3>{product.name}</h3>
                <p>{product.segment}</p>
              </div>
              <button type="button" className="modal-close" onClick={closeProduct}>
                <X size={18} />
              </button>
            </header>
            <div className="modal-body">
              <p className="modal-tagline">{product.tagline}</p>
              <p>{product.description}</p>
              <div className="modal-meta">
                <div>
                  <span>Base</span>
                  <strong>{product.headquarters}</strong>
                </div>
                <div>
                  <span>Status</span>
                  <strong>{statusLabel[product.status]}</strong>
                </div>
                <div>
                  <span>Última atualização</span>
                  <strong>{new Date(product.lastUpdate).toLocaleDateString('pt-BR')}</strong>
                </div>
              </div>
            </div>
            <footer className="modal-footer">
              <a href={product.website} target="_blank" rel="noreferrer" className="modal-link">
                Visitar plataforma
                <ExternalLink size={16} />
              </a>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
