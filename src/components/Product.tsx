import { products } from "@/lib/data"
import { ProductCard } from "@/components/product-card"

export default function Product() {
    return (
        <section className="py-16">
            <div className=" px-4 md:px-6  sm:mx-0 md:mx-0 lg:mx-24 xl:mx-32 2xl:mx-40">
                <div className="text-center space-y-2 mb-8">
                    <h2 className="text-3xl font-bold tracking-tighter">Popular Products</h2>
                    <p className="text-muted-foreground">Our most trusted agricultural solutions</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}
