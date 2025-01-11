import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Loading...'
    };
  }

  render() {
    return (
      <div>
        <h2>Customer page</h2>
        <p>{this.state.message}</p>
      </div>
    );
  }

  componentDidMount() {
    //thêm đường dẫn tuyết đối localhost:3000 vào axios và chạy thành công customer không có đường dẫn này bị lỗi AxiosError
    axios.get('http://localhost:3000/hello').then((res) => {
      const result = res.data;
      this.setState({ message: result.message });
    });
  }

  // public class WebMvcConfig implements WebMvcConfigurer{ 
  //   Override
  //   public void addCorsMappings(CorsRegistry, registry) {
  //     registry.addMapping("/**") .allowedMethods("") .allowedOrigins("") .allowedHeaders("*") .allowCredentials(false) .maxAge(86400); 
  //   }
  // }

}
export default App;
