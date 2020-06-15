import React from "react";
import { fetchData } from "./api/index";
import { Cards, CountryPicker, Chart } from "./components";
import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({
      data: fetchedData,
    });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country: country,
    });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>COVI-STAT</h1>
        <h7 className={styles.subTitle}>CORONA VIRUS STATISTICS TRACKER</h7>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
