import Button from "../Button/Button";
import "./Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/src/all";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const tl = gsap.timeline({
    defaults: {
        immediateRender:false,
    }
  });
  const element = useRef();
  const q = gsap.utils.selector(element);

  useLayoutEffect(() => {
    tl.fromTo(q(".anim"),
      {
        y: -30,
        autoAlpha:0
    },{
        autoAlpha: 1,

        y: 0,
      duration:1,
      stagger: 0.3,
      ease: "power1.inOut",
      // delay:2
      // repeat: -1,
      // repeatDelay: 1,
      // yoyo: true
    }).from((".saveimg-div"), {
      y: 70,
      opacity: 0,
      ease: "power1.out",
      duration: 1.5,
      // run when the previous tween has ran 10% of its duration
    },"<10%")
  
  }, [])
  useLayoutEffect(() => {
    gsap.from(q(".numbers-icons-div"), {
      y: 90,
      opacity:0,
      ease: "power1.inOut",
      duration:0.4,
      stagger:0.3,
      scrollTrigger: {
        trigger: ".save-div",
        // start when the botom of sav-div enters the center of the viewport
        start: "bottom center",
        // stop after scrolling 80% beyond the start
        end:"80%",
        scrub: true,
      // markers:true
      }
    })

    gsap.fromTo((".why-img-div"), {
      y: -20,
    }, {
      y: 0,
      duration: 0.9,
      yoyo: true,
      ease: "Power1.easeInOut",
      immediateRender:false,
      repeat:-1,
      opacity: 1,
          scrollTrigger: {
           trigger: ".why-section-container",
        ease: "Power1.inOut",
         start: "top bottom-=300px",
      }  
    })
      
      gsap.from([".why-choose h3", ".why-choose p", ".why-choose-btn"], {
      x: 150,
        scale: -1,
      opacity: 0,
      stagger: 0.7,
        duration: 1,
        
          scrollTrigger: {
            trigger: ".why-section-container",
                        immediateRender:false,

        ease: "Power1.inOut",
         start: "top bottom-=400px",
      }  
      })
    gsap.from(".crypto-div", {
      x: -400,
      autoAlpha:0,
      duration: 1,
      rotate:"25%",
      ease: "power1.inOut",
      scrollTrigger:{
        trigger: ".trade-securely-start",
        pin:true,
      }
    })

    const loopCard = () => {
      const cards = document.querySelectorAll(".features-section-card-img-div")
      cards.forEach((element, index) => {
        if (index % 2 === 0) {
        gsap.from(element, {
           x: 50,
          opacity: 0,
          duration:0.1,
          ease:"power1.inOut",
          scrollTrigger: {
            trigger: element,
            start: "top top+=250",
            end:"top top +=400",
            scrub:true
          }
        })          
        } else {
                  gsap.from(element, {
           x: -50,
                    opacity: 0,
          ease:"power1.inOut",
          scrollTrigger: {
            trigger: element,
            start: "top top+=250",
               end:"top top +=400",
            scrub:true
          }
        })
        }

      });
    }
    loopCard();
  },[])


  return (
    <main>
          <div className='App' ref={element}>
      <div className="save-div">
        <div className="fastest-div">
           <div className="save-p-div anim">
          <p className="save-p-70">70% SAVE </p>
          <p>For the Black Friday weekend</p>
        </div>
        <h1 className="anim">Fastest & Secure Platform To Invest In Crypto</h1>
        <p className="anim">
          Buy and sell cryptocurrencies by trusted 10M wallets, in over 100m
          transactions
        </p>
            <Button
              className2="anim"
              font
          buttonText={
              "Try For Free"}            
        />
      </div>
      <div className="saveimg-div">
        <img src="./images/hero-img.png" />
      </div>        
</div>


      <section className="numbers-section">
        <div className="numbers-icons-div">
          <div className="numbers-icons-image-div" >
              <img src="./images/licon.png" alt="icon showing a graph" />
          </div>
          
          <div className="numbers-figures-div">
            <h2>$30B</h2>
            <p>Digital Currency Exchanged</p>
          </div>
        </div>

        <div className="numbers-icons-div">
                    <div className="numbers-icons-image-div" >
          <img src="./images/licon2.png" alt="icon showing a faceless person" />
          </div>
          <div className="numbers-figures-div">
            <h2>10M+</h2>
            <p>Trusted Wallets Investor</p>
          </div>
        </div>

        <div className="numbers-icons-div">
                        <div className="numbers-icons-image-div" >
          <img src="./images/licon1.png" alt="icon showing the world map" />
          </div>
          <div className="numbers-figures-div">
            <h2>195</h2>
            <p>Countries Supported</p>
          </div>
        </div>
      </section>
</div>
        <section className="why-section">
          <div className="why-section-container App">

          
        <div className="why-img-div">
          <img src="./images/why-img.png" />
        </div>

        <div className="why-choose">
          <h3>Why you should choose CRAPPO</h3>
          <p>
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
          </p>
          <Button className2={"why-choose-btn"} buttonText={"Learn More"} />
            </div>
            </div>
      </section>

      <section className="check-section">
        <h3>Check how much you can earn</h3>
        <p>
          Let???s check your hash rate to see how much you will earn today,
          Exercitation veniam consequat sunt nostrud amet.
        </p>
      </section>

      <section className="trade-section">
        <div className="trade-section-hash-rate-div">
          <div className="trade-section-hash-container">
          <div className="trade-section-hash-rate-form">
            <input type={"text"} placeholder="Enter your hash rate" />
            <div className="trade-section-hash-rate-dropdown">
              <p>TH/s</p>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <Button buttonText={"Calculate"}/>
          </div>
          <div className="trade-section-hash-rate-estimated">
            <p className="trade-section-estimated-hour">Estimated 24 Hour revenue:</p>
            <p className="trade-section-estimated-eth">0.055 130 59 ETH <span>($1275)</span></p>
            <p className="trade-section-estimated-revenue">Revenue will change based on mining difficulty and Ethereum price.</p>
          </div>
          </div>
        </div>
        
        <h4 className="trade-securely-start">Trade securely and market the high growth cryptocurrencies.</h4>
        <div className=" trade-securely-div">
          <div className="crypto-div crypto-blue-card">
            <img src="./images/bitcon.png" />
            <div className="trade-currency">
              <h5>Bitcoin</h5>
              <p>BTC</p>
            </div>
            <p className="trade-text-p">
              Digital currency in which a record of transactions is maintained.
            </p>
            <div className="trade-startmining-button-div trade-text-button">
              <Button buttonText={"Start mining"} font />
            </div>
          </div>
          <div className="crypto-div crypto-white-card">
            <img src="./images/ethereum.png" />
            <div className="trade-currency">
              <h5>Ethereum</h5>
              <p>ETH</p>
            </div>
             <p className="trade-text-p">
              Blockchain technology to create and run decentralized digital
              applications.
            </p>
            <div className="trade-text-circlebutton trade-text-button">
              <FontAwesomeIcon icon={faChevronRight} color="blue"/>
              </div>
          </div>

          <div className="crypto-div crypto-white-card">
            <img src="./images/litecoin.png" />
           <div className="trade-currency">
              <h5>Litecoin</h5>
              <p>LTC</p>
            </div>
            <p className="trade-text-p">
              Cryptocurrency that enables instant payments to anyone in the
              world.
            </p>
                 <div className="trade-text-circlebutton trade-text-button">
              <FontAwesomeIcon icon={faChevronRight} color="blue"/>
              </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-section-h5-div">
       <h5>
          Market sentiments,portfolio, and run the infrastructure of your choice
        </h5>
  </div>

        <div className="features-section-card">
        <div className="features-section-card-text-div">
            <h6>Invest Smart</h6>
            <p>
              Get full statistic information about the behaviour of buyers and
              sellers will help you to make the decision.{" "}
            </p>
            <Button />
          </div>

          <div className="features-section-card-img-div">
            <img src="./images/feature-1-img.png" />
          </div>
        </div>

        <div className="features-section-card features-section-card-reverse">
          <div className="features-section-card-text-div features-section-card-img-div-1">
            <h6>Detailed Statistics</h6>
            <p>
              View all mining related information in realtime, at any point at
              any location and decide which polls you want to mine in.{" "}
            </p>
            <Button />
          </div>
          <div className="features-section-card-img-div">
            <img src="./images/feature-2-img.png" />
          </div>
        </div>

        <div className="features-section-card feaatures-section-card-reverse-div">
          <div className="features-section-card-text-div">
            <h6>Grow your profit and track your investments</h6>
            <p>
              Use advanced analytical tools. Clear TradingView charts let you
              track current and historical profit investments.{" "}
            </p>
            <Button />
          </div>
          <div className="features-section-card-img-div" >
            <img src="./images/feature-3-img.png" />
          </div>
        </div>
      </section>


      <section className="startmining-section">
        <div className="startmining-section-div">
        <div className="startmining-text-div">
          <h6>Start mining now</h6>
          <p>
            Join now with CRAPPO to get the latest news and start mining now
          </p>
        </div>
        <div className="startmining-input-div">
          <input type={"text"} placeholder="Enter your email" />
          <Button buttonText={"Subscribe"} white />
          </div>
          </div>
      </section>

      <footer className="footer">
        <div className="App footer-div">
        <div className="footer-logo-image">
          <img src="./images/flogo.png" />
        </div>
        <div className="quick-link-div">
          <h6>Quick Link</h6>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Contact</a>
        </div>

        <div className="quick-link-div">
          <h6>Resources</h6>
          <a href="#">Download Whitepaper</a>
          <a href="#">Smart Token</a>
          <a href="#">Blockchain Explorer</a>
          <a href="#">Crypto Api</a>
          <a href="#">Interest</a>
        </div>

        <div className="quick-link-div footer-we-accept">
            <h6>We accept following payment systems</h6>
            <div className="footer-we-accept-logos-div">
              <div className="footer-we-accept-logos">
                <img src="./images/visa.png"/>
              </div>
                 <div className="footer-we-accept-logos">
                <img src="./images/mastercard.png"/>
              </div>
                 <div className="footer-we-accept-logos">
                <img src="./images/bitcoin.png"/>
              </div>
            </div>
          </div>

        </div>
        <div className="footer-allrights-div App">
          <p>2022 CRAPPO. All rights reserved</p>
          <div>
            <FontAwesomeIcon className="footer-fontawesome" icon={faFacebookF}/>
            <FontAwesomeIcon className="footer-fontawesome" icon={faInstagram} />
            <FontAwesomeIcon className="footer-fontawesome" icon={faYoutube} />
            <FontAwesomeIcon className="footer-fontawesome" icon={faTwitter} />
            <FontAwesomeIcon className="footer-fontawesome" icon={faLinkedin}/>
          </div>
          </div>
      </footer>
    </main>
  );
};
export default Home;
