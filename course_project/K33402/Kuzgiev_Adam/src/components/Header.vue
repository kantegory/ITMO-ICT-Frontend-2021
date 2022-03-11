<template>
    <v-app-bar
            app
            dark
            color="blue darken-3"
    >
        <v-container class="py-0 fill-height">
            <v-icon>
                mdi-weather-partly-cloudy
            </v-icon>
            <router-link to="/" class="white--text text-decoration-none">
                <v-app-bar-title>Weather</v-app-bar-title>
            </router-link>

            <v-spacer></v-spacer>

            <v-menu left bottom v-model="showMenu">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                            icon
                            v-bind="attrs"
                            v-on="on"
                    >
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                            link
                            @click="showMenu=false;dialog1=true"
                    >
                        <v-list-item-title>Select local city</v-list-item-title>
                    </v-list-item>
                    <v-list-item
                            link
                            @click="showMenu=false;dialog2=true"
                    >
                        <v-list-item-title>Settings</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-dialog
                    v-model="dialog1"
                    width="500"
            >
                <v-card>
                    <v-card-title class="text-h5 grey lighten-2">
                        Select local city
                    </v-card-title>

                    <v-card-text class="py-4">
                        <div>{{ this.$store.state.location.id ? 'Change local city' : 'Select local city' }}</div>
                        <div class="d-flex align-stretch flex-wrap">
                            <v-responsive max-width="260">
                                <v-autocomplete
                                        v-model="cityId"
                                        :items="$store.state.citiesAll.filter(x=>x.country==='RU')"
                                        item-text="name"
                                        item-value="id"
                                        flat
                                        hide-no-data
                                        hide-details
                                        label="Search"
                                        solo-inverted
                                ></v-autocomplete>
                            </v-responsive>
                            <div>
                                <v-btn @click="saveLocalCity" height="100%" color="primary">Save</v-btn>
                                <v-btn v-if="$store.state.location.id" @click="delLocalCity" height="100%"
                                       color="error">Delete
                                </v-btn>
                            </div>
                        </div>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                color="primary"
                                text
                                @click="dialog1 = false"
                        >
                            Cancel
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog
                    v-model="dialog2"
                    width="500"
            >
                <v-card>
                    <v-card-title class="text-h5 grey lighten-2">
                        Settings
                    </v-card-title>

                    <v-card-text class="pt-4">
                        <div>Change units</div>
                        <div class="d-flex align-stretch flex-wrap">
                            <v-responsive max-width="260" width="100%">
                                <v-autocomplete
                                        v-model="units"
                                        :items="['standard','metric','imperial']"
                                        flat
                                        hide-no-data
                                        hide-details
                                        solo-inverted
                                ></v-autocomplete>
                            </v-responsive>
                            <div>
                                <v-btn @click="changeUnits" min-height="36px" height="100%" color="primary">Save</v-btn>
                            </div>
                        </div>
                        <div v-if="$store.state.city.data.length!==0">
                            <div class="mt-4">Delete all favorites</div>
                            <v-btn
                                    color="primary"
                                    @click="delAll"
                            >
                                Delete
                            </v-btn>
                        </div>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                color="primary"
                                text
                                @click="dialog2 = false"
                        >
                            Cancel
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
    </v-app-bar>
</template>


<script>
    export default {
        name: 'Header',
        props: ['openSnackbar'],
        data() {
            return {
                cityId: this.$store.state.location.id || 0,
                units: this.$store.state.units,
                dialog1: false,
                dialog2: false,
                showMenu: false,
            };
        },
        methods: {
            delLocalCity: function () {
                this.cityId = 0
                this.saveLocalCity()
            },
            delAll: function () {
                this.$store.commit('REMOVE_ALL_WEATHER_MODULE')
                this.$store.dispatch('REMOVE_ALL_CITY')
                this.dialog2 = false
                this.$emit('openSnackbar', {color: 'green', text: 'Removed successfully'})
            },
            changeUnits: function () {
                this.$store.commit('ADD_UNITS', this.units)
                this.dialog2 = false
                this.$emit('openSnackbar', {color: 'green', text: 'Changes saved'})
                this.$store.dispatch('ADD_LOCAL_WEATHER')
                this.$store.dispatch('ADD_FULL_WEATHER')
                for (var i = this.$store.state.city.data.length - 1; i >= 0; i--) {
                    this.$store.dispatch('ADD_WEATHER', this.$store.state.city.data[i].id)
                }
            },
            saveLocalCity: function () {
                const city = this.$store.state.citiesAll.filter((city) => this.cityId === city.id)
                if (city.length > 0) {
                    let data = {
                        coords: {
                            latitude: city[0].coord.lat,
                            longitude: city[0].coord.lon,
                        },
                        name: city[0].name,
                        id: city[0].id
                    }
                    this.$store.commit('ADD_LOCATION', data)
                    this.$store.commit('ADD_GETTING_LOCATION', true)
                    this.dialog1 = false
                    this.$emit('openSnackbar', {color: 'green', text: 'Changes saved'})
                    this.$store.dispatch('ADD_LOCAL_WEATHER')
                } else {
                    this.$store.dispatch('ADD_LOCATION')
                    this.dialog1 = false
                    this.$emit('openSnackbar', {color: 'green', text: 'Changes saved'})
                }
            }
        }
    }
</script>
