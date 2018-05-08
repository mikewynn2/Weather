var data;
webix.ready(async function() {
    try {
        data = await fetch('http://api.wunderground.com/api/c76038ba373ea82a/conditions/q/NV/Las_Vegas.json');
        data = await data.json();
        console.log('data: ', data);
        webix.ui({
            rows: [{
                    data: data,
                    template: 'WYNNTHER V.1 LAS VEGAS <br/><br/> Current Temp:<br/> #current_observation.temperature_string#',
                    height: 200,
                    css: 'largeText'
                },
                {
                    data: data,
                    template: "<img src='https://icons.wxug.com/i/c/j/#current_observation.icon#.gif'/><br/> #current_observation.icon#",
                    height: 100,
                    css: 'largeText'
                },
                {
                    data: data,
                    template: 'Wind: #current_observation.wind_string#',
                    height: 50,
                    css: 'largeText'
                },
                {
                    cols: [{
                            data: data,
                            template: 'Rain Today: #current_observation.precip_today_string#',
                            height: 50,
                            css: 'largeText'
                        },
                        {
                            data: data,
                            template: 'Humidity: #current_observation.relative_humidity#',
                            height: 50,
                            css: 'largeText'
                        }
                    ]
                },
                {
                    cols: [{
                            data: data,
                            template: 'Visibility(mi): #current_observation.visibility_mi#',
                            height: 50,
                            css: 'largeText'
                        },
                        {
                            data: data,
                            template: 'Visibility(km): #current_observation.visibility_km#',
                            height: 50,
                            css: 'largeText'
                        }
                    ]
                },
                {
                    cols: [{
                            data: data,
                            template: 'Pressure: #current_observation.pressure_in#',
                            height: 50,
                            css: 'largeText'
                        },
                        {
                            data: data,
                            template: 'Feels Like: #current_observation.feelslike_f# F.',
                            height: 50,
                            css: 'largeText'
                        }
                    ]
                },
                {
                    data: data,
                    template: '#current_observation.observation_time_rfc822#',
                    height: 50,
                    css: 'largeText'
                },
            ]
        })
    } catch (err) {
        console.error('err: ', err);
    }
});
