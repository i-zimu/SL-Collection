const app = new Vue({
    el: "#main",
    data: {
        city: "兰州",
        weatherList: [],
    },
    methods: {
        searchWeather: function (city) {
            const that = this;
            // console.log('weather');
            // 调用接口
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city)
                .then(function (response) {
                    console.log(response);
                    that.weatherList = response.data.data.forecast;
                    // console.log(that.weatherList);                    
                })
                .catch(function (error) {
                    console.log(error);

                })

        },
        getWeather:function(city){
            this.city = city;
            this.searchWeather();
        }

    }
})