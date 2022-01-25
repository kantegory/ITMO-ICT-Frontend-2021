<template>
    <div>
        <v-card
                class="mx-auto ma-2"
                dark
                color="grey"
                :style="{
      backgroundPosition:'center',
      backgroundSize:'cover',
      backgroundImage: `linear-gradient( rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
      url(${require('@/assets/img/'+weather.current.weather[0].main.toLowerCase()+'.jpg')})`
      }"
        >
            <v-btn
                    absolute
                    top
                    right
                    color="white"
                    icon
                    @click="refresh_weather"
                    style="z-index: 1"
            >
                <v-icon>mdi-refresh</v-icon>
            </v-btn>
            <v-card-title class=" px-2">
                <v-list-item two-line style="width: 100%">
                    <v-list-item-content>
                        <v-list-item-title class="text-h5" style="white-space: initial;word-break: break-word">
                            {{ city.name ? city.name : `Time Zone: ${weather.timezone}` }}
                        </v-list-item-title>
                        <v-list-item-subtitle style="white-space: initial">
                            {{
                            `${$store.state.fullDaysWeek[time.getDay()]},
                            ${time.getHours() > 9 ? time.getHours() : '0' + time.getHours()}
                            :${time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes()},
                            ${weather.current.weather[0].description}`
                            }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card-title>
            <v-card-text>
                <div class="d-flex align-center px-2">
                    <div class="text-h4 white--text">
                        {{ parseInt(weather.current.temp) + $store.state.unitsData[$store.state.units].deg }}
                    </div>
                    <v-avatar class="pl-4" :width="$vuetify.breakpoint.xs?50:100">
                        <v-img
                                :style="{mixBlendMode:'screen',filter: 'brightness(200%)'}"
                                :src="`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`"
                                :alt="weather.current.weather[0].description+'image'"
                        ></v-img>
                    </v-avatar>
                    <v-col class="pa-0">
                        <v-list-item two-line>
                            <v-list-item-content>
                                <v-list-item-title class="text-h6" style="white-space: initial">
                                    Feels like {{ parseInt(weather.current.feels_like) +
                                    $store.state.unitsData[$store.state.units].deg }}
                                </v-list-item-title>
                                <v-list-item-subtitle style="white-space: initial" class="d-flex">
                                    Atmospheric temperature
                                    {{ parseInt(weather.current.dew_point) +
                                    $store.state.unitsData[$store.state.units].deg }}
                                    <v-tooltip right color="primary" max-width="400">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon style="height: 1em;    padding-left: 0.3em" small
                                                    color="grey lighten-1" v-bind="attrs"
                                                    v-on="on">mdi-help-circle-outline
                                            </v-icon>
                                        </template>
                                        <span> Atmospheric temperature below which water droplets begin to condense and dew can form.</span>
                                    </v-tooltip>
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                </div>

                <div>
                    <v-tooltip bottom color="primary">
                        <template v-slot:activator="{ on, attrs }">
                            <v-chip
                                    v-bind="attrs"
                                    v-on="on"
                                    class="ma-2"
                                    color="white"
                                    outlined
                            >
                                <v-icon left>
                                    mdi-weather-sunny
                                </v-icon>
                                {{
                                ((time1, time2) =>
                                `${time1.getHours() > 9 ? time1.getHours() : '0' + time1.getHours()}
                                :${time1.getMinutes() > 9 ? time1.getMinutes() : '0' + time1.getMinutes()} /
                                ${time2.getHours() > 9 ? time2.getHours() : '0' + time2.getHours()}
                                :${time2.getMinutes() > 9 ? time2.getMinutes() : '0' + time2.getMinutes()}`
                                )(new Date(weather.current.sunrise * 1000), new Date(weather.current.sunset * 1000))
                                }}
                            </v-chip>
                        </template>
                        <span>Sunrise / Sunset</span>
                    </v-tooltip>
                    <v-tooltip bottom color="primary">
                        <template v-slot:activator="{ on, attrs }">
                            <v-chip
                                    v-bind="attrs"
                                    v-on="on"
                                    class="ma-2"
                                    color="white"
                                    outlined
                            >
                                <v-icon left>
                                    mdi-car-brake-low-pressure
                                </v-icon>
                                {{ weather.current.pressure }} hPa
                            </v-chip>
                        </template>
                        <span>Atmospheric pressure on the sea level</span>
                    </v-tooltip>
                    <v-tooltip bottom color="primary">
                        <template v-slot:activator="{ on, attrs }">
                            <v-chip
                                    v-bind="attrs"
                                    v-on="on"
                                    class="ma-2"
                                    color="white"
                                    outlined
                            >
                                <v-icon left>
                                    mdi-weather-windy
                                </v-icon>
                                {{ weather.current.wind_speed + $store.state.unitsData[$store.state.units].speed }},
                                {{ weather.current.wind_deg + $store.state.unitsData[$store.state.units].deg }}
                                {{
                                weather.current.wind_gust ?
                                ',' + weather.current.wind_gust + $store.state.unitsData[$store.state.units].speed
                                : ''
                                }}
                            </v-chip>
                        </template>
                        <span>Wind</span>
                    </v-tooltip>
                    <v-tooltip bottom color="primary">
                        <template v-slot:activator="{ on, attrs }">
                            <v-chip
                                    v-bind="attrs"
                                    v-on="on"
                                    class="ma-2"
                                    color="white"
                                    outlined
                            >
                                <v-icon left>
                                    mdi-cloud
                                </v-icon>
                                {{ weather.current.clouds }}%
                            </v-chip>
                        </template>
                        <span>Cloudiness</span>
                    </v-tooltip>
                    <v-tooltip bottom color="primary">
                        <template v-slot:activator="{ on, attrs }">
                            <v-chip
                                    v-bind="attrs"
                                    v-on="on"
                                    class="ma-2"
                                    color="white"
                                    outlined
                            >
                                <v-icon left>
                                    mdi-water-percent
                                </v-icon>
                                {{ weather.current.humidity }}%
                            </v-chip>
                        </template>
                        <span>Humidity</span>
                    </v-tooltip>
                    <v-tooltip bottom color="primary">
                        <template v-slot:activator="{ on, attrs }">
                            <v-chip
                                    v-bind="attrs"
                                    v-on="on"
                                    v-if="weather.current.snow"
                                    class="ma-2"
                                    color="white"
                                    outlined
                            >
                                <v-icon left>
                                    mdi-snowflake
                                </v-icon>
                                {{ weather.current.snow['1h'] }}%
                            </v-chip>
                        </template>
                        <span>Snow volume for last hour</span>
                    </v-tooltip>
                    <v-tooltip bottom color="primary">
                        <template v-slot:activator="{ on, attrs }">
                            <v-chip
                                    v-bind="attrs"
                                    v-on="on"
                                    v-if="weather.current.rain"
                                    class="ma-2"
                                    color="white"
                                    outlined
                            >
                                <v-icon left>
                                    mdi-weather-pouring
                                </v-icon>
                                {{ weather.current.rain['1h'] }}%
                            </v-chip>
                        </template>
                        <span>Rain volume for last hour</span>
                    </v-tooltip>
                    <v-tooltip bottom color="primary">
                        <template v-slot:activator="{ on, attrs }">
                            <v-chip
                                    v-bind="attrs"
                                    v-on="on"
                                    class="ma-2"
                                    color="white"
                                    outlined
                            >
                                <v-icon left>
                                    mdi-sun-wireless
                                </v-icon>
                                {{ weather.current.uvi }}
                            </v-chip>
                        </template>
                        <span>UV index</span>
                    </v-tooltip>
                    <v-tooltip bottom color="primary">
                        <template v-slot:activator="{ on, attrs }">
                            <v-chip
                                    v-bind="attrs"
                                    v-on="on"
                                    class="ma-2"
                                    color="white"
                                    outlined
                            >
                                <v-icon left>
                                    mdi-eye
                                </v-icon>
                                {{ weather.current.visibility }}m
                            </v-chip>
                        </template>
                        <span>Average visibility</span>
                    </v-tooltip>
                </div>
            </v-card-text>

            <v-divider></v-divider>
            <v-card-text>
                <v-sheet
                        class="mx-auto"
                        max-width="100%"
                        style="background: none"
                >
                    <v-slide-group show-arrows>
                        <v-slide-item
                                v-for="(hourly,i) in weather.hourly"
                                :key="hourly.dt"
                        >
                            <div class="d-flex">
                                <v-divider vertical
                                           v-if="new Date(hourly.dt * 1000).getHours()===0 && i!==0"
                                           class="mx-4"
                                ></v-divider>
                                <v-card
                                        @click="change({type:0, data:hourly})"
                                        class="pa-1 mx-2 text-center"
                                        outlined
                                        style="background: none"
                                >
                                    <div>
                                        {{
                                        ((time) =>
                                        `${time.getHours() === 0 && i !== 0 ? $store.state.daysWeek[time.getDay()] + ','
                                        : ''}
                                        ${time.getHours() > 9 ? time.getHours() : '0' + time.getHours()}:00`
                                        )(new Date(hourly.dt * 1000))
                                        }}
                                    </div>
                                    <div>
                                        <v-img
                                                :style="{mixBlendMode:'screen',filter: 'brightness(200%)'}"
                                                :src="`http://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`"
                                                :alt="hourly.weather[0].description+'image'"
                                                width="50"
                                        ></v-img>
                                    </div>
                                    <div> {{ parseInt(hourly.temp) + $store.state.unitsData[$store.state.units].deg }}
                                    </div>
                                </v-card>
                            </div>
                        </v-slide-item>
                    </v-slide-group>
                </v-sheet>
            </v-card-text>

            <v-divider></v-divider>
            <v-card-text>
                <v-sheet
                        class="mx-auto"
                        max-width="100%"
                        style="background: none"
                >
                    <v-slide-group
                            show-arrows
                    >
                        <v-slide-item
                                v-for="daily in weather.daily"
                                :key="daily.dt"
                        >
                            <v-card
                                    @click="change({type:1,data:daily})"
                                    class="pa-1 mx-2 text-center"
                                    outlined
                                    style="background: none"
                            >
                                <div>{{ `${$store.state.fullDaysWeek[new Date(daily.dt * 1000).getDay()]}` }}</div>
                                <div>
                                    <v-img
                                            :style="{mixBlendMode:'screen',filter: 'brightness(200%)'}"
                                            :src="`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`"
                                            :alt="daily.weather[0].description+'image'"
                                            width="50"
                                            class="mx-auto"
                                    ></v-img>
                                </div>
                                <div> {{ daily.weather[0].main }}</div>
                                <div> {{ parseInt(daily.temp.day) + $store.state.unitsData[$store.state.units].deg }}
                                </div>
                            </v-card>
                        </v-slide-item>
                    </v-slide-group>
                </v-sheet>
            </v-card-text>
        </v-card>
        <CardHourlyWeather :delete_weather="delete_weather"
                           v-if="typeWeather===0"
                           :weather="typeWeatherData">

        </CardHourlyWeather>
        <CardDailyWeather :delete_weather="delete_weather"
                          v-if="typeWeather===1"
                          :weather="typeWeatherData">

        </CardDailyWeather>
    </div>
</template>
<script>
    import CardDailyWeather from "@/components/CardDailyWeather.vue"
    import CardHourlyWeather from "@/components/CardHourlyWeather.vue"

    export default {
        name: 'CardFullWeather',
        components: {CardHourlyWeather, CardDailyWeather},
        props: ['weather', 'city', 'path'],
        data() {
            return {
                time: new Date(),
                typeWeather: -1,
                typeWeatherData: {},
            };
        },
        watch: {
            Weather: function () {
                this.time = new Date(this.weather.current.dt * 1000)
            },
        },
        methods: {
            change: function (obj) {
                this.typeWeather = obj.type
                this.typeWeatherData = obj.data
            },
            delete_weather: function () {
                this.typeWeather = -1
                this.typeWeatherData = {}
            },
            refresh_weather: function () {
                this.$store.dispatch('' + this.path)
            },
        }
    }
</script>