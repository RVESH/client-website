import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "ecommerce-01-cart";

const CartContext = createContext(null);

function loadCart() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const saved =
      window.localStorage.getItem(
        STORAGE_KEY
      );

    if (!saved) {
      return [];
    }

    const parsed = JSON.parse(saved);

    return Array.isArray(parsed)
      ? parsed
      : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] =
    useState(loadCart);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(items)
      );
    } catch {
      // Ignore localStorage errors.
    }
  }, [items]);

  const addToCart = useCallback(
    (product, quantity = 1) => {
      if (!product?.id) {
        return;
      }

      const qty = Math.max(
        1,
        Math.floor(
          Number(quantity) || 1
        )
      );

      setItems((currentItems) => {
        const existingItem =
          currentItems.find(
            (item) =>
              item.id === product.id
          );

        if (existingItem) {
          return currentItems.map(
            (item) =>
              item.id === product.id
                ? {
                    ...item,
                    quantity:
                      item.quantity + qty,
                  }
                : item
          );
        }

        return [
          ...currentItems,
          {
            id: product.id,
            name: product.name,
            price: Number(product.price) || 0,
            image: product.image || "",
            category:
              product.category || "",
            quantity: qty,
          },
        ];
      });
    },
    []
  );

  const updateQuantity = useCallback(
    (productId, quantity) => {
      const qty = Math.floor(
        Number(quantity) || 0
      );

      setItems((currentItems) => {
        if (qty <= 0) {
          return currentItems.filter(
            (item) =>
              item.id !== productId
          );
        }

        return currentItems.map(
          (item) =>
            item.id === productId
              ? {
                  ...item,
                  quantity: qty,
                }
              : item
        );
      });
    },
    []
  );

  const removeFromCart =
    useCallback((productId) => {
      setItems((currentItems) =>
        currentItems.filter(
          (item) =>
            item.id !== productId
        )
      );
    }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const cartCount = useMemo(() => {
    return items.reduce(
      (total, item) =>
        total +
        Math.max(
          0,
          Number(item.quantity) || 0
        ),
      0
    );
  }, [items]);

  const cartSubtotal = useMemo(() => {
    return items.reduce(
      (total, item) => {
        const price =
          Number(item.price) || 0;

        const quantity =
          Number(item.quantity) || 0;

        return (
          total +
          price * quantity
        );
      },
      0
    );
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      cartCount,
      cartSubtotal,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
    }),
    [
      items,
      cartCount,
      cartSubtotal,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
    ]
  );

  return (
    <CartContext.Provider
      value={value}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart() must be used inside <CartProvider>."
    );
  }

  return context;
}