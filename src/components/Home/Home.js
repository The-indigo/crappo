import Button from "../Button/Button";

const Home = () => {
  return (
    <main>
      <div className="save-div">
              <p>70% SAVE<span>for the best black friday deals</span></p>
              <h1>Fastest & Secure Platform To Invest In Crypto</h1>
              <p>buy and sell cryptocurrencies by trusted 10M wallets, in over 100m transactions</p>
              <Button buttonText={<>Try For Free<span></span></>}/>
          </div>
          <div className="saveimg-div">
              <img src="./images/hero-img.png"/>
      </div>
      
      <section className="numbers-section">
        <div className="numbers-icons-div">
          <img src="./images/icon.png" alt="icon showing a graph" />
          <div>
            <h2>10M+</h2>
            <p>Trusted Wallets Investor</p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
