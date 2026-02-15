# Container-Presenter Pattern

## Overview

The **Container-Presenter Pattern** (also known as **Smart/Dumb Components** or **Container/Presentational Components**) is a design pattern in React that separates business logic from presentation logic. This pattern promotes code reusability, testability, and maintainability by dividing components into two distinct types.

---

## Pattern Architecture

### 1. **Container Components**

Container components are responsible for:

- **Business Logic**: Handling state management, API calls, and data processing
- **State Management**: Managing component state using hooks like `useState`, `useEffect`, `useContext`
- **Data Fetching**: Retrieving data from APIs or external sources
- **Error Handling**: Managing error states and exceptions
- **Props Configuration**: Passing data and callback functions to presenter components

**Characteristics**:

- Often class or functional components with hooks
- Limited or no UI elements
- Can access lifecycle methods and context
- Orchestrates data flow

### 2. **Presenter Components**

Presenter components are responsible for:

- **UI Rendering**: Displaying the user interface
- **Styling**: Applying CSS classes and styles
- **User Interactions**: Handling click events, form submissions, etc.
- **Prop-Based Logic**: Receiving all data as props and callbacks for actions

**Characteristics**:

- Purely functional components
- Focused on visual representation
- Stateless (or minimal local state for UI)
- Highly reusable and testable
- Easy to understand and modify

---

## **Separation of Concerns**

The Container-Presenter pattern enforces a clear **separation of concerns**:

| Aspect          | Container         | Presenter             |
| --------------- | ----------------- | --------------------- |
| **Logic**       | Business Logic ✓  | UI Logic ✓            |
| **State**       | Data State ✓      | UI State (optional) ✓ |
| **API Calls**   | ✓                 | ✗                     |
| **Styling**     | ✗                 | ✓                     |
| **Reusability** | Limited           | High                  |
| **Testing**     | Test logic easily | Test UI easily        |

### Benefits:

1. **Maintainability**: Changes to business logic don't affect presentation and vice versa
2. **Reusability**: Presenter components can be used with different container components
3. **Testability**: Each component can be tested independently
4. **Readability**: Clear responsibility makes code easier to understand
5. **Scalability**: Easy to scale applications with complex logic

---

## Folder Structure

```
components/
├── README.md                          # This file
├── ProductListContainer.jsx           # Container Component
├── ProductListPresenter.jsx           # Presenter Component
├── common/                            # Shared UI Components
│   ├── Error.jsx                      # Error display component
│   ├── Loading.jsx                    # Loading state component
│   └── navbar/                        # Navigation bar components
│       ├── Cart.jsx                   # Shopping cart display
│       ├── Card.jsx                   # Cart item card
│       └── Navbar.jsx                 # Navigation bar main
└── product/                           # Product-related components
    ├── ProductContainer.jsx           # Product section container
    ├── ProductList.jsx                # List of products (presenter)
    ├── ProductCard.jsx                # Individual product card (presenter)
    └── Filter.jsx                     # Filter controls (presenter)
```

---

## File-by-File Breakdown

### **ProductListContainer.jsx** (Container)

```jsx
// ✓ State Management
const [products, setProducts] = useState([]);
const [categories, setCategories] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

// ✓ API Calls
useEffect(() => {
  fetchProducts();
}, [filterByCat, sortByPrice]);

// ✓ Business Logic
const fetchProducts = async () => {
  /* ... */
};

// ✓ Passes data and callbacks to presenter
return (
  <ProductListPresenter
    products={products}
    categories={categories}
    onCategoryChange={handleCategoryChange}
    onPriceSort={handlePriceSort}
  />
);
```

**Responsibilities**:

- Manages product and category data
- Handles loading and error states
- Fetches data from API
- Manages filter and sort logic
- Passes clean data to presenter

---

### **ProductListPresenter.jsx** (Presenter)

