import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-11 pb-14">
        <div className="flex gap-[60px]">
          {/* filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Product list */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizzas"
                commodity={[
                  {
                    id: 1,
                    name: "Marine Shrimp",
                    items: [
                      { id: 1, price: 30 },
                      { id: 2, price: 50 },
                      { id: 3, price: 70 },
                    ],
                  },
                  {
                    id: 2,
                    name: "Marine Shrimp",
                    items: [
                      { id: 1, price: 30 },
                      { id: 2, price: 50 },
                      { id: 3, price: 70 },
                    ],
                  },
                  {
                    id: 3,
                    name: "Marine Shrimp",
                    items: [
                      { id: 1, price: 30 },
                      { id: 2, price: 50 },
                      { id: 3, price: 70 },
                    ],
                  },
                  {
                    id: 4,
                    name: "Marine Shrimp",
                    items: [
                      { id: 1, price: 30 },
                      { id: 2, price: 50 },
                      { id: 3, price: 70 },
                    ],
                  },
                  {
                    id: 5,
                    name: "Marine Shrimp",
                    items: [
                      { id: 1, price: 30 },
                      { id: 2, price: 50 },
                      { id: 3, price: 70 },
                    ],
                  },
                  
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Combos"
                commodity={[
                  {
                    id: 1,
                    name: "Marine Shrimp",
                    items: [
                      { id: 1, price: 30 },
                      { id: 2, price: 50 },
                      { id: 3, price: 70 },
                    ],
                  },
                  {
                    id: 2,
                    name: "Marine Shrimp",
                    items: [
                      { id: 1, price: 30 },
                      { id: 2, price: 50 },
                      { id: 3, price: 70 },
                    ],
                  },
                  {
                    id: 3,
                    name: "Marine Shrimp",
                    items: [
                      { id: 1, price: 30 },
                      { id: 2, price: 50 },
                      { id: 3, price: 70 },
                    ],
                  },
                  {
                    id: 4,
                    name: "Marine Shrimp",
                    items: [
                      { id: 1, price: 30 },
                      { id: 2, price: 50 },
                      { id: 3, price: 70 },
                    ],
                  },
                  {
                    id: 5,
                    name: "Marine Shrimp",
                    items: [
                      { id: 1, price: 30 },
                      { id: 2, price: 50 },
                      { id: 3, price: 70 },
                    ],
                  },
                  
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
