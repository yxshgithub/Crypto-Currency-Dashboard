import React, { Component } from "react";
import "./header.css";

export class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sg">
          <div className="container-fluid">
            <select
              className="form-select form-select-sg "
              aria-label=".form-select-sg example"
              name="selectCoin"
              onChange={this.props.handle_Submit}
            >
              <option value="bitcoin">Select Coin</option>
              <option value="bitcoin">Bitcoin (BTC) </option>
              <option value="ethereum">Ethereum (ETH)</option>
              <option value="solana">Solana (SOL)</option>
              <option value="binancecoin">Binance (BNB)</option>
              <option value="decentraland">Decentraland (MANA)</option>
              <option value="dogecoin">Dogecoin (DOGE)</option>
              <option value="tether">Tether (USDT)</option>
              <option value="avalanche-2">Avalanche (AVAX)</option>
              <option value="cardano">Cardano (ADA)</option>
              <option value="ripple">Ripple (XRP)</option>
            </select>

            <a
              className="navbar-brand d-flex ml-auto display-2 text-light fs-1 fw-bold text-uppercase "
              style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
              href="/"
            >
              Crypto Dashboard
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
