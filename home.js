import React, { useEffect, useState } from "react";
import './home.css';
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  const getProductsByCategory = (category) => {
    return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
  };

  const electronics = getProductsByCategory("electronics");
  const jewelery = getProductsByCategory("jewelery");
  const menClothing = getProductsByCategory("men's clothing");

  return (
    <>
      <div className="container-fluid mt-2 border rounded">
        
        <div className="row text-center">
          <div className="col">
            <img className="mt-3" alt="Minutes" src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/a22a213ca6221b65.png?q=100" />
            <h6 className="mt-3">Minutes</h6>
          </div>
          <div className="col">
            <img className="mt-3" alt="Mobiles & Tablets" src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100" />
            <h6 className="mt-3">Mobiles & Tablets</h6>
          </div>
          <div className="col">
            <img className="mt-3" alt="Fashion" src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100" />
            <h6 className="mt-3">Fashion</h6>
          </div>
          <div className="col">
            <img className="mt-3" alt="Electronics" src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/af646c36d74c4be9.png?q=100" />
            <h6 className="mt-3">Electronics</h6>
          </div>
          <div className="col">
            <img className="mt-3" alt="Home & Furniture" src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/1788f177649e6991.png?q=100" />
            <h6 className="mt-3">Home & Furniture</h6>
          </div>
          <div className="col">
            <img className="mt-3" alt="TVs & Appliances" src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=100" />
            <h6 className="mt-3">TVs & Appliances</h6>
          </div>
          <div className="col">
            <img className="mt-3" alt="Flight Bookings" src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/3c647c2e0d937dc5.png?q=100" />
            <h6 className="mt-3">Flight Bookings</h6>
          </div>
          <div className="col">
            <img className="mt-3" alt="Beauty & Food" src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/b3020c99672953b9.png?q=100" />
            <h6 className="mt-3">Beauty & Food</h6>
          </div>
          <div className="col">
            <img className="mt-3" alt="Grocery" src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e730a834ad950bae.png?q=100" />
            <h6 className="mt-3">Grocery</h6>
          </div>
        </div>
      </div>

      
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/076c4f2ee87225d7.jpg?q=90" alt="Image" className="mt-1 ms-2" width="1300px" />

      {/* Horizontal Product Strip (Electronics) */}
      <div className="row mt-2">
        <div className="col-9 d-flex overflow-auto border border-tertiary" style={{ height: "300px" }}>
          {electronics.slice(0, 5).map(product => (
            <Link to={`/products/${product.id}`} className="mt-3 ms-3" key={product.id}>
              <img src={product.image} alt={product.title} style={{ height: "120px", width: "120px" }} />
              <p>{product.title.substring(0, 20)}...</p>
              <h6>${product.price}</h6>
            </Link>
          ))}
        </div>
        <div className="col">
          <img src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/ce3cf81edb760559.jpg?q=90" alt="Image" height="300px" width="280px" />
        </div>
      </div>

      {/* Beauty, Food, Toys & more (Jewelry) */}
      <div className="row border border-tertiary mt-4">
        <h3>Jewelry & More</h3>
        {jewelery.slice(0, 5).map(product => (
          <Link to={`/products/${product.id}`} className="col mt-2" key={product.id}>
            <img src={product.image} alt={product.title} style={{ height: "120px", width: "120px" }} />
            <p>{product.title.substring(0, 20)}...</p>
            <h6>${product.price}</h6>
          </Link>
        ))}
      </div>

      {/* Sports, Healthcare & more (Men's Clothing) */}
      <div className="row border border-tertiary mt-4">
        <h3>Men's Clothing</h3>
        {menClothing.slice(0, 5).map(product => (
          <Link to={`/products/${product.id}`} className="col mt-2" key={product.id}>
            <img src={product.image} alt={product.title} style={{ height: "120px", width: "120px" }} />
            <p>{product.title.substring(0, 20)}...</p>
            <h6>${product.price}</h6>
          </Link>
        ))}
      </div>

      
      <div className="container mt-4">
        <div className="row">
          <div className="col border border-tertiary ms-4">
            <h5 className="mb-3">Ganesh Chaturthi Specials</h5>
            <div className="row row-cols-2 g-3">
              <div className="col">
                <div className="card h-100 text-center">
                  <img src="https://rukminim1.flixcart.com/image/210/210/xif0q/sandal/a/r/o/8-sndl-beige-6135-bersache-beige-original-imah6h7cutymvgny.jpeg?q=90" className="card-img-top" alt="Men’s Slippers & Flip Flops" />
                  <p className="mt-2">Men’s Slippers & Flip Flops</p>
                  <h6 className="text-success">Min. 70% Off</h6>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 text-center">
                  <img src="https://rukminim1.flixcart.com/image/210/210/xif0q/watch/g/4/q/1-sra1193-rs-trader-co-men-women-original-imahf6pngszqttq7.jpeg?q=90" alt="Wrist Watches" className="card-img-top" />
                  <p className="mt-2">Wrist Watches</p>
                  <h6 className="text-success">Min. 90% Off</h6>
                </div>
              </div>
            </div>
            <div className="row row-cols-2 g-3">
              <div className="col">
                <div className="card h-100 text-center">
                  <img src="https://rukminim1.flixcart.com/image/210/210/xif0q/jean/n/m/a/34-fp-bk-sf-6p-fude-pride-original-imagx34ffyqncgga.jpeg?q=90" className="card-img-top" alt="Jeans" />
                  <p className="mt-2">Jeans</p>
                  <h6 className="text-success">Min. 70% Off</h6>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 text-center">
                  <img src="https://rukminim1.flixcart.com/image/210/210/xif0q/jacket/z/n/d/l-1-no-tf-mf-jacket-23-mia-fashion-original-imahernjmydznv6d.jpeg?q=90" alt="Jacket" className="card-img-top" />
                  <p className="mt-2">Jacket</p>
                  <h6 className="text-success">Min. 90% Off</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col border border-tertiary ms-4">
            <h5 className="mb-3">Make your home stylish</h5>
            <div className="row row-cols-2 g-3">
              <div className="col">
                <div className="card h-100 text-center">
                  <img src="https://rukminim1.flixcart.com/image/210/210/xif0q/collapsible-wardrobe/v/l/o/280-carbon-steel-750-1-6-4-firozi-wd-brodio-firozi-880-original-imahfhdescfrtgr2.jpeg?q=90" className="card-img-top" alt="Wardrobe" />
                  <p className="mt-2">Wardrobe</p>
                  <h6 className="text-success">Min. 70% Off</h6>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 text-center">
                  <img src="https://rukminim1.flixcart.com/image/210/210/xif0q/home-temple/s/x/d/t1white-hoodwin-original-imah99vgphekyteg.jpeg?q=90" alt="Hoodwin" className="card-img-top" />
                  <p className="mt-2">Hoodwin</p>
                  <h6 className="text-success">Min. 90% Off</h6>
                </div>
              </div>
            </div>
            <div className="row row-cols-2 g-3">
              <div className="col">
                <div className="card h-100 text-center mt-3">
                  <img src="https://rukminim1.flixcart.com/image/210/210/xif0q/bouncer/j/b/c/cotton-swing-for-kids-baby-s-children-folding-and-washable-1-original-imagh8evru6wsd5j.jpeg?q=90" className="card-img-top" alt="Swings" />
                  <p className="mt-2">Swings</p>
                  <h6 className="text-success">Min. 70% Off</h6>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 text-center mt-3">
                  <img src="https://rukminim1.flixcart.com/image/210/210/xif0q/shopsy-collapsible-wardrobe/9/g/g/2800-carbon-steel-580-1-9-6-l-b-wardrobe-love-bird-print-original-imagzqfcqbvrxrzz.jpeg?q=90" className="card-img-top" alt="Wardrobe" />
                  <p className="mt-2">Wardrobe</p>
                  <h6 className="text-success">Min. 90% Off</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col border border-tertiary ms-4">
            <h5 className="mb-3">Home Decor & Furnishings</h5>
            <div className="row row-cols-2 g-3">
              <div className="col">
                <div className="card h-100 text-center">
                  <img src="https://rukminim1.flixcart.com/image/210/210/xif0q/wall-clock/r/o/b/handpainted-peacock-wall-clock-32-5-wc-331-analog-divinecrafts-original-imahbzdadxeahpj5.jpeg?q=90" className="card-img-top" alt="Wall Clock" />
                  <p className="mt-2">Wall Clock</p>
                  <h6 className="text-success">Min. 70% Off</h6>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 text-center">
                  <img src="https://rukminim1.flixcart.com/image/210/210/xif0q/bulb/3/k/f/1-white-25-w-led-bulb-901-dunagiri-original-imah2d8apvztakjk.jpeg?q=90" className="card-img-top" alt="Bulbs" />
                  <p className="mt-2">Bulbs</p>
                  <h6 className="text-success">Min. 90% Off</h6>
                </div>
              </div>
            </div>
            <div className="row row-cols-2 g-3">
              <div className="col">
                <div className="card h-100 text-center mt-3">
                  <img src="https://rukminim1.flixcart.com/image/210/210/xif0q/mosquito-net/n/z/k/window-a-48-size-4x5-feet-prestiched-net-for-window-with-self-original-imahe4gga3bzvux4.jpeg?q=90" className="card-img-top" alt="Mosquito Net" />
                  <p className="mt-2">Mosquito Net</p>
                  <h6 className="text-success">Min. 70% Off</h6>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 text-center mt-3">
                  <img src="https://rukminim1.flixcart.com/image/210/210/xif0q/bottle/t/i/0/-original-imahezf8va322wa7.jpeg?q=90" className="card-img-top" alt="Bottle" />
                  <p className="mt-2">Bottle</p>
                  <h6 className="text-success">Min. 90% Off</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 border border-tertiary " style={{
    fontSize: "xx-small",
    backgroundColor: "rgb(220, 244, 245)"
  }}>
        <h5>Flipkart: The One-stop Shopping Destination</h5>
        E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to
        another in search of the latest phone when you can find it on the Internet in a single click? Not only
        mobiles. Flipkart houses everything you can possibly imagine, from trending electronics like laptops,
        tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and
        lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances
        that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving
        kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to
        toys and musical instruments, we got them all covered. You name it, and you can stay assured about
        finding them all here. For those of you with erratic working hours, Flipkart is your best bet. Shop in
        your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down. <br/><br/>What's
        more, with our year-round shopping festivals and events, our prices are irresistible. We're sure you'll
        find yourself picking up more than what you had in mind. If you are wondering why you should shop from
        Flipkart when there are multiple options available to you, well, the below will answer your question.
        <br/><br/>
        <h3>Flipkart Plus</h3>A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a
        loyalty reward programme for all its regular customers at zero subscription fee. All you need is 500
        supercoins to be a part of this service. For every 100 rupees spent on Flipkart order, Plus members
        earns 4 supercoins &amp; non-plus members earn 2 supercoins. Early access during sales and shopping
        festivals, exchange offers and priority customer service are the top benefits to a Flipkart Plus member.
        In short, earn more when you shop more! <br/><br/>What's more, you can even use the Flipkart supercoins
        for a number of exciting services, like:<br/>An annual Zomato Gold membership<br/>An annual Hotstar
        Premium membership<br/>6 months Gaana plus subscription<br/>Rupees 550 instant discount on flights on
        ixigo<br/>Check out https://www.flipkart.com/plus/all-offers for the entire list. Terms and conditions
        apply.<br/><br/>
        <h5>No Cost EMI</h5>In an attempt to make high-end products accessible to all, our No Cost EMI plan
        enables you to shop with us under EMI, without shelling out any processing fee. Applicable on select
        mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop
        without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it
        may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.<br/><br/>
        <h5>EMI on Debit Cards</h5>Did you know debit card holders account for 79.38 crore in the country, while
        there are only 3.14 crore credit card holders? After enabling EMI on Credit Cards, in another attempt to
        make online shopping accessible to everyone, Flipkart introduces EMI on Debit Cards, empowering you to
        shop confidently with us without having to worry about pauses in monthly cash flow. At present, we have
        partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this facility. More power to
        all our shoppers! Terms and conditions apply. <br/><br/>
        <h5>Mobile Exchange Offers</h5>Get an instant discount on the phone that you have been eyeing on.
        Exchange your old mobile for a new one after the Flipkart experts calculate the value of your old phone,
        provided it is in a working condition without damage to the screen. If a phone is applicable for an
        exchange offer, you will see the 'Buy with Exchange' option on the product description of the phone. So,
        be smart, always opt for an exchange wherever possible. Terms and conditions apply. <br/><br/>
        <h5>What Can You Buy From Flipkart?</h5>
        <h5>Mobile Phones</h5>From budget phones to state-of-the-art smartphones, we have a mobile for everybody
        out there. Whether you're looking for larger, fuller screens, power-packed batteries, blazing-fast
        processors, beautification apps, high-tech selfie cameras or just large internal space, we take care of
        all the essentials. Shop from top brands in the country like Samsung, Apple, Oppo, Xiaomi, Realme, Vivo,
        and Honor to name a few. Rest assured, you're buying from only the most reliable names in the market.
        What's more, with Flipkart's Complete Mobile Protection Plan, you will never again find the need to run
        around service centres. This plan entails you to a number of post-purchase solutions, starting at as low
        as Rupees 99 only! Broken screens, liquid damage to phone, hardware and software glitches, and
        replacements - <b>the Flipkart Complete Mobile Protection</b> covers a comprehensive range of
        post-purchase problems, with door-to-door services. <br/><br/>
        <h5>Electronic Devices and Accessories</h5>When it comes to laptops, we are not far behind. Filter among
        dozens of super-fast operating systems, hard disk capacity, RAM, lifestyle, screen size and many other
        criterias for personalized results in a flash. All you students out there, confused about what laptop to
        get? Our <b>Back To College Store</b> segregates laptops purpose wise (gaming, browsing and research,
        project work, entertainment, design, multitasking) with recommendations from top brands and industry
        experts, facilitating a shopping experience that is quicker and simpler.<br/><br/>Photography lovers, you
        couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot
        cameras, millennial favourite instant cameras or action cameras for adventure junkies: our range of
        cameras is as much for beginners as it is for professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are
        some big names you'll find in our store. Photography lovers, you couldn't land at a better page than
        ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras, millennial favourite instant
        cameras or action cameras for adventure junkies: our range of cameras is as much for beginners as it is
        for professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in our store.
        <br/><br/>Turn your home into a theatre with a stunning surround sound system. Choose from our elaborate
        range of Sony home theatres, JBL soundbars and Philips tower speakers for an experience to
        remember.<br/><br/>How about jazzing up your phone with our quirky designer cases and covers? Our
        wide-ranging mobile accessories starting from headphones, power banks, memory cards, mobile chargers, to
        selfie sticks can prove to be ideal travel companions for you and your phone; never again worry about
        running out of charge or memory on your next vacation.<br/><br/>
        <h5>Large Appliances</h5>Sleek TVs, power-saving refrigerators, rapid-cooling ACs, resourceful washing
        machines - discover everything you need to run a house under one roof. Our <b>Dependable TV and
            Appliance Store</b> ensures zero transit damage, with a replacement guarantee if anything goes
        wrong; delivery and installation as per your convenience and a double warranty (Official Brand Warranty
        along with an extended Flipkart Warranty) - rest assured, value for money is what is promised and
        delivered. Shop from market leaders in the country like Samsung, LG, Whirlpool, Midea, Mi, Vu,
        Panasonic, Godrej, Sony, Daikin, and Hitachi among many others.<br/><br/>For certain product categories,
        Customers meeting the eligibility criteria will have the option to buy larger quantities. To know more
        on the eligibility criteria and terms and conditions, please reach out to <a
            href="mailto:Purchases.oni@flipkart.com">Purchases.oni@flipkart.com</a>. <br/><br/>
        <h5>Small Home Appliances</h5>Find handy and practical home appliances designed to make your life
        simpler: electric kettles, OTGs, microwave ovens, sandwich makers, hand blenders, coffee makers, and
        many more other time-saving appliances that are truly crafted for a quicker lifestyle. Live life king
        size with these appliances at home.<br/><br/>
        <h5>Lifestyle</h5>Flipkart, <b>'India ka Fashion Capital'</b>, is your one-stop fashion destination for
        anything and everything you need to look good. Our exhaustive range of Western and Indian wear, summer
        and winter clothing, formal and casual footwear, bridal and artificial jewellery, long-lasting make-up,
        grooming tools and accessories are sure to sweep you off your feet. Shop from crowd favourites like Vero
        Moda, Forever 21, Only, Arrow, Woodland, Nike, Puma, Revlon, Mac, and Sephora among dozens of other
        top-of-the-ladder names. From summer staple maxi dresses, no-nonsense cigarette pants, traditional
        Bandhani kurtis to street-smart biker jackets, you can rely on us for a wardrobe that is up to date.
        Explore our in-house brands like Metronaut, Anmi, and Denizen, to name a few, for carefully curated
        designs that are the talk of the town. Get ready to be spoiled for choice.Festivals, office
        get-togethers, weddings, brunches, or nightwear - Flipkart will have your back each time.<br/><br/>
        <h5>Home and Furniture</h5>Moving to a new place is never easy, especially if you're buying new
        furniture. Beds, sofa sets, dining tables, wardrobes, and TV units - it's not easy to set up everything
        again. With the hundreds of options thrown at you, the ride could be overwhelming. What place is
        reliable, what furniture will stand the test of time? These are questions you must ask before you choose
        a store. Well, our <b>Durability Certified Furniture Store</b> has not only curated a range of furniture
        keeping in mind the modern Indian consumer but furniture that comes with a lab certification, ensuring
        they last you for up to 10 years. Yes, all our furniture has gone through 35 stability and load tests so
        that you receive only the best-quality furniture. <b>Be FurniSure</b>, always. Names to look out for are
        Nilkamal, Godrej Interio, Urban Ladder, HomeTown, Durian and Perfect Homes. <br/><br/>You may have your
        furniture all set up, but they could end up looking flat and incomplete without complementary decor.
        Curtains, cushion covers, bed sheets, wall shelves, paintings, floor lamps - find everything that turns
        a house to an inviting home under one roof at Flipkart. <br/><br/>
        <h5>Baby and Kids</h5>Your kids deserve only the best. From bodysuits, booties, diapers to strollers, if
        you're an expecting mother or a new mother, you will find everything you need to set sail on a smooth
        parenting journey with the help of our baby care collection. When it comes to safety, hygiene and
        comfort, you can rely on us without a second thought. Huggies, Pampers, MamyPoko, and Johnson &amp;
        Johnson: we host only the most-trusted names in the business for your baby.<br/><br/>
        <h5>Books, Sports and Games</h5>Work hard and no play? We don't believe in that. Get access to
        best-selling fiction and non-fiction books by your favourite authors, thrilling English and Indian
        blockbusters, most-wanted gaming consoles, and a tempting range of fitness and sports gadgets and
        equipment bound to inspire you to get moving. <br/><br/>
        <h5>Grocery/Supermart</h5>Launching into the grocery vertical, Flipkart introduces <b>Supermart</b> that
        is out to bring everyday essentials close to you. From pulses, spices, dairy, personal and sanitary
        care, breakfast essentials, health drinks, spreads, ready to cook, grooming to cleaning agents, we are
        happy to present everything you need to run a house. Now buy Grocery products for as low as 1 Rupee only
        - our <b>1 Rupee Store</b> presents new products every day for a nominal price of 1 Rupee only. Terms
        and conditions apply.
    </div>
    </>
  );
}

export default Home;
