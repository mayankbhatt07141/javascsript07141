let data = fetch("https://fakestoreapi.com/products");
data
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
  });
