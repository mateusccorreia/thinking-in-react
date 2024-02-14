import ProductCategoryRow from "./ProductCategoryRow";

export default function ProductTable() {
    return(
        <>
            <div className="product-table">
                <tr>
                    <th>Name</th>
                    <th>Fruits</th>
                </tr>
                <ProductCategoryRow />
            </div>
        </>
    )
}