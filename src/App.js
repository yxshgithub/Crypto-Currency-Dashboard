import React, { Component } from "react";
import Aboutcoin from "./components/Aboutcoin";
import Cardsection from "./components/Cardsection";
import ChartSection from "./components/ChartSection";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Id: "bitcoin",
      Data: {},
    };
  }
  fetchData = async () => {
    let data = await fetch(
      "https://api.coingecko.com/api/v3/coins/" + this.state.Id
    );
    let JsonData = await data.json();
    this.setState({ Id: this.state.Id, Data: JsonData });
  };

  handleSubmit = async (event) => {
    console.log(event.target.value);
    await this.setState({ Id: event.target.value, Data: this.state.Data });
    this.fetchData();
  };

  componentDidMount() {
    this.fetchData();
    this.interval = setInterval(() => this.fetchData(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  //   {this.state.Data.name} has a sentiment_votes_up_percentage of{" "}
  //           {this.state.Data.sentiment_votes_up_percentage}
  //           <br />
  //           {this.state.Data.name} has a sentiment_votes_down_percentage of{" "}
  // { this.state.Data.sentiment_votes_down_percentage }

  render() {
    return (
      <>
        <Header handle_Submit={this.handleSubmit} />
        <Cardsection
          coinName={this.state.Data.name}
          coinicon={this.state.Data.image ? this.state.Data.image.small : " "}
          currentPrice={
            this.state.Data.market_data
              ? this.state.Data.market_data.current_price["usd"]
              : ""
          }
          mCap24={
            this.state.Data.market_data
              ? this.state.Data.market_data.market_cap_change_percentage_24h
              : ""
          }
          mCap={
            this.state.Data.market_data
              ? this.state.Data.market_data.market_cap["usd"]
              : ""
          }
          ath={
            this.state.Data.market_data
              ? this.state.Data.market_data.ath.usd
              : ""
          }
          atl={
            this.state.Data.market_data
              ? this.state.Data.market_data.atl.usd
              : ""
          }
          sentiment={this.state.Data.sentiment_votes_up_percentage}
          sentimentNeg={this.state.Data.sentiment_votes_down_percentage}
          high24={
            this.state.Data.market_data
              ? this.state.Data.market_data.high_24h["usd"]
              : ""
          }
          low24={
            this.state.Data.market_data
              ? this.state.Data.market_data.low_24h["usd"]
              : ""
          }
          mprank={this.state.Data.market_cap_rank}
          coingeckorank={this.state.Data.coingecko_rank}
          cgscore={this.state.Data.coingecko_score}
          dvscore={this.state.Data.developer_score}
        />
        <Aboutcoin
          coinName1={this.state.name}
          coinName2={this.state.Data.name}
          coininfo={
            this.state.Data.description ? this.state.Data.description["en"] : ""
          }
        />
        <ChartSection
          Id={this.state.Id}
          priceChange24={
            this.state.Data.market_data
              ? this.state.Data.market_data.price_change_24h_in_currency.usd
              : ""
          }
          MarketCap={
            this.state.Data.market_data
              ? this.state.Data.market_data.market_cap.usd
              : ""
          }
          TotVol={
            this.state.Data.market_data
              ? this.state.Data.market_data.total_volume.usd
              : ""
          }
          Circulating={
            this.state.Data.market_data
              ? this.state.Data.market_data["circulating_supply"]
              : ""
          }
          twitterF={
            this.state.Data.community_data
              ? this.state.Data.community_data.twitter_followers
              : ""
          }
        />
        <Footer />
      </>
    );
  }
}
export default App;
