import Button from "../Button/Button";
import "./Home.css"

const Home = () => {
  return (
    <main>
      <div className="save-div">
        <p>
          70% SAVE<span>for the best black friday deals</span>
        </p>
        <h1>Fastest & Secure Platform To Invest In Crypto</h1>
        <p>
          buy and sell cryptocurrencies by trusted 10M wallets, in over 100m
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

      <section className="numbers-section">
        <div className="numbers-icons-div">
          <img src="./images/icon.png" alt="icon showing a graph" />
          <div>
            <h2>$30B</h2>
            <p>Digital Currency Exchanged</p>
          </div>
        </div>

        <div className="numbers-icons-div">
          <img src="./images/icon2.png" alt="icon showing a faceless person" />
          <div>
            <h2>10M+</h2>
            <p>Trusted Wallets Investor</p>
          </div>
        </div>

        <div className="numbers-icons-div">
          <img src="./images/icon1.png" alt="icon showing the world map" />
          <div>
            <h2>195</h2>
            <p>Countries Supported</p>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-img-div">
          <img src="./images/why-img.png" />
        </div>

        <div>
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

      <section className="trade-section">
        <div></div>
         <h4>Trade securely and market the high growth cryptocurrencies.</h4>
        <div className="trade-securely-div">

          <div className="crypto-div crypto-blue-card">
            <img src="./images/bitcon.png" />
            <div>
              <h5>Bitcoin</h5>
              <p>BTC</p>
            </div>
            <p>Digital currency in which a record of transactions is maintained.</p>
          </div>
                    <div className="crypto-div crypto-white-card">
            <img src="./images/ethereum.png" />
            <div>
              <h5>Ethereum</h5>
              <p>ETH</p>
            </div>
            <p>Blockchain technology to create and run decentralized digital applications.</p>
          </div>

                              <div className="crypto-div crypto-white-card">
            <img src="./images/litecoin.png" />
            <div>
              <h5>Litecoin</h5>
              <p>LTC</p>
            </div>
            <p>Cryptocurrency that enables instant payments to anyone in the world.</p>
          </div>


        </div>

      </section>
    </main>
  );
};
export default Home;
