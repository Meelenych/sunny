import React, { useState } from 'react';
import axios from 'axios';
import uuid from 'react-native-uuid';
import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Image,
	SafeAreaView,
	TouchableHighlight,
} from 'react-native';
import { url } from './app/api/api';
import parseWeather from './app/helpers/parseWeather';

export default function App() {
	const [cityWeather, setCityWeather] = useState(null);
	const [changeValue, setChangeValue] = useState('Vienna');
	// const [citiesWeather, setCitiesWeather] = useState([]);
	// const [loading, setLoading] = useState(false);

	const fetchData = async cityName => {
		try {
			// setLoading(true);
			const res = await axios.get(url + cityName);
			setCityWeather(res.data);
			return res.data;
		} catch (error) {
			console.error(error.message);
		} finally {
			// setLoading(false);
		}
	};

	const onFind = async () => {
		await fetchData(changeValue);
	};

	const icon = { uri: `http://${cityWeather?.current.condition.icon.slice(2)}` };
	const code = cityWeather?.current.condition.code;
	const conditions = parseWeather(code);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={{ fontSize: 30, marginBottom: 10 }}>Weather App</Text>
			<StatusBar style='auto' />
			<View>
				<Text
					style={{
						fontSize: 20,
						textAlign: 'center',
						color: 'royalblue',
						marginBottom: 10,
					}}>
					Find your city
				</Text>
				<TextInput
					style={{
						height: 40,
						width: 200,
						borderColor: 'gray',
						borderWidth: 1,
						marginBottom: 10,
					}}
					onChangeText={setChangeValue}
				/>
				<TouchableHighlight>
					<View
						style={{
							borderWidth: 3,
							borderStyle: 'solid',
							borderColor: 'royalblue',
							marginBottom: 10,
						}}>
						<Text
							style={{ fontSize: 20, textAlign: 'center', color: 'royalblue' }}
							onPress={onFind}>
							Find
						</Text>
					</View>
				</TouchableHighlight>
				<Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>
					{changeValue}
				</Text>
			</View>
			<View>
				<Text>Country: {cityWeather?.location.country}</Text>
				<Text>Region: {cityWeather?.location.region}</Text>
				<Text>City: {cityWeather?.location.name}</Text>
				<Text>
					Feels like: {cityWeather?.current.feelslike_c} &#176;C or{' '}
					{cityWeather?.current.feelslike_f} F
				</Text>
				<Text>
					Temperature: {cityWeather?.current.temp_c}&#176;C or{' '}
					{cityWeather?.current.temp_f} F
				</Text>
				<Text>Day: {conditions.day}</Text>
				<Text>Night: {conditions.night}</Text>
				<Image source={icon} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'top',
	},
});
