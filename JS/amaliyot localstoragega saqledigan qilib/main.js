fetch("./data/products.json")
    .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
    })
    .then((data) => {
        console.log(data);
        localStorage.setItem("products", JSON.stringify(data));
    })
    .catch((error) => console.error("Error:", error));

    // birinchi methodi JSON.parse() -> bu o'zimizi js dagi object formatga o'tkazib beradi.
    // ikkinchi methodi esa JSON.stringify() -> bu json formatga o'tkazib beradi.