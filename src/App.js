import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.json';
import 'bootstrap-icons/icons/star-fill.svg';
import { useReducer } from 'react';

let product1 = true;
let product2 = true;
let product3 = true;
let product4 = true;
let product5 = true;
let product6 = true;


function App() {


    let counter = 0;

    const [state, dispatch] = useReducer(reducer, { productCounter: counter });

    function reducer(state, action) {
        if (action.type === 'product1Add') {
            product1 = false;
            return {
                productCounter: state.productCounter + 1
            };
        }
        if (action.type === 'product1Reduce') {
            product1 = true;
            return {
                productCounter: state.productCounter - 1
            };
        }
        if (action.type === 'product2Add') {
            product2 = false;
            return {
                productCounter: state.productCounter + 1
            };
        }
        if (action.type === 'product2Reduce') {
            product2 = true;
            return {
                productCounter: state.productCounter - 1
            };
        }
        if (action.type === 'product3Add') {
            product3 = false;
            return {
                productCounter: state.productCounter + 1
            };
        }
        if (action.type === 'product3Reduce') {
            product3 = true;
            return {
                productCounter: state.productCounter - 1
            };
        }
        if (action.type === 'product4Add') {
            product4 = false;

            return {
                productCounter: state.productCounter + 1
            };
        }
        if (action.type === 'product4Reduce') {
            product4 = true;

            return {
                productCounter: state.productCounter - 1
            };
        }
        if (action.type === 'product5Add') {
            product5 = false;

            return {
                productCounter: state.productCounter + 1
            };
        }
        if (action.type === 'product5Reduce') {
            product5 = true;

            return {
                productCounter: state.productCounter - 1
            };
        }
        if (action.type === 'product6Add') {
            product6 = false;

            return {
                productCounter: state.productCounter + 1
            };
        }
        if (action.type === 'product6Reduce') {
            product6 = true;

            return {
                productCounter: state.productCounter - 1
            };
        }
        throw Error('Unknown action.');
    }

    console.log('product1', product1)
    console.log('product2', product2)
    console.log('product3', product3)
    console.log('product4', product4)
    console.log('product5', product5)
    console.log('product6', product6)


    return (
        <div className="App">
            {console.log('rendering')}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="#!">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#!">All Products</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                    <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-dark" type="submit">
                                <i className="bi-cart-fill me-1"></i>
                                Cart
                                <span className="badge bg-dark text-white ms-1 rounded-pill" id="addCard">{state.productCounter}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* <!-- Header--> */}
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Shop in style</h1>
                        <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                    </div>
                </div>
            </header>
            {/* <!-- Section--> */}
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder">Fancy Product</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-half"></div>
                                        </div>
                                        {/* <!-- Product price--> */}
                                        $40.00 - $80.00
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* <!-- Sale badge--> */}
                                <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder">Special Item</h5>
                                        {/* <!-- Product reviews--> */}
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        {/* <!-- Product price--> */}
                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        $18.00
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}

                                {product1 ? <button className="card-footer p-4 pt-0 border-top-0 bg-transparent" onClick={() => { dispatch({ type: 'product1Add' }) }}>
                                    <div className="text-center" id='product1'><a className="btn btn-outline-dark mt-auto" href="#" >Add To Cart</a></div>
                                </button> :
                                    <button className="card-footer p-4 pt-0 border-top-0 bg-transparent" onClick={() => { dispatch({ type: 'product1Reduce' }) }}>
                                        <div className="text-center" id='product1'><a className="btn btn-outline-dark mt-auto" href="#" >Remove to cart</a></div>
                                    </button>}
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* <!-- Sale badge--> */}
                                <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}
                                >Sale</div>
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder">Sale Item</h5>
                                        {/* <!-- Product reviews--> */}
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star"></div>
                                        </div>
                                        {/* <!-- Product price--> */}
                                        <span className="text-muted text-decoration-line-through">$50.00</span>
                                        $25.00
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}

                                {product2 ? <button className="card-footer p-4 pt-0 border-top-0 bg-transparent" onClick={() => { dispatch({ type: 'product2Add' }) }}>
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" >Add to cart</a></div>
                                </button> :
                                    <button className="card-footer p-4 pt-0 border-top-0 bg-transparent" onClick={() => { dispatch({ type: 'product2Reduce' }) }}>
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" >Remove to cart</a></div>
                                    </button>}
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder">Popular Item</h5>
                                        {/* <!-- Product reviews--> */}
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        {/* <!-- Product price--> */}
                                        $40.00
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}

                                {product3 ? <button className="card-footer p-4 pt-0 border-top-0 bg-transparent" onClick={() => { dispatch({ type: 'product3Add' }) }}>
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" >Add to cart</a></div>
                                </button> :
                                    <button className="card-footer p-4 pt-0 border-top-0 bg-transparent" onClick={() => { dispatch({ type: 'product3Reduce' }) }}>
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" >Remove to cart</a></div>
                                    </button>}
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* <!-- Sale badge--> */}
                                <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder">Sale Item</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        {/* <!-- Product price--> */}
                                        <span className="text-muted text-decoration-line-through">$50.00</span>
                                        $25.00
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}

                                {product4 ? <button className="card-footer p-4 pt-0 border-top-0 bg-transparent" onClick={() => { dispatch({ type: 'product4Add' }) }}>
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" >Add to cart</a></div>
                                </button> :
                                    <button className="card-footer p-4 pt-0 border-top-0 bg-transparent" onClick={() => { dispatch({ type: 'product4Reduce' }) }}>
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" >Remove to cart</a></div>
                                    </button>}
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder">Fancy Product</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star"></div>
                                        </div>
                                        {/* <!-- Product price--> */}
                                        $120.00 - $280.00
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* <!-- Sale badge--> */}
                                <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder">Special Item</h5>
                                        {/* <!-- Product reviews--> */}
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        {/* <!-- Product price--> */}
                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        $18.00
                                    </div>
                                </div>
                                {/* star */}
                                <div>

                                </div>
                                {/* <!-- Product actions--> */}

                                {product5 ? <button className="card-footer p-4 pt-0 border-top-0 bg-transparent" onClick={() => { dispatch({ type: 'product5Add' }) }}>
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" >Add to cart</a></div>
                                </button> :
                                    <button className="card-footer p-4 pt-0 border-top-0 bg-transparent" onClick={() => { dispatch({ type: 'product5Reduce' }) }}>
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" >Remove to cart</a></div>
                                    </button>}
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder">Popular Item</h5>
                                        {/* <!-- Product reviews--> */}
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-half"></div>
                                        </div>
                                        {/* <!-- Product price--> */}
                                        $40.00
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}

                                {product6 ? <button className="card-footer p-4 pt-0 border-top-0 bg-transparent" onClick={() => { dispatch({ type: 'product6Add' }) }}>
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" >Add to cart</a></div>
                                </button> :
                                    <button className="card-footer p-4 pt-0 border-top-0 bg-transparent" onClick={() => { dispatch({ type: 'product6Reduce' }) }}>
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" >Remove to cart</a></div>
                                    </button>}

                            </div>
                        </div>
                    </div>
                </div>

            </section >
            {/* <!-- Footer--> */}
            < footer className="py-5 bg-dark" >
                <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
            </footer >
            {/* <!-- Bootstrap core JS--> */}
            < script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" ></script >
            {/* <!-- Core theme JS--> */}
            < script src="js/scripts.js" ></script >
        </div >
    );
}

export default App;
