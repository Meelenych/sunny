export default function parseWeather(code) {
	let weather = {};

	switch (code) {
		case 1000:
			weather.day = 'Sunny';
			weather.night = 'Clear';
			weather.icon = 113;
			break;
		case 1003:
			weather.day = 'Partly cloudy';
			weather.night = 'Partly cloudy';
			weather.icon = 116;
			break;
		case 1006:
			weather.day = 'Cloudy';
			weather.night = 'Cloudy';
			weather.icon = 119;
			break;
		case 1009:
			weather.day = 'Overcast';
			weather.night = 'Overcast';
			weather.icon = 122;
			break;
		case 1030:
			weather.day = 'Mist';
			weather.night = 'Mist';
			weather.icon = 143;
			break;
		case 1063:
			weather.day = 'Patchy rain possible';
			weather.night = 'Patchy rain possible';
			weather.icon = 176;
			break;
		case 1066:
			weather.day = 'Patchy snow possible';
			weather.night = 'Patchy snow possible';
			weather.icon = 179;
			break;
		case 1069:
			weather.day = 'Patchy sleet possible';
			weather.night = 'Patchy sleet possible';
			weather.icon = 182;
			break;
		case 1072:
			weather.day = 'Patchy freezing drizzle possible';
			weather.night = 'Patchy freezing drizzle possible';
			weather.icon = 185;
			break;
		case 1087:
			weather.day = 'Thundery outbreaks possible';
			weather.night = 'Thundery outbreaks possible';
			weather.icon = 200;
			break;
		case 1114:
			weather.day = 'Blowing snow';
			weather.night = 'Blowing snow';
			weather.icon = 227;
			break;
		case 1117:
			weather.day = 'Blizzard';
			weather.night = 'Blizzard';
			weather.icon = 230;
			break;
		case 1135:
			weather.day = 'Fog';
			weather.night = 'Fog';
			weather.icon = 248;
			break;
		case 1147:
			weather.day = 'Freezing fog';
			weather.night = 'Freezing fog';
			weather.icon = 260;
			break;
		case 1150:
			weather.day = 'Patchy light drizzle';
			weather.night = 'Patchy light drizzle';
			weather.icon = 263;
			break;
		case 1153:
			weather.day = 'Light drizzle';
			weather.night = 'Light drizzle';
			weather.icon = 266;
			break;
		case 1168:
			weather.day = 'Freezing drizzle';
			weather.night = 'Freezing drizzle';
			weather.icon = 281;
			break;
		case 1171:
			weather.day = 'Heavy freezing drizzle';
			weather.night = 'Heavy freezing drizzle';
			weather.icon = 284;
			break;
		case 1180:
			weather.day = 'Patchy light rain';
			weather.night = 'Patchy light rain';
			weather.icon = 293;
			break;
		case 1183:
			weather.day = 'Light rain';
			weather.night = 'Light rain';
			weather.icon = 296;
			break;
		case 1186:
			weather.day = 'Moderate rain at times';
			weather.night = 'Moderate rain at times';
			weather.icon = 299;
			break;
		case 1189:
			weather.day = 'Moderate rain';
			weather.night = 'Moderate rain';
			weather.icon = 302;
			break;
		case 1192:
			weather.day = 'Heavy rain at times';
			weather.night = 'Heavy rain at times';
			weather.icon = 305;
			break;
		case 1195:
			weather.day = 'Heavy rain';
			weather.night = 'Heavy rain';
			weather.icon = 308;
			break;
		case 1198:
			weather.day = 'Light freezing rain';
			weather.night = 'Light freezing rain';
			weather.icon = 311;
			break;
		case 1201:
			weather.day = 'Moderate or heavy freezing rain';
			weather.night = 'Moderate or heavy freezing rain';
			weather.icon = 314;
			break;
		case 1204:
			weather.day = 'Light sleet';
			weather.night = 'Light sleet';
			weather.icon = 317;
			break;
		case 1207:
			weather.day = 'Moderate or heavy sleet';
			weather.night = 'Moderate or heavy sleet';
			weather.icon = 320;
			break;
		case 1210:
			weather.day = 'Patchy light snow';
			weather.night = 'Patchy light snow';
			weather.icon = 323;
			break;
		case 1213:
			weather.day = 'Light snow';
			weather.night = 'Light snow';
			weather.icon = 326;
			break;
		case 1216:
			weather.day = 'Patchy moderate snow';
			weather.night = 'Patchy moderate snow';
			weather.icon = 329;
			break;
		case 1219:
			weather.day = 'Moderate snow';
			weather.night = 'Moderate snow';
			weather.icon = 332;
			break;
		case 1222:
			weather.day = 'Patchy heavy snow';
			weather.night = 'Patchy heavy snow';
			weather.icon = 335;
			break;
		case 1225:
			weather.day = 'Heavy snow';
			weather.night = 'Heavy snow';
			weather.icon = 338;
			break;
		case 1237:
			weather.day = 'Ice pellets';
			weather.night = 'Ice pellets';
			weather.icon = 350;
			break;
		case 1240:
			weather.day = 'Light rain shower';
			weather.night = 'Light rain shower';
			weather.icon = 353;
			break;
		case 1243:
			weather.day = 'Moderate or heavy rain shower';
			weather.night = 'Moderate or heavy rain shower';
			weather.icon = 356;
			break;
		case 1246:
			weather.day = 'Torrential rain shower';
			weather.night = 'Torrential rain shower';
			weather.icon = 359;
			break;
		case 1249:
			weather.day = 'Light sleet showers';
			weather.night = 'Light sleet showers';
			weather.icon = 362;
			break;
		case 1252:
			weather.day = 'Moderate or heavy sleet showers';
			weather.night = 'Moderate or heavy sleet showers';
			weather.icon = 365;
			break;
		case 1255:
			weather.day = 'Light snow showers';
			weather.night = 'Light snow showers';
			weather.icon = 368;
			break;
		case 1258:
			weather.day = 'Moderate or heavy snow showers';
			weather.night = 'Moderate or heavy snow showers';
			weather.icon = 371;
			break;
		case 1261:
			weather.day = 'Light showers of ice pellets';
			weather.night = 'Light showers of ice pellets';
			weather.icon = 374;
			break;
		case 1264:
			weather.day = 'Moderate or heavy showers of ice pellets';
			weather.night = 'Moderate or heavy showers of ice pellets';
			weather.icon = 377;
			break;
		case 1273:
			weather.day = 'Patchy light rain with thunder';
			weather.night = 'Patchy light rain with thunder';
			weather.icon = 386;
			break;
		case 1276:
			weather.day = 'Moderate or heavy rain with thunder';
			weather.night = 'Moderate or heavy rain with thunder';
			weather.icon = 389;
			break;
		case 1279:
			weather.day = 'Patchy light snow with thunder';
			weather.night = 'Patchy light snow with thunder';
			weather.icon = 392;
			break;
		case 1282:
			weather.day = 'Moderate or heavy snow with thunder';
			weather.night = 'Moderate or heavy snow with thunder';
			weather.icon = 395;
			break;
		default:
			weather.day = 'Unknown';
			weather.night = 'Unknown';
			weather.icon = null;
			break;
	}

	return weather;
}