```jsx
// ✓ Receives all data as props
const ProductListPresenter = ({
  products,
  categories,
  filterByCat,
  sortByPrice,
  onCategoryChange, // callbacks
  onPriceSort, // callbacks
}) => {
  // ✓ Local UI state only
  const [toggleDropdown, setToggleDropdown] = useState(false);

  // ✓ UI rendering and organization
  return (
    <>
      <Navbar
        productInCart={productInCart}
        onDecreaseQty={handleDecreaseQty}
        onInCreaseQty={handleIncreaseQty}
      />
      <ProductContainer
        products={products}
        categories={categories}
        onAddToCart={handleAddToCart}
        onCategoryChange={onCategoryChange}
        onPriceSort={onPriceSort}
      />
    </>
  );
};
```

**Responsibilities**:

- Receives props from container
- Manages local UI state (dropdowns, toggles)
- Renders UI structure
- Delegates business logic back to container via callbacks

---

### **product/ProductContainer.jsx** (Sub-Container)

Orchestrates product filtering and listing:

```jsx
// ✓ Composes Filter and ProductList presenters
// ✓ Delegates props and callbacks
return (
  <section>
    <Filter {...filterProps} />
    <ProductList {...listProps} />
  </section>
);
```

---

### **product/ProductList.jsx** (Presenter)

Renders the list of products:

- Maps through `products` array
- Renders individual `ProductCard` components
- Handles "Add to Cart" callback

---

### **product/Filter.jsx** (Presenter)

Displays filter and sort controls:

- Category dropdown
- Price sort buttons
- Triggers callbacks on changes

---

### **common/** (Shared UI Components)

Reusable presentational components:

- **Error.jsx**: Displays error messages
- **Loading.jsx**: Shows loading indicator
- **navbar/Navbar.jsx**: Shopping cart navigation
- **navbar/Card.jsx**: Individual cart item display
- **navbar/Cart.jsx**: Cart summary

---

## Data Flow Diagram

```
ProductListContainer (Smart)
     ↓ (passes data & callbacks)
ProductListPresenter (UI Layer)
     ├─→ Navbar (presents cart)
     └─→ ProductContainer (coordinates product display)
          ├─→ Filter (presenter)
          └─→ ProductList (presenter)
               └─→ ProductCard (presenter) × N
```

---

## Interaction Flow

```
1. User clicks "Add to Cart" button
   ↓
2. ProductCard (presenter) calls onAddToCart(productId)
   ↓
3. ProductListPresenter receives callback and calls handleAddToCart
   ↓
4. ProductListContainer manages cart state and updates
   ↓
5. Presenter receives new productInCart state via props
   ↓
6. UI re-renders with updated cart
```

---

## Guidelines

### ✅ Container Components Should:

- Handle all business logic
- Manage application state
- Fetch data from APIs
- Handle errors and loading states
- Pass processed data as props to presenters
- Avoid rendering UI directly (minimal JSX)

### ✅ Presenter Components Should:

- Accept all data via props
- Focus purely on rendering UI
- Handle only UI-related local state (toggles, dropdowns)
- Call callback functions for user interactions
- Be simple and easy to understand
- Be highly reusable with different containers

### ❌ Avoid:

- Mixing business logic with UI components
- Making presenter components aware of data fetching
- Complex conditional rendering in presenters
- Presenter components managing global state
- Hidden dependencies or side effects

---

## Benefits in This Implementation

1. **Clear Organization**: Easy to locate business logic (Container) vs. UI (Presenter)
2. **Easy Testing**:
   - Test `ProductListContainer` for data fetching and state logic
   - Test `ProductListPresenter` for UI rendering with mock data
3. **Reusability**: `ProductCard` and `Filter` can be used in other features
4. **Maintainability**: Changes to API calls don't affect UI components
5. **Scalability**: New features can follow the same pattern

---

## Conclusion

The Container-Presenter pattern is a fundamental design pattern in React that promotes clean, maintainable, and scalable code. By clearly separating business logic from presentation logic, teams can work more efficiently and build robust applications.

## Video

<!-- <video width="100%" controls>
  <source src="./react-container-presenter-pattern.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> -->

<!-- [![Video Title](./react-container-presenter-pattern.gif)] -->
<div style="max-width:1024px; width:100%; margin: 0 auto; text-align:center">
<img style="width:100%" src="./react-container-presenter-pattern.gif" alt="" />
</div>
