import React, { Component } from "react";

class Adsense extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div className="Adsense__ads">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-6342867299408951"
          data-ad-slot="1127934281"
        />
      </div>
    );
  }
}

export default Adsense;
