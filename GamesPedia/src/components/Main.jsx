import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: this.props.CentralImage,
      ElementStyle: {
        display: "none"
      }
    };

    this.setMainImage = this.setMainImage.bind(this);
    this.returnCenterImg = this.returnCenterImg.bind(this);
    this.setSummary = this.setSummary.bind(this);
    this.outOfSummary = this.outOfSummary.bind(this);
  }

  setMainImage(event) {
    this.setState({
      mainImage: event.target.src
    });
  }

  returnCenterImg() {
    this.setState({
      mainImage: this.props.CentralImage
    });
  }

  setSummary() {
    this.setState({
      ElementStyle: {
        boxSizing: "border-box",
        background: "#fff",
        color: "#3f51b5",
        position: " absolute",
        textAlign: "left",
        display: " block",
        width: "80%",
        minHeight: "100%",
        zIndex: 1,
        top: "0px",
        fontSize: "20px",
        left: "-5%",
        visibility: "visible",
        columns: 1,
        padding: "10px",
        borderRadius: "20px",
        transition: "all 0.5s ease"
      }
    });
  }

  outOfSummary() {
    this.setState({
      ElementStyle: {
        display: "none"
      }
    });
  }

  render() {
    function copySummary() {
      alert(
        `Copy occurred!\nYou may not use this information without permission from GAMESPEDIA`
      );
    }
    return (
      <div onMouseLeave={this.returnCenterImg} className="main">
        <div className="mainRight">
          <p className="nameOfGame">{this.props.name}</p>

          <img
            onMouseOver={this.setMainImage}
            className="images"
            src={this.props.image1}
            alt={this.props.name}
          />
          <img
            onMouseOver={this.setMainImage}
            className="images"
            src={this.props.image2}
            alt={this.props.name}
          />
          <img
            onMouseOver={this.setMainImage}
            className="images"
            src={this.props.image3}
            alt={this.props.name}
          />
          <img
            onMouseOver={this.setMainImage}
            className="images"
            src={this.props.image4}
            alt={this.props.name}
          />
          <span className="priceOfGame"> Price: {this.props.price} </span>
        </div>
        <div className="mainLeft">
          <img
            id="centerImg"
            style={{
              width: "60%",
              position: "relative",
              left: "-15%",
              top: "20px"
            }}
            src={this.state.mainImage}
            alt={this.props.name}
          />
          <div
            onCopy={copySummary}
            onMouseLeave={this.outOfSummary}
            style={this.state.ElementStyle}
          >
            <p>{this.props.summary}</p>
          </div>
          <button onClick={this.setSummary} className="btnParagraph">
            A little about me...
          </button>
        </div>
      </div>
    );
  }
}
export default Main;
