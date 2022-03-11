<template>
    <v-card
            class="mx-auto ma-2 mb-0 fill-height"
            dark
            color="grey"
            :style="{
      backgroundPosition:'center',
      backgroundSize:'cover',
      backgroundImage: `linear-gradient( rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
      url(${require('@/assets/img/'+weather.weather[0].main.toLowerCase()+'.jpg')})`
      }"
    >
        <v-col style="position: absolute;top:0;right: 0;width: fit-content">
            <v-btn
                    color="white"
                    icon
                    @click="refresh_weather"
                    style="z-index: 1"
            >
                <v-icon>mdi-refresh</v-icon>
            </v-btn>
            <v-btn
                    color="white"
                    icon
                    @click="delete_weather"
                    style="z-index: 1"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-col>
        <div class="pt-2">
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title class="text-h5" style="white-space: initial">
                        {{ weather.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle style="white-space: initial">
                        {{
                        `${$store.state.daysWeek[time.getDay()]},
                        ${time.getHours() > 9 ? time.getHours() : '0' + time.getHours()}
                        :${time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes()},
                        ${weather.weather[0].description}`
                        }}
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </div>

        <v-card-text>
            <div class="d-flex align-center">
                <div class="text-h4 white--text">
                    {{ `${parseInt(weather.main.temp)}${$store.state.unitsData[$store.state.units].deg}` }}
                </div>
                <div>
                    <v-img
                            :style="{mixBlendMode:'screen',filter: 'brightness(200%)'}"
                            :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
                            :alt="weather.weather[0].description+'image'"
                            width="75"
                    ></v-img>
                </div>
                <div>
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title class="text-h6" style="white-space: initial">
                                {{
                                `Feels like ${parseInt(weather.main.feels_like)}
                                ${$store.state.unitsData[$store.state.units].deg}`
                                }}
                            </v-list-item-title>
                            <v-list-item-subtitle style="white-space: initial">
                                {{
                                `Max ${parseInt(weather.main.temp_max)}${$store.state.unitsData[$store.state.units].deg},
                                Min ${parseInt(weather.main.temp_min)}${$store.state.unitsData[$store.state.units].deg}`
                                }}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </div>
            </div>
        </v-card-text>

        <div class="pa-2 pb-10">
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
                                mdi-car-brake-low-pressure
                            </v-icon>
                            {{ weather.main.pressure }} hPa
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
                            {{ `${weather.wind.speed}${$store.state.unitsData[$store.state.units].speed}` }}
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
                            {{ weather.clouds.all }}%
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
                            {{ weather.main.humidity }}%
                        </v-chip>
                    </template>
                    <span>Humidity</span>
                </v-tooltip>
                <v-tooltip bottom color="primary">
                    <template v-slot:activator="{ on, attrs }">
                        <v-chip
                                v-bind="attrs"
                                v-on="on"
                                v-if="weather.snow"
                                class="ma-2"
                                color="white"
                                outlined
                        >
                            <v-icon left>
                                mdi-weather-snowy-heavy
                            </v-icon>
                            {{ weather.snow['1h'] }}%
                        </v-chip>
                    </template>
                    <span>Snow volume for last hour</span>
                </v-tooltip>
                <v-tooltip bottom color="primary">
                    <template v-slot:activator="{ on, attrs }">
                        <v-chip
                                v-bind="attrs"
                                v-on="on"
                                v-if="weather.rain"
                                class="ma-2"
                                color="white"
                                outlined
                        >
                            <v-icon left>
                                mdi-weather-pouring
                            </v-icon>
                            {{ weather.rain['1h'] }}%
                        </v-chip>
                    </template>
                    <span>Rain volume for last hour</span>
                </v-tooltip>
            </div>
        </div>

        <div style="position: absolute;bottom: 0;width: 100%;">
            <v-divider></v-divider>
            <v-card-actions>
                <router-link :to="'/weather/'+weather.id" class="text-decoration-none white--text px-2">
                    Full Report
                </router-link>
            </v-card-actions>
        </div>
    </v-card>
</template>
<script>
    export default {
        name: 'CardWeather',
        props: ['weather'],
        data() {
            return {
                time: new Date(this.weather.dt * 1000),
            };
        },
        methods: {
            refresh_weather: function () {
                this.$store.dispatch('ADD_WEATHER', this.weather.id)

            },
            delete_weather: function () {
                this.$store.commit('REMOVE_WEATHER_MODULE', this.weather.id)
                this.$store.dispatch('REMOVE_CITY', this.weather.id)
            }
        }
    }
</script>