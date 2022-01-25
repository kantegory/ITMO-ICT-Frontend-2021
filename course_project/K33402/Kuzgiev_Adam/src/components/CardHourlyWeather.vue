<template>
    <v-card
            class="mx-auto ma-2 pa-2"
            dark
            color="grey"
            :style="{
      backgroundPosition:'center',
      backgroundSize:'cover',
      backgroundImage: `linear-gradient( rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
      url(${require('@/assets/img/'+weather.weather[0].main.toLowerCase()+'.jpg')})`
      }"
    >
        <v-btn
                absolute
                top
                right
                color="white"
                icon
                @click="delete_weather"
                style="z-index: 1"
        >
            <v-icon>mdi-close</v-icon>
        </v-btn>
        <div class="pt-2">
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title class="text-h5" style="white-space: initial">
                        {{
                        `${$store.state.daysWeek[time.getDay()]},
                        ${time.getHours() > 9 ? time.getHours() : '0' + time.getHours()}:00`
                        }}
                    </v-list-item-title>
                    <v-list-item-subtitle style="white-space: initial">
                        {{ `${weather.weather[0].description}` }}
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </div>

        <v-card-text>
            <div class="d-flex align-center">
                <div class="text-h4 white--text">
                    {{ `${parseInt(weather.temp) + $store.state.unitsData[$store.state.units].deg}` }}
                </div>
                <v-avatar class="pl-4" :width="$vuetify.breakpoint.xs?50:100">
                    <v-img
                            :style="{mixBlendMode:'screen',filter: 'brightness(200%)'}"
                            :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
                            :alt="weather.weather[0].description+'image'"
                    ></v-img>
                </v-avatar>
                <v-col class="pa-0">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title class="text-h6" style="white-space: initial">
                                {{ `Feels like ${parseInt(weather.feels_like) +
                                $store.state.unitsData[$store.state.units].deg}` }}
                            </v-list-item-title>
                            <v-list-item-subtitle style="white-space: initial">
                                Atmospheric temperature
                                {{ parseInt(weather.dew_point) + $store.state.unitsData[$store.state.units].deg }}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
            </div>
        </v-card-text>

        <div class="pa-2">
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
                            {{ weather.pressure }} hPa
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
                            {{
                            `${weather.wind_speed + $store.state.unitsData[$store.state.units].speed},
                            ${weather.wind_deg + $store.state.unitsData[$store.state.units].deg},
                            ${weather.wind_gust + $store.state.unitsData[$store.state.units].speed}`
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
                            {{ weather.clouds }}%
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
                            {{ weather.humidity }}%
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
                            {{ weather.uvi }}
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
                            {{ weather.visibility }}m
                        </v-chip>
                    </template>
                    <span>Average visibility</span>
                </v-tooltip>
            </div>
        </div>
    </v-card>
</template>
<script>
    export default {
        name: 'CardHourlyWeather',
        props: ['weather', 'delete_weather'],
        data() {
            return {
                time: new Date(this.weather.dt * 1000),
            };
        },
        watch: {
            weather: function () {
                this.time = new Date(this.weather.dt * 1000)
            }
        }
    }
</script>