import React from 'react';
import "../assets/css/Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home"> 
            <div className="home__container">
                <img className="home__image"
                    src="https://resources.dunzo.com/web-assets/prod/_next/static/images/footer-mascot-37512998a23e1abed75aa6c883d8f0a1.png"
                    alt="Image"/>

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Dettol Original Hand Wash Pump"
                        price={99}
                        rating={4}
                        image="https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/ZkhoVDU5U3VWU0lkZnRoRUJ6eXplUT09-product_image.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Pears Germ Shield Soap"
                        price={38}
                        rating={4}
                        image="https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1615700111677_product_5be2940148e1c43d79561c68_1.jpg"
                    />
                     <Product
                        id="49538094"
                        title="Johnson's Baby Cream"
                        price={38}
                        rating={4}
                        image="https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/L3gxeEd1N0t0VGdOd2VaQ1NBY1kxQT09-product_image.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Clean & Clear Foaming Face Wash(150 ML)"
                        price={90}
                        rating={5}
                        image="https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/dWxwR0lGV2ltcUxEQ2Nwam1Gcjl0UT09-product_image.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Britannia Good Day Butter Cookies"
                        price={40}
                        rating={4}
                        image="https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1615706294658_product_5bc87ae10d298a283c296fad_1.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="Chings Egg Hakka Noodles"
                        price={32}
                        rating={4}
                        image="https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/WGpnNDZBOE1RTFN0REUwVmw5OGhhZz09-product_image.jpg"
                    />
                </div>

                <div className="home__row">
                        <h1 style={{margin:'50px auto', textTransform:'uppercase',fontSize:'3rem'}}>Grocery</h1>
                </div>  

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Mango - Alphonso Box (1 Kg))"
                        price={60}
                        rating={3}
                        image="https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/dERRRnVSS2xUdVRkb1dOUmQxRStYQT09-product_image.jpg"
                    />

                    <Product
                        id="90829375"
                        title="Happilo 100% Natural Premium Californian Almonds  (100 g)"
                        price={100}
                        rating={4}
                        image="https://rukminim1.flixcart.com/image/416/416/jqgy3rk0/nut-dry-fruit/p/t/g/100-100-natural-california-pouch-happilo-original-imafcgnkxtnghcec.jpeg?q=70"
                    />
                     <Product
                        id="90829376"
                        title="Rajdhani Chakki Atta  (1 kg)"
                        price={300}
                        rating={4}
                        image="https://rukminim1.flixcart.com/image/416/416/kc54ivk0/flour/h/w/f/1-chakki-atta-1-whole-wheat-flour-rajdhani-original-imaftcygzun4zzgh.jpeg?q=70"
                    />
                    <Product
                        id="908293075"
                        title="Optimum Nutrition Gold Standard 100% Protein Powder (907 g, Rocky Road)"
                        price={1,848}
                        rating={4}
                        image="https://rukminim1.flixcart.com/image/416/416/k8kiw7k0/protein-supplement/b/h/n/gold-standard-100-on266-optimum-nutrition-original-imafqk89ph5zdg5a.jpeg?q=70"
                    />
                   
                </div>
            </div>
        </div>
    )
}

export default Home
