import Button from "../Button/Button";
import "./Home.css";

const Home = () => {
  return (
    <main>
          <div className='App'>
      <div className="save-div">
        <div className="fastest-div">
           <div className="save-p-div">
          <p className="save-p-70">70% SAVE </p>
          <p>For the Black Friday weekend</p>
        </div>
        <h1>Fastest & Secure Platform To Invest In Crypto</h1>
        <p>
          Buy and sell cryptocurrencies by trusted 10M wallets, in over 100m
          transactions
        </p>
        <Button
          buttonText={
            <>
              Try For Free<span></span>
            </>
          }
        />
      </div>
      <div className="saveimg-div">
        <img src="./images/hero-img.png" />
      </div>        
</div>


      <section className="numbers-section">
        <div className="numbers-icons-div">
          <div className="numbers-icons-image-div" >
<img src="./images/icon.png" alt="icon showing a graph" />
          </div>
          
          <div className="numbers-figures-div">
            <h2>$30B</h2>
            <p>Digital Currency Exchanged</p>
          </div>
        </div>

        <div className="numbers-icons-div">
                    <div className="numbers-icons-image-div" >
          <img src="./images/icon2.png" alt="icon showing a faceless person" />
          </div>
          <div className="numbers-figures-div">
            <h2>10M+</h2>
            <p>Trusted Wallets Investor</p>
          </div>
        </div>

        <div className="numbers-icons-div">
                        <div className="numbers-icons-image-div" >
          <img src="./images/icon1.png" alt="icon showing the world map" />
          </div>
          <div className="numbers-figures-div">
            <h2>195</h2>
            <p>Countries Supported</p>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-img-div">
          <img src="./images/why-img.png" />
        </div>

        <div className="why-choose">
          <h3>Why you should choose CRAPPO</h3>
          <p>
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
          </p>
          <Button buttonText={"Learn More"} />
        </div>
      </section>

      <section className="check-section">
        <h3>Check how much you can earn</h3>
        <p>
          Let’s check your hash rate to see how much you will earn today,
          Exercitation veniam consequat sunt nostrud amet.
        </p>
      </section>
</div>
      <section className="trade-section">
        <div></div>
        
        <h4>Trade securely and market the high growth cryptocurrencies.</h4>
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
          </div>
        </div>
      </section>

      <section className="features-section">
        <h5>
          Market sentiments,portfolio, and run the infrastructure of your choice
        </h5>

        <div className="features-section-card">
          <div>
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

        <div className="features-section-card">
          <div>
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

        <div className="features-section-card">
          <div>
            <h6>Grow your profit and track your investments</h6>
            <p>
              Use advanced analytical tools. Clear TradingView charts let you
              track current and historical profit investments.{" "}
            </p>
            <Button />
          </div>
          <div className="features-section-card-img-div">
            <img src="./images/feature-3-img.png" />
          </div>
        </div>
      </section>
      <section className="startmining-section">
        <div className="startmining-text-div">
          <h6>Start mining now</h6>
          <p>
            Join now with CRAPPO to get the latest news and start mining now
          </p>
        </div>
        <div className="startmining-input-div">
          <input type={"text"} />
          <Button buttonText={"Subscribe"} />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-logo-image">
          <img src="./images/logo.png" />
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

        <div className="quick-link-div">
          <h6>We accept following payment systems</h6>
        </div>
      </footer>
    </main>
  );
};
export default Home;
