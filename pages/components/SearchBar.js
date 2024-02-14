export default function SearchBar() {

    return(
        <>
            <div>
                <input
                placeholder="search..."
                />
                <br />
                <label>
                    <input
                    type="checkbox"
                    /> Only show products in stock
                </label>
            </div>
        </>
    )
}